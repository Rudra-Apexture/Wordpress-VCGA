import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HighlightedHeading from '../../components/HighlightedHeading';
import Simplicity from "../../assets/images/Simplicity.svg";
import Customer from "../../assets/images/Customer.svg";
import Transparency from "../../assets/images/Transparency.svg";
import Commitment from "../../assets/images/Commitment.svg";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Ourvalue = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const valueCards = [
    {
      icon: Simplicity,
      title: 'Simplicity',
      description:
        'We aim to simplify WordPress and make it accessible to everyone, to more happiness with regardless of technical expertise.',
    },
    {
      icon: Customer,
      title: 'Customer-Centric',
      description:
        'Your success is our success. We are here to provide personalized support and guidance to help you achieve your goals.',
    },
    {
      icon: Transparency,
      title: 'Transparency',
      description:
        'We believe in clear, honest communication. Our services and pricing are transparent, with no hidden fees or gimmicks.',
    },
    {
      icon: Commitment,
      title: 'Commitment to Excellence',
      description:
        'We are dedicated to providing high-quality services and resources to ensure the best possible user experience.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-8">
          <HighlightedHeading mainText="Our " highlightedText="Values " center={true} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-gradient-to-b from-blue-300 to-white rounded-2xl border border-light-blue overflow-hidden transition-shadow duration-300"
            >
              <div className="flex flex-col items-center p-4 space-y-4">
                <div className="size-14 rounded-full bg-white flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="size-10" />
                </div>
                <h3 className="font-semibold text-light-blue text-lg text-center">{card.title}</h3>
                <p className="text-primary text-medium text-center font-normal">{card.description}</p>
              </div>

              <div className="text-center flex justify-center mt-5">
                <Link to="/services">
                  <button className="value flex items-center gap-2.5 font-medium px-60 py-2 text-light-blue text-nowrap bg-[#d9e3ff]">
                    Learn More
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ourvalue;
