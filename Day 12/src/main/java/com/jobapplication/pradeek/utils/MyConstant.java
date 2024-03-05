package com.jobapplication.pradeek.utils;


// import java.util.Arrays;
// import java.util.List;

// import org.springframework.http.HttpHeaders;
// import org.springframework.http.HttpMethod;

// public class MyConstant {
    
//     public static final String AUTH = "/api/v1/auth";
//     public static final String REGISTER = "/register";
//     public static final String LOGIN = "/login";
//     public static final String FORGOT_PASSWORD="/forgot-password";
    

//     public static final String ADMIN = "/api/v1/admin";

//     public static final String USER = "/api/v1/user";

//     public static final String GET = "/get";
//     public static final String DELETE = "/delete";
//     public static final String UPDATE = "/update";

//     public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000","http://localhost:5173");
//     public static final List<String> HEADERS = Arrays.asList(HttpHeaders.AUTHORIZATION,HttpHeaders.CONTENT_TYPE);
//     public static final List<String> METHODS = Arrays.asList(HttpMethod.GET.name(),
//     HttpMethod.POST.name(),HttpMethod.PUT.name(),HttpMethod.PATCH.name(),HttpMethod.DELETE.name(),
//     HttpMethod.HEAD.name(),HttpMethod.OPTIONS.name());
//     public static final String[] WHITELIST_URL = {
//         "/api/v1/auth/**",
//         "/swagger-ui/**",
//         "/swagger-ui.html/",
//         "/v3/api-docs/**"
// };

//     public static final String[] WHITELIST = {
//         "/api/v1/auth/**"
//     };

//     //Swagger
//     public static final String SWAGGER_INFO_TITLE="My API";
//     public static final String SWAGGER_INFO_DESCRIPTION="Job Application";
//     public static final String SWAGGER_INFO_VERSION="1.0.0";
//     public static final String SWAGGER_INFO_CONTACT_NAME="Pradeek";
//     public static final String SWAGGER_INFO_CONTACT_EMAIL="727721eucs100@skcet.ac.in";
//     public static final String SWAGGER_INFO_CONTACT_URL="https://pradeek.com";
//     public static final String SWAGGER_INFO_LICENSE_NAME="Apche 2.0";
//     public static final String SWAGGER_INFO_LICENSE_URL="https://www.apache.org/licenses/LICENSE-2.0.html";

//     //JsonWebToken
//     public static final String JWT_LOCALHOST_URL = "http://localhost:8181";
//     public static final String JWT_SECURITY_SCHEME_NAME = "bearerAuth";
//     public static final String JWT_SCHEME = "bearer";
//     public static final String JWT_DESCRIPTION = "Provide the JWT token.";
//     public static final String JWT_BEARER_FORMAT = "JWT";

// }
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

public class MyConstant {
        
    public static final String AUTH = "/api/v1/auth";
    public static final String REGISTER = "/register";
    public static final String LOGIN = "/login";
    public static final String FORGOT_PASSWORD="/change-password";
    

    public static final String ADMIN = "/api/v1/admin";
    
    
    
    public static final String USER = "/api/v1/user";
    public static final String CREATE="/create";

    public static final String GET = "/get";
    public static final String DELETE = "/delete";
    public static final String UPDATE = "/update";

    public static final String[] WHITELIST = {
        "/api/v1/auth/**",
        "/swagger-ui/**",
        "/swagger-ui.html/",
        "/v3/api-docs/**",
    };
    
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000","http://localhost:5173");
    public static final List<String> HEADERS = Arrays.asList(HttpHeaders.AUTHORIZATION,HttpHeaders.CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(HttpMethod.GET.name(),
    HttpMethod.POST.name(),HttpMethod.PUT.name(),HttpMethod.PATCH.name(),HttpMethod.DELETE.name(),
    HttpMethod.HEAD.name(),HttpMethod.OPTIONS.name());

    // SWAGGER
    public static final String SWAGGER_INFO_TITLE = "TalentTrac";
    public static final String SWAGGER_INFO_DESCRIPTION = "Welcome to Our Job Application Portal, where seamless connections between exceptional talent and forward-thinking employers are forged. For job seekers, our user-friendly platform offers a personalized experience with tailored job recommendations, an efficient application tracking system, and robust resume-building tools. Employers benefit from customized job listings, streamlined applicant screening, a dedicated communication hub, and insightful data analytics. Join us at Our Job Application Portal to elevate your career or find your ideal team member – because success begins with the right connections.";
    public static final String SWAGGER_INFO_VERSION = "1.0.0";
    public static final String SWAGGER_INFO_CONTACT_NAME = "Pradeek";
    public static final String SWAGGER_INFO_CONTACT_EMAIL = "pradeek444@gmail.com";
    public static final String SWAGGER_INFO_CONTACT_URL = "http://localhost:5173";
    public static final String SWAGGER_INFO_LICENSE_NAME = "Apache 2.0";
    public static final String SWAGGER_INFO_LICENSE_URL = "https://www.apache.org/licenses/LICENSE-2.0.html";
    
    
    // JsonWebToken
    public static final String JWT_LOCALHOST_URL = "http://localhost:8181";
    public static final String JWT_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String JWT_SECURITY_SCHEME = "bearer";
    public static final String JWT_DESCRIPTION= "Provide a Json Web Token";    
    public static final String JWT_NAME = "JWT";
    public static final String JWT_BEARER_FORMAT = "JWT";

    
}