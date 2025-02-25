import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Video() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <nav className="navbar">
          <ul className="menu">
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b>News & Events</b> <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/corporatemedia">Corporate News</Link>
                </li>
                <li>
                  <Link to="/press">Press Release</Link>
                </li>
                <li>
                  <Link to="/corporatemedia">Goverments news</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/csr">CSR</Link>
            </li>
          </ul>
          <div className="offcanvas offcanvas-start" id="demo1">
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="row">
                <div className="col-lg-6">
                  <h4>
                    <b>Sign-in</b>
                  </h4>
                  <img
                    src="./images/fafa icon/usericon.png"
                    alt="userlogin image"
                    style={{ width: "40px", float: "right" }}
                  />
                </div>
              </div>
              <p>
                <i className="fa fa-language"></i> English
              </p>
              <p>
                <i className="fa fa-user"></i> Customer Service
              </p>
              <p>
                <i className="fa fa-line-chart"></i> List Your Busimess
              </p>
              <p>
                <i className="fa fa-bullhorn"></i> Advertise
              </p>
              <p>
                <i className="fa fa-vcard-o"></i> My Transactions
              </p>
              <p>
                <i className="fa fa-users"></i> Manage Quotes
              </p>
              <p>
                <i className="fa fa-laptop"></i> We are hiring
              </p>
              <p>
                <i className="fa fa-cog"></i> Settings
              </p>
              <p>
                <i className="fa fa-universal-access"></i> Privacy Policy
              </p>
              <p>
                <i className="fa fa-slideshare"></i> Investor Relations
              </p>
              <p>
                <i className="fa fa-plus-square"></i> What's New
              </p>
              <p>
                <i className="fa fa-paperclip"></i> Others
              </p>
              <p>
                <i className="fa fa-user-times"></i> Sign Out
              </p>
            </div>
          </div>
          <li
            data-bs-toggle="offcanvas"
            data-bs-target="#demo1"
            className="hide"
          >
            <img
              src="./images/fafa icon/usericon.png"
              alt="userlogin image"
              style={{ width: "25px" }}
            />
          </li>
        </nav>
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div className="banner48">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div className="media">
          <div className="container mt-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="/corporatemedia">
                  Media(all)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/press">
                  Press
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/video">
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hide1" to="/report">
                  Consumers Reports
                </Link>
                <Link className="nav-link hide" to="/report">
                  Reports
                </Link>
              </li>
            </ul>
            <div style={{ padding: "15px" }}></div>
            <div className="row mt-3">
              <div className="col-lg-8 p-4 mt-2 media10 mx-3 ">
                <iframe
                  className="currentvideo"
                  src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-lg-4 media110 mx-3 p-2 m-2">
                <h5>
                  <b>More Videos</b>
                </h5>
                <iframe
                  className="morevideo"
                  src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="morevideo"
                  src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="morevideo"
                  src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="morevideo"
                  src="https://www.youtube.com/embed/Xn9HRJYas8s?si=kM-VyBqcvV21T915"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
      </div>
    </div>
  );
}

export default Video;
