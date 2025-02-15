import React from 'react'
import image from "../assets/images/blogimage.png";
import { Link } from 'react-router';

const Grow = () => {
  return (
    <section className='grow-ready md:pt-20 pt-5'>
      <div className='container mx-auto'>
        <div className="bg-light-blue rounded-2xl flex lg:flex-row flex-col justify-between">
          <div className="lg:w-1/2 w-full">
            <div className="lg:p-20 p-6 text-white lg:text-left text-center ">
              <h2 className="md:text-4xl text-basic font-bold mb-6">Ready to Grow ?</h2>
              <p className="text-lg mb-10 lg:max-w-96 w-full">Transform your WordPress website today- together,  we can achieve greatness!</p>
              <div className='mb-4'>
                <Link to="/contact-us" className="bg-white text-light-blue font-medium text-small p-4 md:px-10 w-full mb-6 rounded-md">Get Started Today</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:w-1/2 w-full">
            <img src={image} alt="Website 1" className="object-cover md:-mt-12 mt-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grow