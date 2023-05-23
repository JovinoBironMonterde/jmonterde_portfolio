import React from 'react';
import './skillStyle.css';



function Profession() {
   
  
  return (
    <section className="professionSection">
        <div className="container skillcontainer flex items-center">
                <div className="profession w-full pl-10 mx-10">
                    <div className="bar-container text-right pl-10" >
                         <h2>Profession</h2>
                        <div className="barCon reveal fade-left my-10">
                              <label className='text-right'>HTML</label>
                            <div className="bars w-[100%]">
                                <div className="percent html w-[90%]"><span>90%</span></div>
                            </div>
                        </div>

                        <div className="barCon reveal fade-left my-10">
                             <label>CSS</label>
                            <div className="bars">
                                <div className="percent css w-[90%]"><span>90%</span></div>
                            </div>
                        </div>

                        <div className="barCon reveal fade-left my-10">
                             <label>Tailwind</label>
                            <div className="bars">
                                <div className="percent tailwind w-[90%]"><span>70%</span></div>
                            </div>
                        </div>

                        <div className="barCon reveal fade-left my-10">
                             <label>Bootstrap</label>
                            <div className="bars">
                                <div className="percent bootstrap w-[90%]"><span>80%</span></div>
                            </div>
                        </div>

                        <div className="barCon reveal  fade-left my-10">
                             <label>Javascript</label>
                            <div className="bars">
                                <div className="percent javascript w-[90%]"><span>75%</span></div>
                            </div>
                        </div>

                        <div className="barCon reveal fade-left my-10">
                             <label>React/Nextjs</label>
                            <div className="bars">
                                <div className="percent reactjs w-[90%]"><span>50%</span></div>
                            </div>
                        </div> 

                        {/* <div className="barCon reveal fade-left">
                             <label>VB.Net</label>
                            <div className="bars">
                                <div className="percent vb"><span>80%</span></div>
                            </div>
                        </div>  */}

                        <div className="barCon reveal fade-left my-10">
                             <label>Wordpress</label>
                            <div className="bars">
                                <div className="percent wordpress w-[90%]"><span>75%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience w-full pr-10 mx-10">
                    <div className="experience-container">
                          <h3>Experience</h3>
                        <div className="expCon reveal fade-bottom my-8">
                            <h3>Concentrix</h3>
                            <h4>September 2017 - December 2021</h4>
                            <h4>Security Control Officer</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Nemo ipsam eum fugit dignissimos facere nobis saepe ut sint porro aliquid.</p>
                        </div>
                         <div className="expCon reveal fade-bottom my-8">
                            <h3>Government Municipality</h3>
                            <h4>February 2022 - July 2022</h4>
                            <h4>Office Clerk</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Nemo ipsam eum fugit dignissimos facere nobis saepe ut sint porro aliquid.</p>
                        </div>

                         <div className="expCon reveal fade-bottom my-8">
                            <h3>Telmo Solution</h3>
                            <h4>January 2023 - April 2023</h4>
                            <h4>Front-End Web Developer</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Nemo ipsam eum fugit dignissimos facere nobis saepe ut sint porro aliquid.</p>
                        </div>

                        
                    </div>
                </div>
        </div>
        
    </section>
    
  );
  
}


export default Profession;
