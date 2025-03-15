import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DiaperLogForm from '../components/Forms/DiaperLogForm';

const DiaperLog = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Common Diaper/Output Patterns for Infants</h2>
      <p>Create a table that outlines common output patterns for specific ages within the first year</p>

      <p>Outline what to look for in infant outputs</p>
      <p>Give full definitions on variations of stool so parents better understand the dropdown menus</p>
      <p>Give any info parents may need to fill out the form more accurately.</p>
      <p>Give a brief outline of what each category in form in for and how it can contribute to understanding if infant is getting enough to eat</p>
      <p>Maybe have a resource link to a site with pics of different stools so parents. Or add the pics in a table with description and names</p>

      
      <Button variant="contained" color="primary" onClick={handleOpen}>
        + Add Diaper Log Entry
      </Button>
      <br />
      <br />

      
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          Log Diaper Entry
          <IconButton 
            aria-label="close" 
            onClick={handleClose} 
            style={{ position: 'absolute', right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <DiaperLogForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DiaperLog