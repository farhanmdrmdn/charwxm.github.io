package com.cdf.cdf;

import org.springframework.data.repository.CrudRepository;

import com.cdf.cdf.Users;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<Users, Integer> {

}