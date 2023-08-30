import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchData from './apiCalls';

const App = () => {
  // const [users, setAllUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState("")
  const [userApps, setUserApps] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetchData(`users`)
      .then(data => {
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
        {/* </main> */}
        {/* } */}
      </>
    </div >
  );
}

export default App;
