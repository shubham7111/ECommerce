import { useContext, useState } from "react";
import "./Address.css";
import Modal from "../components/modals/Modal";
import { CartKey } from "../context/CartContext";
export default function Address() {
  const dummy = [
    {
      name: "Adarsh Balika",
      area: "Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400010",
      phone: "0999099900",
    },
  ];
  // const [data, setData] = useState([{
  //     name:"Adarsh Balika",
  //     area:"Bandra West",
  //     city:"Mumbai",
  // state:"Maharashtra",
  // pincode:"400010",
  // phone:"0999099900"

  // } ])

  const { state } = useContext(CartKey);
  {
    console.log(state.address, "state");
  }
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState({ name: "", area: "", phone: "" });
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const setInputHandler = (e) => {
    console.log(e.target.value);
    setAdd((add) => ({ ...add, [e.target.name]: e.target.value }));
  };
  //     const clickHandler = (e) => {
  //         e.preventDefault()
  // setData([...data , add])
  //         setModal(false)

  //     }
  return (
    <div className="profileAddress-header">
      <h2>My Address</h2>
      {state?.address?.map((addresss, i) => (
        <div key={i}>
          <h3> Address {i}</h3>
          <p>
            <strong>Name: </strong> {addresss.name}
          </p>
          <p>
            <strong>Address: </strong> {addresss.area}
          </p>
          <p>
            <strong>Phone: </strong> {addresss.phone}
          </p>
          {/* {console.log(i)} */}
        </div>
      ))}
      <button onClick={openModal}>Add new address</button>

      <div className="address-modal">
        {modal && (
          <Modal
            setInputHandler={setInputHandler}
            closeModal={closeModal}
            address={add}
            setModal={setModal}
          />
        )}
      </div>
    </div>
  );
}
