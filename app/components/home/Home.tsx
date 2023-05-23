import Image from 'next/image';
import React from 'react';
import './HomeStyle.css';
import heroimg from '../../../public/assets/images/image1.jpeg';

function Home() {
  return (
   <section className="HomeSection">
    <div className="container flex items-center">
          <div className="hero-text w-full p-10">
            <h1>Hello, <span>I'm</span></h1>
            <h1>Jhovi Monterde</h1>
            <h3>And I'm a <span>Web Developer</span></h3>
            <div className='mt-10'>
              <button className='py-2 px-10 rounded-full'>View Project</button>
              <button  className='py-2 px-10 rounded-full'>Hire Me</button>
            </div>
          </div>
          <div className="hero-image w-5/12 flex justify-center">
            <Image className='w-80' src={heroimg} alt='/'  />
          </div>
    </div>
   </section>
  );
}

export default Home;
