import React from "react";

type ApplicationsProps = any
type AppProps = {
  company: string,
  created: string,
  location: string,
  notes: string,
  position: string,
  referrals: string,
  status: string,
  updated: string
}
const Applications = (appInfo: ApplicationsProps) => {
  console.log(appInfo)
  return (
    <main className="gridContainer">
      <ul>
        <li>Job Title</li>
        <li>Company</li>
        <li>Location</li>
        <li>Status</li>
        <li>Date</li>
        <li>Job Title</li>
        {appInfo.apps.apps.map((application: AppProps) => {
          return (<div>
            <h1>Company:{application.company}</h1>
            <h1>Created:{application.created}</h1>
            <h1>Location:{application.location}</h1>
            <h1>Notes:{application.notes}</h1>
            <h1>Position:{application.position}</h1>
            <h1>Referrals:{application.referrals}</h1>
            <h1>Status:{application.status}</h1>
            <h1>Updated:{application.updated}</h1>
          </div>)

        }
        )}
      </ul>
    </main>
  )
}

export default Applications;