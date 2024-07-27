package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "zerodha")
public class Zerodha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String companyName;
    private String exchange;
    private double buyingPrice;
    private int quantity;
    private double averagePrice;
    private double currentPrice;
    private double profitLoss;
    private double dayChange;
    private double dayChangePercent;

    // Getters and Setters
}
