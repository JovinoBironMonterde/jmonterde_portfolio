import Image from 'next/image';
import React from 'react';
import './ProjectStyle.css';
import Project1 from '../../../public/assets/images/project1.webp';
import Project2 from '../../../public/assets/images/project2.webp';
import Project3 from '../../../public/assets/images/project3.webp';
import Project4 from '../../../public/assets/images/project4.webp';

function Project() {
  return (
    <section className="ProjectSection p-10 flex items-center">
        <div className="container ">
            <h1>Project</h1>
            <div className='w-full flex flex-wrap justify-center'>
                <div className='project-con w-60 m-2'>
                     <Image className='w-full' src={Project1} alt='/'  />
                     <div className="project-text text-center">
                        <p>Lorem ipsum dolor sit amet coullam placeat?</p>

                        <div className="button flex">
                            <button>View Code</button>
                            <button>Preview</button>
                        </div>
                     </div>
                </div>

                <div className='project-con w-60 m-2'>
                     <Image className='w-full' src={Project1} alt='/'  />
                     <div className="project-text text-center">
                        <p>Lorem ipsum dolor sit amet coullam placeat?</p>

                        <div className="button flex">
                            <button>View Code</button>
                            <button>Preview</button>
                        </div>
                     </div>
                </div>

                <div className='project-con w-60 m-2'>
                     <Image className='w-full' src={Project1} alt='/'  />
                     <div className="project-text text-center">
                        <p>Lorem ipsum dolor sit amet coullam placeat?</p>

                        <div className="button flex">
                            <button>View Code</button>
                            <button>Preview</button>
                        </div>
                     </div>
                </div>

                <div className='project-con w-60 m-2'>
                     <Image className='w-full' src={Project1} alt='/'  />
                     <div className="project-text text-center">
                        <p>Lorem ipsum dolor sit amet coullam placeat?</p>

                        <div className="button flex">
                            <button>View Code</button>
                            <button>Preview</button>
                        </div>
                     </div>
                </div>

                <div className='project-con w-60 m-2'>
                     <Image className='w-full' src={Project1} alt='/'  />
                     <div className="project-text text-center">
                        <p>Lorem ipsum dolor sit amet coullam placeat?</p>

                        <div className="button flex">
                            <button>View Code</button>
                            <button>Preview</button>
                        </div>
                     </div>
                </div>

                <div className='project-con w-60 m-2'>
                     <Image className='w-full' src={Project1} alt='/'  />
                     <div className="project-text text-center">
                        <p>Lorem ipsum dolor sit amet coullam placeat?</p>

                        <div className="button flex">
                            <button>View Code</button>
                            <button>Preview</button>
                        </div>
                     </div>
                </div>

                <div className='project-con w-60 m-2'>
                     <Image className='w-full' src={Project1} alt='/'  />
                     <div className="project-text text-center">
                        <p>Lorem ipsum dolor sit amet coullam placeat?</p>

                        <div className="button flex">
                            <button>View Code</button>
                            <button>Preview</button>
                        </div>
                     </div>
                </div>
                
              
            </div>
        </div>
    </section>
  );
}

export default Project;
