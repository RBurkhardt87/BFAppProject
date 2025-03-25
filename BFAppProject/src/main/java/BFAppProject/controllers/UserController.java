package BFAppProject.controllers;

import BFAppProject.dto.UserRequestDTO;
import BFAppProject.dto.UserResponseDTO;
import BFAppProject.models.User;
import BFAppProject.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// TODO: Think about creating an Exceptions Class to customize the exceptions to be more specific to username or password already exist

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> registerUser(@RequestBody UserRequestDTO userRequestDTO) {
        try {
            User savedUser = userService.saveUser(userRequestDTO);
            UserResponseDTO responseDTO = userService.convertToDTO(savedUser);
            return ResponseEntity.ok(responseDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
