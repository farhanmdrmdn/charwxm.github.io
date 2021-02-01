package com.example.task9.Models;

import com.example.task9.Models.User;

import java.util.Collection;

public interface UserService {
    public abstract void createUser(User user);
    public abstract void updateUser(String id, User user);
    public abstract void deleteUser(String id);
    public abstract Collection<User> getUsers();
}
