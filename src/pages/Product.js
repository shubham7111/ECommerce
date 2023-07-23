import { useContext, useEffect, useState } from "react"
import { WishKey } from "../Context/WishlistContext"
import {AiFillHeart} from "react-icons/ai"
import {BsFillCartCheckFill} from "react-icons/bs"
import Filter from "../Component/Filter"
import { CartState } from "../Context/ProductContext"
import './Product.css'
import { CartKey } from "../Context/CartContext"
export default function Product(){
    const [data, setData] = useState([])

    // const [wishlist, setWishlist] = useState([])
    const {addToWishlist, wishlist,removeProductToWishList} = useContext(WishKey)
    const {addToCart, cart, removeProductToCart} = useContext(CartKey)

    const {dispatch, filteredSearchData, filteredCategoryData, filteredDataGenre} =  CartState()
    //console.log(filteredSearchData)
const isPresentinWishlist = (product) => {
    const isProductpresent = wishlist.some((item) => item._id ===  product._id) 
    if (!isProductpresent)  {
        console.log('add')
        addToWishlist(product)
    }
    else{
        console.log('remove')
        removeProductToWishList(product)
    }
}

const isPresentinCart = (product) => {
    const isProductpresent = cart.some((item) => item._id ===  product._id) 
    if (!isProductpresent)  {
        console.log('add')
        addToCart(product)
    }
    else{
        console.log('remove')
        removeProductToCart(product)
    }
}
    return(
       
        <div>
         <Filter />
            <h1>This product page</h1>
            {/* <button onClick={getData} > Get Products</button> */}
            <h1> Products </h1>
            <div className="parent-container">
            {
                filteredDataGenre?.map((item) => (
                    <div key = {item._id} className="card">
                    {/* <div  className="main">     */}
    <div className="card-details">
{/* <div   className="menu"> 

     </div> */}
<div className="title">
 <h1>
 {item.title}</h1>
</div>
 <div className="image">
   <img src={item.image} />
</div>

<div className="des">
<label>Price:</label>{item.price}
</div>

<div className="button">
<button onClick={() => isPresentinWishlist(item)} > <AiFillHeart /> </button>

<button onClick={() => isPresentinCart(item)} > <BsFillCartCheckFill /> </button>
</div>
        </div>
        {/* </div> */}
                           
                    </div>
                ))
            }
            </div>
            <hr/>
            
        </div>
    )
}