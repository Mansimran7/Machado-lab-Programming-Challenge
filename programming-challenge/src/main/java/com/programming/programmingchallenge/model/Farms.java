package com.programming.programmingchallenge.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "farms")
@Entity
public class Farms {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "name")
    private String name;

    @Column(name = "postal_code")
    private String postal_code;

    @Column(name = "premid")
    private String premid;

    @Column(name = "state")
    private String state;

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "longitude")
    private double longitude;
}
