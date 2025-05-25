package com.zidio.connect.service;

import com.zidio.connect.dto.job.JobRequest;
import com.zidio.connect.dto.job.JobResponse;
import org.springframework.stereotype.Service;

@Service
public class JobService {
    public JobResponse createJob(JobRequest jobRequest) {
        // Implement job creation logic
        return new JobResponse(); // Return created job response
    }
}
