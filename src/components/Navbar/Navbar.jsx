import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setShowBackground(true) : setShowBackground(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${showBackground && 'nav_black'}`}>
      <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
    </div>
  );
}
