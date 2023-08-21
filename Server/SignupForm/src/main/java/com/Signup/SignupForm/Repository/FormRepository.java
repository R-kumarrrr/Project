package com.Signup.SignupForm.Repository;

import com.Signup.SignupForm.model.User;
import org.springframework.data.repository.CrudRepository;

public interface FormRepository extends CrudRepository<User,String>{
}