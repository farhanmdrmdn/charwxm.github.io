package com.example.task10.services;

import com.example.task10.models.Product;
import com.example.task10.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {


//    private static Map<String, Product> productRepo = new HashMap<>();

    static {
//        Product furniture = new Product();
//        furniture.setId("1");
//        furniture.setName("Honey");
//        productRepo.put(furniture.getId(), furniture);
    }

    @Override
    public void createProduct(Product product) {

//        productRepo.put(product.getId(), product);
    }

    @Override
    public void updateProduct(String id, Product product) {
//        productRepo.remove(id);
//        product.setId(id);
//        productRepo.put(id, product);
    }

    @Override
    public void deleteProduct(String id) {

//        productRepo.remove(id);
    }

//    @Override
//    public Collection<Product> getProducts() {
//
////        return productRepo.values();
//
//    }

}