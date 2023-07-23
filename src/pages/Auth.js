import { useState } from "react"
import { AuthContext } from "../Context/AuthContext"

export default function Auth(){
    const [userLoginInfo, setUserLoginInfo] = useState({email : "", password : ""})
    const {loginHandler} = AuthContext()
    const userGuestData  = {email : "adarshbalika@gmail.com", password : "adarshbalika"}
    const loginDetailSetter = (e) => {
        setUserLoginInfo({...userLoginInfo, [e.target.name]: e.target.value})
    }
    const loginClickHandler = () => {

    }
    const preventData = (e) => {
        e.preventDefault()
        loginHandler(userLoginInfo)
    }
    const loginAsGuestHandler = () => {
        loginHandler(userGuestData)
    }
    return(
        <div>
        <form onSubmit={preventData}>
        <div>
            <input required type = "text" name =  "email" onChange={loginDetailSetter} placeholder="Email Address" />
            <input required type = "password" name = "password" onChange={loginDetailSetter} placeholder="password"/>
        </div>
<button onClick={loginClickHandler} type = "submit"> Submit</button>
        </form>
        <button onClick={loginAsGuestHandler}>Create a New Account ? Signup</button>
        </div>
    )
}