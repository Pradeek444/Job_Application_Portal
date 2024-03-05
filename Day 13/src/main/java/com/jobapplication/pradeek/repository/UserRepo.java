package com.jobapplication.pradeek.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jobapplication.pradeek.models.User;
import java.util.Optional;


public interface UserRepo extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);

}
