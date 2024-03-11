package com.jobapplication.pradeek.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JobFetchResponse {
    private Long id;
    private String companyName;
    private String role;
    private double salary;
    private String description;
    private String type;
}