package com.example.task9.Controllers;

import com.example.task9.Models.Product;
import com.example.task9.Models.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class ProductServiceController {
    @Autowired
    ProductServiceImpl productService;

    @RequestMapping(value = "/products")
    public ResponseEntity<Collection<Product>> getProduct() {
        return new ResponseEntity<Collection<Product>>(productService.getProducts(), HttpStatus.OK);
    }

    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
    public ResponseEntity<String>
    updateProduct(@PathVariable("id") String id, @RequestBody Product new_product) {
            //1. get the product called this_product
            //2.  set the new product details (new_product) to this_product

        productService.updateProduct(id, new_product);
        return new ResponseEntity<String>("Product is updated successfully", HttpStatus.OK);
    }
    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@PathVariable("id") String id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>("Product is deleted successfully", HttpStatus.OK);
    }
    @RequestMapping(value = "/products", method = RequestMethod.POST)
    public ResponseEntity<String> createProduct(@RequestBody Product product) {
        productService.createProduct(product);
        return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
    }
}