import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
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
  const { cart, state } = useContext(CartKey);
  const {
    state: { wish },
  } = useContext(WishKey);

  return (
    <div className="navbar-container">
      <div className="Logo">
        <NavLink to="/home" className="link">
          <span className="hero">S</span>hopizon
        </NavLink>
      </div>

      <div className="navbar-right-side-container">
        <div>
          <NavLink to="/products">
            <IoBagCheckOutline size="35" color="black" />
          </NavLink>
        </div>

        <div className="nav-child-item">
          <NavLink to="/wishlist">
            <FaHeart size="35" color="black" />
            {token && wish?.length > 0 && (
              <span className="length">
                {wish?.length > 0 && wish?.length}{" "}
              </span>
            )}
          </NavLink>
        </div>

        <div className="nav-child-item">
          <NavLink to="/cart">
            <FaCartShopping size="35" color="black" />
            {token && state?.cart?.length > 0 && (
              <span className="length">
                {state?.cart?.length > 0 && state?.cart?.length}
              </span>
            )}
          </NavLink>
        </div>

        {token !== null && isLoggedin !== false ? (
          <div>
            <NavLink to="/profile">
              <BsFillPersonFill size="35" color="black" />
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/auth">
              <CgProfile size="35" color="black" />
            </NavLink>
          </div>
        )}

        {isLoggedin && token && (
          <>
            <div>
              <div onClick={logoutHandler}>
                {" "}
                <NavLink to="/logout">
                  <IoIosLogOut size="35" color="black" />
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
