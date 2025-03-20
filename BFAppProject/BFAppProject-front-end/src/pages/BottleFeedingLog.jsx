import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DiaperLogForm from '../components/Forms/DiaperLogForm';

const BottleFeedingLog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <h2>Paced Bottle Feeding: bottle feeding that supports breastfeeding</h2>

  
        
        <Button variant="contained" color="primary" onClick={handleOpen}>
          + Add Bottle Feed Log Entry
        </Button>
        <br />
        <br />
  
        
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>
            Log Bottle Feed Entry
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

export default BottleFeedingLog
