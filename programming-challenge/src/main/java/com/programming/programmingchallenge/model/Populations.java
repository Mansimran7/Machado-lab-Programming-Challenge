package com.programming.programmingchallenge.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "populations")
@Getter
@Setter
public class Populations {
    @Id
    private int ID;

    @Column(name = "premiseID")
    private String premiseID;

    @Column(name = "total_animal")
    private int total_animal;

    public Populations()
    {
        super();
    }

    public Populations(String premiseID, int total_animal) {
        super();
        this.premiseID = premiseID;
        this.total_animal = total_animal;
    }
}
