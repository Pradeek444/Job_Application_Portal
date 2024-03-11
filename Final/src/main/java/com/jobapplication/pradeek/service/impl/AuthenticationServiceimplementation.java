package com.jobapplication.pradeek.service.impl;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobapplication.pradeek.dto.request.ForgetPasswordRequest;
import com.jobapplication.pradeek.dto.request.LoginRequest;
import com.jobapplication.pradeek.dto.request.RegisterRequest;
import com.jobapplication.pradeek.dto.response.ForgotPasswordResponse;
import com.jobapplication.pradeek.dto.response.LoginResponse;
import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.enumerated.Role;
import com.jobapplication.pradeek.models.User;
import com.jobapplication.pradeek.models.Token;
import com.jobapplication.pradeek.repository.UserRepo;
import com.jobapplication.pradeek.service.AuthenticationService;
import com.jobapplication.pradeek.utils.JwtUtil;

import jakarta.transaction.Transactional;

import com.jobapplication.pradeek.repository.TokenRepo;



import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthenticationServiceimplementation implements AuthenticationService {

    private final UserRepo userRepository;
    private final TokenRepo tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public MessageResponse register(RegisterRequest request) {
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());
        System.out.println(isUser);
        if(isUser.isPresent()){
            return MessageResponse.builder().message("User already exists with email "+request.getEmail()).build();
        }
        String email = request.getEmail();
        String firstname = request.getFirstname();
        String lastname = request.getLastname();
        String mobile = request.getMobile();
        String password = request.getPassword();
        String role = request.getRole();
        
        System.out.println("Email: " + email);
        System.out.println("Firstname: " + firstname);
        System.out.println("Lastname: " + lastname);
        System.out.println("Mobile: " + mobile);
        System.out.println("Password: " + password);
        System.out.println("Role: " + role);
        
        System.out.println(passwordEncoder.encode("abc"));
        var user = User.builder()
        .firstname(firstname)
        .lastname(lastname)
        .mobile(mobile)
        .email(email)
        .password(passwordEncoder.encode(password))
        .role(Role.valueOf(role))
        .build();
    
        // var user = User.builder().
        //             firstname(request.getFirstname())
        //             .lastname(request.getLastname())
        //             .mobile(request.getMobile())
        //             .email(request.getEmail())
        //             .password(passwordEncoder.encode(request.getPassword()))
        //             .role(Role.valueOf(request.getRole()))
            
                   
        //             .build();
       
        System.out.println("after build");
        userRepository.save(user);
        return MessageResponse.builder().message("User registered successfully").build();   
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        System.out.println("sdfghjkl");
        System.out.println("Email: " + request.getEmail());
        System.out.println("pwd: " + request.getPassword());
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            var user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new UsernameNotFoundException("User not found with mail "+request.getEmail()));
        Map<String,Object> claims = new HashMap<>();
        claims.put("role",user.getRole().toString());
        var accessToken = jwtUtil.generateToken(claims,user);

        revokeAllUserTokens(user);
        saveUserToken(accessToken,user);
        return LoginResponse.builder()
                .message("User logged in successfully.")
                .accessToken(accessToken)
                .build();  
        
    }

    private void saveUserToken(String accessToken, User user) {
        var token = Token.builder()
                .token(accessToken)
                .user(user)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_IdAndExpiredIsFalseAndRevokedIsFalse(user.getId());
        if(validUserTokens.isEmpty()){
            return;
        }
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
    @Override
    public ForgotPasswordResponse forgotPassword(ForgetPasswordRequest request){
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow(()->new UsernameNotFoundException("User not found with email "+request.getEmail()));
        if(passwordEncoder.matches(request.getEmail(), user.getEmail())){
            return ForgotPasswordResponse.builder().message("Password incorrect.").build();
        }
        if(!request.getNewPassword().equals(request.getConfirmPassword())){
            return ForgotPasswordResponse.builder().message("Password Mismatch").build();
        }
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        return ForgotPasswordResponse.builder().message("Password updated successfully").build();
    }

}
