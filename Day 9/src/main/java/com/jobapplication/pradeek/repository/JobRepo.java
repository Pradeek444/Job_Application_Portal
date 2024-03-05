package com.jobapplication.pradeek.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.jobapplication.pradeek.models.Job;





public interface JobRepo extends JpaRepository<Job, Long> {


}
