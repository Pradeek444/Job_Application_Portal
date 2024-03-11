package com.jobapplication.pradeek.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserFetchResponse {
    private String firstname;
    private String lastname;
    private String mobile;
    private String email;
    private String password;
 
}
