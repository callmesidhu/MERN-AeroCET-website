import { useState, useEffect } from 'react';
import logo from '../assets/AeroCET-logo.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sectionIds = [
      'projects',
      'achievements',
      'team',
      'announcements',
      'home',
      'contact',
      'about',
      'gallery',
      'workshop',
    ];
    let currentVisibleSection: string | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const mostVisibleEntry = visibleEntries[0];
          if (mostVisibleEntry.target.id !== currentVisibleSection) {
            currentVisibleSection = mostVisibleEntry.target.id;
            setVisibleSection(currentVisibleSection);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from(Array(101).keys(), (i) => i / 100),
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className='z-50'>
      {/* Mobile Toggle Button */}
      <div className='fixed top-4 left-4 lg:hidden z-10'>
        <button
          onClick={toggleMenu}
          className='text-white focus:outline-none'>
          {isOpen ? (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>

      <div className={`fixed top-0 left-0 h-full sm:my-10 lg:my-0 shadow-lg nav rounded-r-3xl ${isOpen ? 'open' : 'closed'}`}>
        {/* Menu Items */}
        <div className={`menu-items transition-all duration-300 ease-in-out ${isOpen ? 'open' : 'closed'} lg:flex lg:flex-col lg:justify-around h-svh relative`}>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('projects')}>
            <img src={logo} alt='Projects Logo' className={`load-image ${visibleSection === 'projects' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Projects</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('achievements')}>
            <img src={logo} alt='Achievements Logo' className={`load-image ${visibleSection === 'achievements' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Achieve.</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('team')}>
            <img src={logo} alt='Teams Logo' className={`load-image ${visibleSection === 'team' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Team</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('announcements')}>
            <img src={logo} alt='Announcements Logo' className={`load-image ${visibleSection === 'announcements' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Announc.</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('intro')}>
            <img src={logo} alt='Home Logo' className={`load-image ${visibleSection === 'home' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Home</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('contact')}>
            <img src={logo} alt='Contact Logo' className={`load-image ${visibleSection === 'contact' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Contact</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('about')}>
            <img src={logo} alt='About Logo' className={`load-image ${visibleSection === 'about' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>About</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('gallery')}>
            <img src={logo} alt='Gallery Logo' className={`load-image ${visibleSection === 'gallery' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Gallery</h1>
          </div>
          <div
            className='flex flex-row items-center mb-3 cursor-pointer'
            onClick={() => handleScroll('workshop')}>
            <img src={logo} alt='Workshop Logo' className={`load-image ${visibleSection === 'workshop' ? 'show' : ''} h-16`} />
            <h1 className='text-2xl mx-3'>Workshop</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
