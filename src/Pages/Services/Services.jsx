import React from 'react';
import setting1 from "../../assets/images/first.svg";
import setting2 from "../../assets/images/second.svg";
import setting3 from "../../assets/images/third.svg";
import setting4 from "../../assets/images/four.svg";
import setting5 from "../../assets/images/five.svg";
import setting6 from "../../assets/images/six.svg";
import HighlightedHeading from '../../components/HighlightedHeading';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router';
import { motion } from "framer-motion";

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Speed & Performance With Optimization",
            description: "Our performance specialists ensure that your website loads in under two seconds by optimizing resources, compressing images, and improving server response, which means a faster, seamless user experience that keeps visitors engaged.",
            icon: setting1
        },
        {
            id: 2,
            title: "Regular Core, Theme & Plugin Updates",
            description: "We keep your WordPress site healthy by regularly updating the core files, themes, and plugins. Our service provides detailed reports to track functionality, security, and performance for optimum site performance.",
            icon: setting2
        },
        {
            id: 3,
            title: "Ultimate Advanced Security Protection",
            description: "Our top-tier security features, including malware protection, robust firewall, and 24/7 real-time monitoring, keep your site cyber-safe while also ensuring flawless ours performance and peace of mind.",
            icon: setting3
        },
        {
            id: 4,
            title: "24/7 Emergency Support, Anytime, Anywhere",
            description: "Our 24/7 emergency support monitors your site 1440 times a day, ensuring constant protection and fast issue resolution. Whether by email or chat, we provide immediate priority assistance whenever you need it.",
            icon: setting4
        },
        {
            id: 5,
            title: "Boost to Your WooCommerce Performance",
            description: "Our experienced team handles all your WooCommerce needs, optimizing store performance, speed, user experience, and checkout flow, boosting conversions, and ensuring a seamless shopping experience.",
            icon: setting5
        },
        {
            id: 6,
            title: "Customizable Services for Specific Needs",
            description: "Our services are completely customizable to fit your specific needs, whether you're looking for feature or performance optimization. With our WordPress Maintenance Service solutions to match your goals.",
            icon: setting6
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each child animation
            },
        },
    };

    const cardVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 1000,
                damping: 20,
            },
        },
    };

    return (
        <section className='md:pt-10 pt-5'>
            <div className='container mx-auto'>
                <div className='text-center mb-10 flex justify-center items-center'>
                    <HighlightedHeading
                        mainText="What’s Included with Our WordPress  "
                        highlightedText="Maintenance Services? "
                        center={true}
                    />
                </div>
                <motion.div
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="bg-white rounded-medium border border-slate-300 shadow-main overflow-hidden"
                            variants={cardVariants}
                        >
                            <div className="lg:p-6 p-4 lg:space-y-5 space-y-3">
                                <div className="flex items-center justify-center">
                                    <img src={service.icon} alt={service.title} className="h-16" />
                                </div>
                                <h3 className="text-xl font-bold text-primary text-center">{service.title}</h3>
                                <p className="text-gray-700 lg:text-base text-medium font-normal text-center">{service.description}</p>
                            </div>
                            <div className="md:py-6 py-4 text-center">
                                <Link
                                    to="/case-studies"
                                    className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-900 transition-all ease-in duration-300 hover:translate-x-3"
                                >
                                    Learn More
                                    <FaArrowRightLong className="size-4 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;