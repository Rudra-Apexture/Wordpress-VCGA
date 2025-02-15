import React from 'react';
import space from "../assets/images/boost.svg";
import storage from "../assets/images/cloud.svg";
import desktop from "../assets/images/web.svg";
import shield from "../assets/images/protected.svg";
import HighlightedHeading from '../components/HighlightedHeading';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Care = () => {
    const data = [
        {
            "id": 1,
            "title": "Performance & Optimization",
            "description": "We improve the performance of your website by optimizing images, and files, and minimizing page requests with faster loading times and a better user experience",
            "icon": space
        },
        {
            "id": 2,
            "title": "Site Updates & Backups",
            "description": "Running older versions of WordPress and old versions of plugins may put your website at security risk. We update your website and make a backup to ensure it stays safe and running well.",
            "icon": storage
        },
        {
            "id": 3,
            "title": "On-Demand Web Help",
            "description": "Customized feature upgrades and performance improvements ensure your website is fast, fully functional, and optimized for success, helping your business grow and thrive online.",
            "icon": desktop
        },
        {
            "id": 4,
            "title": "Security Monitoring & Reporting",
            "description": "We continuously monitor your WordPress site to ensure that it stays secure from threats. Our detailed reports will keep you posted so you can immediately act when needed.",
            "icon": shield
        }
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5,
            },
        },
    };

    return (
        <section className='Trusted-Care pt-10'>
            <div className='container mx-auto'>
                <HighlightedHeading
                    mainText="We've Got It "
                    highlightedText="All Taken Care Of"
                    center={false}
                />
                <div className="bg-white mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                        {data.map((item, index) => (
                            <AnimatedCard key={item.id} item={item} index={index} variants={cardVariants} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const AnimatedCard = ({ item, index, variants }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,  // 50% then section was displayed.
    });

    return (
        <motion.div
            ref={ref}
            className="bg-white rounded-medium shadow-main border border-gray-300 lg:p-10 p-6 flex flex-col space-y-2.5 lg:space-y-4"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Animate based on inView
            custom={index}
        >
            <img src={item.icon} alt={`${item.title} Icon`} className="size-14" />
            <h3 className="lg:text-base text-medium font-semibold text-primary">{item.title}</h3>
            <p className="text-slate-700 text-small font-normal lg:text-medium">{item.description}</p>
        </motion.div>
    );
};


export default Care;
