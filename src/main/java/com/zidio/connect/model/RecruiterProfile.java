package com.zidio.connect.model;

import jakarta.persistence.*;

@Entity
public class RecruiterProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String companyName;

    // Getters and Setters
}
