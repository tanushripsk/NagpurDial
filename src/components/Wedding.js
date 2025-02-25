import React from "react";
import "../weddingstyle.css";
import PopularSearch from "./PopularSearch";
import { Link } from "react-router-dom";
function Wedding() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        {/* Wedding Planning section */}
        <div style={{ padding: "5px" }}></div>
        <h5>
          <strong>wedding Planning</strong>
        </h5>
        <div class="container">
          <div class="row">
            <div class="col-lg-2">
              <center>
                <Link to="/hall" class="a">
                  <img src="./images/wedding/w1.png" class="w1" alt="w1" />
                </Link>

                <Link to="/hall" class="a">
                  Banquet Halls
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <center>
                {" "}
                <Link to="/caterings" class="a">
                  <img src="./images/wedding/w2.png" class="w1" alt="w2" />
                </Link>
                <Link to="/caterings" class="a">
                  Caterings{" "}
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <center>
                {" "}
                <Link to="/stageDecover" class="a">
                  <img src="./images/wedding/w3.png" class="w1" alt="w3" />
                </Link>
                <Link to="/stageDecover" class="a">
                  Decoration
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <center>
                {" "}
                <Link to="/photostudio" class="a">
                  {" "}
                  <img src="./images/wedding/w5.png" class="w1" alt="w5" />
                </Link>
                <Link to="/photostudio" class="a">
                  Photographer
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <center>
                <Link to="/pandits" class="a">
                  {" "}
                  <img src="./images/wedding/w4.png" class="w1" alt="w4" />
                </Link>

                <Link to="/pandits" class="a">
                  Pandits
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <center>
                {" "}
                <Link to="/invitation" class="a">
                  <img src="./images/wedding/w6.png" class="w1" alt="w1" />
                </Link>
                <Link to="/invitation" class="a">
                  Invitation cards
                </Link>
              </center>
            </div>
          </div>
        </div>
        <hr />
        {/* Wedding Planning for Bride section */}
        <h5>
          <strong>wedding Plannings for Bride</strong>
        </h5>
        <div class="container">
          <div class="row">
            <div class="col-lg-2">
              <Link to="/bridalwear" class="a">
                {" "}
                <img src="./images/wedding/p6.png" class="w2" alt="w2" />
              </Link>
              <center>
                <Link to="/bridalwear" class="a">
                  Bridal Wear
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/jewellary" class="a">
                {" "}
                <img src="./images/wedding/p5.png" class="w2" alt="w2" />
              </Link>
              <center>
                {" "}
                <Link to="/jewellary" class="a">
                  Jewellary Shops
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/beauty" class="a">
                <img src="./images/wedding/p4.png" class="w2" alt="w2" />
              </Link>
              <center>
                {" "}
                <Link to="/beauty" class="a">
                  Makeup Artists
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/mehandi" class="a">
                <img src="./images/wedding/p3.png" class="w2" alt="p3" />
              </Link>
              <center>
                {" "}
                <Link to="/mehandi" class="a">
                  Mehandi Artists
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/beauty" class="a">
                <img src="./images/wedding/p1.png" class="w2" alt="p1" />
              </Link>
              <center>
                <Link to="/beauty" class="a">
                  Hair Stylists
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/beauty" class="a">
                {" "}
                <img src="./images/wedding/p2.png" class="w2" alt="p2" />
              </Link>
              <center>
                <Link to="/beauty" class="a">
                  Salon
                </Link>
              </center>
            </div>
          </div>
        </div>
        <hr />
        {/* Wedding Planning for Groom section */}
        <h5>
          <strong>wedding Plannings for Groom</strong>
        </h5>
        <div class="container">
          <div class="row">
            <div class="col-lg-2">
              <Link to="/suits" class="a">
                <img src="./images/wedding/g1.png" class="w2" alt="g1" />
              </Link>
              <center>
                <Link to="/suits" class="a">
                  wedding Suits
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/mensalon" class="a">
                <img src="./images/wedding/g2.png" class="w2" alt="g2" />
              </Link>
              <center>
                {" "}
                <Link to="/mensalon" class="a">
                  Salon for Men{" "}
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="horse.html" class="a">
                {" "}
                <img src="./images/wedding/g3.png" class="w2" alt="g3" />
              </Link>
              <center>
                {" "}
                <Link to="horse.html" class="a">
                  Horses on Hire
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/bachlorparty" class="a">
                <img src="./images/wedding/g4.png" class="w2" alt="g4" />
              </Link>
              <center>
                {" "}
                <Link to="/bachlorparty" class="a">
                  Bachelor Party
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/menmakeup" class="a">
                <img src="./images/wedding/g5.png" class="w2" alt="g5" />
              </Link>
              <center>
                <Link to="/menmakeup" class="a">
                  Makeup Artists
                </Link>
              </center>
            </div>
            <div class="col-lg-2">
              <Link to="/menhairstyle" class="a">
                {" "}
                <img src="./images/wedding/g6.png" class="w2" alt="g6" />
              </Link>
              <center>
                <Link to="/menhairstyle" class="a">
                  {" "}
                  Hair Stylists
                </Link>
              </center>
            </div>
          </div>
        </div>
        <hr />
        {/* Pre-wedding Planning section */}

        <div class="container ">
          <div class="row">
            <div class="col-lg-4">
              <br />
              <br />
              <br />
              {/* <br />
              <br />
              <br />
              <br /> */}
              <h1 style={{ fontFamily: "Forte" }}>
                <strong>Pre-wedding Planning</strong>
              </h1>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-3">
                  <Link to="/astrologiest" class="a">
                    {" "}
                    <img src="./images/wedding/y1.png" class="w3" alt="y1" />
                  </Link>
                  <center>
                    <Link to="/astrologiest" class="a">
                      Astrologers
                    </Link>
                  </center>
                </div>
                <div class="col-lg-3">
                  <Link to="/marrigecertificateagents" class="a">
                    <img src="./images/wedding/y2.png" class="w3" alt="y2" />
                  </Link>
                  <center>
                    <Link to="/marrigecertificateagents" class="a">
                      Marrige Certificate
                    </Link>
                  </center>
                </div>
                <div class="col-lg-3">
                  <Link to="/jewellary" class="a">
                    <img src="./images/wedding/p5.png" class="w3" alt="p5" />
                  </Link>
                  <center>
                    <Link to="/jewellary" class="a">
                      Jewellary Shops
                    </Link>
                  </center>
                </div>
                <div class="col-lg-3 hide1">
                  <Link to="readymadegarments" class="a">
                    <img src="./images/wedding/y4.png" class="w3" alt="y4" />
                  </Link>
                  <center>
                    <Link to="/readymadegarments" class="a">
                      ReadyMade Garments
                    </Link>
                  </center>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3">
                  <Link to="/stagedecover" class="a">
                    {" "}
                    <img src="./images/wedding/y3.png" class="w3" alt="y3" />
                  </Link>
                  <center>
                    <Link to="/stagedecover" class="a">
                      Haldi Decors
                    </Link>
                  </center>
                </div>
                <div class="col-lg-3">
                  <Link to="/invitation" class="a">
                    <img src="./images/wedding/w6.png" class="w3" alt="w6" />
                  </Link>
                  <Link to="/invitation" class="a">
                    Invitation cards
                  </Link>
                </div>
                <div class="col-lg-3">
                  <Link to="/hotel" class="a">
                    {" "}
                    <img src="./images/wedding/y6.png" class="w3" alt="y6" />
                  </Link>
                  <center>
                    <Link to="/hotel" class="a">
                      Hotels
                    </Link>
                  </center>
                </div>
                <div class="col-lg-3 hide1">
                  <Link to="/honemoontour" class="a">
                    {" "}
                    <img src="./images/wedding/dj5.png" class="w3" alt="dj5" />
                  </Link>
                  <center>
                    <Link to="/honemoontour" class="a">
                      Honeymoon Tour Packages
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* For your Big day section */}
      {/* <h5>
        <strong>For your Big day</strong>
      </h5> */}
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            {/* <img scr="./images/wedding/w3.png" alt="foryourday" /> */}
            <br />
            <br />
            {/* <br />
            <br />
            <br />
            <br />
            <br /> */}
            <h1 style={{ fontFamily: "Forte" }}>
              <strong>For your Big day</strong>
            </h1>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-3">
                <Link to="/stageDecover" class="a">
                  {" "}
                  <img src="./images/wedding/w3.png" class="w3" alt="w3" />
                </Link>
                <center>
                  <Link to="/stagedecover" class="a">
                    Decoration
                  </Link>
                </center>
              </div>
              <div class="col-lg-3">
                <Link to="caterings" class="a">
                  {" "}
                  <img src="./images/wedding/w2.png" class="w3" alt="w2" />
                </Link>
                <center>
                  <Link to="caterings" class="a">
                    Cateres
                  </Link>
                </center>
              </div>
              <div class="col-lg-3">
                <Link to="jewellary" class="a">
                  <img src="./images/wedding/p5.png" class="w3" alt="p5" />
                </Link>
                <center>
                  <Link to="jewellary" class="a">
                    Jewellary Shops
                  </Link>
                </center>
              </div>
              <div class="col-lg-3 hide1">
                <Link to="dj" class="a">
                  <img src="./images/wedding/dj.png" class="w3" alt="dj" />
                </Link>
                <center>
                  <Link to="dj" class="a">
                    DJ Services
                  </Link>
                </center>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <Link to="bands.html" class="a">
                  <img src="./images/wedding/dj2.png" class="w3" alt="dj" />
                </Link>
                <center>
                  <Link to="bands.html" class="a">
                    Wedding Band
                  </Link>
                </center>
              </div>
              <div class="col-lg-3">
                <Link to="/beauty" class="a">
                  <img src="./images/wedding/dj3.png" class="w3" alt="dj3" />
                </Link>
                <center>
                  <Link to="/beauty" class="a">
                    Bridal Make-Up{" "}
                  </Link>
                </center>
              </div>
              <div class="col-lg-3">
                <Link to="/choregraphy" class="a">
                  <img src="./images/wedding/dj4.png" class="w3" alt="dj4" />
                </Link>
                <center>
                  <Link to="/choregraphy" class="a">
                    Choreographer
                  </Link>
                </center>
              </div>
              <div class="col-lg-3 hide1">
                <Link to="/eventorganizer" class="a">
                  <img src="./images/wedding/dj5.png" class="w3" alt="dj5" />
                </Link>
                <center>
                  <Link to="/eventorganizer" class="a">
                    Party Organisers
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <PopularSearch />
      <hr />
      <div style={{ padding: "2px" }}></div>
    </div>
  );
}

export default Wedding;
