import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, Paper, Card } from '@mui/material';
import TextField from '../Forms/TextField';
import styles from '../../styling/FormStyling.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SleepLogForm = () => {

  const DiaperLogSchema = Yup.object().shape({
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    pooped: Yup.boolean(),
    poopType: Yup.string().when("poop", {
        is: true,
        then: Yup.string().required("Required when pooped is checked"),
    }),
    poopAmount: Yup.string().when("pooped", {
        is: true,
        then: Yup.string().required("Required when pooped is checked"),
    }),
    urinated: Yup.boolean(),
    urineType: Yup.string().when("urinated", {
        is: true,
        then: Yup.string().required("Required when urinated is checked"),
    }),
    urineAmount: Yup.string().when("urinated", {
        is: true,
        then: Yup.string().required("Required when urinated is checked"),
    }), 
  });

  return (
    <div className={styles.formContainerLogs}> 
        <Paper square={false} elevation={24}>
            <Card className={styles.formCard}>    
                <Formik
                initialValues={{
                    date: "",
                    time: "",
                    pooped: false,
                    poopType: ""
                }}
                validationSchema={DiaperLogSchema}
                onSubmit={(values) => {
                    console.log("Form Data Submitted:", values);  
                }}
                >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue }) => (
                    
                    <form onSubmit={handleSubmit}>
                        <p className="form-header">Diaper Log Entry</p>
                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
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
                            <TextField
                                fullWidth
                                label="Time"
                                type="time"
                                variant="outlined"
                                value={values.time}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="time"
                                required
                                error={touched.startTime && Boolean(errors.startTime)}
                                helperText={touched.startTime && errors.startTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>


                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.pooped}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("pooped", e.target.checked);
                                }}
                                name="pooped"
                                color="primary"
                            />
                            }
                            label="Infant Pooped?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.pooped && (
                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                           <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Stool Type</InputLabel>
                                <Select
                                    label="Stool Type"
                                    value={values.stoolType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="stoolType"
                                >
                                    <MenuItem value="Light" title="Frequent awakenings or shifts, possibly not the most restful.">Light Sleep</MenuItem>
                                    <MenuItem value="Interrupted" title="Interrupted sleep, but the baby is able to fall back asleep.">Interrupted Sleep</MenuItem>
                                    <MenuItem value="Restless/Active" title="The baby moves around a lot during sleep.">Restless/Active Sleep</MenuItem>
                                    <MenuItem value="Noisy" title="Sleep accompanied by sounds like grunting, whimpering, or mumbling.">Noisy Sleep</MenuItem>
                                    <MenuItem value="Deep" title="Restful, undisturbed sleep with little to no movement.">Deep Sleep</MenuItem>
                                </Select>
                            </FormControl>                     
                       
                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Stool Amount</InputLabel>
                                <Select
                                    label="Stool Amount"
                                    value={values.stoolAmount}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="stoolAmount"
                                >
                                    <MenuItem value="Light" title="Frequent awakenings or shifts, possibly not the most restful.">Light Sleep</MenuItem>
                                    <MenuItem value="Interrupted" title="Interrupted sleep, but the baby is able to fall back asleep.">Interrupted Sleep</MenuItem>
                                    <MenuItem value="Restless/Active" title="The baby moves around a lot during sleep.">Restless/Active Sleep</MenuItem>
                                    <MenuItem value="Noisy" title="Sleep accompanied by sounds like grunting, whimpering, or mumbling.">Noisy Sleep</MenuItem>
                                    <MenuItem value="Deep" title="Restful, undisturbed sleep with little to no movement.">Deep Sleep</MenuItem>
                                </Select>
                            </FormControl>    
                            </Box>                 
                        )}



                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.urinated}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("urinated", e.target.checked);
                                }}
                                name="urinated"
                                color="primary"
                            />
                            }
                            label="Infant Urinated?"
                            style={{ marginTop: '20px' }}
                        />
                        
                        {values.urinated && (
                            <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                                <FormControl fullWidth style={{ marginTop: '20px' }}>
                                    <InputLabel>Urine Type</InputLabel>
                                    <Select
                                        label="Urine Type"
                                        value={values.urineType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="urineType"
                                    >
                                        <MenuItem value="Light" title="Frequent awakenings or shifts, possibly not the most restful.">Light Sleep</MenuItem>
                                        <MenuItem value="Interrupted" title="Interrupted sleep, but the baby is able to fall back asleep.">Interrupted Sleep</MenuItem>
                                        <MenuItem value="Restless/Active" title="The baby moves around a lot during sleep.">Restless/Active Sleep</MenuItem>
                                        <MenuItem value="Noisy" title="Sleep accompanied by sounds like grunting, whimpering, or mumbling.">Noisy Sleep</MenuItem>
                                        <MenuItem value="Deep" title="Restful, undisturbed sleep with little to no movement.">Deep Sleep</MenuItem>
                                    </Select>
                                </FormControl>                     

                                <FormControl fullWidth style={{ marginTop: '20px' }}>
                                    <InputLabel>Urine Amount</InputLabel>
                                    <Select
                                        label="Urine Amount"
                                        value={values.urineAmount}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="urineAmount"
                                    >
                                        <MenuItem value="Light" title="Frequent awakenings or shifts, possibly not the most restful.">Light Sleep</MenuItem>
                                        <MenuItem value="Interrupted" title="Interrupted sleep, but the baby is able to fall back asleep.">Interrupted Sleep</MenuItem>
                                        <MenuItem value="Restless/Active" title="The baby moves around a lot during sleep.">Restless/Active Sleep</MenuItem>
                                        <MenuItem value="Noisy" title="Sleep accompanied by sounds like grunting, whimpering, or mumbling.">Noisy Sleep</MenuItem>
                                        <MenuItem value="Deep" title="Restful, undisturbed sleep with little to no movement.">Deep Sleep</MenuItem>
                                    </Select>
                                </FormControl>  
                            </Box>                   
                        )}



                       
                    
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
                )}
                </Formik>
            </Card>
        </Paper>
    </div>
  );
};

export default SleepLogForm;