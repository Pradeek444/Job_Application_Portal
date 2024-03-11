package com.jobapplication.pradeek.service;



import com.jobapplication.pradeek.dto.request.CreateAppRequest;
import com.jobapplication.pradeek.dto.response.AppFetchResponse;
import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.utils.UserNotFoundException;

import java.util.List;

public interface AppService {
    MessageResponse create(CreateAppRequest request);

    List<AppFetchResponse> getAll();

    AppFetchResponse getById(Long id) throws Exception;

    MessageResponse update(Long id, CreateAppRequest request) throws Exception;

    MessageResponse deleteById(Long id) throws Exception;

    MessageResponse updateStatus(Long id, String status) throws Exception;
    List<AppFetchResponse> getByEmail(String email) throws Exception;
}
