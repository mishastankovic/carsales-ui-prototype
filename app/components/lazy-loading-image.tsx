import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  style?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, style}) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null); // Explicit type for the ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the image is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (observer && imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div ref={imageRef} className={`${style}`}>
      {isVisible && <img src={src} alt={alt} className={`${style} object-fill`} />}
    </div>
  );
};

export default LazyImage;