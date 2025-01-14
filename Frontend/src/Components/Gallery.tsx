import './Gallery.css';
import dummy from '../assets/images/sample.jpeg';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const [isActive, setIsActive] = useState(false);
  const [images, setImages] = useState<string[]>([]); // Ensure this is an array of strings (image URLs)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/gallery');
  };

  // Intersection Observer logic
  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then((response) => {
        console.log(response.data.images); // Check if URLs are correct
        setImages(response.data.images); // Store the fetched image URLs
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust based on when you want the effect to trigger
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <div 
     onClick={goTo}
      ref={galleryRef}
      className={clsx(
        "p-24 w-full shad lg:h-[700px] md:h-[600px] sm:h-[600px] items-center flex-1 flex justify-around lg:flex-row sm:flex-col",
        { 'opacity-0 translate-y-8': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-1000 delay-200 ease-in-out': isActive } // Visible state
      )}
    >
    
      {/* First Scrollable Column */}
      <div className={clsx(
        "flex flex-col scroll-container lg:w-[300px] md:w-[500px] sm:w-[250px] scroll-up items-center justify-around gap-3",
        { 'opacity-0 translate-y-8': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-700 delay-300 ease-in-out': isActive } // Visible state
      )}>
       {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl || dummy} alt="Loader-image" className="rounded-3xl" />
        ))}
      </div>

      {/* Second Scrollable Column */}
      <div className={clsx(
        "flex flex-col scroll-container lg:w-[400px] md:w-[500px] sm:w-[250px] scroll-down items-center justify-around gap-3 mx-2",
        { 'opacity-0 translate-y-8': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-1000 delay-700 ease-in-out': isActive } // Visible state
      )}>
       {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl || '/path/to/default-image.jpg'} alt="Loader-image" className="rounded-3xl" />
        ))}
      </div>

      {/* Third Scrollable Column */}
      <div className={clsx(
        "flex flex-col scroll-container lg:w-[300px] md:w-[500px] sm:w-[250px] scroll-up items-center justify-around gap-3",
        { 'opacity-0 translate-y-8': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-700 delay-500 ease-in-out': isActive } // Visible state
      )}>
       {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl || '/path/to/default-image.jpg'} alt="Loader-image" className="rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
