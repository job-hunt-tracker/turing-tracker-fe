import React, { FunctionComponent, useState, useEffect } from "react"
import Applications from "./Applications/Applications"
import AppDialog from '../../dialogs/AppDialog';
import AppDetailsDialog from '../../dialogs/AppDetailsDialog';
import useDialog from '../../dialogs/dialogHooks';
import { userState } from '../../atoms';
import { useRecoilValue } from 'recoil';
import { Button } from "@mui/material";

const Home: FunctionComponent = (): JSX.Element => {
  const { type, openDialog, closeDialog } = useDialog();
  const userInfo = useRecoilValue(userState)

  return (
    <main>
      <div>
        <p>logo location</p>
      </div>
      <div>
        <button>filter</button>
        <button>add new application</button>
        <input type="text" placeholder='Search...'></input>
      </div>
      <Applications appInfo={userInfo.apps} />
      <Button variant="outlined" color="primary" onClick={() => openDialog('new')}>
        Open New App Dialog
      </Button>
      <Button variant="outlined" color="primary" onClick={() => openDialog('details')}>
        Open App Details Dialog
      </Button>
      { type === 'new' && <AppDialog userId={userInfo.id} closeDialog={closeDialog} /> }
      { type === 'details' && <AppDetailsDialog appId={1} closeDialog={closeDialog} /> }
    </main>
  )
}

export default Home;