import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// for seo//
import { Helmet, HelmetProvider } from "react-helmet-async";

// Import components
import About from "./components/About";
import Index from "./components/Index";
import Signup from "./Signup & Login/Signup";
import Login from "./Signup & Login/Login";
import Otp from "./Otp";
import ModelComponent from "./Models For Otp/ModalComponent";
import Model1 from "./Models For Otp/Model1";
import Model3 from "./Models For Otp/Model3";
import Notes from "./components/Notes";
import NoteState from "./context/NoteState";
import Home1 from "./components/Home1";
import About1 from "./components/About1";
import Nav from "./Header & Footer/Nav";
import Otp1 from "./Otp1";
import ImageForm from "./ImageForm";
import Footer from "./Header & Footer/Footer";

import LocationDetails from "./Location/LocationDetail";
import Location2 from "./Location/Location2";
import Advertise from "./Advertise/Advertise";
import AdvertiseModel from "./Advertise/AdvertiseModel";
import Businesschat from "./Businesschat/Businesschart";
import Businesschatmodel from "./Businesschat/Businesschatmodel";
import AdminPanel from "./Admin/AdminPanel";
import JumbotronRow from "./Admin/JumbotronRow";
import Image from "./Admin/Image";
import LogoutButton from "./Admin/Logout";

import CategorySearchBar from "./category/CategorySearchBar";
import CategorySearchResults from "./category/CategorySearchResults";

// Import other components
import InternationalSim from "./components/InternationalSim";
import Internet from "./components/Internet";
import InvitationCards from "./components/InvitationCards";
import Jewellary from "./components/Jewellary";
import Jobs from "./components/Jobs";
import Lawyers from "./components/Lawyers";
import Listing from "./components/Listing";
import Manufacturing from "./components/Manufacturing";
import MarrigeCertificateAgents from "./components/MarrigeCertificateAgents";
import MehandiArtist from "./components/MehandiArtist";
import MenhairStyle from "./components/MenhairStyle";
import MenMakeUpArtist from "./components/MenMakeUpArtist";
import MenSalon from "./components/MenSalon";
import Movie from "./components/Movie";
import Overview from "./components/Overview";
import PackersMovers from "./components/PackersMovers";
import Panditji from "./components/Panditji";
import PetShops from "./components/PetShops";
import PGhostel from "./components/PGhostel";
import PhotoStudio from "./components/PhotoStudio";
import PressMedia from "./components/PressMedia";
import ReadyMadeGarments from "./components/ReadyMadeGarments";
import RentAndHire from "./components/RentAndHire";
import RentServices from "./components/RentServices";
import Report from "./components/Report";
import Restaurant from "./components/Restaurant";
import Suits from "./components/Suits";
import Security from "./components/Security";
import Software from "./components/Software";
import Stagedecover from "./components/Stagedecover";
import Tatto from "./components/Tatto";
import Train from "./components/Train";
import Training from "./components/Training";
import Valuers from "./components/Valuers";
import Video from "./components/Video";
import Visa from "./components/Visa";
import Wedding from "./components/Wedding";
import Restro from "./components/Restro";
import Store from "./components/Store";

// today edited
import HotelsClient from "./components/HotelsClient";
import Beauty from "./components/Beauty";
import BeautyParlour from "./components/BeautyParlour";
import HomeDecover from "./components/HomeDecover";
import HomeFuriture from "./components/HomeFuriture";
import Education from "./components/Education";
import EducationTraining from "./components/EducationTraining";
import Hospital from "./components/Hospital";
import HospitalsClinic from "./components/HospitalsClinic";
import Contractor from "./components/Contractor";
import ContractorsClients from "./components/ContractorsClients";
import EstaeAgents from "./components/EstaeAgents";
import Dentist from "./components/Dentist";
import GYM from "./components/GYM";
import Consultants from "./components/Consultants";
import EventOrganizers from "./components/EventOrganizers";
import EventsOrganizersServices from "./components/EventsOrganizersServices";
import DrivingSchool from "./components/DrivingSchool";
import Courier from "./components/Courier";
import CourierClients from "./components/CourierClients";

import Halls from "./components/Halls";
import Catering from "./components/Catering";
import ACRepair from "./components/ACRepair";
import ACRepairShops from "./components/ACRepairShops";
import CarRepaire from "./components/CarRepaire";
import BikeServices from "./components/BikeServices";
import Grocery from "./components/Grocery";
import Electrician from "./components/Electrician";
const App = () => {
  return (
    <HelmetProvider>
      <NoteState>
        <Router>
          <Nav />

          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/otp" element={<Otp />} />
            <Route exact path="/otp1" element={<Otp1 />} />
            <Route exact path="/model" element={<ModelComponent />} />
            <Route exact path="/model1" element={<Model1 />} />
            <Route exact path="/model3" element={<Model3 />} />
            <Route exact path="/note" element={<Notes />} />
            <Route exact path="/home1" element={<Home1 />} />
            <Route exact path="/about1" element={<About1 />} />
            <Route exact path="/imageform" element={<ImageForm />} />

            <Route path="/location/:query" element={<LocationDetails />} />

            <Route exact path="/location2" element={<Location2 />} />

            <Route exact path="/advertise" element={<Advertise />} />
            <Route exact path="/advertisemodel" element={<AdvertiseModel />} />
            <Route exact path="/businesschat" element={<Businesschat />} />
            <Route exact path="/adminpanel" element={<AdminPanel />} />
            <Route exact path="/adminuse" element={<JumbotronRow />} />
            <Route exact path="/image" element={<Image />} />
            <Route exact path="/logout" element={<LogoutButton />} />
            <Route
              exact
              path="/businesschatmodel"
              element={<Businesschatmodel />}
            />

            <Route path="/categorysearch" element={<CategorySearchBar />} />
            {/* Route for the CategorySearchResults page */}
            <Route path="/results/:query" element={<CategorySearchResults />} />

            {/* Other Routes */}
            <Route
              exact
              path="/internationalsim"
              element={<InternationalSim />}
            />
            <Route exact path="/internet" element={<Internet />} />
            <Route exact path="/invitationcard" element={<InvitationCards />} />
            <Route exact path="/jewellary" element={<Jewellary />} />
            <Route exact path="/job" element={<Jobs />} />
            <Route exact path="/lawyers" element={<Lawyers />} />
            <Route exact path="/listing" element={<Listing />} />
            <Route exact path="/manufacturing" element={<Manufacturing />} />
            <Route
              exact
              path="/marrigecertificateagents"
              element={<MarrigeCertificateAgents />}
            />
            <Route exact path="/mehandi" element={<MehandiArtist />} />
            <Route exact path="/menhairstyle" element={<MenhairStyle />} />
            <Route exact path="/menmakeup" element={<MenMakeUpArtist />} />
            <Route exact path="/mensalon" element={<MenSalon />} />
            <Route exact path="/movies" element={<Movie />} />
            <Route exact path="/overview" element={<Overview />} />
            <Route exact path="/packers&movers" element={<PackersMovers />} />
            <Route exact path="/panditji" element={<Panditji />} />
            <Route exact path="/petshops" element={<PetShops />} />
            <Route exact path="/pghotels" element={<PGhostel />} />
            <Route exact path="/photostudio" element={<PhotoStudio />} />
            <Route exact path="/press" element={<PressMedia />} />
            <Route
              exact
              path="/readymadegarments"
              element={<ReadyMadeGarments />}
            />
            <Route exact path="/rentandhire" element={<RentAndHire />} />
            <Route exact path="/rentservice" element={<RentServices />} />
            <Route exact path="/report" element={<Report />} />
            <Route exact path="/restaurant" element={<Restaurant />} />
            <Route exact path="/Suits" element={<Suits />} />
            <Route exact path="/Security" element={<Security />} />
            <Route exact path="/Software" element={<Software />} />
            <Route exact path="/Stagedecover" element={<Stagedecover />} />
            <Route exact path="/Tatto" element={<Tatto />} />
            <Route exact path="/Train" element={<Train />} />
            <Route exact path="/Training" element={<Training />} />
            <Route exact path="/Valuers" element={<Valuers />} />
            <Route exact path="/Video" element={<Video />} />
            <Route exact path="/Visa" element={<Visa />} />
            <Route exact path="/Wedding" element={<Wedding />} />
            <Route exact path="/restro" element={<Restro />} />
            <Route exact path="/store" element={<Store />} />

            {/* today edited */}
            <Route exact path="/hotelclient" element={<HotelsClient />} />
            <Route exact path="/beauty" element={<Beauty />} />
            <Route exact path="/beautyparlour" element={<BeautyParlour />} />
            <Route exact path="/homedecover" element={<HomeDecover />} />
            <Route exact path="/homefurniture" element={<HomeFuriture />} />
            <Route exact path="/education" element={<Education />} />
            <Route
              exact
              path="/educationschools"
              element={<EducationTraining />}
            />
            <Route exact path="/hospital" element={<Hospital />} />
            <Route exact path="/hospitalclient" element={<HospitalsClinic />} />
            <Route exact path="/contractors" element={<Contractor />} />
            <Route
              exact
              path="/contractorsclients"
              element={<ContractorsClients />}
            />
            <Route exact path="/estaeagents" element={<EstaeAgents />} />
            <Route exact path="/dentist" element={<Dentist />} />
            <Route exact path="/gym" element={<GYM />} />
            <Route exact path="/consultants" element={<Consultants />} />
            <Route
              exact
              path="/eventorganizers"
              element={<EventOrganizers />}
            />
            <Route
              exact
              path="/eventorganizerservices"
              element={<EventsOrganizersServices />}
            />
            <Route exact path="/drivingschool" element={<DrivingSchool />} />
            <Route exact path="/couriers" element={<Courier />} />
            <Route exact path="/courierServices" element={<CourierClients />} />
            <Route exact path="/halls" element={<Halls />} />
            <Route exact path="/cateres" element={<Catering />} />
            <Route exact path="/acrepaire" element={<ACRepair />} />
            <Route exact path="/acrepairshops" element={<ACRepairShops />} />
            <Route exact path="/carservices" element={<CarRepaire/>} />
            <Route exact path="/bike" element={<BikeServices />} />
            <Route exact path="/grocery" element={<Grocery />} />
            <Route exact path="/electrician" element={<Electrician />} />
          </Routes>
          <Footer />
        </Router>
      </NoteState>
    </HelmetProvider>
  );
};

export default App;
