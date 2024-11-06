import { useNavigate } from "react-router-dom";
import logo from '../assets/AeroCET-logo.png';
import people from '../../Data/execom.json'

export default function Teams() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  };

  return (
    <div className="p-3 lg:p-8 relative flex flex-col items-center h-full max-h-screen overflow-y-auto">
      {/* Centered Logo Button */}
      <button onClick={goTo} className="mb-4 flex justify-center items-center">
        <img src={logo} className="h-32 w-auto transform transition duration-400 hover:scale-110" alt="logo" />
      </button>
      
      {/* Content */}
      <h1 className="text-2xl font-bold text-white mb-4">Our Team</h1>
      <p className="text-white text-center mb-4">
        Meet the dedicated teams working behind the scenes to make our club a success!
      </p>
  
      {/* Team Members */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
        {people.map((member) => (
          <div key={member.id} className="bg-gray-800 p-4 rounded-xl transform transition duration-300 hover:scale-105">
            <img src={member.imgURL || logo} className="rounded-lg" alt={member.name} />
            <h2 className="text-lg font-semibold text-orange-500 text-center">{member.name}</h2>
            <p className="text-white text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
