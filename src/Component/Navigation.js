import { NavLink } from "react-router-dom"
import { FaBeer  } from 'react-icons/fa';
import {BsFillCartFill}  from 'react-icons/bs';
import './Navbar.css';
import { AuthContext } from "../Context/AuthContext";

export default function Navigation(){

    const {logoutHandler,token, isLoggedin } = AuthContext()
    return (
        <div>
        <nav >
        <div className="Logo">
<img src ="https://pps.whatsapp.net/v/t61.24694-24/328307140_272432688676251_6547495851151835475_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdR-9nd3F3d6ZJv4ZwGuvqi2wjqZSZMRimeB3iBV1SY_2Q&oe=64C93629" style={{width: 40, height: 40, borderRadius: 400/ 2}} />
        </div>
        <ul >
        <li >
        <NavLink to = "/mockman" className="link"> Mockman</NavLink>
        </li>
        <li>
        <NavLink to = "/products" className="link"> Product</NavLink>
        </li>
        <li>
        <NavLink to = "/wishlist" > <FaBeer style={{color: "white"}}/> </NavLink>
        </li>
        <li>
        <NavLink to = "/cart"> <BsFillCartFill style={{color: "white"}}/> </NavLink>
        </li>
        <li>
        <NavLink to = "/signup" className="link"> SignUp</NavLink>
        </li>
        <li>
        <NavLink to = "/auth" className="link"> Auth</NavLink>
        </li>
        {/* {console.log(isLoggedin, token, '23jan')} */}
        <li>{isLoggedin && token &&  <div onClick={logoutHandler} > <NavLink to= "/logout" className="link">Logout</NavLink></div>}</li>
        </ul>
        </nav>
        </div>
    )
}