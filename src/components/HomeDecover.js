import React from "react";
import { Link } from 'react-router-dom';
function HomeDecover() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div className="banner2 ">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div style={{ padding: "2px" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-41">
              <Link to="/homefurniture" className="icons-img hide1">
                {" "}
                <img
                  src="./images/fafa icon/fourniture.png"
                  className="icons-img"
                  alt="furniture"
                />
                Furnitures
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/homefurniture" className="icons-img hide1">
                <img
                  src="./images/fafa icon/fourniture.png"
                  className="icons-img"
                  alt="furniture"
                />
                Furnishing
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/homefurniture" className="icons-img hide1">
                <img
                  src="./images/fafa icon/Lamps&Lighting.png"
                  className="icons-img"
                  alt="Lamps&Lighting"
                />
                Lamps & Lighting
              </Link>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-lg-41">
              <Link to="/homefurniture" className="icons-img ">
                <img
                  src="./images/fafa icon/InteriorDesigners.png"
                  className="icons-img"
                  alt="InteriorDesigners"
                />
                Interior Design
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/homefurniture" className="icons-img ">
                <img
                  src="./images/fafa icon/Housekeeping.png"
                  className="icons-img"
                  alt="Housekeeping"
                />
                Housekeeping
              </Link>
            </div>
            <div className="col-lg-4 col-lg-41">
              <Link to="/homefurniture" className="icons-img hide1">
                {" "}
                <img
                  src="./images/fafa icon/Kitchen&Dining.png"
                  className="icons-img"
                  alt="Kitchen&Dining"
                />
                Kitchen & Dining
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/homefurniture" className="icons-img">
                <img
                  src="./images/fafa icon/Lamps&Lighting.png"
                  className="icons-img"
                  alt="Lamps&Lighting"
                />
                Lamps& Lights
              </Link>
            </div>
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/homefurniture" className="icons-img">
                <img
                  src="./images/fafa icon/Kitchen&Dining.png"
                  className="icons-img"
                  alt="kitchen&Dining"
                />
                Kitchen & Dining{" "}
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/homefurniture" className="icons-img">
                {" "}
                <img
                  src="./images/fafa icon/fourniture.png"
                  className="icons-img"
                  alt="fourniture"
                />
                Furnitures
              </Link>
            </div>
            <div className="col-lg-6 col-lg-61 h">
              <Link to="/homefurniture" className="icons-img">
                <img
                  src="./images/fafa icon/fourniture.png"
                  className="icons-img"
                  alt="fourniture"
                />
                Furnishing
              </Link>
            </div>
          </div>
        </div>
        <hr />
        {/* <!-- --> */}
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
          Rental| Salons Courier Services |Dance Classes| Pathology Labs| Taxi
          Services| Cake Shops| AC Repair & Services| Mobile Phone| Dealers| Pet
          Shops | Dmart| Packers And Movers| Psychiatrists| Dharamshalas|
          Urologist Doctors| Bakeries | Bicycle | Dealers Coffee Shops|
          Paediatricians |Sonography Centres | Yoga Classes| Hostels
          Cardiologists| Electrical Shops| Skin Care Clinics | Diagnostic
          Centres| Homeopathic Doctors | Physiotherapists | Photo Studios |
          Plumbers |Music Classes| Electricians| Sports |Goods Dealers| Shoe
          Dealers| Hair Stylists| Gift Shops | Ophthalmologists | Car Repair &
          Services |Ayurvedic Doctors| Eye Clinics| Restaurants| Carpenters|
          Jewellery| Showrooms |Cooks On Hire |Stationery Shops| Nephrologists
          |Caterers Interior Designers| Rehabilitation Center | Grocery Stores
          |Banks ATM |5 Star Hotels |Hotels |Resorts |Plastic Surgeons
        </p>
        <div style={{ padding: "5px" }}></div>
      </div>
    </div>
  );
}
export default HomeDecover;
