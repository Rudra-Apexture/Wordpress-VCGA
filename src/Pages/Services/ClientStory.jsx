import React from 'react'
import sarah from "../../assets/images/Sarah-Mitchell-1.jpg";
import google from "../../assets/images/google.svg";
import tom from "../../assets/images/Tom.jpg";
import John from "../../assets/images/John-Taylor.jpg";
import { Link } from 'react-router';

const ClientStory = () => {

    const testimonials = [
        {
            id: 1,
            image: sarah,
            name: "Sarah Mitchell",
            title: "CEO of genericpillmall",
            review: "This is hands down one of the best services we’ve ever partnered with. The pricing is fair, the customer service is outstanding, and the quality of their work is top-tier. We’ve been with them for about eight months now, and we can’t imagine managing our site without their support. Their service is incredibly valuable and has made a huge difference for us. Big thanks to the team!",
        },
        {
            id: 2,
            image: tom,
            name: "Tom Díaz",
            review: "As a blogger, I spent too much time updating plugins and dealing with minor issues that slowed down my site. After using their WordPress maintenance service for just 2 months, my site is now 40% faster, and I’ve seen a 25% increase in search engine rankings. The best part? I haven’t had a single technical issue in over 8 weeks. Their team knows what they’re doing.",
        },
        {
            id: 3,
            image: John,
            name: "John Taylor",
            review: "Their WordPress consistency services are excellent! I have never experienced any downtime since I signed up, and my e-commerce site is always current. The ideal solution for small business owners who require peace of mind."
        },
    ];

    return (
        <section className='Client-Main pt-10'>
            <div className="container mx-auto ">
                {/* <!-- Main Container --> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* <!-- Left Section --> */}
                    <div className="md:p-10 p-4 bg-white rounded-medium shadow-main border border-gray-300">
                        <h1 className="lg:text-xlarge md:text-large text-basic font-bold text-primary">
                            From Vision to Growth: <br /> {' '}
                            <span className="bg-gradient rounded-full text-light-blue font-bold ">
                                Client Stories
                            </span>{' '}
                        </h1>
                        <hr className="my-4" />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center md:flex-row">
                                <img
                                    src={testimonials[0].image}
                                    alt={testimonials[0].name}
                                    className="rounded-full md:size-16 size-14 object-cover mr-2.5"
                                />
                                <div className="flex flex-col md:items-start">
                                    <h4 className="text-medium font-bold text-primary ">{testimonials[0].name}
                                    </h4>
                                    <h1 className='text-small font-medium text-[#686B72] hidden md:block'>{testimonials[0].title}</h1>
                                </div>
                            </div>

                            <img src={google} alt="Google" className="md:size-10 size-8" />
                        </div>

                        <p className="mt-4 text-gray-700 font-medium text-small md:text-medium">
                            {testimonials[0].review}
                        </p>
                        <Link to="/reviews">
                            <button className="mt-6 bg-light-blue text-white font-medium px-10 py-4 rounded-md hover:bg-blue-900 transition-colors duration-200 ease-in">
                                Read All Reviews
                            </button>
                        </Link>
                    </div>

                    {/*  <!-- Right Section --> */}
                    <div className="space-y-4 hidden lg:block">
                        {testimonials.slice(1).map((testimonial) => (
                            <div key={testimonial.id} className="md:p-10 p-4 bg-white rounded-medium shadow-main border border-gray-300">
                                <div className="flex items-center md:justify-between justify-center">
                                    <div className="flex items-center flex-col lg:flex-row">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="rounded-full md:size-16 object-cover mr-2.5"
                                        />
                                        <div className="flex flex-col space-y-1 md:items-start items-center">
                                            <h4 className="text-medium font-bold text-primary ">{testimonial.name}
                                            </h4>
                                        </div>
                                    </div>

                                    <img src={google} alt="Google" className="md:size-10 size-8 md:block hidden" />
                                </div>
                                <p className="mt-4 text-gray-700 text-medium font-medium">
                                    {testimonial.review}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientStory