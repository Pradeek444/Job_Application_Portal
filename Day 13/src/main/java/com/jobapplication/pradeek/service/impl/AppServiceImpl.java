package com.jobapplication.pradeek.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jobapplication.pradeek.dto.request.CreateAppRequest;
import com.jobapplication.pradeek.dto.response.AppFetchResponse;
import com.jobapplication.pradeek.dto.response.MessageResponse;
import com.jobapplication.pradeek.models.Application;
import com.jobapplication.pradeek.repository.AppRepo;
import com.jobapplication.pradeek.service.AppService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppServiceImpl implements AppService {

    private final AppRepo appRepository;

    @Override
    public MessageResponse create(CreateAppRequest request) {
        try {
            // Create a new Application
            var application = new Application();
            application.setName(request.getMobile());
            application.setEmail(request.getName());
            application.setMobile(request.getEmail());
            application.setGender(request.getGender());
            appRepository.save(application);
    
            return MessageResponse.builder().message("Application created successfully").build();
        } catch (Exception e) {
            // Handle any exceptions that occur during the creation process
            return MessageResponse.builder().message("Failed to create application: " + e.getMessage()).build();
        }
    }
    

    @Override
    public List<AppFetchResponse> getAll() {
        List<Application> applications = appRepository.findAll();
        return applications.stream()
                .map(app -> new AppFetchResponse(app.getId(), app.getName(), app.getEmail(), app.getGender(),app.getMobile()))
                .collect(Collectors.toList());
    }

    @Override
    public AppFetchResponse getById(Long id) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }
        Application application = appOptional.get();
        return new AppFetchResponse(application.getId(), application.getName(), application.getEmail(), application.getMobile(),application.getGender());
    }

    @Override
    public MessageResponse update(Long id, CreateAppRequest request) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }

        Application application = appOptional.get();
        application.setName(request.getMobile());
        application.setEmail(request.getName());
        application.setMobile(request.getEmail());
        application.setGender(request.getGender());
  

        appRepository.save(application);

        return MessageResponse.builder().message("Application updated successfully").build();
    }

    @Override
    public MessageResponse deleteById(Long id) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }

        appRepository.deleteById(id);

        return MessageResponse.builder().message("Application deleted successfully").build();
    }
}