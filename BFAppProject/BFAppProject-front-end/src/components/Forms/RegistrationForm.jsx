import React from 'react'
import { Box, Button, Paper, Card } from '@mui/material';
import styles from '../../styling/FormStyling.module.css';
import TextField from '../Forms/TextField';



const RegistrationForm = () => {
  return (
    <div className={styles.formContainer}>  
    <Paper square={false} elevation={24}>
      <Card className={styles.formCard}>
        <form>
            <p className="form-header">Registration Form</p>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="First Name" required />
              <TextField label="Last Name" required />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Username" required />
              <TextField label="Email" type="email" required />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Password" type="password" required />
              <TextField label="Verify Password" type="password" required />
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={styles.submitButton}  
                    >
                    Submit
                </Button>
            </Box>
            
        </form>
      </Card>
    </Paper>
  </div>
  )
}

export default RegistrationForm





