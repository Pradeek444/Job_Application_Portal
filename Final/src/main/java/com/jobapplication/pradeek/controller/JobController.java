package com.jobapplication.pradeek.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.jobapplication.pradeek.dto.request.CreateJobRequest;
import com.jobapplication.pradeek.dto.response.JobFetchResponse;
import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.service.JobService;
import com.jobapplication.pradeek.utils.JobNotFoundException;
import com.jobapplication.pradeek.utils.MyConstant;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(MyConstant.ADMIN + "/jobs")


public class JobController {

    private final JobService jobService;

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping(MyConstant.CREATE)
    public ResponseEntity<MessageResponse> createJob(@RequestBody CreateJobRequest request) {
        MessageResponse response = jobService.create(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(MyConstant.GET)
    public ResponseEntity<?> getAllJobs() {
        return new ResponseEntity<>(jobService.getAll(), HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(MyConstant.GET+"/{id}")
    public ResponseEntity<?> getJobById(@PathVariable Long id) {
        try {
            JobFetchResponse response = jobService.getById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (JobNotFoundException e) {
            MessageResponse responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasAnyRole('USER')")
    @GetMapping(MyConstant.GET+"/type/{type}")
    public ResponseEntity<?> getByType(@PathVariable String type) {
        try {
            return new ResponseEntity<>(jobService.getByType(type), HttpStatus.OK);
        } catch (Exception e) {
            // Handle any exceptions, such as JobNotFoundException
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PutMapping(MyConstant.UPDATE+"/{id}")
    public ResponseEntity<MessageResponse> updateJob(@PathVariable Long id, @RequestBody CreateJobRequest request) {
        try {
            MessageResponse response = jobService.update(id, request);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (JobNotFoundException e) {
            MessageResponse responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping(MyConstant.DELETE+"/{id}")
    public ResponseEntity<MessageResponse> deleteJob(@PathVariable Long id) {
        try {
            MessageResponse response = jobService.deleteById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (JobNotFoundException e) {
            MessageResponse responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
    }
}