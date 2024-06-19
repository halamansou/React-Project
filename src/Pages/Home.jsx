import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../Pages/img.jpg';

export function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={img}
            alt="First slide"
            className="d-block w-100" // Add necessary Bootstrap classes
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </div>
  );
}
