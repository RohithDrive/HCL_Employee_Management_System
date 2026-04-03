package com.hcl.HCLEmployee_Management_System.controller;

import com.hcl.HCLEmployee_Management_System.dto.EmployeeRequest;
import com.hcl.HCLEmployee_Management_System.dto.EmployeeResponse;
import com.hcl.HCLEmployee_Management_System.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@RequestMapping("/api/v1/hcl")

@CrossOrigin("*")

public class EmployeeController {

    @Autowired
    private EmployeeService empService;

    @PostMapping("/add-employee")
    public ResponseEntity<EmployeeResponse> createEmployee(@RequestBody EmployeeRequest empReq){
//        return ResponseEntity.status(HttpStatus.CREATED).body(empService.createEmployee(empReq));
        return new ResponseEntity<>(empService.createEmployee(empReq), HttpStatus.CREATED);
    }

    @GetMapping("/get_all_employees")
    public ResponseEntity<List<EmployeeResponse>> getAllEmployees(){
        return new ResponseEntity<>(empService.getAllEmployees(),HttpStatus.OK);
    }

    @GetMapping("/get-emp/{id}")
    public ResponseEntity<EmployeeResponse> getByEmpId(@PathVariable Long id){
        return new ResponseEntity<>(empService.getEmpById(id),HttpStatus.OK);
    }

    @PutMapping("/update-emp/{id}")
    public ResponseEntity<EmployeeResponse> updateEmployee(@PathVariable Long id, @RequestBody EmployeeRequest empReq){
        return new ResponseEntity<>(empService.updateEmployee(id, empReq),HttpStatus.OK);
    }

    @DeleteMapping("/delete-emp/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        return new ResponseEntity<>(empService.deleteEmployee(id), HttpStatus.OK);
    }
}
