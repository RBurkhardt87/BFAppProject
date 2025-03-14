import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, Paper, Card } from '@mui/material';
import TextField from '../Forms/TextField';
import styles from '../../styling/FormStyling.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FeedingLogForm = () => {

  const FeedingLogSchema = Yup.object().shape({
    date: Yup.date().required("Required"),
    startTime: Yup.string().required("Required"),
    stopTime: Yup.string().required("Required"),
  });

  return (
    <div className={styles.formContainerLogs}> 
        <Paper square={false} elevation={24}>
            <Card className={styles.formCard}>    
                <Formik
                initialValues={{
                    date: "",
                    startTime: "",
                    stopTime: "",
                }}
                validationSchema={FeedingLogSchema}
                onSubmit={(values) => {
                    console.log("Form Data Submitted:", values);  
                }}
                >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue, resetForm }) => (
                    
                    <form onSubmit={handleSubmit}>
                        <p className="form-header">Feeding Log Entry</p>

                        <TextField
                            fullWidth
                            label="Date"
                            type="date"
                            variant="outlined"
                            value={values.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="date"
                            required
                            error={touched.date && Boolean(errors.date)}
                            helperText={touched.date && errors.date}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />


                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                            <TextField
                            fullWidth
                            label="Start Time"
                            type="time"
                            variant="outlined"
                            value={values.startTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="startTime"
                            required
                            error={touched.startTime && Boolean(errors.startTime)}
                            helperText={touched.startTime && errors.startTime}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                            <TextField
                            fullWidth
                            label="Stop Time"
                            type="time"
                            variant="outlined"
                            value={values.stopTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="stopTime"
                            required
                            error={touched.stopTime && Boolean(errors.stopTime)}
                            helperText={touched.stopTime && errors.stopTime}
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
                                Reset Entry
                            </Button>
                        </Box>
                    </form>
                )}
                </Formik>
            </Card>
        </Paper>
    </div>
  );
};

export default FeedingLogForm;