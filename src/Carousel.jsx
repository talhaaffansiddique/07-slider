import React, { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderID = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderID);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      <button type="button" onClick={prevSlide} className="prev">
        <FiChevronLeft />
      </button>
      <button type="button" onClick={nextSlide} className="next">
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
