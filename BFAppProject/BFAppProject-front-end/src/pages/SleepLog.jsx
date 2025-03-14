import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SleepLogForm from '../components/Forms/SleepLogForm'


const SleepLog = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Common Sleep Patterns for Infants</h2>
      <p>Create a table that outlines common sleeping patterns for specific ages within the first year</p>

      <p>Outline what to look for in infant sleep</p>
      <p>Give full definitions on Mood & Sleep Quality so parents better understand the dropdown menus</p>
      <p>Give any info parents may need to fill out the form more accurately.</p>
      <p>Give a brief outline of what each category in form in for and how it can contribute to predicting and understanding infant sleeping patterns</p>
      <p>Maybe have a resource link to co-sleeping safely and other sleeping guidelines</p>

      
      <Button variant="contained" color="primary" onClick={handleOpen}>
        + Add Sleep Log Entry
      </Button>

      
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          Log Sleep Entry
          <IconButton 
            aria-label="close" 
            onClick={handleClose} 
            style={{ position: 'absolute', right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <SleepLogForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};


export default SleepLog
