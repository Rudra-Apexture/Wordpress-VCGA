import React from 'react'
import images from '../../assets/images/Our-Mission.png';

const Mission = () => {
    return (
        <section className='Mission py-12'>
            <div className="container mx-auto p-8">
                <div className="flex flex-col lg:flex-row ">
                    {/* Image Section */}
                    <div className="flex-shrink-0 lg:w-1/2 flex flex-col order-2 md:order-1">
                        <img src={images} alt="" className='md:max-w-lg' />
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 flex flex-col justify-center order-1 md:order-2">
                        <h1 className="md:text-xlarge text-large font-bold text-primary my-5">
                            Our {' '}
                            <span className="bg-gradient rounded-full text-[#1D49C3] font-bold ">
                                Mission
                            </span>{' '}
                        </h1>
                        <p className="text-primary font-medium text-medium leading-relaxed mb-4">
                            VCGA is simple: We help you build, maintain, and grow your WordPress website. We believe that WordPress should be powerful, yet easy to use. Our goal is to remove frustration and technological hurdles from your WordPress experience so you can focus on what matters most: growing your business, your blog, or your online presence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission