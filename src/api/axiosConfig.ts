import axios from 'axios'

const baseURL = 'https://localhost:8443/api' // Adjust this according to your backend API base URL

const api = axios.create({
  baseURL: baseURL,
  timeout: 5000 // Adjust timeout as needed
})

export default api
