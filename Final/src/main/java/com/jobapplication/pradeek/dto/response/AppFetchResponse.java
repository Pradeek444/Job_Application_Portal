package com.jobapplication.pradeek.dto.response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppFetchResponse {
    private Long id;
    private String companyName;
    private String role;
    private String name;
    private String email;
    private String date;
    private String status;
    private String resume;
}
