import React from 'react'

type ButtonProps = {
    handleButtonClick : (event : React.MouseEvent<HTMLButtonElement>, id :  number) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event)=>props.handleButtonClick(event, 1)}>Button</button>
  )
}

export default Button