import React from 'react';
import logo from '../../assets/images/logos.webp' // Replace with your actual logo path
import award1 from '../../assets/images/host1.webp'; // Replace with your actual award image paths
import award2 from '../../assets/images/host2.webp';
import award3 from '../../assets/images/host3.webp';
import award4 from '../../assets/images/host4.webp';
import award5 from '../../assets/images/host5.webp';
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { PiRedditLogoBold } from "react-icons/pi";

const Review = () => {
    return (
        <section className="bg-[#F6F7F8] py-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-start">

                {/* Left Side (60%) - Logo & Title + Content */}
                <div className="w-full lg:w-3/5 flex flex-col mb-6 lg:mb-0 md:pr-8">
                    <div className="flex items-center mb-6 lg:mb-0 ">
                        <div className="md:w-28 p-2 md:h-28 w-24 h-24 rounded-md border  border-gray-200 shadow-main mr-6 flex justify-center items-center">
                            <img src={logo} alt="Ultahost Logo" className='object-contain' />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="md:text-4xl text-xl font-bold text-[#0B0C0F] mb-1">Ultahost Review</h2>
                            <p className="md:text-lg text-sm text-[#16181db3] ">Expert and User Insights by Ultahost Customers</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-10 hidden md:block">
                        <p className="text-[#0B0C0F] leading-relaxed text-[18px]">
                            Ultahost stands out in the hosting landscape with a range of reliable solutions with a focus on
                            performance and security. Its cutting-edge features and plans include high-speed SSD servers,
                            free website migration, and 24/7 customer support, making it a strong contender for both
                            individual and business users seeking dependable web hosting services.
                        </p>
                    </div>
                </div>


                {/* Right Side (40%) - Awards and Share */}
                <div className="w-full lg:w-2/5 md:flex lg:flex-col lg:items-start justify-between items-center hidden md:block">

                    <div className="flex items-center mb-4 relative -space-x-5 order-2 lg:order-1">
                        <img src={award1} alt="Award 1" className="lg:h-20 h-16 mr-2" />
                        <img src={award2} alt="Award 2" className="lg:h-20 h-16 mr-2" />
                        <img src={award3} alt="Award 3" className="lg:h-20 h-16 mr-2" />
                        <img src={award4} alt="Award 4" className="lg:h-20 h-16 mr-2" />
                        <img src={award5} alt="Award 4" className="lg:h-20 h-16 mr-2" />
                    </div>


                    <div className="text-gray-600 order-1 lg:order-2 lg:mt-24">
                        <h1 className='text-[#16181d66] text-medium font-medium'>Shere</h1>
                        <div className='flex space-x-2 mt-2'>
                            <a href="#" className="hover:text-blue-500 hover:bg-[#0d80f221] flex items-center justify-center rounded-full p-1.5">
                                <PiTwitterLogoBold className='text-xl' />
                            </a>
                            <a href="#" className="hover:text-blue-500 hover:bg-[#0d80f221] flex items-center justify-center rounded-full p-1.5">
                                <FiFacebook className='text-xl' />
                            </a>
                            <a href="#" className="hover:text-blue-500 hover:bg-[#0d80f221] flex items-center justify-center rounded-full p-1.5">
                                <FiLinkedin className='text-xl' />
                            </a>
                            <a href="#" className="hover:text-blue-500 hover:bg-[#0d80f221] flex items-center justify-center rounded-full p-1.5">
                                <PiRedditLogoBold className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;