import { createContext, useContext, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
export const AuthProviderKey =  createContext()
 
const AuthProvider =  ({children}) => {
    const localStorageResponse = localStorage.getItem("loginDetails")
        //const localStorageparsed = JSON.parse(localStorageResponse)
    const [token, setToken] = useState(localStorageResponse?.token || null)

    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userInfo, setUserInfo] = useState("")
const navigate = useNavigate()
const location = useLocation()
    const loginHandler = async ({email, password}) => {
        try {
            
            const passobj =  {email, password}
            console.log(passobj)
            const sendreq =  await fetch("/api/auth/login" ,{method : "POST", headers : {'Accept' : 'application/json', 'Content-type' : 'application/json'}, body : JSON.stringify(passobj)} )
console.log(sendreq.status)
            if (sendreq.status === 200){
                console.log('print')

                const {foundUser, encodedToken} =  await sendreq.json()
                localStorage.setItem("loginDetails" , JSON.stringify({user : foundUser, token : encodedToken}))
                //const {user, token} = localStorageResponse
            setUserInfo(foundUser)
            setToken(encodedToken)
            toast("Loggedin Successfully")
            toggelSigninHandler()
            }
            else{
                toast("Your password or email address is incorrect")
            }

        } catch (error) {
            
        }
    }
//console.log(token)
    const signUpHandler = async ({firstname , lastname, email , password , confirmpassword  })  => {
//console.log(firstname)
if (password === confirmpassword){
    try {
        const passobj =  {email, password} 
        //console.log(passobj)
        const sendreq =  await fetch("/api/auth/signup", {method : "POST", headers : {'Accept' : 'application/json', 'Content-type' : 'application/json'}, body : JSON.stringify(passobj)} )
        console.log(sendreq, sendreq.status)
        
       // const reposnetest = await sendreq.json();
// console.log(reposnetest)
    if (sendreq.status === 201){
        const {createdUser, encodedToken} = await sendreq.json();
        //console.log(createdUser, encodedToken, 'dsdsdd')
        localStorage.setItem("loginDetails", JSON.stringify({user : createdUser, token : encodedToken}))

        //const localStorageResponse = localStorage.getItem("loginDetails")
        //const localStorageparsed = JSON.parse(localStorageResponse)

        //const {user, token} = JSON.parse(localStorageResponse)
        
        setToken(encodedToken)
        console.log(encodedToken)
        toast("Signed Up successfully. Please Login to continue")
        // console.log(localStorageResponse)

        // console.log(localStorageparsed)

    }
    else if (sendreq.status === 422){
        toast.error("User email already exists! Please try signing up with another email!")
    }
    } catch (error) {
        console.log(error)
    }
}
else{
    toast("Your password is not matching")
}

    }
    const logoutHandler = () => {
            setToken(null)
            setUserInfo(null)
            localStorage.removeItem("loginDetails")
            toggelSigninHandler()
            toast("logged out successfull")
            navigate("/")
    }
    const toggelSigninHandler = () => {
setIsLoggedin((isLoggedin) => !isLoggedin)
    }
    const valuetobepassed = {signUpHandler, loginHandler, token, logoutHandler, isLoggedin  }

    return (
        <AuthProviderKey.Provider value = {valuetobepassed}> {children}</AuthProviderKey.Provider>
    )
}
export default AuthProvider;

export const AuthContext = () => useContext(AuthProviderKey)