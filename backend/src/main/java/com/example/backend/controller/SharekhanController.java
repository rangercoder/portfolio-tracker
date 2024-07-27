package com.example.backend.controller;

import com.example.backend.model.Sharekhan;
import com.example.backend.service.SharekhanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sharekhan")
public class SharekhanController {

    @Autowired
    private SharekhanService sharekhanService;

    @GetMapping("/portfolios")
    public List<Sharekhan> getAllSharekhan() {
        return sharekhanService.getAllSharekhan();
    }

    @GetMapping("/portfolios/{id}")
    public Sharekhan getSharekhanById(@PathVariable("id") Long id) {
        return sharekhanService.getSharekhanById(id);
    }

    @PostMapping("/portfolios")
    public Sharekhan createSharekhan(@RequestBody Sharekhan sharekhan) {
        return sharekhanService.saveSharekhan(sharekhan);
    }

    @DeleteMapping("/portfolios/{id}")
    public void deleteSharekhan(@PathVariable("id") Long id) {
        sharekhanService.deleteSharekhan(id);
    }
}
