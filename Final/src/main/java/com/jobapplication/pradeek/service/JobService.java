package com.jobapplication.pradeek.service;



import com.jobapplication.pradeek.dto.request.CreateJobRequest;
import com.jobapplication.pradeek.dto.response.JobFetchResponse;
import com.jobapplication.pradeek.dto.response.MessageResponse;

import com.jobapplication.pradeek.utils.JobNotFoundException;
import java.util.List;

public interface JobService {
    MessageResponse create(CreateJobRequest request);

    List<JobFetchResponse> getAll();

    JobFetchResponse getById(Long id) throws JobNotFoundException;

    MessageResponse update(Long id, CreateJobRequest request) throws JobNotFoundException;

    MessageResponse deleteById(Long id) throws JobNotFoundException;

    List<JobFetchResponse> getByType(String type) throws JobNotFoundException;
    
}