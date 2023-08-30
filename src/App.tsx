import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchData from './apiCalls';
import Home from './Components/Home/Home';

type userInfoProps = []

const App = () => {
  // const [users, setAllUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState("")
  const [userApps, setUserApps] = useState([])
  const [userData, setUserData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    //this is a random user's info chosen until login functionality is created
    fetchData(`users/2`)
      .then(data => {
        console.log("data", data)
        setUserData(data)
        console.log("look right here", userData)
        const userEmail = data.data.attributes.email
        setLoggedInUser(userEmail)
        setUserApps(data.data.attributes.apps)
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
        <h1>Welcome Users! {loggedInUser}</h1>
        <h2>Here are your applications: </h2>
        {userApps.map((application: any) => {
          const companys = application.data.attributes.company
          const statuses = application.data.attributes.status
          const positions = application.data.attributes.position
          console.log("companys", companys)
          // return < li > {companys} , {statuses} , {positions} </li>
        })
        }
        <Home userInfo={userData[0]} />
        {/* </main> */}
        {/* } */}
      </>
    </div >
  );
}

export default App;
