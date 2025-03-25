import axios from "axios";

const API_BASE_URL = "http://localhost:8080/users/profile";

const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${userId}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

const registerUser = async (values, { resetForm }) => {
      try {
          const response = await axios.post("http://localhost:8080/api/users/register", values);
          console.log("Registration successfully submitted:", response.data);
          alert("User has been registered!");
          resetForm();
      } catch (error) {
          console.error("Error registering user:", error);
          alert("Something went wrong. Please try again.");
      }
    };

export { getUserById, registerUser };