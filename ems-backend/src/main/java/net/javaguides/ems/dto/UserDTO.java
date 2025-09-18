package net.javaguides.ems.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class UserDTO {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String country;
    private String city;
    private Long postcode;
    private String image;

}

