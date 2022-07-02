package com.thenetvalue.sbTutorial1.service;

import com.thenetvalue.sbTutorial1.dao.UserRepositoryDAO;
import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService{
    UserRepositoryDAO userDAO;
    

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }

    public String addUser(User user){
        User resultUser = userDAO.save(user);
        if (resultUser != null){
            return "Utente salvato correttamente";
        }else {
            return "Errore nel salvataggio dell'utente";
        }

    }

    public User getUser(int id){
        return userDAO.findById(id).get();
    }

    public User getUserByUsernameContains(String username){
        return userDAO.findByUsernameContains(username);
    }

    /*public Iterable<User> getUserByUsernameAndPassword(String username, String password) {
        return userDAO.findByUsernameAndPassword(username, password);
    }*/

    public String getUserByUsernameAndPassword(String username, String password) {
        List<User> userValido = userDAO.findByUsernameAndPassword(username, password);

        if (userValido == null){
            return "Utente non trovato!";
        }else {
            return "Username e password corrette";
        }
    }

    public Iterable<User> allUsers(){
        return userDAO.findAll();
    }

    public String updateUser(int id, User user){
        User userRecuperato = userDAO.findById(id).get();
        if (userRecuperato == null){
            return "Utente non trovato!";
        }
        user.setId(id);
        User resultUser = userDAO.save(user);
        if (resultUser != null){
            return "Utente aggiornato correttamente";
        }else {
            return "Errore nella cancellazione dell'utente";
        }
    }

    public String deleteUser(int id){
        User userRecuperato = userDAO.findById(id).get();
        if (userRecuperato == null){
            return "Utente non trovato!";
        }else {
            userDAO.delete(userRecuperato);
            return "Utente cancellato correttamente";
            }
        }

    public User register(User newUser) {
        return userDAO.save(newUser);
    }

    public User userLogin(User login) {
        String psw = login.getPassword();
        if (login.getPassword() != null && login.getUsername() != null) {
            User credenziali = userDAO.findByUsernameContains(login.getUsername());
            if (credenziali.getPassword().equals(psw)) {
                return credenziali;
            }
        } else {
            return null;
        }
        return  null;
    }
}


