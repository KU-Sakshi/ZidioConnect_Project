package com.zidio.connect.controller;

import com.zidio.connect.dto.job.JobRequest;
import com.zidio.connect.dto.job.JobResponse;
import com.zidio.connect.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    @PostMapping
    public ResponseEntity<JobResponse> createJob(@RequestBody JobRequest jobRequest) {
        return ResponseEntity.ok(jobService.createJob(jobRequest));
    }
}
