import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';


export default function Achievements() {
  const [isActive, setIsActive] = useState(false);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const announcements = [
    { id: 1, heading: 'Announcement 1', message: 'Message 1', link: 'https://example.com', excel: 'file1.xlsx' },
    { id: 2, heading: 'Announcement 2', message: 'Message 2', link: 'https://example.com' },
    // Add more announcements as needed
  ];

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

  // Function to handle button click
  const handleClick = (item: { id: number; heading: string; message: string; link: string; excel: string; } | { id: number; heading: string; message: string; link: string; excel?: undefined; }) => {
    if (item.excel) {
      // Trigger file download
      const link = document.createElement('a');
      link.href = item.excel; // Assuming it's a relative path
      link.download = item.excel?.split('/').pop() || ''; // Extract filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Navigate to the link
      window.open(item.link, '_blank');
    }
  };

  return (
    <div
      onClick={goTo}
      ref={teamRef}
      className={clsx(
        'p-6 px-12 w-full shad lg:m-44 md:my-64 items-center lg:h-[600px] md:h-[700px] sm:h-[700px] flex-1 flex flex-col rounded-3xl',
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
              'flex flex-col lg:flex-row justify-evenly px-8 lg:px-20 py-6 rounded-md w-full bg-gray-200 shadow-lg text-gray-800 shadow-orange-600',
              'transition-all duration-500 ease-in-out',
              { 'opacity-0 translate-y-8': !isActive },
              { 'opacity-100 translate-y-0 delay-700': isActive }
            )}
          >
            <div className="justify-center w-full">
              <h2 className="text-2xl font-bold mb-2 lg:whitespace-nowrap">{item.heading}</h2>
              <p className="text-lg mb-4">{item.message}</p>
            </div>
            <button
              className="bg-orange-600 rounded-3xl px-10 py-2 lg:w-full lg:max-w-64 text-center text-white font-extrabold hover:bg-orange-700"
              onClick={() => handleClick(item)}
            >
              {item.excel ? 'Download' : 'Check'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
