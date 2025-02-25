import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Otp3 from "../Otp3"; // Import your OTP3 component
const AdvertiseModel = () => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (modalRef.current) {
      const myModal = new window.bootstrap.Modal(modalRef.current);
      myModal.show();
      return () => {
        myModal.dispose();
      };
    }
  }, []);
  return (
    <div className="modal" id="exampleModal" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">NagpurDial</h5>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </Link>
          </div>
          <div className="modal-body">
            <br />
           
            <Otp3 />
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseModel;
