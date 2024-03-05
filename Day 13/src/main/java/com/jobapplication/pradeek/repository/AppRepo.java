package com.jobapplication.pradeek.repository;


import com.jobapplication.pradeek.models.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppRepo extends JpaRepository<Application, Long> {
    // You can define custom query methods here if needed
}