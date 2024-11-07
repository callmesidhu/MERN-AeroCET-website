import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import dummy from '../assets/images/sample.jpeg';
import logo from '../assets/AeroCET-logo.png';
import clsx from 'clsx';

export default function Gallery() {
  const [isActive, setIsActive] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  };

  // Intersection Observer to handle animations when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
      ref={galleryRef} 
      className={clsx(
        "p-8 relative flex flex-col items-center overflow-y-auto",
        { 'opacity-0 translate-y-8': !isActive },
        { 'opacity-100 translate-y-0 transition-all duration-500 delay-200 ease-in-out': isActive }
      )}
    >
      {/* Centered Logo Button */}
      <button 
        onClick={goTo} 
        className={clsx(
          "mb-4 flex justify-center items-center transform transition duration-500",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-300': isActive }
        )}
      >
        <img src={logo} className="h-32 w-auto transform hover:scale-110 duration-300" alt="logo"/> 
      </button>

      {/* Animated Heading */}
      <h1 
        className={clsx(
          "text-2xl font-bold text-white mb-4 transition-all duration-500 ease-in-out",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-500': isActive }
        )}
      >
        Gallery
      </h1>
      <p 
        className={clsx(
          "text-white text-center mb-4 transition-all duration-500 ease-in-out",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-700': isActive }
        )}
      >
        Every picture has a story to tell..!
      </p>

      {/* Scrollable Gallery Container */}
      <div className="max-h-[80vh] grid gap-4 
                      grid-cols-2 
                      sm:grid-cols-1
                      md:grid-cols-3
                      lg:grid-cols-4">
        {Array.from({ length: 50 }).map((_, index) => (
          <img 
            key={index} 
            src={dummy} 
            alt="Loader-image" 
            className={clsx(
              "rounded-xl w-full h-auto transform transition duration-300 hover:scale-105",
              { 'opacity-0 translate-y-8': !isActive },
              { 'opacity-100 translate-y-0 delay-[index*50]': isActive } // Slight staggered effect
            )}
          />
        ))}
      </div>
    </div>
  );
}
