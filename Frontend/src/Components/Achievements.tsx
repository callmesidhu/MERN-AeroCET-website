import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import achivements from '../../Data/achivements.json';


export default function Achievements() {
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
        "p-6 w-full shad lg:m-44 md:my-64 items-center lg:h-[600px] md:h-[700px] sm:h-[700px] flex-1 flex flex-col bg-gray-200 rounded-3xl",
        { 'opacity-0 translate-y-8': !isActive },
        { 'opacity-100 translate-y-0 transition-all duration-700 ease-in-out delay-200': isActive }
      )}
    >
      {/* Heading */}
      <h1
        className={clsx(
          "lg:text-4xl text-3xl font-bold text-gray-800 my-12",
          "transition-all duration-500 ease-in-out",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-500': isActive }
        )}
      >
        Achievements
      </h1>

      {/* Image */}
      <div className='flex flex-row gap-3'>
      {[...achivements].reverse().map((item, index) => (
          <div
            key={index}
        className={clsx(
          "flex-1 flex justify-center items-center ",
          "transition-all duration-500 ease-in-out",
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-700': isActive }
        )}
      >
        
        <img
          src={item.image}
          alt="Coming Soon"
          className="rounded-xl h-96 shadow-lg"
        />
      </div>
      ))}
      </div>
    </div>
  );
}
