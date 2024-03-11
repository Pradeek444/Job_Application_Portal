package com.jobapplication.pradeek.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
import com.jobapplication.pradeek.utils.UserNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppServiceImpl implements AppService {

    private final AppRepo appRepository;

    @Override
    public MessageResponse create(CreateAppRequest request) {
        LocalDate currentDate = LocalDate.now();

        // Format the current date using a formatter
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String formattedDate = currentDate.format(dateFormatter);

        // Create a new Application
        var application = new Application();
        application.setCompanyName(request.getCompanyName());
        application.setRole(request.getRole());
        application.setName(request.getName());
        application.setEmail(request.getEmail());
        application.setDate(formattedDate);
        application.setResume(request.getResume());
        application.setStatus("pending");

        // Save the application
        appRepository.save(application);

        return MessageResponse.builder().message("Application created successfully").build();
    }

    @Override
    public List<AppFetchResponse> getAll() {
        List<Application> applications = appRepository.findAll();
        return applications.stream()
                .map(app -> new AppFetchResponse(app.getId(), app.getCompanyName(), app.getRole(), app.getName(), app.getEmail(), app.getDate(), app.getResume(), app.getStatus()))
                .collect(Collectors.toList());
    }

    @Override
    public AppFetchResponse getById(Long id) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }
        Application application = appOptional.get();
        return new AppFetchResponse(application.getId(), application.getCompanyName(), application.getRole(), application.getName(), application.getEmail(), application.getDate(), application.getResume(), application.getStatus());
    }

    @Override
    public MessageResponse update(Long id, CreateAppRequest request) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }

        Application application = appOptional.get();
        application.setCompanyName(request.getCompanyName());
        application.setRole(request.getRole());
        application.setName(request.getName());
        application.setEmail(request.getEmail());
        application.setResume(request.getResume());
        // application.setStatus(request.getStatus());

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

    @Override
    public MessageResponse updateStatus(Long id, String status) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }

        Application application = appOptional.get();
        application.setStatus(status);

        appRepository.save(application);

        return MessageResponse.builder().message("Application status updated successfully").build();
    }
 
@Override
    public List<AppFetchResponse> getByEmail(String email) throws Exception {
    List<Application> applications = appRepository.findByEmail(email);
    if (applications.isEmpty()) {
        throw new Exception("No applications found for email " + email);
    }
    return applications.stream()
            .map(app -> new AppFetchResponse(app.getId(), app.getCompanyName(), app.getRole(), app.getName(), app.getEmail(), app.getDate(), app.getResume(), app.getStatus()))
            .collect(Collectors.toList());
}

}
