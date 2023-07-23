import { useContext, useState } from "react"
import { toast } from "react-toastify";
import {AuthProviderKey, AuthContext} from "../Context/AuthContext";
export default function SignUp(){
   // const {signUpHandler} = useContext(AuthProviderKey)
    const {signUpHandler} = AuthContext()
    const [userSignUpDetails, setUserSignUpDetails] =  useState({firstname : "", lastname: "", email : "", password : "", confirmpassword: "" })
    const setInputHandler = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUserSignUpDetails((userSignUpDetails) => ( {...userSignUpDetails, [e.target.name] : e.target.value}))
    }
    const submitHandler = () => {
        const {firstname, lastname, email, password, confirmpassword} = userSignUpDetails
if (firstname.length <=0 || lastname.length <=0 || email.length <=0 || password.length <=0 || confirmpassword.length <=0){
toast("Please fill the details")
}
else{
    
    signUpHandler(userSignUpDetails)
}
    }
    const prevendata = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={prevendata}>
        <div>
            <input required placeholder="First Name" type = "text" name = "firstname" onChange={setInputHandler} /> 
            <input required placeholder="Last Name" type =  "text" name = "lastname" onChange={setInputHandler} />
            <input required placeholder="E-mail" type =  "text" name = "email" onChange={setInputHandler} />
            <input required placeholder="Password" type =  "password" name = "password" onChange={setInputHandler} />
            <input required placeholder="Confirm Password" type =  "password" name = "confirmpassword" onChange={setInputHandler} />
        </div>
        <button type="submit" id="submitBtn" className="submitBtn" onClick = {submitHandler}>submit</button>
        </form>
    )
}