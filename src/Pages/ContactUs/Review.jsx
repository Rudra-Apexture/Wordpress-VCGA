import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import lisa from "../../assets/images/Lisa-Carter.jpg";
import ryan from "../../assets/images/Ryan.jpg";
import rachel from "../../assets/images/Rachel.jpg";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const testimonials = [
    {
        text: "My site’s performance has significantly improved since I signed up. I’ve learned a lot from their tutorials, and their staff is always quick to reply. They’re consistently spot on whether it’s error correction, feature addition, or speed optimization. Highly recommend their services!",
        author: 'Lisa Carter',
        image: lisa,
    },
    {
        text: "As a first-time blogger, I was overwhelmed by WordPress, but their tutorials made it so much easier! I set up my blog and even made it look professional in just one week. Their detailed instructions are ideal for beginners. My traffic has already started to increase.",
        author: 'Ryan Cooper',
        image: ryan
    },
    {
        text: "My life has been changed by this service. I used to be connected to my pc for hours at a time, trying to solve problems and handle things that I didn’t know what to do. They take care of the rest with comfort, and I can now finally focus entirely on what I do best. Genuinely transformative!",
        author: 'Rachel Thompson',
        image: rachel
    },
];

const Review = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className='container mx-auto'>
            <div className="flex justify-center items-center md:pt-10 pt-5">
                <div className="lg:max-w-3xl md:max-w-2xl max-w-xs relative bg-white">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        autoplay={{    // <-- Autoplay options
                            delay: 2000, // Time between slides (in milliseconds)
                            disableOnInteraction: false,   // Enable this to make it autoplay after manual slide
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                            },
                        }}
                        className="swiper-container"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <div className="p-6">
                                    <p className="md:text-base text-medium text-primary text-center font-medium mb-4 italic">{testimonial.text}</p>
                                    <div className="flex flex-col items-center space-y-1.5 justify-center mt-5">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className=" md:h-20 h-14 rounded-full mr-4"
                                        />
                                        <p className="text-primary md:text-base text-medium font-medium">
                                            {testimonial.author}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="absolute md:top-1/2 top-40 md:left-0.5 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
                            <button ref={navigationPrevRef} className="bg-[#E2EBFF] text-[#2a27e9] rounded-full p-2 focus:outline-none">
                                <FaAngleLeft className='size-4' />
                            </button>
                        </div>
                        <div className="absolute md:top-1/2 top-40 md:right-0.5 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
                            <button ref={navigationNextRef} className="bg-[#E2EBFF] text-[#2a27e9] rounded-full p-2 focus:outline-none">
                                <FaAngleRight className='size-4' />
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;