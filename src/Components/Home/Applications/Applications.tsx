import React, { FunctionComponent } from "react";
import { FaTrashAlt } from "react-icons/fa"
import "./Applications.css"

interface AppProps {
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
  return (
    <main className="gridContainer">
      <table>
        <tbody>
          <tr className="tableHeader">
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
                <td><button><FaTrashAlt /></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main >
  )
}

export default Applications;