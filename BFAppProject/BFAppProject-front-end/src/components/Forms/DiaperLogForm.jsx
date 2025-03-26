import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, Paper, Card } from '@mui/material';
import TextField from '../Forms/TextField';
import styles from '../../styling/FormStyling.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { submitDiaperEntry } from '../../services/DiaperLogService';

const DiaperLogForm = () => {

  const DiaperLogSchema = Yup.object().shape({
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    isPooped: Yup.boolean(),
    stoolType: Yup.string(),
    stoolAmount: Yup.string(),
    isUrinated: Yup.boolean(),
    urineType: Yup.string(),
    urineAmount: Yup.string(),
    isBlowout: Yup.boolean(),
    diaperSize: Yup.string(),
    diaperBrand: Yup.string(),
    isDiaperRash: Yup.boolean(),
    rashSigns: Yup.string(),
    note: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await submitDiaperEntry(values); 
      alert("Diaper Entry has been submitted!"); 
      resetForm();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.formContainerLogs}> 
        <Paper square={false} elevation={24}>
            <Card className={styles.formCard}>    
                <Formik
                initialValues={{
                    date: "",
                    time: "",
                    isPooped: false,
                    stoolType: "",
                    stoolAmount: "",
                    isUrinated: false,
                    urineType: "",
                    urineAmount: "",
                    isBlowout: false, 
                    diaperSize: "",
                    diaperBrand: "",
                    isDiaperRash: false,
                    rashSigns: "",
                    notes: ""
                }}
                validationSchema={DiaperLogSchema}
                onSubmit={handleSubmit}
                >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue, resetForm }) => (
                    
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
                                checked={values.isPooped}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isPooped", e.target.checked);
                                }}
                                name="isPooped"
                                color="primary"
                            />
                            }
                            label="Infant Pooped?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.isPooped && (
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
                                    <MenuItem value="meconium" title="black, tar-like; newborns">Meconium</MenuItem>
                                    <MenuItem value="greenish" title="Transitional stool, often a mix of brown and green, typical of newborns">Greenish</MenuItem>
                                    <MenuItem value="mustardYellow" title="Seedy and soft in texture. Light yellowish-brown in color">Mustard Yellow</MenuItem>
                                    <MenuItem value="brown" title="smooth and often similar to adult stool. Normal for formula-fed babies">Brown</MenuItem>
                                    <MenuItem value="green" title="Pasty or grainy texture with a green hue">Green</MenuItem>
                                    <MenuItem value="mucuosy" title="May look like lettuce or slimy"> Stool</MenuItem>
                                    <MenuItem value="pellet" title="Small, firm stool. Pellet-like">Hard/Pellet-like</MenuItem>
                                    <MenuItem value="watery" title="Loose, liquid stool">Watery Stool</MenuItem>
                                    <MenuItem value="bloody" title="streaks of blood in stool">Stool Contains Bloody Streaks</MenuItem>

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
                                    <MenuItem value="lightPoop">Lightly Soiled</MenuItem>
                                    <MenuItem value="moderatePoop">Moderately Soiled</MenuItem>
                                    <MenuItem value="heavyPoop">Heavily Soiled</MenuItem>
                                </Select>
                            </FormControl>    
                            </Box>                 
                        )}



                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.isUrinated}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isUrinated", e.target.checked);
                                }}
                                name="isUrinated"
                                color="primary"
                            />
                            }
                            label="Infant Urinated?"
                            style={{ marginTop: '20px' }}
                        />
                        
                        {values.isUrinated && (
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
                                        <MenuItem value="clear">Clear</MenuItem>
                                        <MenuItem value="paleYellow">Pale Yellow (Normal)</MenuItem>
                                        <MenuItem value="darkYellow">Dark Yellow</MenuItem>
                                        <MenuItem value="Orange">Orange</MenuItem>
                                        <MenuItem value="pink-tinged">Pink-tinged (uric acid crystals)</MenuItem>
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
                                        <MenuItem value="lightUrine">Lightly Soiled</MenuItem>
                                        <MenuItem value="moderateUrine">Moderately Soiled</MenuItem>
                                        <MenuItem value="heavyUrine">Heavily Soiled</MenuItem>
                                    </Select>
                                </FormControl>  
                            </Box>                   
                        )}


                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.isBlowout}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isBlowout", e.target.checked);
                                }}
                                name="isBlowout"
                                color="primary"
                            />
                            }
                            label="Diaper Blowout?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.isBlowout && (
                            <Box sx={{ display: 'flex', gap: 2, marginTop: '20px' }}>
                                <TextField
                                    fullWidth
                                    label="Diaper Size"
                                    variant="outlined"
                                    value={values.diaperSize}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="diaperSize"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Diaper Brand"
                                    variant="outlined"
                                    value={values.diaperBrand}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="diaperBrand"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Box>
                        )}


                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.isDiaperRash}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("isDiaperRash", e.target.checked);
                                }}
                                name="isDiaperRash"
                                color="primary"
                            />
                            }
                            label="Diaper Rash Present?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.isDiaperRash && (
                            
                            <TextField
                                fullWidth
                                label="Signs of Rash"
                                variant="outlined"
                                multiline
                                rows={3}
                                value={values.rashSigns}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="rashSigns"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        )}


                        <TextField
                            fullWidth
                            label="Additional Notes"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={values.notes}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="notes"
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
                <br />
            </Card>
        </Paper>
    </div>
  );
};

export default DiaperLogForm;