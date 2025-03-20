import React, { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Intro from '../Components/Intro';
import Gallery from '../Components/Gallery';
import Team from '../Components/Team';
import About from '../Components/About';
import Contact from '../Components/Contact'
import Announcements from '../Components/Announcements';
import Achievements from '../Components/Achievements';
import Projects from '../Components/Projects';
import Workshop from '../Components/Workshop';




const Home: React.FC = () => {
  

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = scrollContainerRef.current;
  
    if (element) {
      const handleScroll = (event: WheelEvent) => {
        event.preventDefault();
        const scrollSpeed = 5; // Increase this value to scroll faster
        element.scrollBy({
          left: event.deltaY * scrollSpeed,
          behavior: 'smooth',
        });
      };
  
      element.addEventListener('wheel', handleScroll);
  
      return () => {
        element.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  return (
    <div className='home h-svh divbg' id='home' ref={scrollContainerRef}>
     <Navbar/>
      <div className='main' id='intro'>
        <Intro/>
      </div>
      <div  className='main' id='announcements'>
        <Announcements/>
      </div>
      <div className='main' id='team'>
        <Team/>
      </div>
      <div className='main' id='achievements'>
        <Achievements/>
      </div>
      <div className='main' id='projects'>
        <Projects/>
      </div>
      <div className='main' id='workshop'>
        <Workshop/>
      </div>
      <div className='main' id='gallery'>
        <Gallery/>
      </div>
      <div className='main' id='about'>
        <About/>
      </div>
      <div className='main' id='contact'>
        <Contact/>
      </div>
      
</div>
    
  )
  
};

export default Home;
