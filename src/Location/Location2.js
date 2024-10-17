import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./locastion.css";

const Location2 = () => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const navigate = useNavigate();

  const titles = [
    'Search for a location...',
    'Search Nagpurs Businesses...',
    'Find Everything with NagpurDial...',
    'Search for Psk Technologies Pvt Ltd...',
    'Search for sitaburdi businesses...',
    'Search for Prolific WebCoder IT Services...',
    'Search for manewada businesses...',
  ];

  useEffect(() => {
    let index = 0;
    const rotateTitle = () => {
      setPlaceholder(titles[index]);
      index = (index + 1) % titles.length;
    };

    rotateTitle(); // Set initial placeholder
    const intervalId = setInterval(rotateTitle, 3000); // Change the placeholder every 6 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handleSearch = async () => {
    try {
      navigate(`/location/${encodeURIComponent(query)}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="search-location-form">
        <input
          type="text"
          placeholder="Search business by name or location..."
          id="input-box"
          name="search"
          className="form-control"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="mx-2" variant="primary" onClick={handleSearch}>
          Search
        </Button>

      </form>
    </div>
  );
};

export default Location2;
