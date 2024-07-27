package com.example.backend.controller;

import com.example.backend.model.IIFL;
import com.example.backend.service.IIFLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/iifl")
public class IIFLController {

    @Autowired
    private IIFLService iiflService;

    @GetMapping("/portfolios")
    public List<IIFL> getAllIIFL() {
        return iiflService.getAllIIFL();
    }

    @GetMapping("/portfolios/{id}")
    public IIFL getIIFLById(@PathVariable("id") Long id) {
        return iiflService.getIIFLById(id);
    }

    @PostMapping("/portfolios")
    public IIFL createIIFL(@RequestBody IIFL iifl) {
        return iiflService.saveIIFL(iifl);
    }

    @DeleteMapping("/portfolios/{id}")
    public void deleteIIFL(@PathVariable("id") Long id) {
        iiflService.deleteIIFL(id);
    }
}
