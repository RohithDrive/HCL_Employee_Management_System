package com.hcl.HCLEmployee_Management_System.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeRequest {
//    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Integer age;
}
