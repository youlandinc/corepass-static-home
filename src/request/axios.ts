import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 60000,
})

service.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error),
)

export const { get, post, put, delete: del } = service
