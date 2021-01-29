package com.cdf.cdf;

import com.cdf.cdf.productcontroller.Product;

import java.util.Collection;

public interface ProductService {
        public abstract void createProduct(Product product);
        public abstract void updateProduct(String id, Product product);
        public abstract void deleteProduct(String id);
        public abstract Collection<Product> getProducts();
    }
