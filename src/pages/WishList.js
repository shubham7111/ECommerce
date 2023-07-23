import { useContext } from "react"
import { WishKey, wishlist } from "../Context/WishlistContext"
import {AiFillHeart} from "react-icons/ai"
import "./WishList.css"
export default function WishList() {
    const {wishlist, removeWishlist, removeProductToWishList} =  useContext(WishKey)
    return(
        <div className="parent-container-wish">
{
    wishlist?.length>0?wishlist?.map((product) => <div  class="main">    
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
<p><button onClick={() => {removeProductToWishList(product)}}><AiFillHeart/></button>
</p>
<hr/>
</div>
        </div>
        </div>)
        :
       <div> <h3>No data in wishlist as of now</h3>
        {/* <button onClick = {() => navigate("/products") } >Let's Explore</button> */}
        </div>
}
        </div>
    )
}