import React from 'react';
import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';
import AppDialog from './dialogs/AppDialog';
import useDialog from './dialogs/dialogHooks';

function App() {
  const { openDialog } = useDialog();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="outlined" color="primary" onClick={() => openDialog('new')}>
          Open New App Dialog
        </Button>
        <Button variant="outlined" color="primary" onClick={() => openDialog('details')}>
          Open App Details Dialog
        </Button>
        <AppDialog />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
