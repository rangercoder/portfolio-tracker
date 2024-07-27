package com.example.backend.repository;

import com.example.backend.model.Upstox;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UpstoxRepository extends JpaRepository<Upstox, Long> {
}
