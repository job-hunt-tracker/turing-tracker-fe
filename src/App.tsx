import React, { useState, useEffect, FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchData from './apiCalls';
import Home from './Components/Home/Home';

type userInfoProps = {
  // userData: any,
  // userApps: any
  email: string, id: number, fname: string, lname: string, role: string, apps: object[]
}
// interface userProps {
//   user: userInfoProps
// }

const App: FunctionComponent = () => {
  // const [users, setAllUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState("")
  const [userApps, setUserApps] = useState([])
  const [userData, setUserData] = useState<userInfoProps>({ email: "", id: 0, fname: "", lname: "", role: "", apps: [] })
  // const [userData, setUserData] = useState<{ email: string, id: number, fname: string, lname: string, role: string, apps: object[] }>({ email: "gfd", id: 0, fname: "", lname: "", role: "", apps: [] })

  const [error, setError] = useState("")

  useEffect(() => {
    //this is a random user's info chosen until login functionality is created
    fetchData(`users/2`)
      .then(data => {
        // console.log("data", data)
        setUserData(data[0])
        console.log("look right here right here yes", userData)
        const userEmail = data[0].email
        setLoggedInUser(userEmail)
        setUserApps(data[0].apps)
        console.log("apps", userApps)
      })
      .catch(error => {
        // setLoading(false)
        setError(error)
      })
  }, [loggedInUser])

  return (
    <div className="App">
      <>

        <Home userInfo={userData} />

      </>
    </div >
  );
}

export default App;
