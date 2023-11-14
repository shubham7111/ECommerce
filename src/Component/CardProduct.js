import { useContext } from "react"
import { CartKey } from "../Context/CartContext"

export default function CardProduct({item}) {
    const {AddCartQuant} = useContext(CartKey)
    console.log(item)
    return (
        <div>

        <p><strong>{item?.title}</strong></p>
       
    <button onClick={() => AddCartQuant (item, "increment")}>+</button>  
    <button>{item?.qty && item?.qty >=1 ? item?.qty:
1}</button>
    <button onClick={() => AddCartQuant (item, "decrement")}>-</button> 
        </div>
    )
}