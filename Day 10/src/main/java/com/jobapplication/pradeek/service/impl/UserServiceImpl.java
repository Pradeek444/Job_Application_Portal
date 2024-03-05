package com.jobapplication.pradeek.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jobapplication.pradeek.dto.request.RegisterRequest;

import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.dto.response.UserFetchResponse;
import com.jobapplication.pradeek.enumerated.Role;
import com.jobapplication.pradeek.repository.UserRepo;
import com.jobapplication.pradeek.service.UserService;
import com.jobapplication.pradeek.models.User;

import com.jobapplication.pradeek.utils.UserNotFoundException;
import lombok.RequiredArgsConstructor;




@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserServiceImpl implements UserService{

    private final UserRepo userRepository;

    @Override
    public MessageResponse register(RegisterRequest request){
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());
        
        if(isUser.isPresent()){
            return MessageResponse.builder().message("User already exists with email "+request.getEmail()).build();
        }
        var user = User.builder().name(request.getName()).
                                  email(request.getEmail()).
                                  password(request.getPassword()).
                                  role(Role.USER).
                                  build();
        userRepository.save(user);
        return MessageResponse.builder().message("User registered successfully").build();   
    }

    @Override
    public List<UserFetchResponse> getAll(){
        List<User> users = userRepository.findAll();
        return users.stream().map(user -> UserFetchResponse.builder().name(user.getName()).email(user.getEmail()).password(user.getPassword()).build())
                .collect(Collectors.toList());
        // return users.map(user -> UserResponse.builder().name(user.getName()).email(user.getEmail()).build());
    }

    @Override
    public UserFetchResponse getById(String id) throws UserNotFoundException{
        Optional<User> isUser = userRepository.findById(id);
        
        if(isUser.isEmpty()){
            throw new UserNotFoundException("User not found with id "+id);
        }
        return UserFetchResponse.builder().name(isUser.get().getName()).email(isUser.get().getEmail()).password(isUser.get().getPassword()).build();
    }

    @Override
    public MessageResponse deleteByEmail(String email){
        Optional<User> isUser = userRepository.findByEmail(email);
        
        if(isUser.isEmpty()){
            return MessageResponse.builder().message("User not found with email "+email).build();
        }
        userRepository.delete(isUser.get());
        return MessageResponse.builder().message("User deleted successfully").build();   
    }
  
  
}
