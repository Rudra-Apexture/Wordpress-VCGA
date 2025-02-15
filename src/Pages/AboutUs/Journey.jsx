import React from 'react';
import meetup from "../../assets/images/Frame-2.png";
import HighlightedHeading from '../../components/HighlightedHeading';
import { Link } from 'react-router';

const Journey = () => {
    return (
        <section className="journey-About md:pt-10 pt-5">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 items-center gap-4">
                    {/* Text content */}
                    <div className="space-y-4 text-primary text-small font-medium">
                        <HighlightedHeading mainText="Join Our " highlightedText="Journey " center={false} />
                        <p>
                            Whether you’re a new user just getting started with WordPress or an experienced pro searching for expert support, we are here to help. Be part of the thousands of users who trust us to keep your WordPress sites running smoothly and efficiently.
                        </p>
                        <p>
                            Explore our tutorials, blog posts, and services today, and let us help you make the most out of your WordPress site!
                        </p>
                        <p>
                            Thanks for taking the time to check this out, and we look forward to seeing you on our blog soon!
                        </p>
                        <div className='py-5'>
                            <Link to="/contact-us" className="bg-light-blue text-white font-medium text-medium py-4 px-10 rounded-md hover:bg-blue-900 transition-colors duration-200 ease-in focus:outline-none">
                                Contact us
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="Image-wrap">
                        <img
                            src={meetup}
                            alt="Team Working Together"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;