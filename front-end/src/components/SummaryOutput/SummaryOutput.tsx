import React from 'react'

interface SummaryOutputProps {
  summary: string
}

const SummaryOutput: React.FC<SummaryOutputProps> = ({ summary }) => {
  return (
    <div className='summary-output'>
      <h3>Tóm tắt</h3>
      <p>{summary}</p>
    </div>
  )
}

export default SummaryOutput
