import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://webeminence.com/wp-content/uploads/2021/02/iStock-831640620.jpg"
              className="d-block w-100 cssImages"
              alt="e-commerce app online"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2017/09/11173234/shutterstock_556236001-860x574.jpg"
              className="d-block w-100 cssImages"
              alt="online delivery available"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://knowledge.wharton.upenn.edu/wp-content/uploads/2020/01/online-shopping-e-commerce.jpg"
              className="d-block w-100 cssImages"
              alt="high rated app"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
