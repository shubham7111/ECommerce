import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
//import { BsFillCartFill } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { CartKey } from "../../context/CartContext";
import { useContext } from "react";
import { WishKey } from "../../context/WishlistContext";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  const { logoutHandler, token, isLoggedin } = AuthContext();
  const { state } = useContext(CartKey);
  const {
    state: { wish },
  } = useContext(WishKey);
  const routes = [
    {
      id: 1,
      name: "Products",
      icon: <IoBagCheckOutline size="20" />,
      path: "/products",
    },
    { id: 2, name: "Wishlist", icon: <FaHeart size="20" />, path: "/wishlist" },
    { id: 3, name: "Cart", icon: <FaCartShopping size="20" />, path: "/cart" },
    {
      id: 4,
      name: "Profile",
      icon: <BsFillPersonFill size="20" />,
      path: "/profile",
    },
    { id: 5, name: "Logout", icon: <IoIosLogOut size="20" />, path: "/logout" },
    // {id:1,name:"",path:""},
  ];

  return (
    <div className="navbar-container">
      <div className="Logo">
        <NavLink to="/" className="link">
          {/* <img
              src="https://lh3.googleusercontent.com/a/AAcHTtcUFk9bay7inQlBufdbe8egoYkJatoMsZLIL9JX1JRvjQ=s192-c-mo"
              style={{ width: 40, height: 40, borderRadius: 400 / 2 }}
            /> */}
          <span className="hero">S</span>hopizon
        </NavLink>
      </div>

      <div className="navbar-right-side-container">
        <div>
          <NavLink to="/products">
            <IoBagCheckOutline size="20" color="black" />
          </NavLink>
        </div>
        <div className="nav-child-item">
          <NavLink to="/wishlist">
            <FaHeart size="20" color="black" />
            <span className="length">{wish?.length} </span>
          </NavLink>
        </div>
        <div className="nav-child-item">
          <NavLink to="/cart">
            <FaCartShopping size="20" color="black" />
            <span className="length">{state?.cart?.length}</span>{" "}
          </NavLink>
        </div>

        {token !== null && isLoggedin !== false ? (
          <div>
            {/* {console.log("72")} */}
            {/* {console.log("token", token, isLoggedin)} */}
            <NavLink to="/profile">
              <BsFillPersonFill size="20 " color="black" />
            </NavLink>
          </div>
        ) : (
          <div>
            {/* {console.log("73")}
            {console.log("tokjen", token, isLoggedin)} */}
            <NavLink to="/auth">
              <CgProfile size="20" color="black" />{" "}
            </NavLink>
          </div>
        )}

        {isLoggedin && token && (
          <>
            <div>
              <div onClick={logoutHandler}>
                {" "}
                <NavLink to="/logout">
                  <IoIosLogOut size="20" color="black" />
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
