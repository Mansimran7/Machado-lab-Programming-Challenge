package com.programming.programmingchallenge.repository;

import com.programming.programmingchallenge.model.Farms;
import com.programming.programmingchallenge.model.Populations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FarmsRepository extends JpaRepository <Farms, Integer> {

    List<Farms> findAllByOrderByIDAsc();
}
