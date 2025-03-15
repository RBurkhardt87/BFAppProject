import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FeedingLogForm from '../components/Forms/FeedingLogForm';

const FeedingLog = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Common Feeding Patterns for Infants</h2>
      <p>Create a table that outlines common Feeding patterns for specific ages within the first year</p>

      <p>Outline what to look for in infant feeding/nursing sessions. Signs of satiety </p>
      <p>Give full definitions drop down menu options so parents better understand the dropdown menus</p>
      <p>Give any info parents may need to fill out the form more accurately.</p>
      <p>Give a brief outline of what each category in form in for and how it can contribute to understanding if infant is getting enough to eat</p>
      <p>Maybe have a resource link infant feeding patters and different nursing positions</p>
      <p>Maybe have a section that covers warning signs to help with Breastfeeding management</p>
      <p>Have a link to paced bottle feeding for supporting breastfeeding babies while bottle feeding</p>

      
      <Button variant="contained" color="primary" onClick={handleOpen}>
        + Add Feeding Log Entry
      </Button>
      <br/>
      <br />
      

      
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          Log Feeding Entry
          <IconButton 
            aria-label="close" 
            onClick={handleClose} 
            style={{ position: 'absolute', right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <FeedingLogForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeedingLog