package com.jobapplication.pradeek.dto.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor


public class CreateAppRequest {
    private String name;
    private String mobile;
    private String gender;
    private String email;
}