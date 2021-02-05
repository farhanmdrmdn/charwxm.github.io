package com.example.task10.controllers;

import com.example.task10.models.Product;
import com.example.task10.repository.ProductRepository;
//import com.example.task10.services.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
//import java.util.Collection;

//import static com.example.task10.services.ProductServiceImpl.productRepo;

@RestController
@RequestMapping(path = "products")
public class ProductServiceController {

//    @Autowired
//    ProductServiceImpl productService;

    @Autowired
    private ProductRepository productRepo;

    @GetMapping(path="/new") // Temporarily using GET for testing ONLY.
    public @ResponseBody String addNewProduct() {
        Product new_product = new Product("nike", new BigDecimal("10.0"), 10);
        productRepo.save(new_product);
        return "Added!";
    }

//    localhost:8080/products/test
    @GetMapping(path="/test") //Retrieve a resource on server
    public @ResponseBody
    String test(@RequestParam(value = "name", defaultValue = "")String this_name,
                                     @RequestParam(value = "email", defaultValue = "")String this_email,
                                      @RequestParam(value = "id", defaultValue = "")String this_id) {
        System.out.println("________________________");
        System.out.println("name: " + this_name);
        System.out.println("email: " + this_email);
        System.out.println("id: " + this_id);
        System.out.println("Retrieved! Your doing a great job!");
        return "Received GET request!";
    }

//    localhost:8080/products/test2
    @PostMapping(path="/test2") //Create a resource on server
    public @ResponseBody
    String test2(@RequestParam(value = "name", defaultValue = "")String this_name,
                                      @RequestParam(value = "email", defaultValue = "")String this_email,
                                      @RequestParam(value = "id", defaultValue = "")String this_id) {
        System.out.println("________________________");
        System.out.println("name: " + this_name);
        System.out.println("email: " + this_email);
        System.out.println("id: " + this_id);
        System.out.println("Created! Your doing a fantastic job!");
        return "Received POST request!";
    }

//    localhost:8080/products/test3
    @PutMapping(path="/test3") //Update a resource on server
    public @ResponseBody
    String test3(@RequestParam(value = "name", defaultValue = "")String this_name,
                                      @RequestParam(value = "email", defaultValue = "")String this_email,
                                      @RequestParam(value = "id", defaultValue = "")String this_id) {
        System.out.println("________________________");
        System.out.println("name: " + this_name);
        System.out.println("email: " + this_email);
        System.out.println("id: " + this_id);
        System.out.println("Updated! Your doing a awesome job!");
        return "Received PUT request!";
    }

//    localhost:8080/products/test4
    @DeleteMapping(path="/test4") //Delete a resource on server
    public @ResponseBody
    String test4(@RequestParam(value = "name", defaultValue = "")String this_name,
                                      @RequestParam(value = "email", defaultValue = "")String this_email,
                                      @RequestParam(value = "id", defaultValue = "")String this_id) {
        System.out.println("________________________");
        System.out.println("name: " + this_name);
        System.out.println("email: " + this_email);
        System.out.println("id: " + this_id);
        System.out.println("Deleted! Your doing a tremendous job!");
        return "Received DELETE request!";
    }

//    localhost:8080/products/
    @GetMapping(path="/user/{id}")
    public @ResponseBody
    String showUser(@PathVariable("id") String this_id) {
        System.out.println("Retrieved this is id-> " + this_id);
        return "Retrieved using @PathVariable";
    }

//    localhost:8080/products/
    @PostMapping (path="/user/{id}")
    public @ResponseBody
    String createUser(@PathVariable("id") String this_id) {
        System.out.println("Created this is id-> " + this_id);
        return "Created using @PathVariable";
    }

    @PutMapping (path="/user/{id}")
    public @ResponseBody
    String updateUser(@PathVariable("id") String this_id) {
        System.out.println("Updated this is id-> " + this_id);
        return "Updated using @PathVariable";
    }

    @DeleteMapping (path="/user/{id}")
    public @ResponseBody
    String deleteUser(@PathVariable("id") String this_id) {
        System.out.println("Deleted this is id-> " + this_id);
        return "Deleted using @PathVariable";
    }




//    @RequestMapping(value = "/products")
//        public ResponseEntity<Collection<Product>> getProduct() {
//        return new ResponseEntity<Collection<Product>>(productService.getProducts(), HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
//    public ResponseEntity<String>
//    updateProduct(@PathVariable("id") String id, @RequestBody Product new_product) {
//            //1.  get the product called this_product
//            //2.  set the new product details (new_product) to this_product
//
//        productService.updateProduct(id, new_product);
//        return new ResponseEntity<String>("Product is updated successfully", HttpStatus.OK);
//    }
//    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
//    public ResponseEntity<String> delete(@PathVariable("id") String id) {
//        productService.deleteProduct(id);
//        return new ResponseEntity<>("Product is deleted successfully", HttpStatus.OK);
//    }
//    @RequestMapping(value = "/products", method = RequestMethod.POST)
//    public ResponseEntity<String> createProduct(@RequestBody Product product) {
//        productService.createProduct(product);
//        return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
//    }

}