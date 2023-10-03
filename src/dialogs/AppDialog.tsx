import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import useDialog from './dialogHooks';

const AppDialog: React.FC = () => {
  const { type, data, closeDialog } = useDialog();

  return (
    <Dialog open={type !== null} onClose={closeDialog}>
      <DialogTitle>{type === 'new' ? 'New Application' : 'Application Details'}</DialogTitle>
      <DialogContent>
        {type === 'new' && <div>Content for New Application</div>}
        {type === 'details' && <div>Content for Viewing Application</div>}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppDialog;