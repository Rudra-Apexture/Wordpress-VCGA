import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import MainHeroSection from './MainHeroSection';
import Care from './Care';
import Trusted from './Trusted';
import YourChoice from './YourChoice';
import Pricing from './Pricing';
import Satisfaction from './Satisfaction';
import CaseStudies from './CaseStudies';
import FAQ from './FAQ';
import Blog from './Blog';
import Grow from './Grow';
// import Blogs from './Blogs';

const Home_Page = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the button when scrolling down a bit, hide if at top
            if (window.scrollY > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div className="relative"> { /* Add relative positioning to the container */}
            <MainHeroSection />
            <Care />
            <Trusted />
            <YourChoice />
            <Pricing />
            <Satisfaction />
            <CaseStudies />
            <FAQ />
            <Grow />
            <Blog />
            {/* <Blogs /> */}
            {/* {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed md:bottom-28 md:right-12 bottom-36 right-4 bg-light-blue text-white md:p-2 p-1 rounded-full shadow-md cursor-pointer transition-opacity duration-300 opacity-100 hover:opacity-80 z-10"
                >
                    <FiArrowUp className='size-5' />
                </button>
            )} */}
        </div>
    );
};

export default Home_Page;