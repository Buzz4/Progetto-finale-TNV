package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    List<User> findByUsernameContains(String username);

    List<User> findByUsernameAndPassword(String username, String password);

    @Transactional
    @Query ("select u.name from User u where u.username = ?1")
    int getUser (String name, String username);
//test modifica
}
