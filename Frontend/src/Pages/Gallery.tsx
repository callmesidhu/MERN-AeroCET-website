import { useNavigate } from "react-router-dom";
import dummy from '../assets/images/sample.jpeg';
import logo from '../assets/AeroCET-logo.png';

export default function Gallery() {
  const navigate = useNavigate();


  const goTo = () => {
    navigate('/');
  };


  return (
    <div className="p-8 relative flex flex-col items-center overflow-y-auto">
      {/* Centered Logo Button */}
      <button 
        onClick={goTo} 
        className="mb-4 flex justify-center items-center"
      >
        <img src={logo} className="h-32 w-auto transform transition duration-400 hover:scale-110" alt="logo"/> 
      </button>

      <h1 className="text-2xl font-bold text-white mb-4">Gallery</h1>
      <p className="text-white text-center mb-4">
      Every picture has a story to tell..!
      </p>
      
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


    </div>
  );
}
