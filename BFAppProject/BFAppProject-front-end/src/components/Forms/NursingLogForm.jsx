import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, Paper, Card } from '@mui/material';
import TextField from './TextField';
import styles from '../../styling/FormStyling.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FieldArray } from "formik";
import { submitNursingEntry } from "../../services/NursingLogService";

const NursingLogForm = () => {

    const FeedingLogSchema = Yup.object().shape({
        date: Yup.date().required("Required"),
        leftSide: Yup.boolean(),
        rightSide: Yup.boolean(),
        leftStartTime: Yup.string().when("leftSide", {
            is: true,
            then: (schema) => schema.required("Start time required when left side is selected"),
            otherwise: (schema) => schema.notRequired(),
        }),
        leftStopTime: Yup.string().when("leftSide", {
            is: true,
            then: (schema) => schema.required("Stop time required when left side is selected"),
            otherwise: (schema) => schema.notRequired(),
        }),
        rightStartTime: Yup.string().when("rightSide", {
            is: true,
            then: (schema) => schema.required("Start time required when right side is selected"),
            otherwise: (schema) => schema.notRequired(),
        }),
        rightStopTime: Yup.string().when("rightSide", {
            is: true,
            then: (schema) => schema.required("Stop time required when right side is selected"),
            otherwise: (schema) => schema.notRequired(),
        }),
        leftSidePosition: Yup.array().of(Yup.string()).nullable(),
        rightSidePosition: Yup.array().of(Yup.string()).nullable(),
        nippleShape: Yup.string(),
        nippleColoring: Yup.string(),
        isHardSpot: Yup.boolean(),
        isBreastRedness: Yup.boolean(),
        isBreastSoft: Yup.boolean(),
        isBreastPain: Yup.boolean(),
        maternalNotes: Yup.string(),
        isClickingPresent: Yup.boolean(),
        isInfantSputtering: Yup.boolean(),
        isActiveFeeding: Yup.boolean(),
        isInfantSleepy: Yup.boolean(),
        infantFeedingCues: Yup.array().of(Yup.string()),   
        infantNotes: Yup.string(), 
        sessionNotes: Yup.string()
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
          await submitNursingEntry(values); 
          alert("Nursing Entry has been submitted!"); 
          resetForm();
        } catch (error) {
          alert("Something went wrong. Please try again:", error);
        }
      };


  return (
    <div className={styles.formContainerLogs}> 
        <Paper square={false} elevation={24}>
            <Card className={styles.formCard}>    
                <Formik
                initialValues={{
                    date: "",
                    leftSide: false,
                    leftStartTime: "",
                    leftStopTime: "",
                    rightSide: false, 
                    rightStartTime: "",
                    rightStopTime: "",
                    leftSidePositions: [],
                    rightSidePositions: [],
                    nippleShape: "",
                    nippleColoring: "",
                    isHardSpot: false,
                    isBreastRedness: false, 
                    isBreastSoft: false,
                    isBreastPain: false,
                    maternalNotes: "",
                    isClickingPresent: false, 
                    isInfantSputtering: false, 
                    isActiveFeeding: false,
                    isInfantSleepy: false,
                    infantFeedingCues: [],
                    infantNotes: "",
                    sessionNotes: "",

                }}
                validationSchema={FeedingLogSchema}
                onSubmit={ handleSubmit }
                >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue, resetForm }) => (
                    
                    <form onSubmit={handleSubmit}>
                        <p className="form-header">Nursing Log Entry</p>

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


                        
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.leftSide}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("leftSide", e.target.checked);
                                }}
                                name="leftSide"
                                color="primary"
                            />
                            }
                            label="Fed on Left Side?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.leftSide && (                              
                        <Box>         
                            <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                                <TextField
                                fullWidth
                                label="Start Time"
                                type="time"
                                variant="outlined"
                                value={values.leftStartTime}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="leftStartTime"
                                error={touched.leftStartTime && Boolean(errors.leftStartTime)}
                                helperText={touched.leftStartTime && errors.leftStartTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                                <TextField
                                fullWidth
                                label="Stop Time"
                                type="time"
                                variant="outlined"
                                value={values.leftStopTime}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="leftStopTime"
                                error={touched.leftStopTime && Boolean(errors.leftStopTime)}
                                helperText={touched.leftStopTime && errors.leftStopTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            </Box> 
                            <br />                       

                            <div className={styles.checkboxGroup}>All Nursing Positions on the Left Side</div>
                            <FieldArray
                            name="leftSidePositions"
                            render={(arrayHelpers) => (
                                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginTop: 2 }}>
                                {["Cradle", "Cross-Cradle", "Football", "Laid-Back", "Side-Lying", "Upright/Sitting", "Other"].map((pos) => (
                                    <label key={pos} style={{ display: "block" }}>
                                    <Checkbox
                                        name="leftSidePositions"
                                        value={pos}
                                        checked={values.leftSidePositions.includes(pos)}
                                        onChange={(e) => {
                                        if (e.target.checked) {
                                            arrayHelpers.push(pos);
                                        } else {
                                            arrayHelpers.remove(values.leftSidePositions.indexOf(pos));
                                        }
                                        }}
                                    />
                                    {pos.charAt(0).toUpperCase() + pos.slice(1)}
                                    </label>
                                ))}
                                </Box>
                            )}
                            />
                            {touched.rightSidePositions && errors.rightSidePositions&& (
                            <div style={{ color: "red" }}>{errors.rightSidePositions}</div>
                            )}
                        </Box>
                        )}
                        <br />



                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.rightSide}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("rightSide", e.target.checked);
                                }}
                                name="rightSide"
                                color="primary"
                            />
                            }
                            label="Fed on Right Side?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.rightSide && (                            
                        <Box>         
                            <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                                <TextField
                                fullWidth
                                label="Start Time"
                                type="time"
                                variant="outlined"
                                value={values.rightStartTime}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="rightStartTime"
                                error={touched.rightStartTime && Boolean(errors.rightStartTime)}
                                helperText={touched.rightStartTime && errors.rightStartTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                                <TextField
                                fullWidth
                                label="Stop Time"
                                type="time"
                                variant="outlined"
                                value={values.rightStopTime}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="rightStopTime"
                                error={touched.rightStopTime && Boolean(errors.rightStopTime)}
                                helperText={touched.rightStopTime && errors.rightStopTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            </Box>
                            <br />
                        
                            <div className={styles.checkboxGroup}>All Nursing Positions on the Right Side</div>
                            <FieldArray
                            name="rightSidePositions"
                            render={(arrayHelpers) => (
                                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginTop: 2 }}>
                                {["Cradle", "Cross-Cradle", "Football", "Laid-Back", "Side-Lying", "Upright/Sitting", "Other"].map((pos) => (
                                    <label key={pos} style={{ display: "block" }}>
                                    <Checkbox
                                        name="rightSidePositions"
                                        value={pos}
                                        checked={values.rightSidePositions.includes(pos)}
                                        onChange={(e) => {
                                        if (e.target.checked) {
                                            arrayHelpers.push(pos);
                                        } else {
                                            arrayHelpers.remove(values.rightSidePositions.indexOf(pos));
                                        }
                                        }}
                                    />
                                    {pos.charAt(0).toUpperCase() + pos.slice(1)}
                                    </label>
                                ))}
                                </Box>
                            )}
                            />
                            {touched.rightSidePositions && errors.rightSidePositions&& (
                            <div style={{ color: "red" }}>{errors.rightSidePositions}</div>
                            )}
                        </Box>
                        )}

                        <TextField
                            fullWidth
                            label="Nursing Session Notes"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={values.sessionNotes}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="sessionNotes"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />


                        <br />
                        <br />
                        <hr />
                        <h2>Maternal Assessment: </h2>

                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Nipple Shape (after feed)</InputLabel>
                                <Select
                                    label="Nipple Shape"
                                    value={values.nippleShape}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="nippleShape"
                                >
                                    <MenuItem value="normal">No Nipple Change</MenuItem>
                                    <MenuItem value="flat">Flat Nipples</MenuItem>
                                    <MenuItem value="lipstick">Lip Stick/Wedged Nipples</MenuItem>
                                    <MenuItem value="ridged">Ridged Nipples</MenuItem>                                 
                                </Select>
                            </FormControl>                  

                            <FormControl fullWidth style={{ marginTop: '20px' }}>
                                <InputLabel>Nipple Coloring (after feed)</InputLabel>
                                <Select
                                    label="Nipple Coloring"
                                    value={values.nippleColoring}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="nippleColoring"
                                >
                                    <MenuItem value="normal">No Color Changes</MenuItem>
                                    <MenuItem value="red">Red Nipple Coloring</MenuItem>
                                    <MenuItem value="blueish">Blue Nipple Coloring</MenuItem>
                                    <MenuItem value="white">White Nipple Coloring</MenuItem>
                                </Select>
                            </FormControl>    
                        </Box>      

                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={values.isHardSpot}
                                    onChange={(e) => {
                                        handleChange(e);                                        
                                        setFieldValue("isHardSpot", e.target.checked);
                                    }}
                                    name="isHardSpot"
                                    color="primary"
                                />
                                }
                                label="Notice Hard Spots/Lumps on Breast?"
                                style={{ marginTop: '20px' }}
                            /> 

                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={values.isBreastRedness}
                                    onChange={(e) => {
                                        handleChange(e);                                        
                                        setFieldValue("isBreastRedness", e.target.checked);
                                    }}
                                    name="isBreastRedness"
                                    color="primary"
                                />
                                }
                                label="Any Signs of Breast Redness?"
                                style={{ marginTop: '20px' }}
                                />
                        </Box>            

                        <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={values.isBreastSoft}
                                    onChange={(e) => {
                                        handleChange(e);                                        
                                        setFieldValue("isBreastSoft", e.target.checked);
                                    }}
                                    name="isBreastSoft"
                                    color="primary"
                                />
                                }
                                label="Do Breast Feel Softer After Feed?"
                                style={{ marginTop: '20px' }}
                            /> 

                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={values.isBreastPain}
                                    onChange={(e) => {
                                        handleChange(e);                                        
                                        setFieldValue("isBreastPain", e.target.checked);
                                    }}
                                    name="isBreastPain"
                                    color="primary"
                                />
                                }
                                label="Any Pain During or After Feed?"
                                style={{ marginTop: '20px' }}
                                />
                        </Box> 

                        <br />

                        <TextField
                            fullWidth
                            label="Maternal Notes"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={values.maternalNotes}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="maternalNotes"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />

                        <br />
                        <br />
                        <hr />
                        <h2>Infant Assessment: </h2>

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.isClickingPresent}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isClickingPresent", e.target.checked);
                                }}
                                name="isClickingPresent"
                                color="primary"
                            />
                            }
                            label="Notice Any Infant Clicking Noises?"
                            style={{ marginTop: '20px' }}
                        />

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.isInfantSputtering}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isInfantSputtering", e.target.checked);
                                }}
                                name="isInfantSputtering"
                                color="primary"
                            />
                            }
                            label="Notice Infant Sputtering?"
                            style={{ marginTop: '20px' }}
                        />

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.isActiveFeeding}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isActiveFeeding", e.target.checked);
                                }}
                                name="isActiveFeeding"
                                color="primary"
                            />
                            }
                            label="Was Infant Actively Feeding?"
                            style={{ marginTop: '20px' }}
                        />

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.isInfantSleepy}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isInfantSleepy", e.target.checked);
                                }}
                                name="isInfantSleepy"
                                color="primary"
                            />
                            }
                            label="Was Infant Sleepy During Feed?"
                            style={{ marginTop: '20px' }}
                        />
                        <br />
                        <br />
                        <br />

                        <div className={styles.checkboxGroup}>Signs of Infant Satiety:</div>
                            <FieldArray
                            name="infantFeedingCues"
                            render={(arrayHelpers) => (
                                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginTop: 2 }}>
                                {["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4", "placeholder 5", "placeholder 6"].map((pos) => (
                                    <label key={pos} style={{ display: "block" }}>
                                    <Checkbox
                                        name="infantFeedingCues"
                                        value={pos}
                                        checked={values.infantFeedingCues.includes(pos)}
                                        onChange={(e) => {
                                        if (e.target.checked) {
                                            arrayHelpers.push(pos);
                                        } else {
                                            arrayHelpers.remove(values.infantFeedingCues.indexOf(pos));
                                        }
                                        }}
                                    />
                                    {pos.charAt(0).toUpperCase() + pos.slice(1)}
                                    </label>
                                ))}
                                </Box>
                            )}
                            />

                            <TextField
                            fullWidth
                            label="Infant Notes"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={values.infantNotes}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="infantNotes"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />                        
                       
                    
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

export default NursingLogForm;