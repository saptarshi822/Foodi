package com.authservice.authservice.dto;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistration {

    private String username;
    private String password;
}
