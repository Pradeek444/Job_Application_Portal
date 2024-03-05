package com.jobapplication.pradeek.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobapplication.pradeek.dto.request.ForgetPasswordRequest;
import com.jobapplication.pradeek.dto.request.LoginRequest;
import com.jobapplication.pradeek.dto.request.RegisterRequest;
import com.jobapplication.pradeek.dto.response.ForgotPasswordResponse;
import com.jobapplication.pradeek.dto.response.LoginResponse;
import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.service.AuthenticationService;
import com.jobapplication.pradeek.utils.MyConstant;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.AUTH)
@RequiredArgsConstructor
@Tag(name="Authentication")
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    
    @PostMapping(MyConstant.REGISTER)
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){
        MessageResponse response = new MessageResponse();
        try{
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    
    @PostMapping(MyConstant.LOGIN)
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try{
            response = authenticationService.login(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
   @PatchMapping(MyConstant.FORGOT_PASSWORD)
public ResponseEntity<ForgotPasswordResponse> forgotPassword(@RequestBody ForgetPasswordRequest request) {
    try {
        ForgotPasswordResponse response = authenticationService.forgotPassword(request);
        return ResponseEntity.ok(response);
    } catch (UsernameNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                             .body(ForgotPasswordResponse.builder().message("User not found").build());
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                             .body(ForgotPasswordResponse.builder().message("Failed to update password").build());
    }
}
    

    
}
