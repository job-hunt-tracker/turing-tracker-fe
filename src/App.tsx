import React, { useState, useEffect, FunctionComponent } from 'react';
import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';
import fetchData from './apiCalls';
import Home from './Components/Home/Home';
import AppDialog from './dialogs/AppDialog';
import useDialog from './dialogs/dialogHooks';

type userInfoProps = {
  email: string, id: number, fname: string, lname: string, role: string, apps: object[]
}

const App: FunctionComponent = () => {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [userApps, setUserApps] = useState([])
  const [userData, setUserData] = useState<userInfoProps>({ email: "", id: 0, fname: "", lname: "", role: "", apps: [] })

  const [error, setError] = useState("")
  const { openDialog } = useDialog();

  useEffect(() => {
    //this is a random user's info chosen until login functionality is created
    fetchData(`users/2`)
      .then(data => {
        setUserData(data[0])
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
        <AppDialog />

      </>
    </div >
  )
}

// function App() {
//   const { openDialog } = useDialog();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <Button variant="outlined" color="primary" onClick={() => openDialog('new')}>
//           Open New App Dialog
//         </Button>
//         <Button variant="outlined" color="primary" onClick={() => openDialog('details')}>
//           Open App Details Dialog
//         </Button>
//         <AppDialog />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
