package net.javaguides.ems.mapper;


import net.javaguides.ems.dto.UserDTO;
import net.javaguides.ems.entity.User;

import java.util.Arrays;
import java.util.Base64;

public class UserMapper {

    public static UserDTO maptoUserDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setEmail(user.getEmail());
        dto.setName(user.getName());
        dto.setPhone(user.getPhone());
        dto.setCountry(user.getCountry());
        dto.setCity(user.getCity());
        dto.setPostcode(user.getPostcode());

        if (user.getImage() != null) {
            // Convert byte[] → Base64 String
            dto.setImage(Base64.getEncoder().encodeToString(user.getImage()));
        }
        return dto;

    }

    public static User maptoUser(UserDTO userDTO){
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setName(userDTO.getName());
        user.setPhone(userDTO.getPhone());
        user.setCountry(userDTO.getCountry());
        user.setCity(userDTO.getCity());
        user.setPostcode(userDTO.getPostcode());

        if (userDTO.getImage() != null && !userDTO.getImage().isEmpty()) {
            // Convert Base64 String → byte[]
            user.setImage(Base64.getDecoder().decode(userDTO.getImage()));
        }
        return user;
    }

}
