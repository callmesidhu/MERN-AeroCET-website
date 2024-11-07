import { useEffect, useRef, useState } from 'react';
import './Team.css';
import plane from '../assets/images/vectorPlane.png';
import drone from '../assets/images/vectorDrone.png';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

export default function Team() {
  const [isActive, setIsActive] = useState(false);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/teams');
  };

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.2 } // You can adjust this value depending on when you want the effect to trigger
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  return (
    <div
      onClick={goTo}
      ref={teamRef}
      className={clsx(
        "p-24 w-full shad lg:m-36 md:my-64 items-center lg:h-[500px] md:h-[600px] sm:h-[600px] flex-1 flex justify-around flex-col",
        { 'opacity-0 translate-y-8': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-700 ease-in-out delay-200': isActive } // Visible state with transition
      )}
    >
      {/* Animated heading */}
      <div
        className={clsx(
          "transition-all duration-500 ease-in-out",
          { 'opacity-0 translate-y-8': !isActive }, // Hidden state
          { 'opacity-100 translate-y-0 delay-500': isActive } // Visible state with delay
        )}
      >
        <h1 className="text-3xl mt-12">Our Team</h1>
        <p>Click to view our Team..!</p>
      </div>

      {/* Animated buttons */}
      <div className="flex-1 flex items-center justify-around w-full sm:flex-col md:flex-col lg:flex-row">
        <button
          className={clsx(
            "team-button transition-all duration-500 ease-in-out",
            { 'opacity-0 translate-y-8': !isActive }, // Hidden state
            { 'opacity-100 translate-y-0 delay-700': isActive } // Visible state with delay
          )}
        >
          <div className="">
            <img src={plane} alt="Image of a plane" className="team-image sm:h-20 md:h-32 lg:h-40" />
            <h1 className="text-3xl text-center">Plane</h1>
          </div>
        </button>

        <button
          className={clsx(
            "team-button transition-all duration-500 ease-in-out",
            { 'opacity-0 translate-y-8': !isActive }, // Hidden state
            { 'opacity-100 translate-y-0 delay-1000': isActive } // Visible state with delay
          )}
        >
          <div className="">
            <img src={drone} alt="Image of a drone" className="team-image sm:h-20 md:h-32 lg:h-40" />
            <h1 className="text-3xl text-center">Drone</h1>
          </div>
        </button>
      </div>
    </div>
  );
}
