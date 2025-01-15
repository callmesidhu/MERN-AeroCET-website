import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import announcements from '../../Data/announcements.json';

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
        'p-6 px-12 w-full shad lg:m-36 md:my-64 items-center lg:h-[600px] md:h-[700px] sm:h-[700px] flex-1 flex flex-col rounded-3xl',
        { 'opacity-0 translate-y-8': !isActive },
        { 'opacity-100 translate-y-0 transition-all duration-700 ease-in-out delay-200': isActive }
      )}
    >
      {/* Heading */}
      <h1
        className={clsx(
          'lg:text-4xl text-3xl font-bold my-6',
          'transition-all duration-500 ease-in-out',
          { 'opacity-0 translate-y-8': !isActive },
          { 'opacity-100 translate-y-0 delay-500': isActive }
        )}
      >
        Announcements
      </h1>

      {/* Render Achievements in Reverse Order */}
      <div
        className="space-y-6 w-full overflow-y-auto px-4"
        style={{ maxHeight: '550px' }} // Adjust the height as needed
      >
        {[...announcements].reverse().map((item, index) => (
          <div
            key={index}
            className={clsx(
              'flex flex-col lg:flex-row justify-evenly px-8 py-6 rounded-md w-full bg-gray-200 shadow-lg   text-gray-800 shadow-orange-600',
              'transition-all duration-500 ease-in-out',
              { 'opacity-0 translate-y-8': !isActive },
              { 'opacity-100 translate-y-0 delay-700': isActive }
            )}
          >
            <div className='justify-start'>
            <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
            <p className="text-lg mb-4">{item.message}</p>
                </div>
          <button className='bg-orange-600 rounded-3xl px-10'>
          <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-950 font-extrabold"
            >
              Check Out
            </a>
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}
