import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useRecoilValue } from 'recoil';
import { Dialog, DialogContent, DialogTitle, MenuItem, Button, Select, Box, FormControl, TextField, FormHelperText } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useDialog from './dialogHooks';
import { userState } from '../atoms';
import { postNewApplication } from '../apiCalls';
import './AppDialog.css'

interface AppDialogProps {
  userId: number;
  closeDialog: () => void;
}

const AppDialog: React.FC<AppDialogProps> = ({ userId, closeDialog }): JSX.Element => {
  const [title, setTitle] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [date, setDate] = useState<Dayjs | null>(null)
  const [status, setStatus] = useState<string>('')
  const [connections, setConnections] = useState<string>('')
  const [referral, setReferral] = useState<string>('')
  const [notes, setNotes] = useState<string>('')
  const [inFlight, setInFlight] = useState<boolean>(false)
  const today = dayjs()
  

  const handleSubmit = () => {
    setInFlight(true)
    const newApp = {
      position: title,
      company: company,
      location: location,
      created: date,
      status: status,
      connections: connections,
      referrals: referral,
      notes: notes
    }
    try {
      postNewApplication(newApp, userId)
        .then(data => {
          console.log(data)
          setInFlight(false)
          closeDialog()
        })
    } catch (error) {
      console.log(error)
      setInFlight(false)
    }
  }

  return (
    <Dialog open={true} onClose={closeDialog} sx={{padding: 5}}>
      <DialogTitle variant="h4" sx={{width: "100%", textAlign: "center"}}>New Application</DialogTitle>
      <DialogContent>
        <Box component="form" className="form-wrapper" sx={{display: "flex"}}>
          <FormControl className="form-col-l">
            <FormHelperText>Job Title</FormHelperText>
            <TextField
              required
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              variant="outlined" 
            />
            <FormHelperText>Company</FormHelperText>
            <TextField
              required 
              value={company}
              onChange={(event) => {
                setCompany(event.target.value);
              }}
              variant="outlined" 
            />
            <FormHelperText>Location</FormHelperText>
            <TextField
              required
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              variant="outlined" 
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormHelperText>Date Applied</FormHelperText>
              <DatePicker 
                defaultValue={today}
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </LocalizationProvider>
            <FormHelperText>Status</FormHelperText>
            <Select
              required
              variant="outlined"
              value={status}
              onChange={(event) => {
                setStatus(event.target.value as string);
              }}
            >
              <MenuItem value="pre-application">Pre-Application</MenuItem>
              <MenuItem value="applied">Applied</MenuItem>
              <MenuItem value="phone">Phone Screen</MenuItem>
              <MenuItem value="interview">Interview</MenuItem>
              <MenuItem value="offer">Offer</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="form-col-r" sx={{display: "flex"}}>
            <FormHelperText>Connections</FormHelperText>
            <TextField
              variant="outlined"
              value={connections}
              onChange={(event) => {
                setConnections(event.target.value);
              }} 
            />
            <FormHelperText>Referral</FormHelperText>
            <TextField
              variant="outlined"
              value={referral}
              onChange={(event) => {
                setReferral(event.target.value);
              }}
            />
            <FormHelperText>Notes</FormHelperText>
            <TextField
              multiline
              minRows={8}
              sx={{flexGrow: "1"}}
              variant="outlined"
              value={notes}
              onChange={(event) => {
                setNotes(event.target.value);
              }}
            />
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" sx={{width: "100%", mt: 2}} onSubmit={handleSubmit}>
            Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;