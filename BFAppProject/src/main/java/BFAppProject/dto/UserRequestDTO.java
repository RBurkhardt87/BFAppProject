package BFAppProject.dto;

import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public class UserRequestDTO {

    private Long id;

    @NotBlank(message = "First name is required")
    @Size(max = 20, message = "First name must be less than 20 characters")
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(max = 50, message = "Last name must be less than 50 characters")
    private String lastName;

    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;

    @NotBlank(message = "Password verification is required")
    private String verifiedPassword;

    private final LocalDate dateCreated;


    public UserRequestDTO(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public UserRequestDTO(Long id, String firstName, String lastName, String username, String email,
                          String password, String verifiedPassword, LocalDate dateCreated) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.verifiedPassword = verifiedPassword;
        this.dateCreated = dateCreated;
    }

    public Long getId() { return id; }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getVerifiedPassword() { return verifiedPassword; }
    public void setVerifiedPassword(String verifiedPassword) { this.verifiedPassword = verifiedPassword; }
}

