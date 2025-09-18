package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.EmployeeDTO;
import net.javaguides.ems.dto.UserDTO;
import net.javaguides.ems.entity.Employee;
import net.javaguides.ems.service.EmployeeService;
import net.javaguides.ems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController // this is controller to handle the restful api
@CrossOrigin("*")
@RequestMapping("/api/employee")   //  handle the http request and define the base url will be routed to it
public class EmployeeController {

    @Autowired //to automate the depedency injection
    private EmployeeService employeeService;

    @Autowired  //automated the dependency injection
    private  UserService userService;


    //build API to add the Employee with Restful api
    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO) { //@RequestBody automatically extract data from request body and mapp to the EmployeeDto
        EmployeeDTO savedEmployeeDTO = employeeService.createEmployee(employeeDTO);
        return new ResponseEntity<>(savedEmployeeDTO, HttpStatus.CREATED);

    }

    //build an API to get employee by id
    @GetMapping("{id}")
    // this will take the id from url
    public ResponseEntity<EmployeeDTO> getEmployee(@PathVariable("id")  Long employeeId){ //@PathVariable will get the id from url and inject to the variable

        EmployeeDTO employeeDTO=employeeService.getEmployess(employeeId);
        return ResponseEntity.ok(employeeDTO);
    }

//to get all the employees
    @GetMapping("/all")
    

    public ResponseEntity<List<EmployeeDTO>> getallEmployee(){
        List<EmployeeDTO> allEmployee= employeeService.getAllEmployee();

        return  ResponseEntity.ok(allEmployee);
    }

    //to update the employee with using id
    @PutMapping("{id}")
    
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody  EmployeeDTO employee){
        EmployeeDTO employeesUpdated=employeeService.updateEmployee(employeeId,employee);
        return ResponseEntity.ok(employeesUpdated);
    }


    //to deleteEmployee By id
    @DeleteMapping("{id}")
    
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return  ResponseEntity.ok("Employee Deleted Success");
    }

    //to handle the userSignup
    @PostMapping("/signup")
    
    public ResponseEntity<UserDTO> signupUser(@RequestBody UserDTO user){

        UserDTO result=userService.SignUser(user);
        return  new ResponseEntity<>(result,HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody UserDTO userDTO){
        UserDTO result=userService.LoginUser(userDTO.getEmail(),userDTO.getPassword());
        return ResponseEntity.ok(result);

    }

    @PutMapping("/update")
    public ResponseEntity<UserDTO> UpdateUser(@RequestBody UserDTO userDTO){
        UserDTO result=userService.updateUser(userDTO);
        return  ResponseEntity.ok(result);

    }

    @PostMapping("/upload/{email}")
    public ResponseEntity<String> uploadProfileImage(@PathVariable("email") String email, @RequestParam("file") MultipartFile file) throws IOException {
        UserDTO result=userService.uploadProfileImage(email,file);

        return ResponseEntity.ok("Image uploaded successfully");
    }

    @GetMapping("profile/{email}/image")
    ResponseEntity<byte[]> getProfileImage(@PathVariable("email") String email){
byte[] image=userService.getImage(email);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, "image/jpeg") // or png
                .body(image);
    }

}


