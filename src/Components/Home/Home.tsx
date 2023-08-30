import React from "react"
import Applications from "../Applications/Applications"

type HomeProps = {
  userInfo: any
}

const Home = (userInfo: HomeProps) => {
  console.log("okokokok", userInfo.userInfo)
  return (
    // <h1>Heeyyy I'm home</h1>
    <Applications apps={userInfo.userInfo} />
  )
}

export default Home;