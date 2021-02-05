package com.example.task10.repository;

import com.example.task10.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository <Product, String> {

//    List<Product> findByProductName(String product_name);

}
