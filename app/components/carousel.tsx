'use client'

import React from 'react';

/**
 * 
 * @param param0 Implemented based on https://tailkits.com/blog/tailwind-css-carousel-with-react-a-step-by-step-guide/
 * @returns 
 */
const Carousel = ({ images = [''], autoSlide = true, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  let start = 0;
  let end = 5;
  if (currentIndex >= 5) {
    start = currentIndex - 5 + 1;
  }
  if (images.length < 5) {
    end = images.length;
  }

  const imageSlice = images.slice(start, start + end)
  return (
    <div className="relative w-full max-w-2xl">
      <div className="overflow-hidden relative h-[32rem]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-[450ms] ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full bg-blue-300 text-2xl w-9 font-bold bg-opacity-60 text-white"
        onClick={prevSlide}
      >
        {'<'}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full bg-blue-300 text-2xl w-9 font-bold bg-opacity-60 text-white"
        onClick={nextSlide}
      >
        {'>'}
      </button>
      <div className="left-0 flex justify-center">
        {
        imageSlice.map((image, index) => (
          <div
            key={index}
            className={`w-40 h-30  pt-1`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={image} alt={`Slide ${index}`} 
              className={`w-40 h-auto object-cover border-solid border-2 ${index + start === currentIndex ? 'border-red-700' : 'border-black-100'}`} />
          </div>
        ))}
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 rounded-lg">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;