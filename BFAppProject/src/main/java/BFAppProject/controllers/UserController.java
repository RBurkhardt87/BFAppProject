package BFAppProject.controllers;

import BFAppProject.dto.UserRequestDTO;
import BFAppProject.dto.UserResponseDTO;
import BFAppProject.models.User;
import BFAppProject.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

    // TODO: Think about creating an Exceptions Class to customize the exceptions to be more specific to username or password already exist


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRequestDTO userRequestDTO) {
        try {
            User savedUser = userService.saveUser(userRequestDTO);
            UserResponseDTO responseDTO = userService.convertToDTO(savedUser);
            return ResponseEntity.ok("New Registered User: " + responseDTO);
        } catch (Error e) {
            return ResponseEntity.badRequest().body("Error:" + e.getMessage());
        }
    }



}
