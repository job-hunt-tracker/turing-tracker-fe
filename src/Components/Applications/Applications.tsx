import React, { FunctionComponent } from "react";
import "../Applications/Applications.css"

// type ApplicationsProps = any
// type AppPropsInfo = {
//   company: string,
//   created: string,
//   location: string,
//   notes: string,
//   position: string,
//   referrals: string,
//   status: string,
//   updated: string
// }

interface AppProps {
  // appInfo: AppPropsInfo
  appInfo: {
    company: string,
    created: string,
    location: string,
    notes: string,
    position: string,
    referrals: string,
    status: string,
    updated: string
  }[]
}
const Applications: FunctionComponent<AppProps> = ({ appInfo }): JSX.Element => {
  // console.log(appInfo)
  return (
    <main className="gridContainer">
      {/* return ( */}
      <table>
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Location</th>
          <th>Status</th>
          <th>Date</th>
          <th></th>
        </tr>
        {appInfo.map((application: any, key: number) => {
          return (
            <tr key={key}>
              <td>{application.position}</td>
              <td>{application.company}</td>
              <td>{application.location}</td>
              <td>{application.status}</td>
              <td>{application.updated}</td>

            </tr>
          )
        })}
      </table>
      {/* <ul>
        <li>Job Title: {application.position}</li>
        <li>Company</li>
        <li>Location</li>
        <li>Status</li>
        <li>Date</li>
        <li>Job Title</li>

      </ul> */}
      {/* ) */}
      {/* {appInfo.apps.apps.map((application: AppProps) => { */}
      {/* return (<div>
            <h1>Company:{application.company}</h1>
            <h1>Created:{application.created}</h1>
            <h1>Location:{application.location}</h1>
            <h1>Notes:{application.notes}</h1>
            <h1>Position:{application.position}</h1>
            <h1>Referrals:{application.referrals}</h1>
            <h1>Status:{application.status}</h1>
            <h1>Updated:{application.updated}</h1>
          </div>) */}

      {/* } */}
      {/* )} */}
    </main >
  )
}

export default Applications;