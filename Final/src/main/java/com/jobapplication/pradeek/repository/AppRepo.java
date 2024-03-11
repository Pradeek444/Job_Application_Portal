package com.jobapplication.pradeek.repository;


import com.jobapplication.pradeek.models.Application;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppRepo extends JpaRepository<Application, Long> {
   List<Application> findByEmail(String email);
}