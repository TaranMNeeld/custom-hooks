import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'localhost:8000',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  })
}
