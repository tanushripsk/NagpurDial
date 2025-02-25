import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Pagination } from "react-bootstrap";
import SEO from "../components/SEO";

const Location2Result = () => {
  const { query } = useParams(); // Get the search query from the URL
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  // Fetch locations based on query
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:30000/api/locations/search",
          { params: { locationsName: query } } // Make sure to pass the query as 'locationsName'
        );
        setLocations(response.data);
      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };

    fetchLocations();
  }, [query]);

  // Pagination calculation
  const totalPages = Math.ceil(locations.length / resultsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedLocations = locations.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handleChatButtonClick = (number, name) => {
    // Construct the WhatsApp message with the pre-filled content
    const whatsappMessage = `Hi, I found your business on NagpurDial. Location: ${name}.`;

    // Construct the WhatsApp link with the phone number and the message
    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      number
    )}&text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <Container>
       <SEO
          title={`businesses list of ${query} `}
          description={`Find the best ${query} in Nagpur, including top-rated restaurants, cafes, school, hotels, hospital, and more.`}
          keywords={`${query}, best ${query} in Nagpur, restaurants, cafes, food places`}
        />
      <h4 className="mt-4 mb-4">
        <strong>Search Results for "{query}"</strong>
      </h4>
      <p className="text-muted">
        Found <strong>{locations.length}</strong> entries.
      </p>

      <Row>
        {paginatedLocations.map((location) => (
          <Col lg={12} key={location._id} className="mb-4">
            <div className="p-3 border rounded">
              <div className="row">
                <div className="col-lg-4">
                <img
                    src={
                      location.image ||
                      (location.image_urls &&
                      Array.isArray(location.image_urls) &&
                      location.image_urls.length > 0 &&
                      location.image_urls[0].startsWith("http")
                        ? location.image_urls[0]
                        : "/default-image.jpg")
                    }
                    alt={location.name || "No Image Available"}
                    className="img-fluid rounded"
                    style={{
                      width: "350px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-lg-8">
                  <h5 className="text-success">
                    <strong>{location.name}</strong>
                  </h5>
                  <p className="mb-1">
                    <strong>Address:</strong> {location.location}
                  </p>
                  <p className="mb-1">
                    <strong>Contact:</strong> {location.number}
                  </p>
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleChatButtonClick(location.number, location.name)
                    }
                  >
                    Chat with {location.name}
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {locations.length > resultsPerPage && (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Pagination>
            <Pagination.Prev
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
};

export default Location2Result;
