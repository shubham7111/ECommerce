import { useContext, useEffect, useState } from "react";
import { WishKey } from "../../context/WishlistContext";

import Filter from "../../components/filter/Filter";
import { CartState } from "../../context/ProductContext";
import "./LandingPage.css";
import { CartKey } from "../../context/CartContext";
import Card from "../../components/card/Card"
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
export default function LandingPage() {
  const [data, setData] = useState([]);

  const {
    dispatch,
    filteredSearchData,
    filteredCategoryData,
    filteredDataGenre,
  } = CartState();


  return (
    <div>
      <Navbar/>
    <div className="main-container">
      <div class="sidebar">
        <Filter />
        </div>
        <div className="card-container">
        {filteredDataGenre?.map((product) => <Card key = {product._id} item = {product} />)}

        </div>
     
   </div>
   </div>
  );
}
