import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap"; // Import Row and Col from react-bootstrap
import "./custom.css";
// import Seo from "../SEO/SEO";
const CategorySearchBar = () => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Search for a category...");
  const navigate = useNavigate();

  const titles = [
    "Search for a category...",
    "Search Nagpur's hotels...",
    "Search Nagpur's schools...",
    "Search Nagpur's colleges...",
    "Find Everything with NagpurDial...",
  ];

  useEffect(() => {
    let index = 0;
    const rotateTitle = () => {
      setPlaceholder(titles[index]);
      index = (index + 1) % titles.length;
    };

    rotateTitle(); // Set the initial placeholder
    const intervalId = setInterval(rotateTitle, 3000); // Rotate the placeholder every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (query.trim()) {
      navigate(`/results/${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
    {/* <Seo/> */}
    <div className="container">
      <Form onSubmit={handleSearch}>
        <Row className="align-items-center"> {/* Align items vertically */}
          <Col xs={9}> {/* Adjust column widths as needed */}
            <Form.Control
              type="text"
              placeholder={placeholder} // Dynamic placeholder
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Col>
          <Col xs={3}> {/* Button takes remaining space */}
            <Button type="submit" variant="primary" className="w-100"> {/* Full-width button */}
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
    </>
  );
};

export default CategorySearchBar;
