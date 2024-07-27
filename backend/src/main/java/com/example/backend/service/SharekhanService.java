package com.example.backend.service;

import com.example.backend.model.Sharekhan;
import com.example.backend.repository.SharekhanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SharekhanService {

    @Autowired
    private SharekhanRepository sharekhanRepository;

    public List<Sharekhan> getAllSharekhan() {
        return sharekhanRepository.findAll();
    }

    public Sharekhan getSharekhanById(Long id) {
        return sharekhanRepository.findById(id).orElse(null);
    }

    public Sharekhan saveSharekhan(Sharekhan sharekhan) {
        return sharekhanRepository.save(sharekhan);
    }

    public void deleteSharekhan(Long id) {
        sharekhanRepository.deleteById(id);
    }
}
