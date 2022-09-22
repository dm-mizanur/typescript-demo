import React from 'react'

type PropsChildren = {
    children : string
}


const Heading = (props : PropsChildren) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading