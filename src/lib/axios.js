import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    "Accept": "application/json",
  },
  withCredentials: true
})

export default axios
