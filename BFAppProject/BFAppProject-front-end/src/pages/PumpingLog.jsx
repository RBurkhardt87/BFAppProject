import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DiaperLogForm from '../components/Forms/DiaperLogForm';

const PumpingLog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <h2>Guide to Pumping </h2>

  
        
        <Button variant="contained" color="primary" onClick={handleOpen}>
          + Add Pumping Log Entry
        </Button>
        <br />
        <br />
  
        
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>
            Log Pumping Entry
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
}

export default PumpingLog
