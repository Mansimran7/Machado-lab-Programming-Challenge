package com.programming.programmingchallenge.controller;

import com.programming.programmingchallenge.model.Movements;
import com.programming.programmingchallenge.model.Populations;
import com.programming.programmingchallenge.repository.MovementsRepository;
import com.programming.programmingchallenge.repository.PopulationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/")
public class MovementsController {

    Logger logger = Logger.getLogger(MovementsController.class.getName());
    @Autowired
    private MovementsRepository movementsRepository;

    @Autowired
    private PopulationsRepository populationsRepository;

    //get movements api
    @GetMapping("movements")
    public List<Movements> getMovements()
    {
        return this.movementsRepository.findAll();
    }

    //update and save movements
    @PostMapping("movements")
    public Object addMovements(@RequestBody Movements movements)
    {
        Map<String,String> response = new HashMap<>();
        Populations sourcePopulation = this.populationsRepository.findByPremiseID(movements.getNew_origin_premid());
        Populations destinationPopulation = this.populationsRepository.findByPremiseID(movements.getNew_destination_premid());
        try{
            sourcePopulation.setTotal_animal(sourcePopulation.getTotal_animal() - movements.getNew_num_of_item_moved());
            destinationPopulation.setTotal_animal(destinationPopulation.getTotal_animal() + movements.getNew_num_of_item_moved());

        }catch (Exception e){
            logger.info("Invalid Origin Premise Id / Destination Premise Id");
            response.put("Message","Invalid Origin Premise Id / Destination Premise Id");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        if(sourcePopulation.getTotal_animal() < 0)
        {
            logger.info("Insufficient animals in Origin Farm, Enter a smaller value");
            response.put("Message","Insufficient animals in Origin Farm, Enter a smaller value");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        this.populationsRepository.save(sourcePopulation);
        this.populationsRepository.save(destinationPopulation);
        this.movementsRepository.save(movements);

        response.put("Message", "Success");
        return ResponseEntity.ok(response);
    }

}
