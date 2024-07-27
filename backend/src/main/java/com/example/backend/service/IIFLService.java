package com.example.backend.service;

import com.example.backend.model.IIFL;
import com.example.backend.repository.IIFLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IIFLService {

    @Autowired
    private IIFLRepository iiflRepository;

    public List<IIFL> getAllIIFL() {
        return iiflRepository.findAll();
    }

    public IIFL getIIFLById(Long id) {
        return iiflRepository.findById(id).orElse(null);
    }

    public IIFL saveIIFL(IIFL iifl) {
        return iiflRepository.save(iifl);
    }

    public void deleteIIFL(Long id) {
        iiflRepository.deleteById(id);
    }
}
