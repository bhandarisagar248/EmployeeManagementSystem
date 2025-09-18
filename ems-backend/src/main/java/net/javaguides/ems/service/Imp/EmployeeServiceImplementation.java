package net.javaguides.ems.service.Imp;

import net.javaguides.ems.dto.EmployeeDTO;
import net.javaguides.ems.entity.Employee;
import net.javaguides.ems.exception.ResourceNotFound;
import net.javaguides.ems.mapper.EmployeeMapper;
import net.javaguides.ems.repository.EmployeeRepository;
import net.javaguides.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service  // it is use to denote that the class act as Service
public class EmployeeServiceImplementation implements EmployeeService {

    final EmployeeRepository employeeRepository;

    // Constructor injection
    public EmployeeServiceImplementation(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        //to achieve Depedency Injection
        //to convert the employeeDto to employee type
        Employee employee=EmployeeMapper.maptoEmployee(employeeDTO);

        //saving the employee object to the repository
        Employee savedEmployee=employeeRepository.save(employee);

        //convert the saved employee to Employeedto type to return
        return EmployeeMapper.maptoEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployess(Long employeeId){

        //it will return the result if find in Optional Employee type
           Employee result = employeeRepository.findById(employeeId)
                    .orElseThrow(
                            ()->new ResourceNotFound("Employee Doesn't Exist")
                    );
                   return EmployeeMapper.maptoEmployeeDTO(result);

    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> result=employeeRepository.findAll();

        return result.stream().map((employees)->
                EmployeeMapper.maptoEmployeeDTO(employees)
        ).collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO UpdateEmployee) {

        //first we have to check wheteher the employee is indatabase or not
        Employee result=employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResourceNotFound("Employee not Exist")
        );

        result.setName(UpdateEmployee.getName());
        result.setEmail(UpdateEmployee.getEmail());
        result.setPhone(UpdateEmployee.getPhone());

        Employee resultant=employeeRepository.save(result);
        return EmployeeMapper.maptoEmployeeDTO(resultant);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee result=employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResourceNotFound("The employee no exist")
        );

        employeeRepository.deleteById(result.getId());
    }

}
