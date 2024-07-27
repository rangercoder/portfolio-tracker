package com.example.backend.repository;

import com.example.backend.model.IIFL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IIFLRepository extends JpaRepository<IIFL, Long> {
}
