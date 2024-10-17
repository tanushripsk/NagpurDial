import React, { useState } from "react";
import "../App.css";
import PopularSearch from "./PopularSearch";

const contacts = [
  {
    id: 1,
    phone: "919975288300",
    name: "Neelam Family Garden Restaurant & Catering",
  },
  {
    id: 2,
    phone: "919975288300",
    name: "MOMADE FOOD INDUSTRY",
  },
  {
    id: 3,
    phone: "919975288300",
    name: "Cutting Katta Events and Catering Kharbi",
  },
  {
    id: 4,
    phone: "919975288300",
    name: "India's First Authentic Pohewala. We Serve, You Taste",
  },
];

function Restaurant() {
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
      <div className="banner">
        {/* Optional banner content */}
      </div>
      <div className="restaurant-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="restaurant-card" onClick={() => handleContactButtonClick(contact)}>
            <img src={`./images/client/Designer (${contact.id}).png`} alt={contact.name} className="restaurant-image" />
            <div className="restaurant-info">
              <h6><strong>{contact.name}</strong></h6>
              <p>
                <a
                  href={`https://wa.me/${contact.phone}`} // For WhatsApp messaging
                  className="contact-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message
                </a>
                <a
                  href={`tel:${contact.phone}`} // For direct phone calls
                  className="contact-button"
                >
                  Call
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <PopularSearch />
      <hr />
      {/* Add your OTP and Contact forms here */}
    </div>
  );
}

export default Restaurant;
