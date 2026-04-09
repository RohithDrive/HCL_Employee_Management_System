package com.hcl.HCLEmployee_Management_System.service.serviceImpl;

import com.hcl.HCLEmployee_Management_System.dto.EmployeeRequest;
import com.hcl.HCLEmployee_Management_System.dto.EmployeeResponse;
import com.hcl.HCLEmployee_Management_System.mapper.EmployeeMapper;
import com.hcl.HCLEmployee_Management_System.model.Employee;
import com.hcl.HCLEmployee_Management_System.repository.EmployeeRepository;
import com.hcl.HCLEmployee_Management_System.service.EmployeeService;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository empRepo;

    @Override
    public @Nullable EmployeeResponse createEmployee(EmployeeRequest empReq) {
        if(empReq.getPhone() == null || empReq.getPhone().isEmpty()){ throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Phone Number was missing."); }
        if(empRepo.existsByPhone(empReq.getPhone())){ throw new ResponseStatusException(HttpStatus.CONFLICT,"Employee already exists with Phone : "+empReq.getPhone()); }
//        Employee emp = EmployeeMapper.mapToEmployee(empReq);
//        Employee savedEmp = empRepo.save(emp);
//        EmployeeResponse empResp = EmployeeMapper.mapToEmployeeResponse(empRepo.save(EmployeeMapper.mapToEmployee(empReq)));
        return EmployeeMapper.mapToEmployeeResponse(empRepo.save(EmployeeMapper.mapToEmployee(empReq)));
    }

    @Override
    public List<EmployeeResponse> getAllEmployees() {
        List<Employee> empList = empRepo.findAll();
        if(empList.isEmpty()){ throw new ResponseStatusException(HttpStatus.NO_CONTENT,"No Employees data found.");   }
        return empList.stream()
                .map(EmployeeMapper::mapToEmployeeResponse)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeResponse getEmpById(Long id) {
//        Employee emp = empRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Employee not found with id : "+id));
//        EmployeeResponse empResp = EmployeeMapper.mapToEmployeeResponse(emp);
//        return empResp;
        return empRepo.findById(id).map(EmployeeMapper::mapToEmployeeResponse).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Employee not found with id : "+id));
    }

    @Override
    public EmployeeResponse updateEmployee(Long id, EmployeeRequest empReq) {
        Employee emp = empRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"No User found with id : "+id));
        emp.setId(id);
        emp.setFirstName(empReq.getFirstName());
        emp.setLastName(empReq.getLastName());
        emp.setEmail(empReq.getEmail());
        emp.setPhone(empReq.getPhone());
        emp.setAge(empReq.getAge());
        return EmployeeMapper.mapToEmployeeResponse(empRepo.save(emp));
    }

    @Override
    public String deleteEmployee(Long id) {
        Employee emp = empRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Employee not found with id : "+id));
        empRepo.deleteById(id);
        return "Employee was deleted Successfully...!";
    }
}
