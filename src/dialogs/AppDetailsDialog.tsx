import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useRecoilValue } from 'recoil';
import { Dialog, DialogContent, DialogTitle, MenuItem, Button, Select, Box, FormControl, TextField, FormHelperText } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface AppDetailsDialogProps {
  appId: number;
  closeDialog: () => void;
}

const AppDetailsDialog: React.FC<AppDetailsDialogProps> = ({appId, closeDialog}) => {
  return (
    <Dialog open={true} onClose={closeDialog} sx={{padding: 5}}>
    <DialogTitle variant="h4" sx={{width: "100%", textAlign: "center"}}>Application Details</DialogTitle>
    <DialogContent>
    </DialogContent>
  </Dialog>
  )
}

export default AppDetailsDialog;