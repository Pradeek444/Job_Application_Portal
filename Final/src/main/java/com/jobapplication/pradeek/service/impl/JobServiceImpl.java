package com.jobapplication.pradeek.service.impl;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jobapplication.pradeek.dto.request.CreateJobRequest;
import com.jobapplication.pradeek.dto.response.JobFetchResponse;
import com.jobapplication.pradeek.dto.response.MessageResponse;

import com.jobapplication.pradeek.repository.JobRepo;
import com.jobapplication.pradeek.service.JobService;
import com.jobapplication.pradeek.models.Job;

import com.jobapplication.pradeek.utils.JobNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepo jobRepository;

    @Override
    public MessageResponse create(CreateJobRequest request) {
        // Create a new Job
        var job = new Job();
        job.setCompanyName(request.getCompanyName());
        job.setRole(request.getRole());
        job.setSalary(request.getSalary());
        job.setDescription(request.getDescription());
        job.setType(request.getType());

        // Save the job
        jobRepository.save(job);

        return MessageResponse.builder().message("Job created successfully").build();
    }

    @Override
    public List<JobFetchResponse> getAll() {
        List<Job> jobs = jobRepository.findAll();
        return jobs.stream()
                .map(job -> new JobFetchResponse(job.getId(), job.getCompanyName(), job.getRole(), job.getSalary(), job.getDescription(),job.getType()))
                .collect(Collectors.toList());
    }

    @Override
    public JobFetchResponse getById(Long id) throws JobNotFoundException {
        Optional<Job> jobOptional = jobRepository.findById(id);
        if (jobOptional.isEmpty()) {
            throw new JobNotFoundException("Job not found with id " + id);
        }
        Job job = jobOptional.get();
        return new JobFetchResponse(job.getId(), job.getCompanyName(), job.getRole(), job.getSalary(), job.getDescription(),job.getType());
    }

    @Override
    public MessageResponse update(Long id, CreateJobRequest request) throws JobNotFoundException {
        Optional<Job> jobOptional = jobRepository.findById(id);
        if (jobOptional.isEmpty()) {
            throw new JobNotFoundException("Job not found with id " + id);
        }

        Job job = jobOptional.get();
        job.setCompanyName(request.getCompanyName());
        job.setRole(request.getRole());
        job.setSalary(request.getSalary());
        job.setDescription(request.getDescription());

        jobRepository.save(job);

        return MessageResponse.builder().message("Job updated successfully").build();
    }

    @Override
    public MessageResponse deleteById(Long id) throws JobNotFoundException {
        Optional<Job> jobOptional = jobRepository.findById(id);
        if (jobOptional.isEmpty()) {
            throw new JobNotFoundException("Job not found with id " + id);
        }

        jobRepository.deleteById(id);

        return MessageResponse.builder().message("Job deleted successfully").build();
    }
    @Override
    public List<JobFetchResponse> getByType(String type) {
        List<Job> jobsByType = jobRepository.findByType(type);
        return jobsByType.stream()
                .map(job -> new JobFetchResponse(job.getId(), job.getCompanyName(), job.getRole(), job.getSalary(), job.getDescription(), job.getType()))
                .collect(Collectors.toList());
    }
}