import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Address from "../address/Address";
import "./UserProfile.css";
import { CartKey } from "../../context/CartContext";
export default function UserProfile() {
  const {
    state: { userInfo },
  } = AuthContext();
  const [selectedTab, setSelectedTab] = useState("profile");
  const { state } = useContext(CartKey);
  console.log(userInfo);
  return (
    <div className="profile">
      {/* <p> <strong> Name:</strong>{userInfo?.firstName} {userInfo?.lastName}</p>
            <p> <strong> Email:</strong>{userInfo?.email} </p> */}

      {/* <Address /> */}

      <div className="container">
        <div className="header">
          <div
            className={
              selectedTab === "profile"
                ? "header-section-active"
                : "header-section"
            }
            onClick={() => setSelectedTab("profile")}
          >
            Profile
          </div>
          <div
            className={
              selectedTab === "address"
                ? "header-section-active"
                : "header-section"
            }
            onClick={() => setSelectedTab("address")}
          >
            Address
          </div>
        </div>
        <div className="content">
          {selectedTab === "profile" ? (
            <div className="profile-details">
              <h3>Profile Details</h3>
              <p>
                <img
                  src="https://res.cloudinary.com/dsgfp68qe/image/upload/v1714334736/avatar-1299805_1280_os9ed3.png"
                  alt=""
                />
              </p>
              <p>
                {" "}
                <strong> Name : </strong>
                {userInfo?.firstName} {userInfo?.lastName} <br />
                <strong> Email : </strong>
                {userInfo?.email}{" "}
              </p>
              <p></p>
            </div>
          ) : (
            <Address />
          )}
        </div>
      </div>
    </div>
  );
}
