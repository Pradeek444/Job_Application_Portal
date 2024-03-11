package com.jobapplication.pradeek.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.dto.response.UserFetchResponse;
import com.jobapplication.pradeek.service.UserService;

import com.jobapplication.pradeek.utils.*;


import lombok.RequiredArgsConstructor;



import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequiredArgsConstructor
@RequestMapping(MyConstant.USER)
@PreAuthorize("hasAnyRole('ADMIN')")
@Tag(name="User")
public class UserController {

    private final UserService userService;  

    @GetMapping(MyConstant.GET)
    @PreAuthorize("hasAuthority('user:read')")
    public ResponseEntity<?> getAll() {
        try{
            userService.getAll();
            return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.GET+"/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        UserFetchResponse response = new UserFetchResponse();
        try{
            response = userService.getById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(UserNotFoundException e){
            var responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
        catch(Exception e){
            return new ResponseEntity<>(new MessageResponse(), HttpStatus.EXPECTATION_FAILED);
        }
    }
     

   
}
