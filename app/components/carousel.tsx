'use client'

import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

/**
 * 
 * @param param0 Implemented based on https://tailkits.com/blog/tailwind-css-carousel-with-react-a-step-by-step-guide/
 * @returns 
 */
const Carousel = ({ images = [''], autoSlide = true, autoSlideInterval = 3000, gallerySize = 5 }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setDirection(1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setDirection(-1);
  };

  const onGalleryClick = (galleryIndex: number) => {
    setCurrentIndex(galleryIndex);
    setDirection(0);
  }

  const getItemStyles = (index: number) : string[] => {
    const left = (index - 1 + images.length) % images.length
    const right = (index + 1) % images.length;
    console.log('index %d, direction %d, left %d, right %d, ', index, direction, left, right)
    const styles: Array<string> = [];
    for(let i = 0; i < images.length; i++) {
      let style: string;
      switch(i) {
        case index:
          if (direction == 0) {
            style = 'translate-x-0 visible transition-opacity opacity-100';
          } else {
            style = 'translate-x-0 visible';
          }
          break;
        case left:
          if (direction <= 0) {
          style = '-translate-x-full transition-none';
          } else {
            style = '-translate-x-full visible';
          }
          break;
        case right:
          if (direction < 0) {
          style = 'translate-x-full visible';
          } else {
            style = 'translate-x-full transition-none';
          }
          break;
        default:
          style = 'translate-x-full transition-none hidden';
      }
      styles.push(style);
      }
      console.log('style: ', styles);
      return styles;
    }

    const getGalleryStartEnd = () => {
      let start = 0;
      let end = gallerySize;
      if (currentIndex >= gallerySize) {
        start = currentIndex - gallerySize + 1;
      }
      if (images.length < gallerySize) {
        end = images.length;
      }
      return [start, end];
    }


  // Rendering party
  
  let [start, end] = getGalleryStartEnd();

  const imageSlice = images.slice(start, start + end)
  const itemStyles = getItemStyles(currentIndex);
  const galleryOffset = currentIndex / gallerySize * gallerySize; 

  return (
    <div className="relative w-full max-w-2xl">
      <div className="overflow-hidden relative h-[32rem]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transform duration-[450ms] ease-in-out ${itemStyles[index]}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
      <button
        className="absolute pl-1 top-1/2 left-1 transform -translate-y-1/2 rounded-full bg-blue-300 text-2xl w-9 h-9  bg-opacity-50 text-white"
        onClick={prevSlide}
      >
        <IoIosArrowBack />
        </button>
      <button
        className="absolute pl-2 top-1/2 right-1 transform -translate-y-1/2 rounded-full bg-blue-300 text-2xl w-9 h-9 bg-opacity-50 text-white"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>

      {/* Render gallery under the carousel */}
      <div className="left-0 flex justify-center">
        {
        imageSlice.map((image, index) => (
          <div
            key={index}
            className={`w-40 h-30 pt-1`}
            onClick={() => onGalleryClick(start + index)}
          >
            <img src={image} alt={`Slide ${start + index}`} 
              className={`w-40 h-auto object-cover border-solid border-2 ${index + start === currentIndex ? 'border-orange-400' : 'border-black-100'}`} />
          </div>
        ))}
      </div>

      { /* This commented code would render dots under the carousel instead of tumbnail gallery.) */}
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