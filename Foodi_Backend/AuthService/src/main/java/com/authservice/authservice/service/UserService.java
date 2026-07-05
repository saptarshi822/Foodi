package com.authservice.authservice.service;

import com.authservice.authservice.dto.UserLogin;
import com.authservice.authservice.entity.User;
import com.authservice.authservice.exception.ResourceAlreadyExist;
import com.authservice.authservice.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String doRegistration (User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        try {
            userRepository.save(user);
            log.error("Resource already exists");

        } catch (Exception e) {
            throw new ResourceAlreadyExist("Username already exists");
        }

        return "Successfully registered";
    }


    public void login(@Valid UserLogin userLogin) {
        userRepository.findByUsername(userLogin.getUsername()).orElseThrow(()-> new UsernameNotFoundException("Username doesn't exist"));

    }
}
