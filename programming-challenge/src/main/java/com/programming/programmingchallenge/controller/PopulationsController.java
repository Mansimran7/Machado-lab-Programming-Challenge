package com.programming.programmingchallenge.controller;

import com.programming.programmingchallenge.model.Populations;
import com.programming.programmingchallenge.repository.PopulationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class PopulationsController {

    @Autowired
    private PopulationsRepository populationsRepository;

    //get populations api
    @GetMapping("populations")
    public List<Populations> getPopulations()
    {
        return this.populationsRepository.findAllByOrderByIDAsc();
    }

    //update population
    @PostMapping("populations")
    public Populations addPopulations(@RequestBody Populations populations)
    {
        return this.populationsRepository.save(populations);
    }
}
