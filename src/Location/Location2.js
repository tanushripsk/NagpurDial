import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./locastion.css";

const Location2 = () => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const navigate = useNavigate();

  const titles = [
    "Search for a location...",
    "Search Nagpur's Businesses...",
    "Find Everything with NagpurDial...",
    "Search for Psk Technologies Pvt Ltd...",
    "Search for Sitaburdi businesses...",
    "Search for Prolific WebCoder IT Services...",
    "Search for Manewada businesses...",
  ];

  useEffect(() => {
    let index = 0;
    const rotateTitle = () => {
      setPlaceholder(titles[index]);
      index = (index + 1) % titles.length;
    };

    rotateTitle(); // Set initial placeholder
    const intervalId = setInterval(rotateTitle, 3000); // Change the placeholder every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/location/${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission default behavior
      handleSearch(); // Trigger search
    }
  };

  return (
    <div>
      <form className="search-location-form">
        <input
          type="text"
          placeholder={placeholder} // Dynamic placeholder
          id="input-box"
          name="search"
          className="form-control"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
        />
        <Button className="mx-2" variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default Location2;
