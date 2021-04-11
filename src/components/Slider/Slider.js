import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


import "./Slider.scss";

const Slider = ({ images, children }) => {
  const [index, setIndex] = useState(0);
  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };
  return (
    images.length > 0 && (
      <div className="slider">
        <div className="arrow arrow-left" onClick={slideLeft}><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="slider-container">
          {children}
          <img src={images[index]} alt={index} />
        </div>
        <div className="arrow arrow-right" onClick={slideRight}><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    )
  );
};

export default Slider;
