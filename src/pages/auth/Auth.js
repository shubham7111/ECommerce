import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import "./Auth.css";
import { toast } from "react-toastify";

export default function Auth() {
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { loginHandler } = AuthContext();
  const userGuestData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const loginDetailSetter = (e) => {
    setUserLoginInfo((userLoginInfo) => ({
      ...userLoginInfo,
      [e.target.name]: e.target.value,
    }));
    console.log(userLoginInfo);
  };
  //   const loginDetailSetter = (e) => {
  //     setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  //   };
  //   const loginClickHandler = () => {};
  //   const preventData = (e) => {
  //     e.preventDefault();
  //     loginHandler(userLoginInfo);
  //   };

  const loginButtonHandler = (e) => {
    e.preventDefault();
    const { email, password } = userLoginInfo;
    if (email.length <= 0 || password.length <= 0) {
      toast("Fill username and password");
    } else {
      loginHandler(userLoginInfo);
    }
  };

  const loginAsGuestHandler = (e) => {
    e.preventDefault();
    loginHandler(userGuestData);
  };
  return (
    // <div>
    //   {/* <Navbar /> */}
    //   <h1>shubham</h1>
    //   <h1>shubham</h1>
    //   <h1>shubham</h1>
    //   <form onSubmit={preventData}>
    //     <div>
    //       <input
    //         required
    //         type="text"
    //         name="email"
    //         onChange={loginDetailSetter}
    //         placeholder="Email Address"
    //       />
    //       <input
    //         required
    //         type="password"
    //         name="password"
    //         onChange={loginDetailSetter}
    //         placeholder="password"
    //       />
    //     </div>
    //     <button onClick={loginClickHandler} type="submit">
    //       {" "}
    //       Submit
    //     </button>
    //   </form>
    //   <p>
    //     <NavLink to="/signup" className="link">
    //       {" "}
    //       Create a New Account ? Signup{" "}
    //     </NavLink>
    //   </p>
    //   <button onClick={loginAsGuestHandler}>Login as guest</button>
    // </div>
    <div className="parent-login-container">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            {/* <label for="username">Username:</label> */}
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={loginDetailSetter}
            />
          </div>
          <div className="form-group">
            {/* <label for="password">Password:</label> */}
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={loginDetailSetter}
            />
          </div>
          <div className="form-group-btns">
            <button type="submit" onClick={loginButtonHandler}>
              Login{" "}
            </button>
            <button type="submit" onClick={loginAsGuestHandler}>
              Login As Guest
            </button>
          </div>
          <div className="form-group">
            <NavLink to="/signup" className="link">
              {" "}
              <h6>Create a New Account ? Signup </h6>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
