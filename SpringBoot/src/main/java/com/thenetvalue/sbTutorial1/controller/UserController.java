package com.thenetvalue.sbTutorial1.controller;

import com.thenetvalue.sbTutorial1.model.User;
import com.thenetvalue.sbTutorial1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/registration/")
    public User register(@RequestBody User newUser){
        return userService.register(newUser);
    }
    @PostMapping("/")
    public String addUser(@RequestBody User user){
        return userService.addUser(user);
    }
    
    @GetMapping("/login")
    public User userLogin(@RequestBody User login) {  
            return userService.userLogin(login);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userService.getUser(id);
    }

    @GetMapping("/username/{username}")
    public User getUserByUsernameContains(@PathVariable("username") String username){
        return userService.getUserByUsernameContains(username);
    }

    @GetMapping("/username/{username}/password/{password}")
    public Iterable<User> getUserByUsernameAndPassword(@PathVariable("username") String username, @PathVariable ("password") String password){
        return userService.getUserByUsernameAndPassword(username, password);
    }

    /*@GetMapping("/username/{username}/password/{password}")
    public String getUserByUsernameAndPassword(@PathVariable("username") String username, @PathVariable ("password") String password){
        return userService.getUserByUsernameAndPassword(username, password);
    }*/

   @GetMapping("/")
   public Iterable<User> allUsers(){
        return userService.allUsers();
   }


    @PutMapping("/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User username){
        return userService.updateUser(id, username);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id){
        return userService.deleteUser(id);
    }
}

