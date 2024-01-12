import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SetCards = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [visibleCards, setVisibleCards] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSearchResults([]);
        const response = await fetch(`http://www.omdbapi.com/?apikey=aba2e2cc&s=${searchQuery}`);
        const result = await response.json();

        console.log(result);

        if (result.Response === 'True' && Array.isArray(result.Search)) {
          setSearchResults(result.Search);
        } else {
          console.error('La risposta dell\'API non contiene un array di risultati validi:', result);
        }
      } catch (error) {
        console.error('Errore durante il recupero dei dati dall\'API:', error);
      }
    };

    fetchData();
  }, []);

  const renderCards = () => {
    return searchResults.slice(0, visibleCards).map((item) => (
      <Col key={item.imdbID}>
        <Image
        src={item.Poster}
        alt={item.Title}
        fluid
      /> 
      </Col>
    ));
  };

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} md={4} lg={6} className="g-3">
        {renderCards()}
      </Row>
    </Container>
  );
};

export default SetCards;

/*http://www.omdbapi.com/?apikey=aba2e2cc&s=harry potter*/


