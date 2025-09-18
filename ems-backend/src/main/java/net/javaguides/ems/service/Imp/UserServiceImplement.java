package net.javaguides.ems.service.Imp;

import net.javaguides.ems.dto.UserDTO;
import net.javaguides.ems.entity.User;
import net.javaguides.ems.exception.ResourceNotFound;
import net.javaguides.ems.mapper.UserMapper;
import net.javaguides.ems.repository.UserRepository;
import net.javaguides.ems.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class UserServiceImplement implements UserService {
    final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    //constructor dependency injection
    public UserServiceImplement(UserRepository userRepository,PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder=passwordEncoder;
    }

    @Override
    public UserDTO SignUser(UserDTO user) {
         User result=UserMapper.maptoUser(user);

         result.setPassword(passwordEncoder.encode(user.getPassword()));
         User saveduser=userRepository.save(result);
         return  (UserMapper.maptoUserDTO(saveduser));

    }

    @Override
    public UserDTO LoginUser(String email, String password) {
        User result=userRepository.findById(email).orElseThrow(
                ()-> new ResourceNotFound("User no Exist")
        );

        //compare raw password with hashed password
        if(passwordEncoder.matches(password ,result.getPassword())){
            return UserMapper.maptoUserDTO(result);

        }
        else{
             throw new ResourceNotFound("Invalid Login or password");
        }
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        User user=UserMapper.maptoUser(userDTO);
        User result =userRepository.findById(user.getEmail()).orElseThrow(
                ()-> new ResourceNotFound("User not exist")
        );
        //updating the user
        result.setName(userDTO.getName());
        result.setEmail(userDTO.getEmail());
        result.setPhone((userDTO.getPhone()));

        result.setCountry(userDTO.getCountry());
        result.setCity(userDTO.getCity());
        result.setPostcode(userDTO.getPostcode());

        User updatedUser=userRepository.save(result);

        return  UserMapper.maptoUserDTO(updatedUser);
    }

    @Override
    public UserDTO uploadProfileImage(String email, MultipartFile file) throws IOException {
        User user=userRepository.findById(email).orElseThrow(
                () -> new ResourceNotFound("User not exist")
        );
        user.setImage(file.getBytes());
        userRepository.save(user);
        return UserMapper.maptoUserDTO(user);
    }

    @Override
    public byte[] getImage(String email) {

        User user=userRepository.findById(email).orElseThrow(
                ()-> new ResourceNotFound("No image")
        );
        byte[] image = user.getImage();
        return image;
    }
}
