// import React, { useState, useEffect } from 'react';
// import HighlightedHeading from "../components/HighlightedHeading";
// import { Link } from 'react-router-dom';
// import { FaTrophy, FaCheckCircle, FaMedal, FaCrown, FaGem } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";  // Import Framer Motion

// const Pricing = () => {
//     const data = [
//         {
//             id: 1,
//             name: "SiteGuard Essentials",
//             price: "$39",
//             tag: "Silver",
//             features: [
//                 "High Speed SiteGround hosting free",
//                 "Core, Themes, and Plugins Updates",
//                 "Cloud Backups: 14-day retention.",
//                 "Uptime Monitoring",
//                 "Speed & Performance Optimization",
//                 "Version Control",
//                 "Activity Log",
//                 "Monthly Maintenance Report",
//             ],
//         },
//         {
//             id: 2,
//             name: "SiteGuard Proactive",
//             price: "$89",
//             tag: "Gold",
//             isMostPopular: true,
//             features: [
//                 "High Speed SiteGround hosting free",
//                 "All Silver Plan Features",
//                 "Cloud Backups: 30-day retention",
//                 "Monthly SEO Reports",
//                 "WooCommerce Optimization",
//                 "Cart Abandonment Solutions",
//                 "Bi-Weekly Detailed Reports",
//                 "Unlimited 24/7 Chat Priority Support",
//             ],
//         },
//         {
//             id: 3,
//             name: "SiteGuard Elite",
//             price: "$189",
//             tag: "Platinum",
//             features: [
//                 "High Speed SiteGround hosting free",
//                 "All Gold Plan Features",
//                 "Git Management",
//                 "Ongoing CRO Strategies",
//                 "Detailed SEO Audits",
//                 "Google Analytics Integration",
//                 "Secure Payment Gateway Integration",
//                 "Performance and Speed Optimization",
//             ],
//         },
//     ];

//     const [animatedIndex, setAnimatedIndex] = useState(-1); // Start with -1, no animation

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (animatedIndex < data.length - 1) {
//                 setAnimatedIndex(animatedIndex + 1);
//             }
//         }, 300); // Adjust the delay as needed

//         return () => clearTimeout(timer); // Clear the timer on unmount or if animatedIndex changes
//     }, [animatedIndex, data.length]);



//     const getTagStyle = (tag) => {
//         switch (tag) {
//             case "Silver":
//                 return {
//                     className: "bg-gray-300 text-gray-700",
//                     icon: <FaMedal className="inline-block mr-2 text-base" />,
//                 };
//             case "Gold":
//                 return {
//                     className: "bg-yellow-100 text-yellow-700",
//                     icon: <FaCrown className="inline-block mr-2 text-base" />,
//                 };
//             case "Platinum":
//                 return {
//                     className: "bg-blue-100 text-blue-700",
//                     icon: <FaGem className="inline-block mr-2 text-base" />,
//                 };
//             default:
//                 return {
//                     className: "bg-gray-200 text-gray-700",
//                     icon: null,
//                 };
//         }
//     };

//     const cardVariants = {
//         hidden: { opacity: 0, y: 50 },  // Slightly move down and fade in
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.5,  // Adjust the duration
//                 ease: "easeInOut"
//             }
//         }
//     };

//     return (
//         <section className="md:pt-10 pt-5 bg-white">
//             <div className="container mx-auto">
//                 <div className="flex pb-16 justify-center items-center">
//                     <HighlightedHeading
//                         mainText="Flexible Pricing for "
//                         highlightedText="Your Growth "
//                         center={true}
//                     />
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                     {data.map((item, index) => (
//                         <AnimatePresence key={item.id} initial={false}>
//                             {index <= animatedIndex && (
//                                 <motion.div
//                                     variants={cardVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                     exit="hidden"
//                                     className={`relative rounded-medium shadow-main bg-white hover:shadow-lg transition-shadow duration-300 ${item.isMostPopular ? 'border-4 border-light-blue' : 'border border-gray-300'
//                                         }`}
//                                 >
//                                     {item.isMostPopular && (
//                                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-blue text-white py-2 px-6 rounded-full shadow-md text-sm font-bold flex items-center space-x-2">
//                                             <FaTrophy className="size-4" />
//                                             <span>Most Popular</span>
//                                         </div>
//                                     )}

//                                     <div className="p-4">
//                                         <div className={`text-sm font-semibold uppercase tracking-wider text-center my-4 ${getTagStyle(item.tag).className} py-1.5 rounded flex items-center justify-center`}>
//                                             {getTagStyle(item.tag).icon} {item.tag}
//                                         </div>

//                                         <h3 className="text-base font-bold text-primary text-center mb-4">
//                                             {item.name}
//                                         </h3>

//                                         <div className="flex items-center justify-center mb-6">
//                                             <span className="text-5xl font-bold text-light-blue">{item.price}</span>
//                                             <span className="text-gray-500 ml-1">/ month</span>
//                                         </div>

//                                         <ul className="space-y-4 mb-8">
//                                             {item.features.map((feature, index) => (
//                                                 <li key={index} className="flex items-center text-primary font-medium">
//                                                     <FaCheckCircle className="text-green-500 mr-2 size-4" />
//                                                     {feature}
//                                                 </li>
//                                             ))}
//                                         </ul>

//                                         <Link
//                                             to="/services"
//                                             className="block bg-light-blue hover:bg-blue-900 text-white py-3 rounded-lg text-center font-semibold transition-colors duration-300"
//                                         >
//                                             View Full Plans
//                                         </Link>
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Pricing;

// import React from 'react';
// import HighlightedHeading from "../components/HighlightedHeading";
// import { Link } from 'react-router-dom';
// import { FaTrophy, FaCheckCircle, FaMedal, FaCrown, FaGem } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from 'react-intersection-observer'; // Import useInView hook

// const Pricing = () => {
//     const data = [
//         {
//             id: 1,
//             name: "SiteGuard Essentials",
//             price: "$39",
//             tag: "Silver",
//             features: [
//                 "High Speed SiteGround hosting free",
//                 "Core, Themes, and Plugins Updates",
//                 "Cloud Backups: 14-day retention.",
//                 "Uptime Monitoring",
//                 "Speed & Performance Optimization",
//                 "Version Control",
//                 "Activity Log",
//                 "Monthly Maintenance Report",
//             ],
//         },
//         {
//             id: 2,
//             name: "SiteGuard Proactive",
//             price: "$89",
//             tag: "Gold",
//             isMostPopular: true,
//             features: [
//                 "High Speed SiteGround hosting free",
//                 "All Silver Plan Features",
//                 "Cloud Backups: 30-day retention",
//                 "Monthly SEO Reports",
//                 "WooCommerce Optimization",
//                 "Cart Abandonment Solutions",
//                 "Bi-Weekly Detailed Reports",
//                 "Unlimited 24/7 Chat Priority Support",
//             ],
//         },
//         {
//             id: 3,
//             name: "SiteGuard Elite",
//             price: "$189",
//             tag: "Platinum",
//             features: [
//                 "High Speed SiteGround hosting free",
//                 "All Gold Plan Features",
//                 "Git Management",
//                 "Ongoing CRO Strategies",
//                 "Detailed SEO Audits",
//                 "Google Analytics Integration",
//                 "Secure Payment Gateway Integration",
//                 "Performance and Speed Optimization",
//             ],
//         },
//     ];

//     const getTagStyle = (tag) => {
//         switch (tag) {
//             case "Silver":
//                 return {
//                     className: "bg-gray-300 text-gray-700",
//                     icon: <FaMedal className="inline-block mr-2 text-base" />,
//                 };
//             case "Gold":
//                 return {
//                     className: "bg-yellow-100 text-yellow-700",
//                     icon: <FaCrown className="inline-block mr-2 text-base" />,
//                 };
//             case "Platinum":
//                 return {
//                     className: "bg-blue-100 text-blue-700",
//                     icon: <FaGem className="inline-block mr-2 text-base" />,
//                 };
//             default:
//                 return {
//                     className: "bg-gray-200 text-gray-700",
//                     icon: null,
//                 };
//         }
//     };

//     const cardVariants = {
//         hidden: {
//             scale: 0.5,
//             opacity: 0,
//             rotate: -30,
//         },
//         visible: {
//             scale: 1,
//             opacity: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",  // Use spring animation for a bouncier effect
//                 stiffness: 120,    // Adjust stiffness for the spring
//                 damping: 15,       // Adjust damping for the spring
//                 duration: 0.8,      // Duration of the animation
//                 ease: "easeInOut",
//             },
//         },
//     };


//     return (
//         <section className="md:pt-10 pt-5 bg-white">
//             <div className="container mx-auto">
//                 <div className="flex pb-16 justify-center items-center">
//                     <HighlightedHeading
//                         mainText="Flexible Pricing for "
//                         highlightedText="Your Growth "
//                         center={true}
//                     />
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                     {data.map(item => {
//                         const { ref, inView } = useInView({
//                             triggerOnce: true,  // Only trigger once when the element comes into view
//                             threshold: 0.5,  // Adjust the threshold as needed
//                         });

//                         return (
//                             <motion.div
//                                 ref={ref}
//                                 key={item.id}
//                                 className={`relative rounded-medium shadow-main bg-white hover:shadow-lg transition-shadow duration-300 ${item.isMostPopular ? 'border-4 border-light-blue' : 'border border-gray-300'
//                                     }`}
//                                 variants={cardVariants}
//                                 initial="hidden"
//                                 animate={inView ? "visible" : "hidden"}
//                             >
//                                 {item.isMostPopular && (
//                                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-blue text-white py-2 px-6 rounded-full shadow-md text-sm font-bold flex items-center space-x-2">
//                                         <FaTrophy className="size-4" />
//                                         <span>Most Popular</span>
//                                     </div>
//                                 )}

//                                 <div className="p-4">
//                                     <div className={`text-sm font-semibold uppercase tracking-wider text-center my-4 ${getTagStyle(item.tag).className} py-1.5 rounded flex items-center justify-center`}>
//                                         {getTagStyle(item.tag).icon} {item.tag}
//                                     </div>

//                                     <h3 className="text-base font-bold text-primary text-center mb-4">
//                                         {item.name}
//                                     </h3>

//                                     <div className="flex items-center justify-center mb-6">
//                                         <span className="text-5xl font-bold text-light-blue">{item.price}</span>
//                                         <span className="text-gray-500 ml-1">/ month</span>
//                                     </div>

//                                     <ul className="space-y-4 mb-8">
//                                         {item.features.map((feature, index) => (
//                                             <li key={index} className="flex items-center text-primary font-medium">
//                                                 <FaCheckCircle className="text-green-500 mr-2 size-4" />
//                                                 {feature}
//                                             </li>
//                                         ))}
//                                     </ul>

//                                     <Link
//                                         to="/services"
//                                         className="block bg-light-blue hover:bg-blue-900 text-white py-3 rounded-lg text-center font-semibold transition-colors duration-300"
//                                     >
//                                         View Full Plans
//                                     </Link>
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Pricing;


import React, { useState, useEffect } from 'react';
import HighlightedHeading from "../components/HighlightedHeading";
import { Link } from 'react-router-dom';
import { FaTrophy, FaCheckCircle, FaMedal, FaCrown, FaGem } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
    const data = [
        {
            id: 1,
            name: "SiteGuard Essentials",
            price: "$39",
            tag: "Silver",
            features: [
                "High Speed SiteGround hosting free",
                "Core, Themes, and Plugins Updates",
                "Cloud Backups: 14-day retention.",
                "Uptime Monitoring",
                "Speed & Performance Optimization",
                "Version Control",
                "Activity Log",
                "Monthly Maintenance Report",
            ],
        },
        {
            id: 2,
            name: "SiteGuard Proactive",
            price: "$89",
            tag: "Gold",
            isMostPopular: true,
            features: [
                "High Speed SiteGround hosting free",
                "All Silver Plan Features",
                "Cloud Backups: 30-day retention",
                "Monthly SEO Reports",
                "WooCommerce Optimization",
                "Cart Abandonment Solutions",
                "Bi-Weekly Detailed Reports",
                "Unlimited 24/7 Chat Priority Support",
            ],
        },
        {
            id: 3,
            name: "SiteGuard Elite",
            price: "$189",
            tag: "Platinum",
            features: [
                "High Speed SiteGround hosting free",
                "All Gold Plan Features",
                "Git Management",
                "Ongoing CRO Strategies",
                "Detailed SEO Audits",
                "Google Analytics Integration",
                "Secure Payment Gateway Integration",
                "Performance and Speed Optimization",
            ],
        },
    ];

    const [animatedIndex, setAnimatedIndex] = useState(-1); // Start with -1, no animation
    const { ref, inView } = useInView({
        threshold: 0.5, // Adjust as needed
        triggerOnce: true, // Only trigger once
    });

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                if (animatedIndex < data.length - 1) {
                    setAnimatedIndex(animatedIndex + 1);
                }
            }, 300); // Adjust the delay as needed

            return () => clearTimeout(timer); // Clear the timer on unmount or if animatedIndex changes
        }
    }, [inView, animatedIndex, data.length]);

    const getTagStyle = (tag) => {
        switch (tag) {
            case "Silver":
                return {
                    className: "bg-gray-300 text-gray-700",
                    icon: <FaMedal className="inline-block mr-2 text-base" />,
                };
            case "Gold":
                return {
                    className: "bg-yellow-100 text-yellow-700",
                    icon: <FaCrown className="inline-block mr-2 text-base" />,
                };
            case "Platinum":
                return {
                    className: "bg-blue-100 text-blue-700",
                    icon: <FaGem className="inline-block mr-2 text-base" />,
                };
            default:
                return {
                    className: "bg-gray-200 text-gray-700",
                    icon: null,
                };
        }
    };

    const cardVariants = {
        hidden: {
            scale: 0.5,
            opacity: 0,
            rotate: -30,
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",  // Use spring animation for a bouncier effect
                stiffness: 120,    // Adjust stiffness for the spring
                damping: 15,       // Adjust damping for the spring
                duration: 0.8,      // Duration of the animation
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="md:pt-10 pt-5 bg-white" ref={ref}>
            <div className="container mx-auto">
                <div className="flex pb-16 justify-center items-center">
                    <HighlightedHeading
                        mainText="Flexible Pricing for "
                        highlightedText="Your Growth "
                        center={true}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <AnimatePresence key={item.id} initial={false}>
                            {index <= animatedIndex && inView && (
                                <motion.div
                                    key={item.id}
                                    className={`relative rounded-medium shadow-main bg-white transition-shadow duration-300 ${item.isMostPopular ? 'border-4 border-light-blue' : 'border border-gray-300'
                                        }`}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                >
                                    {item.isMostPopular && (
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-blue text-white py-2 px-6 rounded-full shadow-md text-sm font-bold flex items-center space-x-2">
                                            <FaTrophy className="size-4" />
                                            <span>Most Popular</span>
                                        </div>
                                    )}

                                    <div className="p-4">
                                        <div className={`text-sm font-semibold uppercase tracking-wider text-center my-4 ${getTagStyle(item.tag).className} py-1.5 rounded flex items-center justify-center`}>
                                            {getTagStyle(item.tag).icon} {item.tag}
                                        </div>

                                        <h3 className="text-base font-bold text-primary text-center mb-4">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center justify-center mb-6">
                                            <span className="text-5xl font-bold text-light-blue">{item.price}</span>
                                            <span className="text-gray-500 ml-1">/ month</span>
                                        </div>

                                        <ul className="space-y-4 mb-8">
                                            {item.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-primary font-medium">
                                                    <FaCheckCircle className="text-green-500 mr-2 size-4" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            to="/services"
                                            className="block bg-light-blue hover:bg-blue-900 text-white py-3 rounded-lg text-center font-semibold transition-colors duration-300"
                                        >
                                            View Full Plans
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;