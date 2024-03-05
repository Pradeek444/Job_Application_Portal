package com.jobapplication.pradeek.dto.response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppFetchResponse {
    private Long id;
    private String name;
    private String email;
    private String mobile;
    private String gender;
}