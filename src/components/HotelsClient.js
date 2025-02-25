import React, { useState } from "react";
import Otp2 from "../Otp2";
import { Link } from "react-router-dom";
import axios from "axios";

const whatsappContacts = [
  { id: 1, phone: "9171266658887", text1: "Radisson Blu Hotel Nagpur" },
];

function HotelsClient() {
  const [showOTPModal, setShowOTPModal] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [credential, setCredential] = useState({
    name: "",
    number: "",
  });
  const host = "http://localhost:30000";

  const handleContactButtonClick = (contact) => {
    setSelectedContact(contact);
    setShowOTPModal(true);
  };

  const handleOtpVerified = () => {
    setShowContactForm(true);
    setShowOTPModal(false);
  };

  const handleCloseModal = () => {
    setShowOTPModal(false);
    setShowContactForm(false);
    setSelectedContact(null);
    setCredential({ name: "", number: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${host}/api/auth/businesschat`,
        credential
      );
      const json = response.data;
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        alert("Businesschat Data saved successfully!");
        openWhatsApp();
      } else {
        alert("Failed to submit form. Please fill in all fields correctly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const openWhatsApp = () => {
    const { name } = credential;
    const message = `I found your business on NagpurDial\nName: ${name}`;
    const whatsappNumber = "9171266658887"; // Use the selected contact's phone number
    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      whatsappNumber
    )}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prevCredential) => ({
      ...prevCredential,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h5>
        <strong>Nagpur's Top Hotel Services</strong>
      </h5>

      {/* Hotels List */}
      {whatsappContacts.map((contact, index) => (
        <div key={index} className="beauty">
          <div className="row">
            <div className="col-lg-4">
              {/* Carousel Placeholder */}
              <div className="container">
                <br />
                <div
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  {/* Carousel Controls */}
                  <Link
                    className="carousel-control-prev"
                    to="#"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <strong>{contact.text1}</strong>
              </h5>
              <p>Address Placeholder</p>
              <p style={{ color: "grey" }}>Hotel</p>
              {/* Stars Placeholder */}
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>


              <div className="container mt-1">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleContactButtonClick(contact)}
                >
                  <i
                    className="fa fa-comments"
                    style={{ fontSize: "20px", color: "red" }}
                  ></i>
                  <b> Chat with {contact.text1}</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal for OTP */}
      {showOTPModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">OTP Verification</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <Otp2
                  onClose={handleCloseModal}
                  onOtpVerified={handleOtpVerified}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Contact Form */}
      {showContactForm && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="p-3">
                    <form onSubmit={handleSubmit}>
                      <div className="row mx-2">
                        <div className="col-12">
                          <label htmlFor="name" className="form-label">
                            Full Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                            name="name"
                            value={credential.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <br />
                      <div className="row mx-2">
                        <div className="col-auto">
                          <button
                            type="submit"
                            className="btn btn-primary mb-2"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelsClient;
