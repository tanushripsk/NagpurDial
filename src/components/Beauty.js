import React from "react";
import "../App.css";
import PopularSearch from "./PopularSearch";
import { Link } from 'react-router-dom';
function Beauty() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner1">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div className="container">
          <div className="row hh">
            <div className="col-lg-4 col-lg-41">
              <Link to="/beautyparlour" className="icons-img">
                <img
                  src="./images/fafa icon/by.png"
                  className="icons-img"
                  alt="by"
                />{" "}
                Beauty Parlours
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/beautyparlour" className="icons-img">
                <img
                  src="./images/fafa icon/beauty services.png"
                  className="icons-img"
                  alt="beauty services"
                />{" "}
                Beauty Services
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/beautyparlour" className="icons-img hide1">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                  alt="bridal makeup"
                />{" "}
                Bridal Makeup
              </Link>
            </div>
          </div>
          <div className="row hh">
            <div className="col-lg-4 col-lg-41">
              <Link to="/beautyparlour" className="icons-img hide1">
                <img
                  src="./images/fafa icon/slen.png"
                  className="icons-img"
                  alt="slen"
                />{" "}
                Salons
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/beautyparlour" className="icons-img hide1">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                  alt="bridal makeup"
                />{" "}
                Spas
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/beautyparlour" className="icons-img hide1">
                <img
                  src="./images/fafa icon/WeddingPlanning.png"
                  className="icons-img"
                  alt="Wedding Planning"
                />{" "}
                Bridegroom Makeup
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/beautyparlour" className="icons-img">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                  alt="bridal makeup"
                />{" "}
                Bridal Makeup
              </Link>
            </div>
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/beautyparlour" className="icons-img">
                <img
                  src="./images/fafa icon/WeddingPlanning.png"
                  className="icons-img"
                  alt="weddingplanning"
                />{" "}
                Bridegroom
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/beautyparlour" className="icons-img">
                <img
                  src="./images/fafa icon/slen.png"
                  className="icons-img"
                  alt="slen"
                />{" "}
                Salons
              </Link>
            </div>
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/beautyparlour" className="icons-img">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                  alt="bridal makeup"
                />{" "}
                Spas
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <PopularSearch />
        <hr />
      </div>
    </div>
  );
}
export default Beauty;
