import React, { useEffect } from 'react';
import error from '../assets/images/404.svg';
import { FaArrowLeftLong } from 'react-icons/fa6';
import './Error404.css'; // Import the CSS file

const Error404 = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-load');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, 100 * index); // Staggered animation
        });

        const textElements = document.querySelectorAll('.text-animate');
        textElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("text-show")
            }, 200 * index); // Staggered animation

        })

    }, []);

    return (
        <section className='Error-Page'>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col items-center justify-center md:gap-10'>
                    <div className='animate-on-load'>
                        <img
                            src={error}
                            alt='Error-Image'
                            className='h-full error-image'
                        />
                    </div>
                    <div className='md:space-y-5 space-y-3 flex justify-center md:items-start items-center flex-col'>
                        <h1 className='text-basic font-bold text-[#8c919b] animate-on-load text-animate'>
                            Error 404
                        </h1>
                        <h3 className='md:text-5xl text-basic text-primary font-bold capitalize animate-on-load text-animate'>
                            Page not found
                        </h3>
                        <p className='text-medium font-normal md:text-start text-center max-w-md text-primary animate-on-load text-animate'>
                            Sorry, we can’t find that page. Please check the URL or return to
                            the homepage.
                        </p>
                        <button className='flex justify-between items-center pt-2 animate-on-load'>
                            <a
                                href='/'
                                className='text-white font-medium py-3 px-10 rounded-lg bg-light-blue transition-colors duration-200 button-hover-animation'
                            >
                                Go to Homepage
                            </a>
                            <FaArrowLeftLong className='size-4 absolute ml-2 text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error404;

