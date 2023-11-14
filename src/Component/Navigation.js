import { NavLink} from "react-router-dom"
import { FaBeer  } from 'react-icons/fa';
import {BsFillCartFill}  from 'react-icons/bs';
import './Navbar.css';
import { AuthContext } from "../Context/AuthContext";
import { CartKey } from "../Context/CartContext"
import { useContext } from "react";
import { WishKey } from "../Context/WishlistContext";

export default function Navigation(){

    const {logoutHandler,token, isLoggedin } = AuthContext()
    const {cart, state} =  useContext(CartKey)
    const {state : {wish}} = useContext(WishKey)

    return (
        <div>
        <nav >
        <div className="Logo">
        <NavLink to = "/home" ><img src ="https://lh3.googleusercontent.com/a/AAcHTtcUFk9bay7inQlBufdbe8egoYkJatoMsZLIL9JX1JRvjQ=s192-c-mo" style={{width: 40, height: 40, borderRadius: 400/ 2}} /></NavLink>

        </div>
        <ul >
        <li >
        <NavLink to = "/mockman" className="link"> Mockman</NavLink>
        </li>
        <li>
        <NavLink to = "/products" className="link"> Product</NavLink>
        </li>
        <li>
        <NavLink to = "/wishlist" > <FaBeer style={{color: "black"}}/>{wish?.length} </NavLink>
        </li>
        <li>
        <NavLink to = "/cart">  <BsFillCartFill style={{color: "black"}} /> {state?.cart?.length} </NavLink>
        </li>
        <li>
        <NavLink to = "/signup" className="link"> SignUp</NavLink>
        </li>
        <li>
        <NavLink to = "/auth" className="link"> Auth</NavLink>
        </li>
        {console.log(isLoggedin, token, '23jan')}
        <li>{isLoggedin && token &&  <div onClick={logoutHandler} > <NavLink to= "/logout" className="link">Logout</NavLink></div>}</li>
        <li>
        <NavLink to = "/profile" className="link"> Profile</NavLink>
        </li>
        </ul>
        </nav>
        </div>
    )
}