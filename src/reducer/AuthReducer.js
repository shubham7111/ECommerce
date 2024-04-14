export const initialState = {
  token: localStorage.getItem("LoginDetails")
    ? JSON.parse(localStorage.getItem("LoginDetails"))?.token
    : null,
  userInfo: localStorage.getItem("LoginDetails")
    ? JSON.parse(localStorage.getItem("LoginDetails"))?.user
    : null,
  isLoggedIn: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SET-TOKEN":
      return { ...state, token: action.payload };
    case "SET-USER-INFO":
      console.log(action.payload);
      return { ...state, userInfo: action.payload };
    case "LOGGED-IN":
      return { ...state, isLoggedIn: action.payload };
    case "LOGGED-OUT":
      console.log("loggedout call");
      return { ...state, token: null, isLoggedIn: false, userInfo: null };
    default:
      return state;
  }
};

export default AuthReducer;
