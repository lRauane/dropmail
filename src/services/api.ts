import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proxy.cors.sh/https://dropmail.me/api/graphql',
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'x-cors-api-key': process.env.NEXT_PUBLIC_URL_API
  }
})

export default api