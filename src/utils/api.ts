import axios from 'axios'
console

export const baseURL = "http://localhost:8080"

export const api = axios.create({
  baseURL,

})