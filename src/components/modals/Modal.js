import { useContext, useEffect, useState } from "react";
import "./Modal.css";
import { CartKey } from "../../Context/CartContext";
const Modal = ({ setInputHandler, closeModal, address, setModal }) => {
  const { state, cartdispatch } = useContext(CartKey);
  const closeModalHandler = (e) => {
    if (
      e.target.className === "modal-container" ||
      e.target.className === "close-modal"
    ) {
      closeModal();
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();

    cartdispatch({ type: "ADD-ADDRESS", payload: address });
    // setData([...data , add])

    setModal(false);
  };
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper" onClick={closeModalHandler}></div>
      <div className="modal-container" onClick={closeModalHandler}>
        <div className="modal">
          <div className="cancel-btn" onClick={closeModal}>
            {" "}
            x
          </div>
          <form>
            <p>
              <strong>Name: </strong>
              <input type="text" name="name" onChange={setInputHandler} />
            </p>

            <p>
              <strong>Address: </strong>
              <input type="text" name="area" onChange={setInputHandler} />
            </p>

            <p>
              <strong>Phone: </strong>
              <input type="text" name="phone" onChange={setInputHandler} />
            </p>

            <button onClick={clickHandler}> Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
