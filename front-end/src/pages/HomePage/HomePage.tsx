import React, { useState, ChangeEvent } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import SummaryOutput from '../../components/SummaryOutput/SummaryOutput'
import { summarizeText } from '../../services/api'

const Home: React.FC = () => {
  const [text, setText] = useState('')
  const [summary, setSummary] = useState('')

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleSummarize = async () => {
    try {
      const response = await summarizeText(text)
      setSummary(response.data.summary)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='home'>
      <h2>Tóm tắt văn bản</h2>
      <TextInput value={text} onChange={handleTextChange} />
      <button onClick={handleSummarize}>Tóm tắt</button>
      {summary && <SummaryOutput summary={summary} />}
    </div>
  )
}

export default Home
