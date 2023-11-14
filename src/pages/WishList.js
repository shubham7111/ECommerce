import { useContext } from "react"
import { WishKey, wishlist } from "../Context/WishlistContext"
import {AiFillHeart} from "react-icons/ai"
import "./WishList.css"
export default function WishList() {
    const {wishlist, removeWishlist, removeProductToWishList, state} =  useContext(WishKey)
    console.log(state, 'wish')
    return(
        <div className="header-wish" >
        <div className="parent-container-wish">
{
    state?.wish?.length>0?state?.wish?.map((product) => <div key = {product._id} className="card-wish">    
    <div className="card-details">
<div   className="menu"> 

     </div>
<div className="title">
 <h1>
 {product.title}</h1>
</div>
 <div className="image">
   <img src={product.image} />
</div>

<div className="des">
<label>Price:</label>{product.price}
<p><button className="button" onClick={() => {removeProductToWishList(product)}}>Remove from Wishlist</button>
</p>
</div>
        </div>
        </div>)
        :
       <div className= "no-card"> <h3>No data in wishlist as of now</h3>
        {/* <button onClick = {() => navigate("/products") } >Let's Explore</button> */}
        </div>
}
        </div>
        </div>
    )
}