package com.example.backend.repository;

import com.example.backend.model.Sharekhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SharekhanRepository extends JpaRepository<Sharekhan, Long> {
}
