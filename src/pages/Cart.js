import { useContext } from "react"
import {AiFillHeart} from "react-icons/ai"
import { CartKey } from "../Context/CartContext"
import { useNavigate } from "react-router-dom"
import CardProduct from "../Component/CardProduct"
import { NavLink } from "react-router-dom"
import "./Cart.css"
export default function Cart() {
    const {state , removeProductToCart, AddCartQuant} =  useContext(CartKey)
    const navigate = useNavigate()

    const total = state?.cart?.reduce((acc, item) => acc += item?.qty && item.qty>1 ? item?.qty * item.price : item?.price *1, 0)
    return(
        <>
        
        
{
    state?.cart?.length>0? 
    <div className="parent-container"> 
    <div className="left-container">
    {

        state?.cart?.map((product) => 
        <div  class="main">  
        
    {/* <button onClick={() => AddCartQuant (product, "increment")}>+</button>  
    <button>{product?.qty && product?.qty >=1 ? product?.qty:
1}</button>
    <button onClick={() => AddCartQuant (product, "decrement")}>-</button>   */}
    <div class="card">
<div   className="menu"> 

     </div>
<div class="title">
 <h1>
 {product.title}</h1>
</div>
 <div class="image">
   <img src={product.image} />
</div>
<CardProduct key = {product._id} item = {product} />
<div class="des">
<label>Price:</label>{product.price}
<p><button onClick={() => {removeProductToCart(product)}}>Remove From Cart</button>
</p>
<hr/>
</div>
        </div>
        </div>)}
        </div>
        <div className="right-container">
        <h3 className="price-card-header">Price Details</h3>
        <div className="product-details"> <p><strong>SubTotal:</strong> {total}</p> 
        <p>
       <strong>Discount</strong>: 50%
       </p>
       <p><strong>Total : </strong> {total/2}</p>
       <button><NavLink to = "/checkout">Continue for Payment</NavLink></button>
        </div>
        </div>
        </div>
        :
       <div> <h3>No data in Cart as of now</h3>
       <button   className= "button" onClick = {()=> navigate("/products")} >Let's Explore</button>
        {/* <button onClick = {() => navigate("/products") } >Let's Explore</button> */}
        </div>
        
}
</>      
    )
}