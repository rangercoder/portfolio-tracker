package com.example.backend.service;

import com.example.backend.model.Kotak;
import com.example.backend.repository.KotakRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KotakService {

    @Autowired
    private KotakRepository kotakRepository;

    public List<Kotak> getAllKotak() {
        return kotakRepository.findAll();
    }

    public Kotak getKotakById(Long id) {
        return kotakRepository.findById(id).orElse(null);
    }

    public Kotak saveKotak(Kotak kotak) {
        return kotakRepository.save(kotak);
    }

    public void deleteKotak(Long id) {
        kotakRepository.deleteById(id);
    }
}
