import React from 'react';

type InputProps = {
    value : string,
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handleChange} : InputProps) => {
  return (
    <input type="text" defaultValue={value} onChange={handleChange}/>
  )
}

export default Input