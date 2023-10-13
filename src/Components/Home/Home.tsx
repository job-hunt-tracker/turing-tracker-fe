import React, { FunctionComponent } from "react"
import Applications from "../Applications/Applications"

type HomePropsInfo = {
  email: string, id: number, fname: string, lname: string, role: string, apps: any
}
interface HomeProps {
  userInfo: HomePropsInfo
}


const Home: FunctionComponent<HomeProps> = ({ userInfo }): JSX.Element => {
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
    </main>
  )
}

export default Home;