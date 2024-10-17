import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./Image"
import LogoutButton from "./Logout";
const JumbotronRow = () => {
    const [credential, setCredential] = useState({
        name: "",
        address: "",
        number: "",
    });
    const navigate = useNavigate();
    const host = "http://localhost:3000";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${host}/api/auth/advertise`,
                credential
            );
            const json = response.data;
            if (json.success) {
                localStorage.setItem("token", json.authtoken);
                alert("Data saved successfully!"); // Show alert
                navigate("/adminuse"); // Navigate to home or another page after success
            } else {
                alert("Failed to submit form. Please fill in all fields correctly.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredential((prevCredential) => ({
            ...prevCredential,
            [name]: value,
        }));

    };
    return (
        <div className="container">

            <div className="row">
                {/* First Jumbotron */}
                <div className="col-md-1">
                    <div className="jumbotron bg-basic text-white">
                        {/* <h1 className="display-4">Form </h1> */}
                    </div>
                </div>

                {/* Second Jumbotron */}


                <div className="col-lg-5">
                    <div className="shadow-lg bg-basic text-black">
                        <br></br>
                        <center><h4 ><strong>Free Listing</strong> </h4></center>
                        <Image />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="shadow-lg bg-basic text-black">
                        <br />
                        <center><h4 className="mt-3"><strong>Advertise</strong> </h4></center>
                        <div className="p-3">
                            <form onSubmit={handleSubmit}>
                                <div className="row mx-2">
                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label">
                                            FullName
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your fullname"
                                            name="name"
                                            value={credential.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row mx-2">
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your address"
                                            name="address"
                                            value={credential.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row mx-2">
                                    <div className="col-12">
                                        <label htmlFor="number" className="form-label">
                                            Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your number"
                                            name="number"
                                            value={credential.number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="row mx-2">
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-success mb-2">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div style={{ padding: "30px" }}></div>
                    <LogoutButton />
                </div>
                <div className="col-md-1">
                    <div className="jumbotron bg-white text-white">
                        {/* <h1 className="display-4">Form </h1> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JumbotronRow;
