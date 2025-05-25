package com.zidio.connect.service;

import com.zidio.connect.dto.auth.LoginRequest;
import com.zidio.connect.dto.auth.RegisterRequest;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    public String login(LoginRequest loginRequest) {
        // Implement login logic
        return "Login successful";
    }

    public String register(RegisterRequest registerRequest) {
        // Implement registration logic
        return "Registration successful";
    }
}
