import { Box, Button, Paper, Card } from '@mui/material';
import styles from '../../styling/FormStyling.module.css';
import TextField from '../Forms/TextField';



const LoginForm = () => {
  return (
    <div className={styles.formContainer}>  
    <Paper square={false} elevation={24}>
      <Card className={styles.formCard}>
        <form>
            <p className="form-header">User Login</p>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField label="Name" required/>
                <TextField label="Email" type="email" required/>
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

export default LoginForm