import React from 'react';
import './ServiceStyle.css'

function Service() {
  return (
    <section className="serviceSection">
        <h1 className='m-8'>Services</h1>
        <div className="container">
            <div className='service-con flex  flex-wrap items-center justify-center'>
                <div className='Service m-6'>
                    <div className="cstm-service rounded-full">Icon</div>
                     <div className='w-full text-center'>
                        <h2>FrontEnd</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                </div>

                <div className='Service m-6'>
                    <div className="cstm-service rounded-full">Icon</div>
                     <div className='w-full text-center'>
                        <h2>FrontEnd</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                </div>

                <div className='Service m-6 '>
                    <div className="cstm-service rounded-full">Icon</div>
                    <div className='w-full text-center'>
                        <h2>FrontEnd</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Service;
