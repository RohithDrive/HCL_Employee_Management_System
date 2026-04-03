package com.hcl.HCLEmployee_Management_System.mapper;

import com.hcl.HCLEmployee_Management_System.dto.EmployeeRequest;
import com.hcl.HCLEmployee_Management_System.dto.EmployeeResponse;
import com.hcl.HCLEmployee_Management_System.model.Employee;

public class EmployeeMapper {
    public static Employee mapToEmployee(EmployeeRequest empReq){
        return new Employee(
//                empReq.getId(),
                empReq.getFirstName(),
                empReq.getLastName(),
                empReq.getEmail(),
                empReq.getPhone(),
                empReq.getAge()
                );
    }
    public static EmployeeResponse mapToEmployeeResponse(Employee emp){
        return new EmployeeResponse(
                emp.getId(),
                emp.getFirstName(),
                emp.getLastName(),
                emp.getEmail(),
                emp.getPhone(),
                emp.getAge()
        );
    }
}
