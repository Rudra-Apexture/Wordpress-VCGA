import React from 'react';
import { TbCheckbox } from "react-icons/tb";
import { HiOutlineClock } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";


const DetailsSection = ({ details }) => {
    if (!details) {
        return null;
    }

    const { industry, services, timeline } = details;

    return (
        <div className='container mx-auto '>
            <section className="bg-[#EAF0FF] rounded-medium py-5 my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:p-10 md:p-6 p-4">
                    {/* Industry Section */}
                    <div>
                        <h3 className="text-light-blue font-bold md:text-2xl text-base mb-4">Industry</h3>
                        <ul className="space-y-5">
                            {industry.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <span>
                                        <TbCheckbox className='lg:size-5 size-4 text-primary' />
                                    </span>
                                    <span className="text-primary text-small font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-light-blue font-bold md:text-2xl text-base mb-4">Services</h3>
                        <ul className="space-y-5">
                            {services.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <span>
                                        <IoSettingsOutline
                                            className='text-primary lg:size-5 size-4' />
                                    </span>
                                    <span className="text-primary text-small font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Timeline Section */}
                    <div>
                        <h3 className="text-light-blue font-bold md:text-2xl text-base mb-4">Timeline</h3>
                        <ul className="space-y-5">
                            {timeline.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <span>
                                        <HiOutlineClock
                                            className='lg:size-5 size-4 text-primary' />
                                    </span>
                                    <span className="text-primary text-small font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsSection;
