import DashBoard from "./DashBoard";
import React, {useState} from "react";
function LoginPage(props) {
    let [user,setUser]=useState('')

    const executeLogin=(event)=>{
        props.onChange(<DashBoard {...props} user={user}/>)
    }
    return(
        <div className="Login">

            <p><h1>Welcome</h1> <b>Web Qart is the one and only place where you can get right platform to advertise your product or can get suitable advertisements to publish on your magazines , newspapers , websites and many more platforms to earn some real money.If you are new click <a
                href="#">here</a> to sign up.</b>  </p>
            <div className="Logo"></div>
            <form className="form" action="">
                <h3>User login</h3>
                <label ><b>Username</b> <input type="text" value={user} onChange={event => {setUser(event.target.value)}}/></label><br/>
                <label ><b>Password</b> <input type="password"/></label><br/>
                <button className="btn btn-primary"  onClick={executeLogin}>Login</button>
            </form>
        </div>
    )
}
export default LoginPage