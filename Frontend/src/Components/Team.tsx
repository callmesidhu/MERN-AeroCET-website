import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import './Teams.css'

export default function Team() {
  const [isActive, setIsActive] = useState(false);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const goTo2023 = () => {
    navigate('/teams/2023');
  };
  const goTo2024 = () => {
    navigate('/teams/2024');
  };
  const goTo2025 = () => {
    navigate('/teams/2025');
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
      ref={teamRef}
      className={clsx(
        "p-24 w-full shad lg:m-36 md:my-64 items-center lg:h-[500px] md:h-[600px] sm:h-[600px] flex-1 flex flex-col",
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
        <h1 className="text-3xl mt-10 ">Our Team</h1>
      </div>

      {/* Execome heading and buttons */}
      <div className="text-center py-10">
        <h2 className="lg:text-[180px] md:text-[100px] sm:text-[80px] text-[50px] font-semibold mb-6 aven">Execome</h2>
        <div className="flex gap-2 justify-center lg:flex-row flex-col">
          <button
            onClick={goTo2025}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-300 transition"
          >
            2025
          </button>
          <button
            onClick={goTo2024}
            className="px-6 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-300 opacity-60 transition"
          >
            2024
          </button>
          <button
            onClick={goTo2023}
            className="px-6 py-2 bg-orange-900 text-white rounded-lg hover:bg-orange-300 opacity-40 transition"
          >
            2023
          </button>
          <div
            className="px-6 py-2 bg-orange-900 text-white rounded-lg  opacity-25 transition"
          >
            2022
          </div>
          <div
            className="px-6 py-2 bg-orange-900 text-white rounded-lg  opacity-10 transition"
          >
            2021
          </div>
        </div>
      </div>
    </div>
  );
}
