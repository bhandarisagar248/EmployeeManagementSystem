package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDTO;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO maptoEmployeeDTO(Employee employee){


        return new EmployeeDTO(
                employee.getId(),
            employee.getName(),
            employee.getEmail(),
                employee.getPhone()
        );
    };

    public static Employee maptoEmployee(EmployeeDTO employeeDTO){

        return new Employee(
                employeeDTO.getId(),
        employeeDTO.getName(),
        employeeDTO.getEmail(),
         employeeDTO.getPhone()
                );

    };
}
