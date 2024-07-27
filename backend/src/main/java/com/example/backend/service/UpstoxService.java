package com.example.backend.service;

import com.example.backend.model.Upstox;
import com.example.backend.repository.UpstoxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UpstoxService {

    @Autowired
    private UpstoxRepository upstoxRepository;

    public List<Upstox> getAllUpstox() {
        return upstoxRepository.findAll();
    }

    public Upstox getUpstoxById(Long id) {
        return upstoxRepository.findById(id).orElse(null);
    }

    public Upstox saveUpstox(Upstox upstox) {
        return upstoxRepository.save(upstox);
    }

    public void deleteUpstox(Long id) {
        upstoxRepository.deleteById(id);
    }
}
