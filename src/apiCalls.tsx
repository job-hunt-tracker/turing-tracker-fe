import { Dayjs } from 'dayjs'

interface NewApp {
  position: string;
  company: string;
  location: string;
  created: Dayjs | null;
  referrals: string;
  status: string;
  notes: string;
}

function fetchData(path: string) {
  // return fetch(`https://turing-tracker-api-23a52cd510ed.herokuapp.com/api/v1/${path}`)
  return fetch(`http://localhost:5000/api/v1/${path}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`An error occured: Status ${response.status}`)
      }
    })
}

export default fetchData;

export const postNewApplication = (newApp: NewApp, userId: number) => {
  return fetch(`http://localhost:5000/api/v1/users/${userId}/apps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newApp)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`An error occured: Status ${response.status}`)
      }
    })
}

export const deleteApplication = (appId: number) => {
  return fetch(`http://localhost:5000/api/v1/apps/${appId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appId)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`An error occurred: Status ${response.status}`)
      }
    })
}
