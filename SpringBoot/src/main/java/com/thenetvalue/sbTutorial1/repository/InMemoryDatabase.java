package com.thenetvalue.sbTutorial1.repository;

import com.thenetvalue.sbTutorial1.model.User;

import java.util.*;

public class InMemoryDatabase {
    static Map<Integer, User> users = new HashMap<>();
    static int lastIndex = 0;

    public static int addUser(User user){
        user.setId(++lastIndex);
        users.put(user.getId(), user);
        return 1;
    }

    public static User getUserById(int id){
        return users.get(id);
    }

   public static List<User> getUsers(){
       Collection<User> usersValues = users.values();
       return new ArrayList<>(usersValues);
   }

    public static User updateUser(int id, User user) {
        user.setId(id);
        return users.put(id, user);
    }

    public static int deleteUser(int id){
        users.remove(id);
        return 1;
    }
}
