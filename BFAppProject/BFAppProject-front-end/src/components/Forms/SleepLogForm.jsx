import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, Paper, Card } from '@mui/material';
import TextField from '../Forms/TextField';
import styles from '../../styling/FormStyling.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SleepLogForm = () => {

  const SleepLogSchema = Yup.object().shape({
    date: Yup.date().required("Required"),
    startTime: Yup.string().required("Required"),
    stopTime: Yup.string().required("Required"),
    sleepLocation: Yup.string(),
    sleepQuality: Yup.string(),
    sleepType: Yup.string(),
    mood: Yup.string(),
    sleepPosition: Yup.string(),
    swaddled: Yup.boolean(),
    swaddleType: Yup.string().when("swaddled", {
      is: true,
      then: Yup.string(),
    }),
    crying: Yup.boolean(),
    cryingNotes: Yup.string().when("crying", {
        is: true,
        then: Yup.string(),
    }),
    sleepAssociations: Yup.boolean(),
    associationType: Yup.string().when("sleepAssociations", {
        is: true,
        then: Yup.string(),
    })

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
                    sleepLocation: "",
                    sleepQuality: "",
                    sleepType: "",
                    mood: "",
                    sleepPosition: "",
                    swaddled: false,
                    swaddleType: "",
                    crying: false,
                    cryingNotes: "",
                    sleepAssociations: false,
                    associationType: ""
                }}
                validationSchema={SleepLogSchema}
                onSubmit={(values) => {
                    console.log("Form Data Submitted:", values);  
                }}
                >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue, resetForm }) => (
                    
                    <form onSubmit={handleSubmit}>
                        <p className="form-header">Sleep Log Entry</p>

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


                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Sleep Quality</InputLabel>
                                <Select
                                    label="Sleep Quality"
                                    value={values.sleepQuality}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="sleepQuality"
                                >
                                    <MenuItem value="Light" title="Frequent awakenings or shifts, possibly not the most restful.">Light Sleep</MenuItem>
                                    <MenuItem value="Interrupted" title="Interrupted sleep, but the baby is able to fall back asleep.">Interrupted Sleep</MenuItem>
                                    <MenuItem value="Restless/Active" title="The baby moves around a lot during sleep.">Restless/Active Sleep</MenuItem>
                                    <MenuItem value="Noisy" title="Sleep accompanied by sounds like grunting, whimpering, or mumbling.">Noisy Sleep</MenuItem>
                                    <MenuItem value="Deep" title="Restful, undisturbed sleep with little to no movement.">Deep Sleep</MenuItem>
                                </Select>
                            </FormControl>                     

                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Waking Mood</InputLabel>
                                <Select
                                    label="Mood"
                                    value={values.mood}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="mood"
                                >
                                    <MenuItem value="Happy" title="The baby wakes up smiling, giggling, or generally in a positive mood.">Happy</MenuItem>
                                    <MenuItem value="Alert" title="The baby wakes up and seems curious and aware of their surroundings, with bright eyes and attention.">Alert</MenuItem>
                                    <MenuItem value="Calm" title="The baby wakes up quietly, without fuss, and seems content but not overly energetic.">Calm</MenuItem>
                                    <MenuItem value="Neutral" title="The baby wakes up without showing clear signs of either a good or bad mood.">Neutral</MenuItem>
                                    <MenuItem value="Tired" title="The baby wakes up slowly, appearing disoriented or sleepy, but not as irritable.">Tired</MenuItem>
                                    <MenuItem value="Fussy"title="The baby wakes up a little cranky or irritable (distressed or upset), possibly needing comfort or soothing.">Fussy</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Sleep Position</InputLabel>
                                <Select
                                    label="Sleep Position"
                                    value={values.sleepPosition}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="sleepPosition"
                                    >
                                    <MenuItem value="Side" title="Infant slept on side">Side</MenuItem>
                                    <MenuItem value="Back" title="Infant slept on back">Back</MenuItem>
                                    <MenuItem value="Tummy" title="Infant slept on tummy">Tummy</MenuItem>
                                </Select>
                            </FormControl>                     

                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Sleep Type</InputLabel>
                                <Select
                                    label="Sleep Type"
                                    value={values.sleepType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="sleepType"
                                >
                                    <MenuItem value="morning">Morning Nap</MenuItem>
                                    <MenuItem value="afternoon">Afternoon Nap</MenuItem>
                                    <MenuItem value="evening">Evening Nap</MenuItem>
                                    <MenuItem value="nighttime">Nighttime Sleep</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                        <TextField
                            fullWidth
                            label="Sleep Environment"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={values.sleepEnvironment}
                            title="Log about where infant slept, darkness of room, volume of external noises or white noises used."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="sleepEnvironment"
                            style={{ marginTop: '20px' }}
                        />

                      
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.swaddled}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("swaddled", e.target.checked);
                                }}
                                name="swaddled"
                                color="primary"
                            />
                            }
                            label="Infant Swaddled?"
                            style={{ marginTop: '20px' }}
                        />

                        
                        {values.swaddled && (
                            <TextField
                            fullWidth
                            label="Swaddle Type"
                            variant="outlined"
                            value={values.swaddleType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="swaddleType"
                            style={{ marginTop: '10px' }}
                            error={touched.swaddleType && Boolean(errors.swaddleType)}
                            helperText={touched.swaddleType && errors.swaddleType}
                            />
                        )}


                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={values.crying}
                                    onChange={(e) => {
                                        handleChange(e);                                        
                                        setFieldValue("crying", e.target.checked);
                                    }}
                                    name="crying"
                                    color="primary"
                                />
                            }
                            label="Infant Cried?"
                            style={{ marginTop: '20px' }}
                        />


                        {values.crying && (
                            <TextField
                            fullWidth
                            label="Crying & Consoling Notes"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={values.cryingNotes}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="cryingNotes"
                            style={{ marginTop: '10px' }}
                            error={touched.cryingNotes && Boolean(errors.cryingNotes)}
                            helperText={touched.cryingNotes && errors.cryingNotes}
                            />
                        )}


                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.sleepAssociations}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("sleepAssociations", e.target.checked);
                                }}
                                name="sleepAssociations"
                                color="primary"
                            />
                            }
                            label="Sleep Associations?"
                            title="sleep associations used like pacifier, white noise, rocking..."
                            style={{ marginTop: '20px' }}
                        />

                        
                        {values.sleepAssociations && (
                            <TextField
                            fullWidth
                            label="Sleep Associations Used"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={values.associationType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="associationType"
                            style={{ marginTop: '10px' }}
                            error={touched.associationType && Boolean(errors.associationType)}
                            helperText={touched.associationType && errors.associationType}
                            />
                        )}
                       
                    
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

export default SleepLogForm;