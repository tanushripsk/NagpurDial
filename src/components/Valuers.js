import React,{useState} from "react";

import Businesschat from "../Businesschat/Businesschatmodel"; 
import Otp2 from "../Otp2";
import { Link } from 'react-router-dom';
const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },

];

const whatsappContacts1 = [
  { id: 2, phone: "919975288300", text2: "Nagpurdial" },
  // Add more contacts as needed
];

function Valuers() {

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
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner40">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <h5>
          <strong>Top Valuers in Nagpur</strong>
        </h5>
        <div style={{ padding: "2px" }}></div>
        <div style={{ padding: "2px" }}></div>
        {/* client-1 */}
        <div style={{ padding: "2px" }}></div>
        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly"
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
                  <Link
                    className="carousel-control-prev"
                    to="#carouselExampleSlidesOnly"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#carouselExampleSlidesOnly"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>A1 Investments</b>
              </h5>
              <p className="bp1">
                Plot no. 53, Ashirwad Towers, Block no. 501 & 502, Besides
                Store, Bajaj Nagar, Nagpur - 440010
              </p>
              <p className="bp2" style={{ color: "grey" }}>
                We aim for SLR (Safety, Liquidity, Returns) in that order
                Services Offered - Goal Based Investment Planning, Personalized
                Investment Planning
              </p>
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
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
             {whatsappContacts.map((contact) => (
                <div key={contact.id1} className="col-lg-4">
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
              ))}

            </div>
          </div>
        </div>
        <div style={{ padding: "2px" }}></div>
        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly1"
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
                  <Link
                    className="carousel-control-prev"
                    to="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>LegalFin Advisors - Company</b>
              </h5>
              <p className="bp1">
                Plot no. 128, Wardha Rd, behind Haldiram's, Ajni Square,
                Vivekanand Nagar, Nagpur, Maharashtra 440015
              </p>
              <p className="bp2" style={{ color: "grey" }}>
                Registration In Nagpur, Trademark Registration, GST
                Registration, Gumasta License & Best CA Firm
              </p>
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
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
               {whatsappContacts.map((contact) => (
                <div key={contact.id1} className="col-lg-4">
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
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
         {/* Modal for OTP and Contact1 */}
              {showOTPModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">OTP Verification</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
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
      {showContactForm && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
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
    </div>
  );
}

export default Valuers;
