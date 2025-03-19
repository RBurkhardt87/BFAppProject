import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, Paper, Card } from '@mui/material';
import TextField from '../Forms/TextField';
import styles from '../../styling/FormStyling.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const DiaperLogForm = () => {

  const DiaperLogSchema = Yup.object().shape({
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    pooped: Yup.boolean(),
    poopType: Yup.string().when("pooped", {
        is: true,
        then: Yup.string(),
    }),
    poopAmount: Yup.string().when("pooped", {
        is: true,
        then: Yup.string(),
    }),
    urinated: Yup.boolean(),
    urineType: Yup.string().when("urinated", {
        is: true,
        then: Yup.string(),
    }),
    urineAmount: Yup.string().when("urinated", {
        is: true,
        then: Yup.string(),
    }), 
    blowout: Yup.boolean(),
    diaperSize: Yup.string().when("blowout", {
        is: true,
        then: Yup.string(),
    }),
    diaperBrand: Yup.string().when("blowout", {
        is: true, 
        then: Yup.string(),       
    }),
    diaperRash: Yup.boolean(),
    rashSigns: Yup.string().when("diaperRash", {
        is: true,
        then: Yup.string(),
    }),
    note: Yup.string(),
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
                    poopType: "",
                    blowout: false, 
                    diaperSize: "",
                    diaperBrand: "",
                    diaperRash: false,
                    rashSigns: "",
                    notes: ""
                }}
                validationSchema={DiaperLogSchema}
                onSubmit={(values) => {
                    console.log("Form Data Submitted:", values);  
                }}
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
                                        <MenuItem value="lightPee">Lightly Soiled</MenuItem>
                                        <MenuItem value="moderatePee">Moderately Soiled</MenuItem>
                                        <MenuItem value="heavyPee">Heavily Soiled</MenuItem>
                                    </Select>
                                </FormControl>  
                            </Box>                   
                        )}


                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={values.blowout}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("blowout", e.target.checked);
                                }}
                                name="blowout"
                                color="primary"
                            />
                            }
                            label="Diaper Blowout?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.blowout && (
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
                                checked={values.diaperRash}
                                onChange={(e) => {
                                    handleChange(e);                                        
                                    setFieldValue("diaperRash", e.target.checked);
                                }}
                                name="diaperRash"
                                color="primary"
                            />
                            }
                            label="Diaper Rash Present?"
                            style={{ marginTop: '20px' }}
                        />

                        {values.diaperRash && (
                            
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