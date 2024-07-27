package com.example.backend.controller;

import com.example.backend.model.Upstox;
import com.example.backend.service.UpstoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/upstox")
public class UpstoxController {

    @Autowired
    private UpstoxService upstoxService;

    @GetMapping("/portfolios")
    public List<Upstox> getAllUpstox() {
        return upstoxService.getAllUpstox();
    }

    @GetMapping("/portfolios/{id}")
    public Upstox getUpstoxById(@PathVariable("id") Long id) {
        return upstoxService.getUpstoxById(id);
    }

    @PostMapping("/portfolios")
    public Upstox createUpstox(@RequestBody Upstox upstox) {
        return upstoxService.saveUpstox(upstox);
    }

    @DeleteMapping("/portfolios/{id}")
    public void deleteUpstox(@PathVariable("id") Long id) {
        upstoxService.deleteUpstox(id);
    }
}
