import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import WishlistContext from "./context/WishlistContext";
//import AuthProvider from "./Context/AuthContext";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductContext>
          <CartContext>
            <WishlistContext>
              <App />
            </WishlistContext>
          </CartContext>
        </ProductContext>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
