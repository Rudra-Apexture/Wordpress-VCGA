import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeftLong, FaArrowRightLong, FaStar, FaRegStar } from "react-icons/fa6";
import google from "../assets/images/google.svg";
import HighlightedHeading from '../components/HighlightedHeading';
import { Link } from 'react-router';

const Satisfaction = () => {
    const swiperRef = useRef(null);
    const [reviewGroups, setReviewGroups] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/Review.json');
                const data = await response.json();
                setReviewGroups(data.reviewGroups);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };
        fetchReviews();
    }, []);

    useEffect(() => {
        if (reviewGroups && reviewGroups.length > 0) {
            const allReviews = reviewGroups.reduce((acc, group) => acc.concat(group.reviews), []);
            setTestimonials(allReviews);
        }
    }, [reviewGroups]);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-300" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-300" />);
            }
        }
        return stars;
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, [testimonials]);

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <section className="Satisfaction-Card pt-10">
            <div className="container mx-auto">
                <div className="flex items-center md:justify-between justify-center">
                    <HighlightedHeading
                        mainText="Voices of"
                        highlightedText="Satisfaction "
                        center={false}
                    />
                    <Link to="/reviews" className="px-10 py-3 bg-light-blue hover:bg-blue-900 transition-colors ease-in duration-300 capitalize text-white font-medium text-medium rounded-md hidden md:block">
                        Explore All Reviews
                    </Link>
                </div>
                <div className="lg:p-10 p-8 my-10 rounded-medium relative bg-light-blue/80">
                    <div className="absolute lg:-left-5 left-2.5 top-1/2 transform -translate-y-1/2 z-20 flex items-center justify-center bg-white rounded-full p-0.5"> {/* Added padding here */}
                        <button
                            onClick={handlePrev}
                            className="lg:p-3 p-1.5 bg-light-blue rounded-full focus:outline-none"
                        >
                            <FaArrowLeftLong className="lg:size-4 text-white" />
                        </button>
                    </div>

                    <div className="absolute lg:-right-5 right-2.5 top-1/2 transform -translate-y-1/2 z-20 flex items-center justify-center bg-white rounded-full p-0.5"> {/* Added padding here */}
                        <button
                            onClick={handleNext}
                            className="lg:p-3 p-1.5 bg-light-blue rounded-full focus:outline-none"
                        >
                            <FaArrowRightLong className="lg:size-4 text-white" />
                        </button>
                    </div>

                    <Swiper
                        ref={swiperRef}
                        slidesPerView={3}
                        spaceBetween={20}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        speed={1500}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            767: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="swiper-slide-custom">
                                <div className="bg-white rounded-xl md:p-6 p-4 flex flex-col space-y-5 w-full">
                                    <div className="flex items-center md:justify-between justify-center">
                                        <div className="flex items-center flex-col lg:flex-row space-y-2.5">
                                            <img
                                                src={testimonial.avatarUrl}
                                                alt={testimonial.reviewerName}
                                                className="rounded-full md:size-16 size-16 object-cover mr-2.5"
                                            />
                                            <div className="flex flex-col space-y-1 md:items-start items-center">
                                                <h4 className="text-medium font-bold text-light-blue">
                                                    {testimonial.reviewerName}
                                                </h4>
                                                <div className="flex">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                            </div>
                                        </div>

                                        <img src={google} alt="Google" className="md:size-10 size-8 md:block hidden" />
                                    </div>
                                    <p
                                        className="lg:text-medium font-normal md:text-start lg:max-h-44 text-center text-gray-700 leading-6 overflow-hidden overflow-ellipsis"
                                    >
                                        {truncateText(testimonial.comment, 35)}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Satisfaction;