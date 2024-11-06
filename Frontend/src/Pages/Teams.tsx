import { useNavigate } from "react-router-dom";
import logo from '../assets/AeroCET-logo.png';
import people from '../../Data/execom.json';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function Teams() {
  const [isActive, setIsActive] = useState(false);
  const teamsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  };

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust based on when you want the effect to trigger
    );

    if (teamsRef.current) {
      observer.observe(teamsRef.current);
    }

    return () => {
      if (teamsRef.current) {
        observer.unobserve(teamsRef.current);
      }
    };
  }, []);

  return (
    <div ref={teamsRef} className="p-3 lg:p-8 relative flex flex-col items-center h-full max-h-screen overflow-y-auto">
      {/* Centered Logo Button */}
      <button onClick={goTo} className={clsx(
          "mb-4 flex justify-center items-center transform transition duration-500",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-500': isActive }
        )}>
        <img src={logo} className="h-32 w-auto transform transition duration-00 hover:scale-110" alt="logo" />
      </button>
      
      {/* Content */}
      <h1
        className={clsx(
          "text-2xl font-bold text-white mb-4",
          { 'opacity-0 translate-y-8': !isActive }, // Hidden state
          { 'opacity-100 translate-y-0 transition-all duration-700 ease-in-out delay-200': isActive } // Visible state
        )}
      >
        Our Team
      </h1>
      <p
        className={clsx(
          "text-white text-center mb-4",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 transition-all duration-700 ease-in-out delay-400': isActive }
        )}
      >
        Meet the dedicated teams working behind the scenes to make our club a success!
      </p>
  
      {/* Team Members */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {people.map((member) => (
          <div
            key={member.id}
            className={clsx(
              "bg-gray-800 p-4 rounded-xl transform transition duration-300 hover:scale-105",
              { 'opacity-0 translate-y-8': !isActive }, // Hidden state
              { 'opacity-100 translate-y-0 transition-all duration-700 ease-in-out delay-700': isActive } // Visible state
            )}
          >
            <img src={member.imgURL || logo} className="rounded-lg" alt={member.name} />
            <h2 className="text-lg font-semibold text-orange-500 text-center">{member.name}</h2>
            <p className="text-white text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
