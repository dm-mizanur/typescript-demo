import React from 'react';

type ContainerStylesProps = {
    styles : React.CSSProperties
}

const Container = (props: ContainerStylesProps) => {
  return (
    <div style={props.styles}>Container</div>
  )
}

export default Container