package com.Signup.SignupForm.Controller;


import com.Signup.SignupForm.model.User;
import com.Signup.SignupForm.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserServices userServices;

    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getAllUsers()
    {
        return userServices.getAllUsers();

    }
    @RequestMapping(method = RequestMethod.GET,value = "/users/{email}")
    public Optional<User> getUsersInfo(@PathVariable String email)
    {
        return userServices.getUsersInfo(email);

    }

    @RequestMapping(method = RequestMethod.POST,value = "/users")
    public User addUser(@RequestBody User user)
    {
        return userServices.addUser(user);
    }



}