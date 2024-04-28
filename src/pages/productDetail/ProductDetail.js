import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WishKey } from "../../context/WishlistContext";
import { CartKey } from "../../context/CartContext";
import "./productDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isPresentinWishlist, removeProductToWishList, addToWishlist } =
    useContext(WishKey);
  const { addToCart, isPresentinCart } = useContext(CartKey);
  const [product, setProduct] = useState({});

  const getProductDetails = async () => {
    try {
      const res = await fetch(`/api/products/${id}`);

      if (res.status === 200 || res.status === 201) {
        const finalres = await res.json();
        console.log("page in", finalres);
        setProduct(finalres.product);
      }
    } catch (error) {}
  };
  console.log(product.title);
  useEffect(() => {
    getProductDetails();
  }, [id]);
  return (
    <div className="product-detail-parent-container">
      {/* left-container */}
      <div className="product-left-container">
        <img src={product?.image} alt="na" />
        <div className="action-buttons-container">
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

          <button
            onClick={() =>
              !isPresentinCart(product) ? addToCart(product) : navigate("/cart")
            }
          >
            {!isPresentinCart(product) ? "Add to Cart" : "Go to Cart"}
          </button>
        </div>
      </div>
      {/* right-container */}
      <div className="product-right-container">
        <h2>{product?.title}</h2>
        <span>{product?.genre?.toUpperCase()}'s Wear</span>
        <p>
          {" "}
          <span>Price : </span>₹ {product?.price}{" "}
        </p>
        <p>
          {" "}
          <span>Description : </span>
          {product?.description}{" "}
        </p>
      </div>
        
    </div>
  );
};
export default ProductDetail;
