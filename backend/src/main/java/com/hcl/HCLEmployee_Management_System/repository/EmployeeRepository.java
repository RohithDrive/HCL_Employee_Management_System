package com.hcl.HCLEmployee_Management_System.repository;

import com.hcl.HCLEmployee_Management_System.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    boolean existsByPhone(String phone);
}
