import React from 'react';
import './NavbarStyle.css'

function Navbar() {
  return (
    <section className="Navbar flex items-center justify-between">
        <div className="container flex items-center justify-between">
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <div className="menu">
                <ul className='flex'>
                    <li className='mx-4'><a href="#">Home</a></li>
                    <li className='mx-4'><a href="#">About</a></li>
                    <li className='mx-4'><a href="#">Profession</a></li>
                    <li className='mx-4'><a href="#">Project</a></li>
                    <li className='mx-4'><a href="#">Service</a></li>
                    <li className='mx-4'><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Navbar;
