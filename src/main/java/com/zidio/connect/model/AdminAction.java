package com.zidio.connect.model;

import jakarta.persistence.*;

@Entity
public class AdminAction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String action;

    // Getters and Setters
}
