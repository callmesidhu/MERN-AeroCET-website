import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import dummy from '../assets/images/sample.jpeg';
import logo from '../assets/AeroCET-logo.png';

export default function Gallery() {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  const goTo = () => {
    navigate('/');
  };

  // Show "Go to Top" button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100); // Show button after 100px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-8 relative flex flex-col items-center overflow-y-auto">
      {/* Centered Logo Button */}
      <button 
        onClick={goTo} 
        className="mb-4 flex justify-center items-center"
      >
        <img src={logo} className="h-32 w-auto" alt="logo"/> 
      </button>
      
      {/* Scrollable Gallery Container */}
      <div className="max-h-[80vh] grid gap-4 
                      grid-cols-2 
                      sm:grid-cols-1
                      md:grid-cols-3
                      lg:grid-cols-4">
        {Array.from({ length: 50 }).map((_, index) => (
          <img 
            key={index} 
            src={dummy} 
            alt="Loader-image" 
            className="rounded-xl w-full h-auto transform transition duration-300 hover:scale-105" 
          />
        ))}
      </div>

      {/* "Go to Top" Button */}
      {showTopButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-5 right-5 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-800"
          aria-label="Go to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
}
