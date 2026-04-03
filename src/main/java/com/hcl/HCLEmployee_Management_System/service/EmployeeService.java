package com.hcl.HCLEmployee_Management_System.service;

import com.hcl.HCLEmployee_Management_System.dto.EmployeeRequest;
import com.hcl.HCLEmployee_Management_System.dto.EmployeeResponse;
import org.jspecify.annotations.Nullable;

import java.util.List;

// component - is a streio type Annotation can be used for controller, service, repo also.
public interface EmployeeService {

    @Nullable EmployeeResponse createEmployee(EmployeeRequest empReq);

    List<EmployeeResponse> getAllEmployees();

    EmployeeResponse getEmpById(Long id);

    EmployeeResponse updateEmployee(Long id, EmployeeRequest empReq);

    String deleteEmployee(Long id);
}
