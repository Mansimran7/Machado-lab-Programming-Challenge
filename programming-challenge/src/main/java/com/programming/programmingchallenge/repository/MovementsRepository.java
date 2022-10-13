package com.programming.programmingchallenge.repository;

import com.programming.programmingchallenge.model.Movements;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovementsRepository extends JpaRepository<Movements, Integer>{
}
