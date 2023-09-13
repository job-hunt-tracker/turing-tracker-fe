import React, { useState, useEffect, FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchData from './apiCalls';
import Home from './Components/Home/Home';

type userInfoProps = {
  // userData: any
}

const App: FunctionComponent<userInfoProps> = () => {
  // const [users, setAllUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState("")
  const [userApps, setUserApps] = useState([])
  const [userData, setUserData] = useState<{ email: string, id: number, fname: string, lname: string, role: string, apps: object[] }>({ email: "gfd", id: 0, fname: "", lname: "", role: "", apps: [] })
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
        {/* {error ? <h1>{error}</h1> : */}
        {/* <main> */}
        {/* <h1>Welcome Users! {loggedInUser}</h1> */}
        <h2>Here are your applications: </h2>
        {userApps.map((application: any) => {
          // const companys = application.data.attributes.company
          // const statuses = application.data.attributes.status
          // const positions = application.data.attributes.position
          // console.log("companys", companys)
          // return < li > {companys} , {statuses} , {positions} </li>
        })
        }
        <Home userInfo={userData} />
        {/* </main> */}
        {/* } */}
      </>
    </div >
  );
}

export default App;
