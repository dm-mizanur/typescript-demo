type GreetProps = {
    me : string,
    messageCount : number,
    isLoggedIn : boolean
}

export const Greet = (props : GreetProps)=>{
    return (
        <div>
            {
                props.isLoggedIn ? <h2>Welcome {props.me}! You have {props.messageCount} unread messages.</h2> : <p>Welcome guest</p>
            }
        </div>
    )
}