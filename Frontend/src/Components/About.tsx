import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export default function About() {
  const [isActive, setIsActive] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={clsx(
        "p-6 lg:m-2 lg:p-12 xl:p-24 w-full flex flex-col items-center justify-center shad",
        { 'opacity-0 translate-y-32': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-1000 delay-300 ease-in-out': isActive } // Visible state
      )}
    >
      <div className={clsx(
        "shadow-lg rounded-lg p-6 lg:p-12 w-full max-w-4xl flex flex-col items-center text-center",
        { 'opacity-0 translate-y-8': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-500 delay-500 ease-in-out': isActive } // Visible state
      )}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
        <div className={clsx(
          "w-full h-64 md:h-80 lg:h-96 relative mb-6",
          { 'opacity-0 translate-y-20': !isActive }, // Hidden state
          { 'opacity-100 translate-y-0 transition-transform duration-1000 delay-500 ease-in-out': isActive } // Visible state
        )}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/Zrt77f7nTqY?autoplay=1&mute=1&loop=1&controls=0&playlist=Zrt77f7nTqY"
            title="About Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-base md:text-lg lg:text-xl mb-6">
        Started by aeromodelling enthusiasts of College of Engineering, Trivandrum, the official club continues to grow in aircraft design, analysis, and fabrication. We constantly explore new avenues of aero-modelling through competitions such as SAE ISS DDC, SAE ISS ADDC, Tathva NIT, Conscientia IIST and research  related to autonomous drone, fixed-wing UAVs and thereby VTOL (vertical take-off and landing) to expand our skills.
        </p>
      </div>
    </div>
  );
}
