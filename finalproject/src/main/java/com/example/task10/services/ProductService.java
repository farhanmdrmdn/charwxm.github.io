package com.example.task10.services;

import com.example.task10.models.Product;

import java.util.Collection;

public interface ProductService {
    public abstract void createProduct(Product product);
    public abstract void updateProduct(String id, Product product);
    public abstract void deleteProduct(String id);
//    public abstract Collection<Product> getProducts();
}
