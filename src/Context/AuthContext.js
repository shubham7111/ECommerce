import { createContext, useContext, useReducer, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthReducer, { initialState } from "../Reducer/AuthReducer";
export const AuthProviderKey = createContext();

const AuthProvider = ({ children }) => {
  const localStorageResponse = localStorage.getItem("loginDetails");
  //const localStorageparsed = JSON.parse(localStorageResponse)
  const [token, setToken] = useState(localStorageResponse?.token || null);

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [state, authDispatch] = useReducer(AuthReducer, initialState);
  const loginHandler = async ({ email, password }) => {
    try {
      const passobj = { email, password };
      console.log(passobj);
      const sendreq = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(passobj),
      });
      console.log(sendreq.status);
      if (sendreq.status === 200 || sendreq.status === 201) {
        console.log("print");

        const { foundUser, encodedToken } = await sendreq.json();
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        //const {user, token} = localStorageResponse
        setUserInfo(foundUser);
        setToken(encodedToken);
        authDispatch({ type: "SET-TOKEN", payload: encodedToken });
        authDispatch({ type: "SET-USER-INFO", payload: foundUser });
        authDispatch({ type: "LOGGED-IN", payload: true });
        setIsLoggedin(true);
        console.log(encodedToken, "gghgh");
        console.log(isLoggedin);
        encodedToken && navigate("/products");
        toast.success("Loggedin Successfully");
      } else {
        toast("Your password or email address is incorrect");
      }
    } catch (error) {}
  };
  //console.log(token)
  const signUpHandler = async ({
    firstname,
    lastname,
    email,
    password,
    confirmpassword,
  }) => {
    //console.log(firstname)
    if (password === confirmpassword) {
      try {
        const passobj = { firstname, lastname, email, password };
        //console.log(passobj)
        const sendreq = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(passobj),
        });
        console.log(sendreq, sendreq.status);

        // const reposnetest = await sendreq.json();
        // console.log(reposnetest)
        if (sendreq.status === 201 || sendreq.status === 200) {
          const { createdUser, encodedToken } = await sendreq.json();
          //console.log(createdUser, encodedToken, 'dsdsdd')
          localStorage.setItem(
            "loginDetails",
            JSON.stringify({ user: createdUser, token: encodedToken })
          );

          //const localStorageResponse = localStorage.getItem("loginDetails")
          //const localStorageparsed = JSON.parse(localStorageResponse)

          //const {user, token} = JSON.parse(localStorageResponse)

          setToken(encodedToken);
          authDispatch({ type: "SET-TOKEN", payload: encodedToken });
          authDispatch({ type: "SET-USER-INFO", payload: createdUser });
          authDispatch({ type: "LOGGED-IN", payload: true });
          console.log(encodedToken);
          navigate("/auth");
          toast("Signed Up successfully. Please Login to continue");
          // console.log(localStorageResponse)

          // console.log(localStorageparsed)
        } else if (sendreq.status === 422) {
          toast.error(
            "User email already exists! Please try signing up with another email!"
          );
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Your password is not matching");
    }
  };
  const logoutHandler = () => {
    authDispatch({ type: "LOGGED-OUT" });
    setToken(null);
    setUserInfo(null);
    localStorage.removeItem("loginDetails");
    setIsLoggedin(false);
    toast("logged out successfull");
    navigate("/");
  };
  // const toggelSigninHandler = () => {
  //   setIsLoggedin((isLoggedin) => !isLoggedin);
  // };
  const valuetobepassed = {
    signUpHandler,
    loginHandler,
    token,
    logoutHandler,
    isLoggedin,
    userInfo,
    state,
  };

  return (
    <AuthProviderKey.Provider value={valuetobepassed}>
      {" "}
      {children}
    </AuthProviderKey.Provider>
  );
};
export default AuthProvider;

export const AuthContext = () => useContext(AuthProviderKey);
