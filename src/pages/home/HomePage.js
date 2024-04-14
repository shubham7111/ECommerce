import { NavLink } from "react-router-dom";
import Hero from "./images/Hero.webp";
import Men from "./images/Men.webp";
import Women from "./images/Women.webp";
import Kids from "./images/Kids.webp";
import Truck from "./images/Truck.png";
import Payment from "./images/Payment.png";
import OnlineSupport from "./images/OnlineSupport.png";
import MoneyBack from "./images/MoneyBack.png";
import "./HomePage.css";

export const BottomSection = () => {
  return (
    <div className="container-category">
      <div>
        <img className="hero-image" src={Men} alt="na" />

        <span className="fashion-text">Men's Fashion</span>
      </div>
      <div>
        <img className="hero-image" src={Women} alt="na" />

        <span className="fashion-text">Women's Fashion</span>
      </div>
      <div>
        <img className="hero-image" src={Kids} alt="na" />

        <span className="fashion-text">Kid's Fashion</span>
      </div>
    </div>
  );
};

export const Footer = () => {
  const linksForMen = [
    { id: 1, name: "Casual", link: "" },
    { id: 2, name: "Formal", link: "" },
    { id: 3, name: "Casual", link: "" },
  ];
  const linksForWomen = [
    { id: 1, name: "Casual", link: "" },
    { id: 2, name: "Formal", link: "" },
    { id: 3, name: "Casual", link: "" },
  ];
  const linksForKids = [
    { id: 1, name: "Casual", link: "" },
    { id: 2, name: "Formal", link: "" },
    { id: 3, name: "Casual", link: "" },
  ];
  return (
    <div className="footer">
      <div className="Logo">
        <NavLink to="/logo" className="link">
          <span className="hero">S</span>hopizon
        </NavLink>
      </div>
      <div className="footer-child-wrapper">
        <span className="footer-text">Shop Men</span>
        <div className="child-links-wrapper">
          {linksForMen.map((link) => (
            <li className="category-link" key={link?.id}>
              {link?.name}
            </li>
          ))}
        </div>
      </div>
      <div>
        <span className="footer-text">Shop Women</span>
        {linksForWomen.map((link) => (
          <li key={link?.id}>{link?.name}</li>
        ))}
      </div>
      <div>
        <span className="footer-text">Baby Collection</span>
        {linksForKids.map((link) => (
          <li key={link?.id}>{link?.name}</li>
        ))}
      </div>
    </div>
  );
};
export default function HomePage() {
  return (
    <div className="home-parent-container">
      <div className="hero-container">
        <div className="image">
          <img className="hero-image" src={Hero} alt="na" />
        </div>

        <div className="hero-details-container">
          <span className="span">Fashion Sale</span>
          <h1>Minimal Menz/Womenz Style</h1>{" "}
          <NavLink to="/products">
            <button className="btn">Shop Now </button>
          </NavLink>
        </div>
      </div>

      <BottomSection />

      <div className="testimonial-container">
        <h3>Customer Testimonal</h3>
        <p>
          Everybody is different, which is why we offer styles for every body.{" "}
        </p>
      </div>

      <div className="payment-parent-container">
        <div className="child">
          <img className="icon" src={Truck} alt="" />
          Fast & Free Delivery
          <span>Free delivery on all orders</span>
        </div>
        <div className="child">
          <img className="icon" src={Payment} alt="" />
          Secure Payment
          <span>Free delivery on all orders</span>
        </div>
        <div className="child">
          <img className="icon" src={MoneyBack} alt="" />
          Money Back Guarantee
          <span>Transaction within 7 working days</span>
        </div>
        <div className="child">
          <img className="icon" src={OnlineSupport} alt="" />
          Online Support
          <span>Online Support 24 * 7</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
