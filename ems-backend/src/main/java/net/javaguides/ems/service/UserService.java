package net.javaguides.ems.service;

import net.javaguides.ems.dto.UserDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


public interface UserService {
     UserDTO SignUser(UserDTO user);
     UserDTO LoginUser(String email,String password);
     UserDTO updateUser(UserDTO userDTO);
     UserDTO uploadProfileImage(String email, MultipartFile file) throws IOException;
     byte[] getImage(String email);
}
