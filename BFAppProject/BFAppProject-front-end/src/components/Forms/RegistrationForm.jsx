import React from 'react'
import { Box, Button, Paper, Card } from '@mui/material';
import styles from '../../styling/FormStyling.module.css';
import TextField from '../Forms/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { registerUser } from '../../services/UserService';
import axios from "axios";



const RegistrationForm = () => {

   const registrationSchema = Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      verifyPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Verify password is required"),
    });
 
    // const handleSubmit = async (values, { resetForm }) => {
    //   try {
    //     await registerUser(values);
    //     alert("User has been registered!");
    //     resetForm();
    //   } catch (error) {
    //     alert("Something went wrong. Please try again.");
    //   }
    // };

    const handleSubmit = async (values, { resetForm }) => {
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


  return (
    <div className={styles.formContainer}>  
    <Paper square={false} elevation={24}>
      <Card className={styles.formCard}>
        <Formik
              initialValues={{
              firstName: "",
              lastName: "",
              username: "",
              email: "",
              password: "",
              verifyPassword: "",
          }}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
          >
          {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue, resetForm }) => (
              
          <form onSubmit={handleSubmit}>
            <p className="form-header">Registration Form</p>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                  fullWidth
                  label="firstName"
                  type="text"
                  variant="outlined"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="firstName"
                  required
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
              <TextField
                  fullWidth
                  label="lastName"
                  type="text"
                  variant="outlined"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastName"
                  required
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                  fullWidth
                  label="username"
                  type="text"
                  variant="outlined"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="username"
                  required
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
              <TextField
                  fullWidth
                  label="email"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  required
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                  fullWidth
                  label="password"
                  type="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  required
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
              <TextField
                  fullWidth
                  label="verifyPassword"
                  type="password"
                  variant="outlined"
                  value={values.verifyPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="verifyPassword"
                  required
                  error={touched.verifyPassword && Boolean(errors.verifyPassword)}
                  helperText={touched.verifyPassword && errors.verifyPassword}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2}}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={styles.submitButton}                      
                    >
                    Submit
                </Button>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => resetForm()}
                    className={styles.resetButton}  
                    >
                    Reset 
                </Button>
            </Box>
            </form>
          )}            
        </Formik>
      </Card>
    </Paper>
  </div>
  )
}

export default RegistrationForm





