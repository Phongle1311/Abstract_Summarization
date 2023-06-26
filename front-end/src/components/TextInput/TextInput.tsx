import React, { ChangeEvent } from 'react'

interface TextInputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return <textarea className='text-input' placeholder='Nhập văn bản cần tóm tắt...' value={value} onChange={onChange} />
}

export default TextInput
