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
    private String companyName;
    private String role;
    private String name;
    private String email;
    private String resume;
}
