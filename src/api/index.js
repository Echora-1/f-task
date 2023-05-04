import axios from 'axios'

const ACCESS_KEY = 'UIxNxIxFv9cLCQAR_JLRjw5tLS0nxA4xIf0eFPPtE-A'

export const instanceApi = axios.create({
  baseURL: 'https://api.unsplash.com/photos/',
  headers: { 'Accept-Version': 'v1', Authorization: `Client-ID ${ACCESS_KEY}` }
})
