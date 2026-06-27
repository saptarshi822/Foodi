package com.authservice.authservice.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class UserRegistrationResponse {
    private int status;
    private String detail;
}
