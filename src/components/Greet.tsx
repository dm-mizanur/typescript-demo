type GreetProps = {
    me : string
}

export const Greet = (props : GreetProps)=>{
    return (
        <div>
            <h2>Welcome {props.me}!</h2>
        </div>
    )
}