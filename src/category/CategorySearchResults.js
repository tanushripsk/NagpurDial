import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Pagination } from "react-bootstrap";
import SEO from "../components/SEO";
const CategorySearchResults = () => {
  const { query } = useParams(); // Get the search query from the URL
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10; // Number of results per page

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:30000/api/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: query }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  // Pagination calculations
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(results.length / resultsPerPage);

  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger container">Error: {error}</div>;
  }

  if (!results || results.length === 0) {
    return (
      <div className="alert alert-warning container">No results found</div>
    );
  }

  return (
    <>
      {/* <Seo/> */}
      <Container>
        <SEO
          title={`Best ${query} in Nagpur`}
          description={`Find the best ${query} in Nagpur, including top-rated restaurants, cafes, school, hotels, hospital, and more.`}
          keywords={`${query}, best ${query} in Nagpur, restaurants, cafes, food places`}
        />
        <h4 className="mt-4 mb-4">
          <strong>Search Results for "{query}"</strong>
        </h4>
        <p className="text-muted">
          Found <strong>{results.length}</strong> entries.
        </p>
        <Row className="container">
          {currentResults.map((item) => (
            <Col key={item._id} md={12} className="mb-3 beauty">
              <div className="shadow-sm border border-light rounded-3 p-3 d-flex">
                <div className="me-3 col-lg-4">
                  <img
                    src={item.image_urls?.[0] || "/default-image.jpg"}
                    alt={item.name}
                    className="img-fluid rounded"
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h4 style={{ color: "green", fontWeight: "bold" }}>
                    {item.name}
                  </h4>
                  <p>
                    <strong>Address:</strong> {item.address?.street},{" "}
                    {item.address?.city}
                  </p>
                  <div>
                    <strong>Review:</strong>{" "}
                    <span style={{ color: "gold", fontSize: "1.2rem" }}>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </span>
                  </div>
                  <Button
                    variant="success"
                    className="mt-3"
                    href={`https://wa.me/${item.phone_numbers?.[0]?.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-whatsapp"
                      style={{ fontSize: "20px" }}
                    ></i>
                    &nbsp; Contact via WhatsApp
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        {results.length > resultsPerPage && (
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
    </>
  );
};

export default CategorySearchResults;
