import axios from "axios";
import React from 'react';

const submitDiaperEntry = async (diaperData) => {
    try {
        console.log("Diaper Log Entry Data:", diaperData); 
        const response = await axios.post("http://localhost:8080/api/diaper-log/create", diaperData);
        console.log("Diaper Log Submission response:", response.data);
        return response.data;
    } catch (error) {
      console.error("Error submitting diaper log entry:", error);
      throw error; 
    }
};

export { submitDiaperEntry }
