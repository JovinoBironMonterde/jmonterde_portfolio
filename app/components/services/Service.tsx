import React from 'react';
import './ServiceStyle.css'

function Service() {
  return (
    <section className="serviceSection">
        <div className="container">
            <div className='service-con flex  flex-wrap items-center justify-center'>
                <div className='Service m-6'>
                    <div className="rounded-full">Icon</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>

                <div className='Service m-6'>
                    <div className="rounded-full">Icon</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>

                <div className='Service m-6'>
                    <div className="rounded-full">Icon</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Service;
