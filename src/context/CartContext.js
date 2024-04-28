import { createContext, useState, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { initialState, CartReducer } from "../reducer/CartReducer";

export const CartKey = createContext();

const CartContext = ({ children }) => {
  const [state, cartdispatch] = useReducer(CartReducer, initialState);

  const {
    state: { token },
  } = AuthContext();
  // console.log(token, 'token')

  const cartCall = async () => {
    // console.log("cartcall")

    try {
      const sendreq = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      const response = await sendreq.json();
      // console.log(" token receivedfrom server fr cart", response.cart);
      cartdispatch({ type: "SET-CARTDATA", payload: response.cart });
      // setCart(response.cart)
      //console.log(wishlist)}
    } catch (e) {
      // console.log(e)
    }
  };
  ///////////////

  const addToCart = async (product) => {
    try {
      // console.log("product",product)
      const passob = { product };
      //const passobj = {authorization: token}

      const sendreq = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(passob),
      });

      // console.log("cart",sendreq)

      // const resp = await fetch("/api/user/wishlist")
      if (sendreq.status === 200 || sendreq.status === 201) {
        const finalrespp = await sendreq.json();
        cartdispatch({ type: "SET-CARTDATA", payload: finalrespp.cart });
        // setCart(finalrespp.cart)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeProductToCart = async (product) => {
    try {
      // console.log("product r",product)
      //   console.log("recived item for wshl is",product._id,token)
      const passobj = { product };
      console.log(passobj);
      const sendreq = await fetch(`/api/user/cart/${product._id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/js`1on",
          "Content-Type": "application/json",
          authorization: token,
        },
      });

      // console.log("received data  after removing data from wishlost",sendreq)
      if (sendreq.status === 200 || sendreq.status === 201) {
        const response = await sendreq.json();
        //   console.log("received data  after removing data from wishlost",response)
        cartdispatch({ type: "SET-CARTDATA", payload: response.cart });

        //   dispatch({type: "REMOVE-FROM-WISHLIST",payload:{product,wishlist:response.wishlist}})
      }
    } catch (e) {
      console.log(e);
    }
    //d
  };

  const removeAllProductFromCart = async (product) => {
    try {
      // console.log("product r",product)
      //   console.log("recived item for wshl is",product._id,token)
      const passobj = { product };
      console.log(passobj);
      const sendreq = await fetch(`/api/user/cart/`, {
        method: "DELETE",
        headers: {
          Accept: "application/js`1on",
          "Content-Type": "application/json",
          authorization: token,
        },
      });

      // console.log("received data  after removing data from wishlost",sendreq)
      if (sendreq.status === 200 || sendreq.status === 201) {
        const response = await sendreq.json();
        console.log(
          "received data  after removing data from wishlost",
          response
        );
        cartdispatch({ type: "SET-CARTDATA", payload: response.cart });

        //   dispatch({type: "REMOVE-FROM-WISHLIST",payload:{product,wishlist:response.wishlist}})
      }
    } catch (e) {
      console.log(e);
    }
    //d
  };
  const AddCartQuant = async ({ product, type }) => {
    try {
      console.log(type, product.qty, "checktype");
      const requestedBody = { action: { type } };
      const sendreq = await fetch(`/api/user/cart/${product._id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestedBody),
      });

      if (sendreq.status === 200 || sendreq.status === 201) {
        const response = await sendreq.json();
        console.log(type, "checktype");
        type === "increment"
          ? cartdispatch({ type: "INCREASE-QUANTITY", payload: response?.cart })
          : cartdispatch({
              type: "DECREASE-QUANTITY",
              payload: response?.cart,
            });
        console.log(response.cart.length, "responsefor increase");
      }
    } catch (error) {}
  };

  // const RemoveCartQuant = async (product, type) => {
  //     try {
  //         const requestedBody = {action : {type}}
  //         const sendreq =await fetch(`/api/user/cart/${product._id}`,{
  //             method:"POST",
  //             headers:{'Accept':'application/json',
  //         'Content-Type':'application/json',
  //         authorization : token}, body: JSON.stringify(requestedBody) })

  //         if (sendreq.status ===200 || sendreq.status === 201){
  //             const response = await sendreq.json()
  //             cartdispatch({type : "DECREASE-QUANTITY", payload : response?.cart})

  //         }

  //     } catch (error) {

  //     }
  // }

  const isPresentinCart = (product) => {
    // console.log("cart",cart)
    return state?.cart?.some((item) => item._id === product?._id);
  };
  const valuetobepassed = {
    cartCall,
    addToCart,
    state,
    removeProductToCart,
    AddCartQuant,
    removeAllProductFromCart,
    cartdispatch,
    isPresentinCart,
  };
  return (
    <CartKey.Provider value={valuetobepassed}>{children}</CartKey.Provider>
  );
};

export default CartContext;
