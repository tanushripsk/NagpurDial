import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
function Bill() {
  return (
    <div classNameName="container">
      <div classNameName="container-fluid p-10">
        <div style={{ padding: "5px" }}></div>
      </div>
      <hr />
      <div className="container">
        <center>
          <h3>
            <strong>Bill & Recharge</strong>
          </h3>
        </center>
        <div className="row">
          <div className="col-lg-3">
            <Link to="/bills&recharge">
              {" "}
              <button
                type="button"
                className="btn btn-secondary active"
                data-bs-toggle="collapse"
                data-bs-target="#demo"
                style={{ fontSize: "12px" }}
              >
                My Bills
              </button>
            </Link>
            <div id="demo" className="collapse">
              <p></p>
              <div className="container88">
                <div className="row">
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        className="icons"
                        alt="mobileicon"
                      />
                      Prepaid
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        className="icons"
                        alt="mobileicon"
                      />
                      Postpaid
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/electricity.png"
                        className="icons"
                        alt="electricity"
                      />
                      Electricity
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/gas.png"
                        className="icons"
                        alt="gas"
                      />
                      Cylinder
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/water.png"
                        className="icons"
                        alt="water"
                      />
                      water
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        className="icons"
                        alt="mobileicon"
                      />
                      Landline
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/insurance.png"
                        className="icons"
                        alt="insurance"
                      />
                      Insurance
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/gas.png"
                        className="icons"
                        alt="gas"
                      />
                      Pay Gas Bill
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/water.png"
                        className="icons"
                        alt="water"
                      />
                      Boardband
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        className="icons"
                        alt="water"
                      />
                      Disk-1
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/insurance.png"
                        className="icons"
                        alt="insurance"
                      />
                      Fastag
                    </Link>
                  </div>
                  <div className="col-lg-3 col-lg-31">
                    <Link style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/gas.png"
                        className="icons"
                        alt="gas"
                      />
                      TV Cable
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <Link to="/bills&recharge">
              {" "}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="collapse"
                data-bs-target="#demo2"
                style={{ fontSize: "12px" }}
              >
                Mobiles
              </button>
            </Link>
            <div id="demo2" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo3"
              style={{ fontSize: "12px" }}
            >
              DTH
            </button>
            <div id="demo3" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo4"
              style={{ fontSize: "12px" }}
            >
              Electrical
            </button>
            <div id="demo4" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "5px" }}></div>
        <div className="row">
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo5"
              style={{ fontSize: "12px" }}
            >
              Gas<span style={{ color: "blue" }}>gas</span>
            </button>
            <div id="demo5" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo6"
              style={{ fontSize: "12px" }}
            >
              Landlines
            </button>
            <div id="demo6" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo12"
              style={{ fontSize: "12px" }}
            >
              Water
            </button>
            <div id="demo12" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo7"
              style={{ fontSize: "12px" }}
            >
              Insurance
            </button>
            <div id="demo7" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div className="row">
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo8"
              style={{ fontSize: "12px" }}
            >
              Cable TV
            </button>
            <div id="demo8" className="collapse">
              <p></p>

              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo9"
              style={{ fontSize: "12px" }}
            >
              FastTag
            </button>
            <div id="demo9" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo11"
              style={{ fontSize: "12px" }}
            >
              Loan
            </button>
            <div id="demo11" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} className="h"></div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo10"
              style={{ fontSize: "12px" }}
            >
              Boardband
            </button>
            <div id="demo10" className="collapse">
              <p></p>
              <div className="container88">
                <form>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label className="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label className="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5>
        <strong>Popular Categories</strong>
      </h5>
      <p style={{ color: "grey", fontSize: "12px" }}>
        Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
        Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
        Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
        Sexologist Doctors | Neurologists | Gynaecologist | & Obstetrician |
        Doctors |Train Ticket| Booking Agents| Travel Agents| Paying Guest
        Accommodations| General Physician Doctors| Dentists| Orthopaedic
        Doctors| Chemists| Motor Training Schools| Gastroenterologists |Car
        Rental| Salons Courier Services |Dance classNamees| Pathology Labs| Taxi
        Services| Cake Shops| AC Repair & Services| Mobile Phone| Dealers| Pet
        Shops | Dmart| Packers And Movers| Psychiatrists| Dharamshalas|
        Urologist Doctors| Bakeries | Bicycle | Dealers Coffee Shops|
        Paediatricians |Sonography Centres | Yoga classNamees| Hostels
        Cardiologists| Electrical Shops| Skin Care Clinics | Diagnostic Centres|
        Homeopathic Doctors | Physiotherapists | Photo Studios | Plumbers |Music
        classNamees| Electricians| Sports |Goods Dealers| Shoe Dealers| Hair
        Stylists| Gift Shops | Ophthalmologists | Car Repair & Services
        |Ayurvedic Doctors| Eye Clinics| Restaurants| Carpenters| Jewellery|
        Showrooms |Cooks On Hire |Stationery Shops| Nephrologists |Caterers
        Interior Designers| Rehabilitation Center | Grocery Stores |Banks ATM |5
        Star Hotels |Hotels |Resorts |Plastic Surgeons
      </p>
      <div style={{ padding: "2px" }}></div>
    </div>
  );
}

export default Bill;
