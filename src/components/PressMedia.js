import React, { useState } from "react";
import Contact1 from "./Contact1"; // Correct import path for Contact1
import Otp3 from "../Otp3"; // Correct import path for your OTP component
import { Link } from 'react-router-dom';
const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },

];

const whatsappContacts1 = [

  { id: 2, phone: "919975288300", text2: "Nagpurdial" },
  // Add more contacts as needed
];

function PressMedia() {
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
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div class="banner48">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <hr />

        <div class="media">
          <div class="container mt-3">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <Link class="nav-link " to="/corporatemedia">
                  Media(all)
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/press">
                  Press
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Video">
                  Videos
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link hh" to="/report">
                  Consumers Reports
                </Link>
                <Link class="nav-link h" to="/report">
                  Reports
                </Link>
              </li>
            </ul>

            <div style={{ padding: "15px" }}></div>
            <div class="row  mt-3">
              <div class="col-lg-4 p-4 mt-2 media1 mx-3 ">
                <img
                  src="./images/Home services/news2.jpeg"
                  class="igm"
                  alt="new2"
                />
              </div>
              <div class="col-lg-8 media11 mx-3 p-2 m-2">
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>news paper cutting</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <hr />
      </div>
    </div>
  );
}
export default PressMedia;
