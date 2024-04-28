import { useContext, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CartKey } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { NavLink } from "react-router-dom";
//import { FaCartShopping } from "react-icons/fa6";
import NoCart from "./NoCart.png";
import "./Cart.css";
import { WishKey } from "../../context/WishlistContext";
export default function Cart() {
  const { state, removeProductToCart, AddCartQuant, cartCall } =
    useContext(CartKey);
  const { isPresentinWishlist, removeProductToWishList, addToWishlist } =
    useContext(WishKey);
  const navigate = useNavigate();

  useEffect(() => {
    cartCall();
  }, [state]);
  // console.log("csrt page", state?.cart);
  const total = state?.cart?.reduce(
    (acc, item) =>
      (acc +=
        item?.qty && item.qty > 1 ? item?.qty * item.price : item?.price * 1),
    0
  );
  return (
    <div className="cart-wrapper">
      {state?.cart?.length > 0 ? (
        <div className="wrapper">
          <div className="card-parent-container">
            {state?.cart?.map((product) => (
              <div className="card-container">
                <div>
                  <img className="image" src={product?.image} alt="" />
                </div>
                <div className="details">
                  <p>{product?.title}</p>
                  <br />
                  <p>₹ {product?.price}</p>
                  <div className="actions">
                    <button
                      onClick={() =>
                        AddCartQuant({ product, type: "increment" })
                      }
                    >
                      +
                    </button>
                    <button>
                      {product?.qty && product.qty >= 1 ? product.qty : 1}
                    </button>
                    <button
                      onClick={() =>
                        product.qty >= 2 &&
                        AddCartQuant({ product, type: "decrement" })
                      }
                    >
                      -
                    </button>
                  </div>
                  <div className="btn-container">
                    <button onClick={() => removeProductToCart(product)}>
                      REMOVE
                    </button>
                    <button
                      onClick={() => {
                        isPresentinWishlist(product)
                          ? removeProductToWishList(product)
                          : addToWishlist(product);
                      }}
                    >
                      {isPresentinWishlist(product)
                        ? "REMOVE FROM WISHLIST"
                        : "ADD TO WISHLIST"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="payment-container">
            <h2> Payment details</h2>
            <p>
              <strong>Total charges :</strong> {total}
            </p>
            <p>
              <strong>Discount :</strong> 20%
            </p>
            <p>
              <strong>Total payable</strong> : {total - total * 0.2}
            </p>
            <button onClick={() => navigate("/checkout")}>
              Proceed for Payment
            </button>
          </div>
        </div>
      ) : (
        <div className="no-items-container">
          {" "}
          <p>No ITEMS IN YOUR CART</p>
          <div>
            {" "}
            <img src={NoCart} alt="" />
          </div>
          <button onClick={() => navigate("/products")}>Shop Now</button>
        </div>
      )}
    </div>
  );
}

// {wishlists?.length <0
//     ?
//   <div></div>

//     ) : (
//       <div className="no-items-container">
//         <p>Your  Cart is empty.</p>
//         <button onClick={() => navigate("/products")}>Shop Now</button>
//       </div>
//     )}
//         <>

// {
//     state?.cart?.length>0?
//     <div className="parent-container">
//     <div className="left-container">
//     {

//         state?.cart?.map((product) =>

// <Card key = {product._id} item = {product} />
// )}
//         </div>
//         <div className="right-container">
//         <h3 className="price-card-header">Price Details</h3>
//         <div className="product-details"> <p><strong>SubTotal:</strong> {total}</p>
//         <p>
//        <strong>Discount</strong>: 50%
//        </p>
//        <p><strong>Total : </strong> {total/2}</p>
//        <button><NavLink to = "/checkout">Continue for Payment</NavLink></button>
//         </div>
//         </div>
//         </div>
//         :
//        <div> <h3>No data in Cart as of now</h3>
//        <button   className= "button" onClick = {()=> navigate("/products")} >Let's Explore</button>
//         {/* <button onClick = {() => navigate("/products") } >Let's Explore</button> */}
//         </div>

// }
// </>
//     )
// }
