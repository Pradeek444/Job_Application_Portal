package com.jobapplication.pradeek.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobapplication.pradeek.models.Job;





public interface JobRepo extends JpaRepository<Job, Long> {
    List<Job> findByType(String type);

}
