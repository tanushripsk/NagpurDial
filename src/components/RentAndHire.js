import React, { useState } from "react";
import "../App.css";
import Businesschat from "../Businesschat/Businesschatmodel"; 
import Otp2 from "../Otp2";
import PopularSearch from "./PopularSearch";
import { Link } from 'react-router-dom';
const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },
];

const whatsappContacts1 = [
  { id: 2, phone: "919975288300", text2: "Nagpurdial" },
  // Add more contacts as needed
];

function RentAndHire() {
  const [showOTPModal, setShowOTPModal] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null); // To store the selected contact information

  const handleContactButtonClick = (contact) => {
    setSelectedContact(contact); // Store the selected contact
    setShowOTPModal(true); // Show the OTP modal
  };

  const handleOtpVerified = () => {
    setShowContactForm(true); // Show contact form after OTP verification
    setShowOTPModal(false); // Close OTP modal after verification
  };

  const handleCloseModal = () => {
    setShowOTPModal(false); // Close both OTP and Contact modals
    setShowContactForm(false);
    setSelectedContact(null); // Clear the selected contact
  };

  return (
    <div class="container">
      <div class="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div class="banner3 ">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <div style={{ padding: "2px" }}></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-lg-41">
              <Link to="/rentservice" class="icons-img ">
                <img
                  src="./images/fafa icon/mini bus.png"
                  class="icons-img"
                  alt="bus"
                />
                Mini Bus on Rent
              </Link>
            </div>
            <div class="col-lg-4 col-lg-41">
              <Link to="/rentservice" class="icons-img ">
                <img
                  src="./images/fafa icon/truck.png"
                  class="icons-img"
                  alt="truck"
                />
                Tempos on Rent
              </Link>
            </div>
            <div class="col-lg-4 col-lg-41">
              <Link to="/rentservice" class="icons-img hh">
                <img
                  src="./images/fafa icon/customer.png"
                  class="icons-img"
                  alt="customer"
                />
                Constumer Rent
              </Link>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-4 col-lg-41">
              <Link to="/rentservice" class="icons-img hh">
                <img
                  src="./images/fafa icon/truck.png"
                  class="icons-img"
                  alt="truck"
                />
                Tempos on Rent
              </Link>
            </div>
            <div class="col-lg-4 col-lg-41">
              <Link to="/rentservice" class="icons-img hh">
                <img
                  src="./images/fafa icon/mini bus.png"
                  class="icons-img"
                  alt="mini bus "
                />
                Mini Bus on Rent
              </Link>
            </div>
            <div class="col-lg-4 col-lg-41">
              <Link to="/rentservice" class="icons-img hh">
                {" "}
                <img
                  src="./images/fafa icon/ac.png"
                  class="icons-img"
                  alt="ac"
                />
                AC on Rent
              </Link>
            </div>
          </div>
          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <Link to="/rentservice" class="icons-img">
                <img
                  src="./images/fafa icon/customer.png"
                  class="icons-img"
                  alt="customer"
                />
                Constumer Rent
              </Link>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <Link to="/rentservice" class="icons-img">
                <img
                  src="./images/fafa icon/ac.png"
                  class="icons-img"
                  alt="ac"
                />
                AC on Rent
              </Link>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <Link to="/rentservice" class="icons-img">
                {" "}
                <img
                  src="./images/fafa icon/caar.png"
                  class="icons-img"
                  alt="caar"
                />
                Car on Rent
              </Link>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <Link to="/rentservice" class="icons-img">
                <img
                  src="./images/fafa icon/buss.png"
                  class="icons-img"
                  alt="buss"
                />
                Bus on Rent
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <PopularSearch />
        <hr />
        <div style={{ padding: "2px" }}></div>
      </div>
    </div>
  );
}

export default RentAndHire;
