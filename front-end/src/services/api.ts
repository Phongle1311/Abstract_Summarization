import axios from 'axios'

const BASE_URL = 'http://localhost:5000' // URL of the Flask server

export const summarizeText = async (text: string) => {
  const response = await axios.post(`${BASE_URL}/api/summarize`, { text })
  return response.data
}
