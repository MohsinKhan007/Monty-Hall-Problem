import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

export default API
