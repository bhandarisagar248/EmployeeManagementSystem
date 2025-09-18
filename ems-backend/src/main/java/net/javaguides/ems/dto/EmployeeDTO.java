package net.javaguides.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {  // we use DTO to transfer the data between the client and the server

    private Long id;
    private String name;
    private String email;
    private String phone;
}
