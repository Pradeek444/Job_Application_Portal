package com.jobapplication.pradeek.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.service.UserService;
import com.jobapplication.pradeek.utils.MyConstant;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping(MyConstant.USER)
@PreAuthorize("ADMIN")
@Tag(name = "Admin")
public class AdminController {

    private final UserService admin;
        @DeleteMapping(MyConstant.DELETE + "/{email}")
    public ResponseEntity<?> deleteByEmail(@PathVariable String email) {
        MessageResponse response = new MessageResponse();
        try{
            response = admin.deleteByEmail(email);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        } 
    }
}
