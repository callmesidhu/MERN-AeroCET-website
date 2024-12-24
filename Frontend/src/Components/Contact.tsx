import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import drone from '../assets/images/drone.png';
import download from '../assets/images/downloadButton.png';
import './Contact.css';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export default function Contact() {
  const [isActive, setIsActive] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger animation when 10% of the component is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className={clsx(
        "p-24 w-full shad lg:m-36 md:m-2 sm:my-2 items-center lg:h-[500px] md:h-[700px] h-[700px] flex-1 flex justify-around flex-col",
        { 'opacity-0 translate-y-32': !isActive }, // Hidden state
        { 'opacity-100 translate-y-0 transition-all duration-1000 delay-300 ease-in-out': isActive } // Visible state
      )}
    >
      {/* Content Section */}
      <div className={clsx(
        "flex-1 flex items-center justify-center flex-col",
        { 'opacity-0 scale-75': !isActive }, // Hidden state
        { 'opacity-100 scale-100 transition-transform duration-1000 delay-500 ease-in-out': isActive } // Visible state
      )}>
        <img src={drone} alt="Loader-image" className="loader-image h-48" />
        <h2>SUPPORT US IN THE UPCOMING SAE <br />Competitions!</h2>
        <button
         onClick={() => {
          console.log("download req");
        }}
        >
          <img src={download} alt="Loader-image" className="loader-image h-14 my-4" />
        </button>
      </div>

      {/* Social Media Icons */}
      <div className={clsx(
        "flex w-full justify-evenly my-10",
        { 'opacity-0 scale-50': !isActive }, // Hidden state
        { 'opacity-100 scale-100 transition-transform duration-1000 delay-700 ease-in-out': isActive } // Visible state
      )}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
          <FaFacebookF size={32} />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition-transform">
          <FaWhatsapp size={32} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-110 transition-transform">
          <FaYoutube size={32} />
        </a>
        <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:scale-110 transition-transform">
          <SiGmail size={32} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform">
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
}
