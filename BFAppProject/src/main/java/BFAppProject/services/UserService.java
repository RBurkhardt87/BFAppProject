package BFAppProject.services;

import BFAppProject.data.UserRepository;
import BFAppProject.dto.UserRequestDTO;
import BFAppProject.dto.UserResponseDTO;
import BFAppProject.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    // TODO: Hash password before saving when authentication is implemented


    //Save a New Registered User -- checking to make sure username/email are not already taken. This method will just
    //save the new user in the database, and returns a User Entity
    public User saveUser(UserRequestDTO userRequestDTO) {
        if (userRepository.findByUsername(userRequestDTO.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username is already taken!");
        }

        if (userRepository.findByEmail(userRequestDTO.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email is already taken!");
        }

        User user = new User(
                userRequestDTO.getFirstName(),
                userRequestDTO.getLastName(),
                userRequestDTO.getUsername(),
                userRequestDTO.getEmail(),
                userRequestDTO.getPassword()
        );

        return userRepository.save(user);
    }

    // This method converts a User Entity object from database into a UserResponseDTO
    // We can just call this method whenever we need our controller methods to return a DTO for User
    public UserResponseDTO convertToDTO(User user) {
        return new UserResponseDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getUsername(),
                user.getEmail(),
                user.getDateCreated()
        );
    }





}
