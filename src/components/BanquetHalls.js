import React, { useState } from "react";
import Businesschat from "../Businesschat/Businesschatmodel"; 
import Otp2 from "../Otp2";
import { Link } from 'react-router-dom';
const whatsappContacts = [
  { id: 1, phone: "919975288300", text1: "Nagpurdial" },
  // Add more contacts as needed
];

function BanquetHalls() {
  const [showOTPModal, setShowOTPModal] = useState(false);
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
      <div className="container-fluid p-10">
        <div className="banner24" style={{ padding: "10px" }}></div>
        <h5>
          <strong>Nagpur's Top Banquet Halls For Weddings</strong>
        </h5>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
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
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>No data</b>
              </h5>
              <p className="bp1">No data</p>
              <p className="bp2" style={{ color: "grey" }}>
                No data
              </p>
              <div>
                {[...Array(4).keys()].map((_, index) => (
                  <i
                    key={index}
                    className={`fa fa-star${index === 4 ? "-half-full" : ""}`}
                    style={{ fontSize: "26px", color: "#FFC300" }}
                  ></i>
                ))}
              </div>
              <div className="row">
                {whatsappContacts.map((contact) => (
                  <div key={contact.id} className="col-lg-4">
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
        </div>
        <h5>
          <strong>Popular Categories</strong>
        </h5>
        <p style={{ color: "grey", fontSize: "12px" }}>
          {/* List of categories */}
          Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
          Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
          Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
          Sexologist Doctors | Neurologists | Gynaecologist | & Obstetrician |
          Doctors | Train Ticket | Booking Agents | Travel Agents | Paying Guest
          Accommodations | General Physician Doctors | Dentists | Orthopaedic
          Doctors | Chemists | Motor Training Schools | Gastroenterologists |
          Car Rental | Salons | Courier Services | Dance Classes | Pathology
          Labs | Taxi Services | Cake Shops | AC Repair & Services | Mobile
          Phone | Dealers | Pet Shops | Dmart | Packers And Movers |
          Psychiatrists | Dharamshalas | Urologist Doctors | Bakeries | Bicycle
          Dealers | Coffee Shops | Paediatricians | Sonography Centres | Yoga
          Classes | Hostels Cardiologists | Electrical Shops | Skin Care Clinics
          | Diagnostic Centres | Homeopathic Doctors | Physiotherapists | Photo
          Studios | Plumbers | Music Classes | Electricians | Sports | Goods
          Dealers | Shoe Dealers | Hair Stylists | Gift Shops | Ophthalmologists
          | Car Repair & Services | Ayurvedic Doctors | Eye Clinics |
          Restaurants | Carpenters | Jewellery | Showrooms | Cooks On Hire |
          Stationery Shops | Nephrologists | Caterers | Interior Designers |
          Rehabilitation Center | Grocery Stores | Banks ATM | 5 Star Hotels |
          Hotels | Resorts | Plastic Surgeons
        </p>
      </div>

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
  );
}

export default BanquetHalls;
