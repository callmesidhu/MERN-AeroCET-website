import { NotFound } from '../Pages/404Error';
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
      <Route path="/teams" element={<Teams />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
    </div>
  )
}


