import React from 'react'
import hero from "../assets/images/Hero-section.png";
import { Link } from 'react-router';


const MainHeroSection = () => {
    return (
        <section className="bg-white md:pt-10 pt-5">
            <div className="container mx-auto flex items-center justify-between lg:gap-10">
                {/* <!-- Left Content --> */}
                <div className="lg:w-1/2 w-full lg:mb-0 space-y-5">
                    <h1 className="text-basic lg:text-5xl font-bold text-primary leading-tight md:leading-snug lg:leading-[55px]">
                        Secure Your WordPress Site and Watch Your <span className='bg-gradient rounded-full text-light-blue font-semibold'>Business</span> Growing.–Effortless.
                    </h1>
                    <p className="text-gray-700 lg:text-medium font-medium max-w-[600px]">Say goodbye to WordPress headaches! Our low-cost
                        expert services keep your site secure, fast, and updated so
                        that you can focus on business growth with peace of mind.
                    </p>
                    <Link to="/services" className="bg-light-blue border border-light-blue text-white lg:px-10 lg:py-4 p-2.5 rounded-lg inline-block font-medium hover:bg-[#103498] transition-all duration-300 ease-in">Get Expert Care Now</Link>
                </div>

                {/* <!-- Right Image Container --> */}
                <div className="lg:w-1/2 flex flex-col">
                    <img src={hero} alt="Main-Image" className='lg:block hidden' />
                </div>
            </div>
        </section>
    )
}

export default MainHeroSection


// import React from 'react';
// import hero from '../assets/images/Hero-section.png';
// import { Link } from 'react-router';
// import { Typewriter } from 'react-simple-typewriter';

// const MainHeroSection = () => {
//     return (
//         <section className="bg-gradient-to-br from-gray-50 to-white py-5 md:py-10">
//             <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
//                 {/* Left Content */}
//                 <div className="lg:w-1/2 w-full text-center lg:text-left">
//                     <h1 className="text-4xl lg:text-5xl md:leading-[55px] font-bold text-primary mb-6">
//                         Secure Your WordPress Site and{' '}
//                         <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-indigo-500">
//                             <Typewriter
//                                 words={['Watch Your Business Effortlessly.', 'Unlock Unlimited Potential.', 'Scale to New Heights!.']}
//                                 loop={0}
//                                 cursor
//                                 cursorStyle='|'
//                                 typeSpeed={100}
//                                 deleteSpeed={50}
//                                 delaySpeed={1000}
//                             />
//                         </span>
//                     </h1>
//                     <p className="text-slate-700 md:text-lg text-small font-medium mb-8 max-w-xl mx-auto lg:mx-0">
//                         Say goodbye to WordPress headaches! Our expert services keep your site secure, fast, and updated, so you can focus on business growth with peace of mind.
//                     </p>
//                     <Link
//                         to="/services"
//                         className="bg-light-blue hover:bg-blue-900 text-white font-medium py-4 px-10 rounded-lg inline-block transition-colors duration-300 shadow-md hover:shadow-lg"
//                     >
//                         Get Expert Care Now
//                     </Link>
//                 </div>

//                 {/* Right Image Container */}
//                 <div className="lg:w-1/2 w-full hidden lg:block">
//                     <div className="relative rounded-xl">
//                         <img
//                             src={hero}
//                             alt="Main-Image"
//                             className="w-full object-cover object-center "
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MainHeroSection;