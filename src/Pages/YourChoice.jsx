import React from "react";
import { motion } from "framer-motion";
import users from "../assets/images/team.svg";
import power from "../assets/images/flash.svg";
import setting from "../assets/images/setting.svg";
import friend from "../assets/images/meetup.svg";


const YourChoice = () => {
    const data = [
        {
            id: 1,
            title: "5+ Years of WordPress Expertise: Proven Results",
            description:
                "With more than five years of expertise, we have empowered 1,500+ firms to supercharge performance, improve security, and drive real, measurable growth for their business.",
            icon: users,
        },
        {
            id: 2,
            title: "Boost Your Site’s Speed with Free Hosting",
            description:
                "Say goodbye to slow load times! With every WordPress maintenance plan, we provide complimentary high-speed hosting to ensure a seamless user experience.",
            icon: power,
        },
        {
            id: 3,
            title: "Customized WordPress Maintenance for Growth",
            description:
                "Our tailored maintenance services align with your specific business goals, helping you optimize performance, enhance UX, and increase conversions.",
            icon: setting,
        },
        {
            id: 4,
            title: "Trusted by Thousands for WordPress Success",
            description:
                "Thousands of clients trust us to protect, optimize, and grow their websites, ensuring security, performance, and 24/7 expert support.",
            icon: friend,
        },
    ];

    return (
        <section className="md:pt-10 pt-5 bg-gray-50">
            <div className="container mx-auto">
                {/* Section Heading */}
                <div className="flex justify-center items-center">
                    <h1 className="md:text-xlarge text-basic text-center font-bold text-primary max-w-2xl">
                        Why We’re the Right Choice For Your{" "}
                        <span className="bg-gradient rounded-full text-light-blue py-0.5 font-bold">
                            WordPress Maintenance?
                        </span>
                    </h1>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
                    {data.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative bg-white border border-slate-300 rounded-2xl shadow-md overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                scale: 1.03,
                                rotate: -1,
                                ease: "easeOut",
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="p-6 flex flex-col h-full space-y-5">
                                {/* Icon - Floating effect */}
                                <div
                                    className="flex items-center justify-center bg-gradient-to-tr from-blue-600 to-white/50 rounded-full size-16 mx-auto"
                                >
                                    <img src={item.icon} alt={item.title} className="size-10" />
                                </div>

                                {/* Title */}
                                <h3 className="text-medium font-semibold text-primary text-center mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-700 text-small font-normal text-center flex-grow">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YourChoice;



