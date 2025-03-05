
import { useLocation, useNavigate } from 'react-router-dom';
import img2023 from '../../Data/execom/2023.jpg';
import img2024 from '../../Data/execom/2024.jpg';

function FullPic() {
  const location = useLocation(); // Access the current URL path
  const navigate = useNavigate(); // Hook for navigation

  // Handler for navigating to the Home page
  const goHome = () => {
    navigate('/'); // Navigates to the home page
  };

  if (location.pathname === '/teams/2024') {
    return (
      
      <div className=" h-screen overflow-auto p-0 lg:px-64">
        <button
        onClick={goHome}
        className=" opacity-30 rounded-full absolute top-5 right-5 bg-red-700 text-white pb-2 lg:px-9 px-3 font-extrabold text-3xl flex items-center hover:bg-orange-600 transition"
      >
  
  &lt;
      </button>
        <img src={img2024} alt="2024 Team" className="min-w-full" />
      </div>
    );
  }
  if (location.pathname === '/teams/2023') {
    return (
      <div className=" h-screen overflow-auto p-0 lg:px-64">
         <button
        onClick={goHome}
        className=" opacity-30 rounded-full absolute top-5 right-5 bg-red-700 text-white pb-2 lg:px-9 px-3 font-extrabold text-3xl flex items-center hover:bg-orange-600 transition"
      >
  
  &lt;
      </button>
        <img src={img2023} alt="2023 Team" className="min-w-full" />
      </div>
    );
  }

}

export default FullPic;
