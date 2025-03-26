import axios from "axios";
import React from 'react';

const submitSleepEntry = async (sleepData) => {
    try {
        console.log("Sleep Log Entry Data:", sleepData); 
        const response = await axios.post("http://localhost:8080/api/sleep-log/create", sleepData);
        console.log("Sleep Log Submission response:", response.data);
        return response.data;
    } catch (error) {
      console.error("Error submitting sleep log entry:", error);
      throw error; 
    }
};

export { submitSleepEntry }
