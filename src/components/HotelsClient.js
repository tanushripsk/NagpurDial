import React, { useState } from "react";
import Businesschat from "../Businesschat/Businesschatmodel";
import Otp2 from "../Otp2";

const whatsappContacts = [
  { id: 1, phone: "9171266658887", text1: "Radisson Blu Hotel Nagpur" },
];

// const whatsappContacts1 = [
//   { id: 2, phone: "919975288300", text2: "Nagpurdial" },
// ];

// const whatsappContacts2 = [
//   { id: 3, phone: "919975288300", text3: "Nagpurdial" },
// ];

function HotelsClient() {
  const [showOTPModal, setShowOTPModal] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

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
  };

  return (
    <div className="container">
      <h5>
        <strong>Nagpur's Top Hotel Services</strong>
      </h5>

      {/* Hotels List */}
      {[whatsappContacts].map((contacts, index) => (
        <div key={index} className="beauty">
          <div className="row">
            <div className="col-lg-4">
              {/* Carousel Placeholder */}
              <div className="container">
                <br />
                <div className="carousel slide" data-ride="carousel" data-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3" />
                    </div>
                  </div>
                  {/* Carousel Controls */}
                  <a className="carousel-control-prev" href="#" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5>{contacts[0].text1 || contacts[0].text2 || contacts[0].text3}</h5>
              <p>Address Placeholder</p>
              <p style={{ color: "grey" }}>Hotel</p>
              {/* Stars Placeholder */}
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star-half-full" style={{ fontSize: "26px", color: "#FFC300" }}></i>

              <div className="container mt-1">
                {contacts.map((contact) => (
                  <button
                    key={contact.id}
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleContactButtonClick(contact)}
                  >
                    <i className="fa fa-comments" style={{ fontSize: "20px", color: "red" }}></i>
                    <b> Chat with {contact.text1 || contact.text2 || contact.text3}</b>
                  </button>
                ))}
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
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <Otp2 onClose={handleCloseModal} onOtpVerified={handleOtpVerified} />
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
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <Businesschat
                  contact={selectedContact}
                  onClose={handleCloseModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelsClient;
