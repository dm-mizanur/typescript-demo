import React from 'react'

type StatusProps = {
  status : 'loading' | 'success' | 'error'
}

const Status = ({status} : StatusProps) => {
  let message;
  if(status === "loading"){
    message = 'Loading'
  }else if (status === 'success'){
    message = 'Data fetch successfully'
  }else if(status === 'error'){
    message = "Error fetching data"
  }
  return (
    <div>
          <h2>{status}</h2>
    </div>
  )
}

export default Status