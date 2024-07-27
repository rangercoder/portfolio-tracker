package com.example.backend.controller;

import com.example.backend.model.Kotak;
import com.example.backend.service.KotakService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/kotak")
public class KotakController {

    @Autowired
    private KotakService kotakService;

    @GetMapping("/portfolios")
    public List<Kotak> getAllKotak() {
        return kotakService.getAllKotak();
    }

    @GetMapping("/portfolios/{id}")
    public Kotak getKotakById(@PathVariable("id") Long id) {
        return kotakService.getKotakById(id);
    }

    @PostMapping("/portfolios")
    public Kotak createKotak(@RequestBody Kotak kotak) {
        return kotakService.saveKotak(kotak);
    }

    @DeleteMapping("/portfolios/{id}")
    public void deleteKotak(@PathVariable("id") Long id) {
        kotakService.deleteKotak(id);
    }
}
