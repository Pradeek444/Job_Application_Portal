package com.jobapplication.pradeek.service;


import com.jobapplication.pradeek.dto.request.*;
import com.jobapplication.pradeek.dto.response.*;
public interface AuthenticationService {

    MessageResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgetPasswordRequest request);
}
