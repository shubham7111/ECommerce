import { useContext, useEffect } from "react";
import { WishKey, wishlist } from "../../context/WishlistContext";
import { AiFillHeart } from "react-icons/ai";
import "./WishList.css";
import Card from "../../components/card/Card";
import NoItems from "./WishList.png";
import { useNavigate } from "react-router-dom";
import { CartKey } from "../../context/CartContext";
export default function WishList() {
  const navigate = useNavigate();
  const {
    wishlist,
    removeWishlist,
    removeProductToWishList,
    state,
    wishListCall,
  } = useContext(WishKey);
  const { addToCart, isPresentinCart } = useContext(CartKey);
  // console.log(state, 'wish',state?.wish?.length>0)
  useEffect(() => {
    wishListCall();
  }, [state]);
  return (
    <div className="wishlist-parent-container">
      {state?.wish?.length > 0 ? (
        <div className="wishlist-cards-container">
          {state?.wish?.map((product) => (
            <div className="child">
              <div>
                <img className="image" src={product?.image} alt="" />
              </div>
              <div className="details">
                <p>{product?.title}</p>

                <div>
                  <span>Rs. {product?.price}</span>
                  <span className="bold">FREE Delivery</span>
                </div>
                <div>
                  {" "}
                  <button
                    onClick={() =>
                      !isPresentinCart(product)
                        ? addToCart(product)
                        : navigate("/cart")
                    }
                  >
                    {!isPresentinCart(product) ? "Add to Cart" : "Go to Cart"}
                  </button>
                  <button
                    onClick={() => {
                      removeProductToWishList(product);
                    }}
                  >
                    Remove from ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-items-container">
          <p>SAVE YOUR FAVOURITE ITEMS ❤️</p>
          <div>
            <img src={NoItems} alt="" style={{ height: "100px" }} />
          </div>
          <button onClick={() => navigate("/products")}>Shop Now</button>
        </div>
      )}
    </div>
  );
}
