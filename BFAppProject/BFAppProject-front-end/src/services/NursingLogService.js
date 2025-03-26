import axios from "axios";
import React from 'react';

const submitNursingEntry = async (nurseData) => {
    try {
        console.log("Nursing Log Entry Data:", nurseData); 
        const response = await axios.post("http://localhost:8080/api/nurse-log/create", nurseData);
        console.log("Nursing Log Submission response:", response.data);
        return response.data;
    } catch (error) {
      console.error("Error submitting diaper log entry:", error);
      throw error; 
    }
};

export { submitNursingEntry }