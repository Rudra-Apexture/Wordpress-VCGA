import React from 'react';
import quote from "../../assets/images/Quote.svg";
import quote1 from "../../assets/images/Quote1.svg";

const Testimonial = ({ testimonial }) => {
    return (
        <div className='pb-12'>
            <div className="bg-[#F6F7F9] rounded-medium px-4 md:px-20 py-12 shadow-main flex lg:flex-row flex-col gap-10 md:gap-20 my-10">
                <div className='flex flex-col items-center space-y-1.5 lg:order-1 order-2'>
                    <img src={testimonial?.image} alt={testimonial?.name} className="rounded-full lg:h-full h-24" />
                    <p className="font-bold text-primary text-small">{testimonial?.name}</p>
                    <p className="text-primary text-small">{testimonial?.designation}</p>
                </div>

                <div className="flex mb-2 mt-5 relative lg:order-2 order-1">
                    <img src={quote} alt="Quote" className='md:size-8 size-6 absolute -top-8 md:-left-10 left-0' />
                    <p className="text-primary md:text-basic text-medium text-center md:text-left max-w-6xl font-normal md:leading-8">{testimonial?.content}</p>
                    <img src={quote1} alt="Quote1" className='md:size-8 size-6 absolute bottom-16 md:-right-8 right-0' />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;