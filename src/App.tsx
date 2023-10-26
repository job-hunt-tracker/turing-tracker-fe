import React, { useState, useEffect, FunctionComponent } from 'react';
// import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';
import fetchData from './apiCalls';
import Home from './Components/Home/Home';
import AppDialog from './dialogs/AppDialog';
import AppDetailsDialog from './dialogs/AppDetailsDialog';
import useDialog from './dialogs/dialogHooks';
import { userState } from './atoms';
import { useSetRecoilState } from 'recoil';

type userInfoProps = {
  email: string, id: number, fname: string, lname: string, role: string, apps: object[]
}

const App: FunctionComponent = () => {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [userApps, setUserApps] = useState([])
  const [userData, setUserData] = useState<userInfoProps>({ email: "", id: 0, fname: "", lname: "", role: "", apps: [] })
  const [error, setError] = useState("")
  const { type, openDialog, closeDialog } = useDialog();
  const setUserInfo = useSetRecoilState(userState)

  useEffect(() => {
    //this is a random user's info chosen until login functionality is created
    fetchData(`users/2`)
      .then(data => {
        setUserData(data[0])
        setUserInfo(data[0])
        console.log("working")
        const userEmail = data[0].email
        setLoggedInUser(userEmail)
        setUserApps(data[0].apps)
      })
      .catch(error => {
        setError(error)
      })
  }, [loggedInUser])

  return (
    <div className="App">
      <>

        <Home userInfo={userData} />
        <Button variant="outlined" color="primary" onClick={() => openDialog('new')}>
          Open New App Dialog
        </Button>
        <Button variant="outlined" color="primary" onClick={() => openDialog('details')}>
          Open App Details Dialog
        </Button>
        { type === 'new' && <AppDialog userId={userData.id} closeDialog={closeDialog} /> }
        { type === 'details' && <AppDetailsDialog appId={1} closeDialog={closeDialog} /> }

      </>
    </div >
  )
}

export default App;
