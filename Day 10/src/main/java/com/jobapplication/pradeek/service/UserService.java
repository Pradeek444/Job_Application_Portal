package com.jobapplication.pradeek.service;


import com.jobapplication.pradeek.dto.request.RegisterRequest;
import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.dto.response.UserFetchResponse;
import com.jobapplication.pradeek.utils.UserNotFoundException;

import java.util.List;


public interface UserService {
    MessageResponse register(RegisterRequest request);

    List<UserFetchResponse> getAll();

    UserFetchResponse getById(String id) throws UserNotFoundException;

    MessageResponse deleteByEmail(String email);

}
