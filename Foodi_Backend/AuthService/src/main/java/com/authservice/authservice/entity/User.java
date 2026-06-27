package com.authservice.authservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    @Column(unique = true,nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    private boolean enabled;
    @Builder
    public User(String username,String password){
        this.username = username;
        this.password=password;
        this.enabled=true;
    }
}
