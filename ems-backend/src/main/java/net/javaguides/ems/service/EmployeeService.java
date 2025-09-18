package net.javaguides.ems.service;

import net.javaguides.ems.dto.EmployeeDTO;
import net.javaguides.ems.entity.Employee;

import java.util.List;

public interface EmployeeService {

    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);
    EmployeeDTO getEmployess(Long employeeId);
    List<EmployeeDTO> getAllEmployee();
    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO UpdateEmployee);
    void deleteEmployee(Long employeeId);

}
