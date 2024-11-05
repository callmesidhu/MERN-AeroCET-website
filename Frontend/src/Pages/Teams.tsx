import { useNavigate } from "react-router-dom";


export default function Teams() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  };
  return (
    <div className="divbg">Teams</div>
  )
}
