import React, { FunctionComponent } from 'react';
import { AppBar, Button, Toolbar, Link } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import Logo from './Logo/Logo';
import { ThemeButton } from './ThemeButton/ThemeButton';

const AppToolbar: FunctionComponent = () => {
  const me = null;

  return (
    <AppBar
    sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, padding: "0 24px", mb: 2}}
    elevation={1}
    >
      <Toolbar>
        <Link 
          href="/" 
          variant="h6"
          color="inherit" 
          underline="none">
          <Logo />
        </Link>
        <span style={{ flexGrow: 1 }} />
        {me !== undefined && <ThemeButton sx={{ mr: 1 }} />}
        {me === null && (
          <Button
            variant="text"
            href="/login"
            color="inherit"
          >
            Log in
          </Button>
        )}
        {me === null && (
          <Button
            variant="outlined"
            href="/register"
            color="inherit"
          >
            Create an account
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;