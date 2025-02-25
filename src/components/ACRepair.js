import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import PopularSearch from "./PopularSearch";
function ACRepair() {
  return (
    <>
      <div className="container">
        <div className="container-fluid p-10">
          <div style={{ padding: "2px" }}></div>
          <div className="banner44">
            <div style={{ padding: "10px" }}></div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-3">
              <Link to="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/carrier-removebg-preview.png"
                  width="30px"
                  alt="carrier-removebg-preview"
                />
                Carrier
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/LG-removebg-preview.png"
                  width="20px"
                  alt="LG-removebg-preview"
                />
                LG
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/toshiba-removebg-preview.png"
                  width="30px"
                  alt="toshiba-removebg-preview"
                />
                Toshiba
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/onida-removebg-preview.png"
                  width="30px"
                  alt="onida-removebg-preview"
                />
                Onida
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <Link to="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/whirlpool__2_-removebg-preview.png"
                  width="30px"
                  alt="whirlpool__2_-removebg-preview"
                />
                Whirlpool
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <PopularSearch />
        <div style={{ padding: "2px" }}></div>
      </div>
    </>
  );
}
export default ACRepair;
