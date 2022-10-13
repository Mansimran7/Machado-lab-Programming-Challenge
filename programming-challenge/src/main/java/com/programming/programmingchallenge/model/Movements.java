package com.programming.programmingchallenge.model;

import javax.persistence.*;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Table(name = "movement")
@Entity
public class Movements {

    @Id
    private int ID;

    @Column(name = "account_company")
    private String account_company;

    @Column(name = "new_movement_reason")
    private String new_movement_reason;

    @Column(name = "new_species")
    private String new_species;

    @Column(name = "new_origin_premid")
    private String new_origin_premid;

    @Column(name = "new_destination_premid")
    private String new_destination_premid;

    @Column(name = "new_num_of_item_moved")
    private int new_num_of_item_moved;

    @Column(name = "new_shipment_start_date")
    private Date new_shipment_start_date;


}
