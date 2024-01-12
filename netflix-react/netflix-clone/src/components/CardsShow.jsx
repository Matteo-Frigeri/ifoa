import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import SetCards from './SetCards';

const CardsShow = ({ title, searchQuery }) => {
  return (
    /*<div className="px-2 py-1 mx-5 my-0">
      <h5 className="text-light mt-2 mb-2">{title}</h5>
          <div className="movie-row">
            <div className="row g-1">
              <SetCards searchQuery={searchQuery}/>
            </div>
          </div>
    </div>*/
    <div className='mt-3'>
    <h5 className="text-light mt-2 mb-2 ms-5 ps-2">{title}</h5>
    <Carousel>
      <Carousel.Item>
        <div className="px-2 py-1 mx-5 my-0">
          <div className="movie-row">
            <div className="row g-1">
              <SetCards searchQuery={searchQuery}/>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="px-2 py-1 mx-5 my-0">
          <div className="movie-row">
            <div className="row g-1">
              <SetCards searchQuery={searchQuery}/>
            </div>
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
    </div>
  
  );
}

export default CardsShow;