import { useContext, useState } from "react";
import { CartKey } from "../../context/CartContext";
import "./Payment.css";
import { toast } from "react-toastify";
import { PaymentModal } from "../../components/paymentModal/PaymentModal";
export default function Payment() {
  const { state } = useContext(CartKey);
  const totalProductsCount = state?.cart?.reduce(
    (acc, item) => (acc += item?.qty),
    0
  );
  const [address, setAddress] = useState(state?.address[0]);
  const [isAddressSelected, setAddressSelected] = useState(true);
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  //address modal end

  //payment modal begins
  const [placeOrder, setPlaceOrder] = useState(false);
  const closePlaceOrderModal = () => setPlaceOrder(false);
  const openPlaceOrderModal = () => {
    console.log(address);
    if (!isAddressSelected) {
      toast("Please select an address to continue");
    } else {
      setPlaceOrder(true);
    }
  };
  const total = state?.cart?.reduce(
    (acc, item) =>
      (acc +=
        item?.qty && item.qty > 1 ? item?.qty * item.price : item?.price * 1),
    0
  );
  const selectHandler = (e) => {
    console.log(e.target.value);
    const data = state?.address?.find((item) => item.name === e.target.value);
    setAddress(data);
    setAddressSelected(true);
  };

  return (
    <div className="parent-container">
      <div className="address">
        {state?.address?.map((add, i) => (
          <div key={i}>
            <h3> Address {i + 1}</h3>
            <input
              type="radio"
              name="address"
              value={add.name}
              onChange={selectHandler}
              checked={address?.name === add?.name}
            />{" "}
            <p>
              <strong>{add?.name}</strong>
            </p>
            <p>
              <strong>Address: </strong> {add?.area}
            </p>
            <p>
              <strong>Phone: </strong> {add?.phone}
            </p>
            {/* {console.log(i)} */}
          </div>
        ))}
      </div>
      {modal &&
        {
          /* <AddressModal closeModal={closeModal} addAddress={addAddress} /> */
        }}
      {address && placeOrder && (
        <PaymentModal closePlaceOrderModal={closePlaceOrderModal} />
      )}
      {/* <button onClick={setModal}>Add Address</button> */}
      <div className="payment">
        <p>
          <hr />
          <strong>Order details</strong>
          <hr />
        </p>
        {/* <div className="payment-orderdetails">
           <div className="payment-item"> 
           <p><strong>Item</strong></p>
           {state?.cart?.map((product) => (
            <div>
                <p>{product.title} &nbsp;  {product.qty}  </p>
            </div>
           ))}
           </div>
           <div className="payment-quantity"> 
           <p><strong>Quantity</strong></p>
           <p>{totalProductsCount}</p>
           </div>
           </div> */}
        <div className="table-wrapper">
          <table>
            <thead className="table">
              <tr>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {state?.cart?.map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
              <tr>
                <td>Total </td>
                <td>{totalProductsCount}</td>
              </tr>
            </tbody>
            <p>
              <hr />
              <strong>Price details</strong>
              <hr />
            </p>
            {/* // ------------------------- */}
            <tbody>
              <tr>
                <td>Price ({totalProductsCount}) items</td>
                <td> ₹{total}</td>
              </tr>
              <tr>
                <td>Discount </td>
                <td> -{total * 0.2}</td>
              </tr>
              <tr>
                <td>Delivery charges </td>
                <td> Free</td>
              </tr>
              <tr>
                <td>Coupon Discount </td>
                <td> ₹0</td>
              </tr>
              <tr>
                <td>Total Amount </td>
                <td> {total - total * 0.2}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <p><hr/><strong>Price details</strong><hr/></p> */}
        {/* <div className="table-wrapper">
           <table>
            <thead className="table">
               
            </thead>
            <tbody>
            <tr>
                    <td>Price ({totalProductsCount}) items</td>
                    <td> ₹{total}</td>
                </tr>
                <tr>
                    <td>Discount </td>
                    <td> -{total/2}</td>
                </tr>
                <tr>
                    <td>Delivery charges </td>
                    <td> Free</td>
                </tr>
                <tr>
                    <td>Coupon Discount </td>
                    <td> ₹0</td>
                </tr>
                <tr>
                    <td>Total Amount </td>
                    <td> {total}</td>
                </tr>
            </tbody>
           </table>
</div> */}

        <p>
          <hr />
          <strong>Deliver To</strong>
          <hr />
        </p>
        <p>
          <strong>{address.name}</strong>
          <br />
          {address.area}
          <br />
          {address.city}
          <br />
          {address.state}
          <br />
          {address.phone}
        </p>
        <button className="place-prder-btn" onClick={openPlaceOrderModal}>
          Place Order
        </button>
        <p></p>
        <p></p>
        <p></p>

        <p></p>
      </div>
    </div>
  );
}
