import { useEffect, useRef, useState } from 'react';
import './Intro.css';
import text from '../assets/images/introText.png';
import plane from '../assets/images/plane.png';
import clsx from 'clsx';

export default function Intro() {
  // Define the state type for the offset
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // MouseMove event handler with correct type
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 2;
    const y = (e.clientY - innerHeight / 2) / .9;
    setOffset({ x, y });
  };

  const [isActive, setIsActive] = useState(false);
  const introRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);
  
  return (
    <div
        ref={introRef}
      className="flex w-full h-screen flex-1 flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Plane Image with Parallax Effect */}
      <img
        src={plane}
        alt="Plane"
        className="parallax-image lg:h-94 aspect-auto lg:mr-64 z-20"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      />

      {/* Intro Text Image */}
      <img
        src={text}
        alt="Intro Text"
        className="parallax-text lg:h-[36rem] aspect-auto"
        style={{
          transform: `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)`,
        }}
      />
      <h2 className={clsx(
            'z-10 lg:text-[30px] md:text-3xl sm:text-2xl la-belle-aurore-regular lg:mb-60 md:mb-0 sm:mb-0',
            { 'opacity-0 scale-0': !isActive }, // Hidden state
            { 'opacity-100 scale-100 transition-transform duration-1000 delay-0 ease-in-out': isActive } // Visible state
          )}  >Fly Against the Wind..!</h2>
    </div>
  );
}
