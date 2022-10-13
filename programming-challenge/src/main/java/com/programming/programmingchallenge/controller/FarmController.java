package com.programming.programmingchallenge.controller;

import com.programming.programmingchallenge.model.Farms;
import com.programming.programmingchallenge.model.Populations;
import com.programming.programmingchallenge.repository.FarmsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class FarmController {

    @Autowired
    private FarmsRepository farmsRepository;

    @GetMapping("farms")
    public List<Farms> getFarms()
    {
        return this.farmsRepository.findAllByOrderByIDAsc();
    }

    @PostMapping("farms")
    public Farms addFarms(@RequestBody Farms farms)
    {
        return this.farmsRepository.save(farms);
    }
}

