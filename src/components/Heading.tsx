import React from 'react'

type PropsChildren = {
    children : string
}


const Heading = ({children} : PropsChildren) => {
  return (
    <div>{children}</div>
  )
}

export default Heading