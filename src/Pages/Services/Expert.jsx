import React from 'react';
import girl from "../../assets/images/Frame-1.png";
import letter from "../../assets/images/latter.svg";
import helpline from "../../assets/images/helpline.svg";
import teams from "../../assets/images/teams.svg";
import { Link } from 'react-router';

const Card = () => {

    const cardData = [
        {
            icon: letter,
            title: "30-day",
            description: "Refund Policy Assurance"
        },
        {
            icon: helpline,
            title: "24/7/365",
            description: "Customer Support"
        },
        {
            icon: teams,
            title: "60+",
            description: "Expert team members"
        }
    ];

    return (
        <div className='container mx-auto relative z-10'>
            <div className="rounded-large shadow-main py-10 bg-white border flex flex-col lg:flex-row items-center justify-around space-y-5 lg:space-y-0">
                {cardData.map((card, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-3">
                        <div>
                            <img src={card.icon} alt="Policy Icon" className="md:w-10 w-8" />
                        </div>
                        <h3 className="text-light-blue md:text-large text-base font-bold">{card.title}</h3>
                        <p className="text-gray-700 font-medium">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Expert = () => {
    return (
        <section className='relative Experts-data lg:pt-40 pt-36 space-y-5'>
            {/* Overlapping Card Section */}
            <div className="absolute w-full top-10">
                <Card />
            </div>

            {/* Expert Section */}
            <div className="bg-gray-100 pt-96 lg:pt-20 pb-10">
                <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto space-y-5">
                    {/* Right Section - Image */}
                    <div className="flex justify-center order-2 xs:mt-10 md:mt-0">
                        <img
                            src={girl}
                            alt="Graph Icon"
                            className="lg:max-w-lg"
                        />
                    </div>

                    {/* Left Section - Text Content */}
                    <div className='order-1'>
                        <h1 className="md:text-xlarge text-basic font-bold text-primary text-center lg:text-left pb-10">
                            Are you ready to hand over WordPress maintenance{' '}
                            <span className="bg-gradient rounded-full text-light-blue mt-1 font-bold">
                                to the experts?
                            </span>{' '}
                        </h1>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Link to="/contact-us" className="bg-light-blue text-white md:text-medium text-small font-medium lg:px-10 px-14 text-center py-4 rounded-md hover:bg-blue-700">
                                Contact Now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;


