import { useContext } from "react"
import {AiFillHeart} from "react-icons/ai"
import { CartKey } from "../Context/CartContext"
export default function Cart() {
    const {cart, removeProductToCart} =  useContext(CartKey)
    return(
        <div className="parent-container">
{
    cart?.length>0?cart?.map((product) => <div  class="main">    
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

<div class="des">
<label>Price:</label>{product.price}
<p><button onClick={() => {removeProductToCart(product)}}>Remove From Cart</button>
</p>
<hr/>
</div>
        </div>
        </div>)
        :
       <div> <h3>No data in Cart as of now</h3>
        {/* <button onClick = {() => navigate("/products") } >Let's Explore</button> */}
        </div>
}
        </div>
    )
}