import { NavLink } from "react-router-dom";

export default function Home(){
    return (
        <div className="home-container">
        <div className="top-container">
            <h1>This is Home</h1>
            <img src = "blob:https://web.whatsapp.com/084eca6b-4605-4947-a619-b7d4f186bc0b" alt="No Image found" style = {{width:100}}></img>

            <NavLink to = "/products">Lets Explore</NavLink>
            </div>
            <div className="bottom-container">
                
            </div>
        </div>
    )
}