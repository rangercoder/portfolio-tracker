package com.example.backend.repository;

import com.example.backend.model.Zerodha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZerodhaRepository extends JpaRepository<Zerodha, Long> {
}
