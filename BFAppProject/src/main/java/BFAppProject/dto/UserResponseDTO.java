package BFAppProject.dto;

import java.time.LocalDate;


public class UserResponseDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private final LocalDate dateCreated;

    public UserResponseDTO(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public UserResponseDTO(Long id, String firstName, String lastName, String username, String email, LocalDate dateCreated) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.dateCreated = dateCreated;
    }


    public Long getId() {
        return id;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }





}