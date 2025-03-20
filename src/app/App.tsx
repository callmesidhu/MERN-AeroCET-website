import { NotFound } from '../Pages/404Error';
import FullPic from '../Pages/FullPic';
import Gallery from '../Pages/Gallery';
import  Home  from '../Pages/Home'
import Teams from '../Pages/Teams';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export function App(){
  
  return (
    <div className='App m-0 p-0'>
   
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams/2025" element={<Teams />} />
      <Route path="/teams/2024" element={<FullPic />} />
      <Route path="/teams/2023" element={<FullPic />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
    </div>
  )
}


