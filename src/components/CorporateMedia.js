import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
function CorporateMedia() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner48">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <hr />

        <div className="media">
          <div className="container mt-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link active" to="/corporatemedia">
                  Media(all)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/press">
                  Press
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/video">
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hh" to="/report">
                  Consumers Reports
                </Link>
                <Link className="nav-link h" to="/report">
                  Reports
                </Link>
              </li>
            </ul>

            <div style={{ padding: "15px" }}></div>
            <div className="row  mt-3">
              <div className="col-lg-4 p-4 mt-2 media1 mx-3 ">
                <img src="./images/Home services/news2.jpeg" className="igm" />
              </div>
              <div className="col-lg-8 media11 mx-3 p-2 m-2">
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      className="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>news paper cutting</b>
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      className="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>news paper cutting</b>
                    </p>
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

export default CorporateMedia;
