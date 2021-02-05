package com.example.task10.models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Integer id;
    private String name;
    private BigDecimal price;
    private Integer quantity;
    // Task10
    // This is a constructor to create a new Product
    public Product(String this_name, BigDecimal this_price, Integer this_quantity){
        super();
        this.name = this_name;
        this.price = this_price;
        this.quantity = this_quantity;
    }
    // The empty constructor below is required for
    // all classes with a public constructor
    public Product() {
        super();
    }
}


//    public String getId() {
//        return id;
//    }
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//    public String getName() {
//        return name;
//    }
