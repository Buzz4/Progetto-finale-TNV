package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    List<User> findByUsernameContains(String username);

    List<User> findByUsernameAndPassword(String username, String password);

    //@Query ("select u.email from User u where u.username = ?1")
//test modifica
}
