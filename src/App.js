import "./App.css";
import logo from "./logo.png";
import { Routes, Route, NavLink } from "react-router-dom";
import Mockman from "mockman-js";
import LandingPage from "./pages/landing/LandingPage";
import WishList from "./pages/wishlist/WishList";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/auth/SignUp";
import Auth from "./pages/auth/Auth";
import Navbar from "./components/navbar/Navbar";
import Logout from "./pages/auth/Logout";
import Cart from "./pages/cart/Cart";
import UserProfile from "./pages/profile/UserProfile";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./pages/payment/Payment";
import HomePage from "./pages/home/HomePage";
import ProductDetail from "./pages/productDetail/ProductDetail";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Welcome Home</h1> */}

        <Navbar />

        <ToastContainer
          position="top-right"
          reverseOrder={false}
          containerStyle={{ top: "10%" }}
          toastOptions={{ style: { maxWidth: 500 } }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/wishlist" element={<WishList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
