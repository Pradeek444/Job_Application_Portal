package com.jobapplication.pradeek.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateJobRequest {
private String companyName;
private String role;
private double salary;
private String description;
private String type;
}
