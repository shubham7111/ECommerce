import "./App.css";
import logo from "./logo.png";
import {Routes, Route, NavLink} from "react-router-dom"
import Mockman from "mockman-js";
import Products from "./pages/Product";
import WishList from "./pages/WishList";
import { ToastContainer } from 'react-toastify';
import SignUp from "./pages/SignUp";
import Auth from "./pages/Auth";
import Header from "./Component/Header";
import Logout from "./pages/Logout";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import 'react-toastify/dist/ReactToastify.css';
import Payment from "./pages/Payment";
import Home from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Welcome Home</h1> */}

        <Header />
       

        <ToastContainer
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
        <Routes>
        <Route path = "/products" element={ <Products /> } />
        <Route path = "/wishlist" element={ <WishList /> } />
        <Route path = "/signup" element={ < SignUp />} />
        <Route path = "/auth" element={ < Auth />} />
        <Route path = "/" element={ < h1>Home </h1> } />
        <Route path = "/mockman" element={ < Mockman />} />
        <Route path = "/logout" element={ < Logout />} />
        <Route path = "/cart" element={ < Cart />} />
        <Route path = "/profile" element={ < UserProfile />} />
        <Route path = "/checkout" element={ < Payment />} />
        <Route path = "/home" element={ < Home />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
