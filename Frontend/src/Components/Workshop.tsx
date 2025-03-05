import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import commingSoon from '../assets/images/commingSoon.png';

export default function Workshop() {
  const [isActive, setIsActive] = useState(false);
  const teamRef = useRef<HTMLDivElement | null>(null);
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
      { threshold: 0.2 }
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
        "p-6 w-full shad lg:m-44 md:my-64 items-center lg:h-[600px] md:h-[700px] sm:h-[700px] flex-1 flex flex-col bg-gray-100 rounded-3xl",
        { 'opacity-0 translate-y-8': !isActive },
        { 'opacity-100 translate-y-0 transition-all duration-700 ease-in-out delay-200': isActive }
      )}
    >
      {/* Heading */}
      <h1
        className={clsx(
          "text-4xl font-bold text-gray-800 my-12",
          "transition-all duration-500 ease-in-out",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-500': isActive }
        )}
      >
        Workshop
      </h1>

      {/* Image */}
      <div
        className={clsx(
          "flex-1 flex justify-center items-center",
          "transition-all duration-500 ease-in-out",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-700': isActive }
        )}
      >
        <img
          src={commingSoon}
          alt="Coming Soon"
          className="rounded-xl h-96 shadow-lg"
        />
      </div>
    </div>
  );
}
