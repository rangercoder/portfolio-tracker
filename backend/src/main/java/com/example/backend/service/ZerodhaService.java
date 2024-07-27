package com.example.backend.service;

import com.example.backend.model.Zerodha;
import com.example.backend.repository.ZerodhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZerodhaService {

    @Autowired
    private ZerodhaRepository zerodhaRepository;

    public List<Zerodha> getAllZerodha() {
        return zerodhaRepository.findAll();
    }

    public Zerodha getZerodhaById(Long id) {
        return zerodhaRepository.findById(id).orElse(null);
    }

    public Zerodha saveZerodha(Zerodha zerodha) {
        return zerodhaRepository.save(zerodha);
    }

    public void deleteZerodha(Long id) {
        zerodhaRepository.deleteById(id);
    }
}
