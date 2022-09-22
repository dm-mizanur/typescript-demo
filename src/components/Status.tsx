import React from 'react'

type StatusProps = {
  status : 'loading' | 'success' | 'error'
}

const Status = (props : StatusProps) => {
  let message;
  if(props.status === "loading"){
    message = 'Loading'
  }else if (props.status === 'success'){
    message = 'Data fetch successfully'
  }else if(props.status === 'error'){
    message = "Error fetching data"
  }
  return (
    <div>
          <h2>{props.status}</h2>
    </div>
  )
}

export default Status