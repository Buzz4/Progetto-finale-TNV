package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.User;

import java.util.List;
import java.util.Map;

public interface UserDAO {
    public int addUser(User user);
    public User getUserById(int id);
    public List<User> allUsers();
    public User updateUser(int id, User user);
    public int deleteUser(int id);
    public int register(User newUser);


}
