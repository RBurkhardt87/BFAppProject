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

    const registerUser = async (userData) => {
        try {
            console.log("Registering user with data:", userData); 
            const response = await axios.post("http://localhost:8080/api/users/register", userData);
            console.log("Registration response:", response.data);
            return response.data;
        } catch (error) {
          console.error("Error registering user:", error);
          throw error; 
        }
    };
      

export { getUserById, registerUser };