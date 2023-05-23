import Image from 'next/image';
import React from 'react';
import './AboutStyle.css';
import heroimg from '../../../public/assets/images/image1.jpeg';

function About() {
  return (
    <section className="AboutSection p-10 ">
        <div className="container flex items-ceneter py-10">
            <div className="about-img w-full flex justify-center">
                <Image className='w-80' src={heroimg} alt='/'  />
            </div>
            <div className="about-text w-full ">
                <h1>About</h1>
                <h2>I'm Jovino Monterde</h2>
                and I'm a <span>Web Developer</span>
                <p>I specialize in building mobile responsive front-end UI applications that connect with API’s and other backend technologies. I’m passionate about learning new technologies and understand there is more than one way to accomplish a task. Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as needed. I believe that
                   being a great developer is not using one specific language, but choosing the best tool for the job.</p><br />

                <div className='flex items-center'>
                    <button className=' mr-4 p-2 rounded-full'>Download <span>CV</span></button>
                    <div>
                        social media icons
                    </div>
                </div> 
            </div>
        </div>
    </section>
  );
}

export default About;
