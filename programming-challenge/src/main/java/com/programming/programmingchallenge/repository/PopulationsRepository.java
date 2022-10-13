package com.programming.programmingchallenge.repository;

import com.programming.programmingchallenge.model.Populations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PopulationsRepository extends JpaRepository<Populations, Integer> {

    Populations findByPremiseID(String name);

    List<Populations> findAllByOrderByIDAsc();
}
