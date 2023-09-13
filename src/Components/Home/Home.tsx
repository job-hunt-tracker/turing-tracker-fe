import React from "react"
import Applications from "../Applications/Applications"

type HomeProps = {
  userInfo: object,
  apps: object[]

}

const Home = (userInfo: HomeProps) => {
  console.log("okokokok", userInfo.userInfo)
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
      <Applications apps={userInfo.apps} />
    </main>
  )
}

export default Home;