import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cof1 from "../images/coffe1.jpg";
// import cof2 from '../images/coffee2.jpg'
import cof3 from "../images/coffee3.jpg";
// import cof4 from '../images/coffee4.jpg'

const Car = () => {
  return (
      <div className="h-[50%] w-[100%]">
        <Carousel>
          <Carousel.Item>
            <img src={cof1} alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={cof3} alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default Car;
