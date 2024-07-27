package com.example.backend.controller;

import com.example.backend.model.Zerodha;
import com.example.backend.service.ZerodhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/zerodha")
public class ZerodhaController {

    @Autowired
    private ZerodhaService zerodhaService;

    @GetMapping("/portfolios")
    public List<Zerodha> getAllZerodha() {
        return zerodhaService.getAllZerodha();
    }

    @GetMapping("/portfolios/{id}")
    public Zerodha getZerodhaById(@PathVariable("id") Long id) {
        return zerodhaService.getZerodhaById(id);
    }

    @PostMapping("/portfolios")
    public Zerodha createZerodha(@RequestBody Zerodha zerodha) {
        return zerodhaService.saveZerodha(zerodha);
    }

    @DeleteMapping("/portfolios/{id}")
    public void deleteZerodha(@PathVariable("id") Long id) {
        zerodhaService.deleteZerodha(id);
    }
}
