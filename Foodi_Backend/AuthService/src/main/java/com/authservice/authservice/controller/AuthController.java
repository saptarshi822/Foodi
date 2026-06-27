package com.authservice.authservice.controller;

import com.authservice.authservice.dto.UserLogin;
import com.authservice.authservice.dto.UserRegistration;
import com.authservice.authservice.dto.UserRegistrationResponse;
import com.authservice.authservice.entity.User;
import com.authservice.authservice.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getHealth(){
        return "Healthy";
    }

    @PostMapping("/login")
    public ResponseEntity<UserRegistrationResponse> login(@Valid @RequestBody UserLogin userLogin){
        userService.login(userLogin);
        UserRegistrationResponse userRegistrationResponse = new UserRegistrationResponse();
        userRegistrationResponse.setDetail("Success");
        userRegistrationResponse.setStatus(HttpStatus.OK.value());
        return ResponseEntity.status(200).body(userRegistrationResponse);
    }

    @PostMapping("/register")
    public ResponseEntity<UserRegistrationResponse> register(@Valid @RequestBody UserRegistration user){
        User actualUser = new User();
        actualUser.setUsername(user.getUsername());
        actualUser.setPassword(user.getPassword());
        String response = userService.doRegistration(actualUser);
        UserRegistrationResponse userRegistration = new UserRegistrationResponse();
        userRegistration.setDetail(response);
        userRegistration.setStatus(HttpStatus.CREATED.value());
        return ResponseEntity.status(201).body(userRegistration);

    }
}
