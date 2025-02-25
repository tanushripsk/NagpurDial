import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
function Overview() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <nav className="navbar">
          <ul className="menu">
            <li>
              <Link to="/overview">
                <b> Overview</b>
              </Link>
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
                News & Events <span className="caret"></span>
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
        </nav>
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div className="banner48">
          <div style={{ padding: "90px" }}></div>
          <div style={{ padding: "10px" }}>
            <Link>
              <img
                src="./images/client/psk.jpg"
                width="45px"
                height="45px"
                style={{ borderRadius: "50%", border: "2px solid white" }}
                alt="psk"
                className="mx-2"
              />
              <span style={{ color: "black", fontWeight: "bold", fontSize:"14px" }}>
                 Prashant S. Kadhao
              </span>
              <small>
                <span style={{ color: "black", fontWeight: "bold", fontSize:"12px" }}>
                  (Founder CEO)
                </span>
              </small>
            </Link>
          </div>
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <hr />
        <div className="mt-4 p-2 ">
          <div className="row">
            <div className="col-lg-6">
              <center>
                <h5 className="mt-3">
                  <strong>About NagpurDial</strong>
                </h5>
              </center>
              <p>
                Nagpur Dial it is just a Website (Website Name) design and
                developed by PSK Technologies Pvt. Ltd. IT Company Nagpur
                Maharashtra (all Rights About Nagpur dial website Reserved at
                PSK Technologies Pvt. Ltd.) it is Nagpur Local Businesses And
                Services Search engine (नागपुर का अपना लोकल सर्च इंजन) it
                provides local search related services to users and it helps to
                connect business to business within Nagpur. through website &
                mobile App (Android Web View). PSK Technologies Motive is to
                give fast services to connect users to businesses and Business
                to Business
              </p>
              <p>
                More Information about PSK Technologies pvt. Ltd. PSK
                Technologies IT firm started in 2011 by Mr. Prashant Kadhao, who
                has the vast experience in IT & Management field around 14
                years. Later on converted in it IT Company in the year 2019 as
                PSK Technolgies Pvt. Ltd. (CIN U72900MH2019PTC324858) Since its
                inception, “PSK Technologies is dedicatedly engaged in providing
                services of highest className to our esteemed clients/customers.
                Our dedicated team has been working for last 10 years and our
                objective is to give “Complete IT Solutions.” Our “Principle” is
                to give “Solution Based Services”. A team of certified IT
                Professionals who have expertise in Digital Marketing , Website
                Development & Computer Teaching & Software Development &
                Personal Computer hardware, Networking and software
                technologies.PSK Technologies is having more than 17 years of
                excellence as a Software & Hardware Development Firm and in
                providing training & Solutions on diverse IT education fields
                like Advance Hardware & Networking CCNA Linux MCITP MCSE
                Exchange Server CCNP AWS Cloud Computing Computer and Network
                Security, Programming, C, C++, JAVA, PHP, My-SQL, Information or
                Network Security, Database, Operating systems, Soft-skills, UI
                Development. Also we are in the field of E-commerce, Website
                Designing & Development, Digital Marketing like SEO, SMM, SEM,
                Email Marketing, Android App Development, Domain Registrations &
                Hosting. We are well known as the No. 1 IT Services Provider in
                Nagpur Maharashtra, Digital Marketing And Website Development |
                Computer Sales & Services & IT Training etc.
              </p>
            </div>
            <div className="col-lg-6">
              <center>
                <h5 className="mt-3">
                  <strong>key Highlights</strong>
                </h5>
              </center>
              <div className="row p-4">
                <div className="col-lg-6 col-lg-61 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="80px"
                      alt="primium listing"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Listing as of march 31, 2024</small>
                </div>
                <div className="h"></div>
                <div className="col-lg-6 col-lg-61 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="80px"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Active paid campaigns as of March 31, 2024</small>
                </div>
              </div>
              <div className="row p-4">
                <div className="col-lg-6 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="100px"
                      alt="primium listing"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Reviews and ratings as of March 31, 2024</small>
                </div>
                <div className="h"></div>
                <div className="col-lg-6 mx-2 key">
                  <center>
                    <img
                      src="./images/fafa icon/primium listing.png"
                      width="100px"
                      alt="primium listing"
                    />
                  </center>
                  <center>
                    <p style={{ color: "#175289" }}>
                      <strong>Number</strong>
                    </p>
                  </center>
                  <small>Listing as of march 31, 2024</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
      </div>
    </div>
  );
}
export default Overview;
