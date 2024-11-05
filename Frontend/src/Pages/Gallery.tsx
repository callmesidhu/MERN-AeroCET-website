import { useNavigate } from "react-router-dom";


export default function Gallery() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  };
  return (
    <div>Gallery</div>
  )
}
