package com.hcl.HCLEmployee_Management_System;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class HclEmployeeManagementSystemApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(HclEmployeeManagementSystemApplication.class);
    }

	public static void main(String[] args) {
		SpringApplication.run(HclEmployeeManagementSystemApplication.class, args);
	}

}
