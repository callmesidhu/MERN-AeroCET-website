import { useNavigate } from "react-router-dom";

import logo from '../assets/AeroCET-logo.png'; // Make sure to import your logo

export default function Teams() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  };



  return (
    <div className="p-3 lg:p-8 relative flex flex-col items-center h-full max-h-screen overflow-y-auto">
      {/* Centered Logo Button */}
      <button onClick={goTo} className="mb-4 flex justify-center items-center">
        <img src={logo} className="h-32 w-auto" alt="logo" />
      </button>
      
      {/* Content */}
      <h1 className="text-2xl font-bold text-white mb-4">Our Team</h1>
      <p className="text-white text-center mb-4">
        Meet the dedicated teams working behind the scenes to make our club a success!
      </p>
  
      {/* Team Members */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <img src={logo} className="h-28 w-auto" alt="logo" />
            <h2 className="text-lg font-semibold text-orange-500">Team Member {index + 1}</h2>
            <p className="text-white">Role: {index % 2 === 0 ? 'Developer' : 'Designer'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}  