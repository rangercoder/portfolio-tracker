package com.example.backend.repository;

import com.example.backend.model.Kotak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KotakRepository extends JpaRepository<Kotak, Long> {
}
