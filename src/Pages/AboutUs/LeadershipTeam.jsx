// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
// import { IoClose } from "react-icons/io5";
// import Emma from "../../assets/images/Emma-Scott.png";
// import ELiam from "../../assets/images/Liam-Williams.png";
// import Sophia from "../../assets/images/Sophia-Lopez.png";
// import Ryan from "../../assets/images/Ryan-Clark.png";

// const teamMembers = [
//     {
//         id: 1,
//         name: "Emma Scot",
//         title: "Co-Founder & Lead WordPress Developer",
//         image: Emma,
//         description: "With over 10 years of experience in web development, Emma is the technological heart of VCGA. She started with a mission to make WordPress management easy for all of us; security and performance optimization are all things that really get her excited, as well as keeping websites running at their best.",
//     },
//     {
//         id: 2,
//         name: "Liam Williams",
//         title: "Co-Founder & Digital Marketing Expert",
//         image: ELiam,
//         description: "Liam brings his deep experience in digital marketing to VCGA. He ensures that our users optimize their websites not just for performance but also for search engine ranking, conversions, and user experience. Much of our educational content and blog posts are his, actually, and he helps users understand how to grow their websites.",
//     },
//     {
//         id: 3,
//         name: "Sophia Lopez",
//         title: "WordPress Support Lead",
//         image: Sophia,
//         description: "Sophia is the go-to person when it comes to customer support. With her calm demeanor and deep understanding of WordPress, she’s helped thousands of users troubleshoot issues, implement updates, and fix performance problems.",
//     },
//     {
//         id: 4,
//         name: "Ryan Clark",
//         title: "Content Manager & WordPress Educator",
//         image: Ryan,
//         description: "Ryan is actually the voice behind most of the tutorials and guides you see on our site. He is passionate about teaching WordPress concepts with clarity and making them actionable for our users, be they beginners or experienced site owners.",
//     },
// ];

// const LeadershipTeam = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedMember, setSelectedMember] = useState(null);

//     const openModal = (member) => {
//         setSelectedMember(member);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setTimeout(() => setSelectedMember(null), 300); // Delay unmounting content
//     };

//     useEffect(() => {
//         document.body.classList.toggle('overflow-hidden', isModalOpen);
//         return () => document.body.classList.remove('overflow-hidden');
//     }, [isModalOpen]);

//     return (
//         <section className="LeaderShip-Team md:pt-10 pt-5">
//             <div className="container mx-auto p-8">
//                 {/* Heading Section */}
//                 <div className="text-center mb-8 space-y-1">
//                     <h3 className="md:text-base text-small text-[#8C919B] font-semibold">VCGA leadership</h3>
//                     <h1 className="text-large font-bold text-primary">
//                         Meet VCGA’s{' '}
//                         <span className="bg-gradient rounded-full text-[#1D49C3] leading-10 font-bold py-1 px-2">
//                             senior leadership team
//                         </span>
//                     </h1>
//                 </div>

//                 {/* Team-Member Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                     {teamMembers.map((member) => (
//                         <div key={member.id} className="relative group cursor-pointer text-center">
//                             <motion.img
//                                 src={member.image}
//                                 alt={member.name}
//                                 className="rounded-xl object-cover w-full h-60 mb-4 transition-transform"
//                                 onClick={() => openModal(member)}
//                             />
//                             <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
//                             <p className="text-sm font-medium text-primary">{member.title}</p>
//                         </div>
//                     ))} 
//                 </div>
//             </div>

//             {/* Modal with Animation */}
//             <AnimatePresence>
//                 {isModalOpen && selectedMember && (
//                     <motion.div
//                         className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         onClick={closeModal}
//                     >
//                         <motion.div
//                             className="bg-white relative p-10 rounded-lg shadow-lg w-3/4 max-w-4xl"
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.8, opacity: 0 }}
//                             transition={{ type: "spring", stiffness: 150, damping: 20 }}
//                             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//                         >
//                             <div className="flex justify-end">
//                                 <button onClick={closeModal} className="text-primary focus:outline-none">
//                                     <IoClose className="size-8 absolute top-0 right-0 bg-light-blue text-white" />
//                                 </button>
//                             </div>

//                             {/* Modal Content */}
//                             <div className="flex gap-10">
//                                 <div className="w-1/3">
//                                     <img
//                                         src={selectedMember.image}
//                                         alt={selectedMember.name}
//                                         className="rounded-md object-cover h-72 w-full"
//                                     />
//                                 </div>

//                                 <div className="flex-1 space-y-3">
//                                     <h2 className="text-base font-bold text-[#1C181D] mt-5">{selectedMember.name}</h2>
//                                     <p className="text-small text-gray-700 font-normal mb-4">{selectedMember.title}</p>
//                                     <p className='text-medium text-[#1C181D] font-medium'>{selectedMember.description}</p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default LeadershipTeam;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';

import Emma from "../../assets/images/Emma-Scott.png";
import ELiam from "../../assets/images/Liam-Williams.png";
import Sophia from "../../assets/images/Sophia-Lopez.png";
import Ryan from "../../assets/images/Ryan-Clark.png";


const teamMembers = [
    {
        id: 1,
        name: "Emma Scot",
        title: "Co-Founder & Lead WordPress Developer",
        image: Emma,
        description: "With over 10 years of experience in web development, Emma is the technological heart of VCGA. She started with a mission to make WordPress management easy for all of us; security and performance optimization are all things that really get her excited, as well as keeping websites running at their best.",
    },
    {
        id: 2,
        name: "Liam Williams",
        title: "Co-Founder & Digital Marketing Expert",
        image: ELiam,
        description: "Liam brings his deep experience in digital marketing to VCGA. He ensures that our users optimize their websites not just for performance but also for search engine ranking, conversions, and user experience. Much of our educational content and blog posts are his, actually, and he helps users understand how to grow their websites.",
    },
    {
        id: 3,
        name: "Sophia Lopez",
        title: "WordPress Support Lead",
        image: Sophia,
        description: "Sophia is the go-to person when it comes to customer support. With her calm demeanor and deep understanding of WordPress, she’s helped thousands of users troubleshoot issues, implement updates, and fix performance problems.",
    },
    {
        id: 4,
        name: "Ryan Clark",
        title: "Content Manager & WordPress Educator",
        image: Ryan,
        description: "Ryan is actually the voice behind most of the tutorials and guides you see on our site. He is passionate about teaching WordPress concepts with clarity and making them actionable for our users, be they beginners or experienced site owners.",
    },
];

const LeadershipTeam = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    // Use react-intersection-observer for the whole section
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.5, // Trigger when 20% of the section is visible
        triggerOnce: true, // Only trigger once
    });


    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.9
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMember(null), 300);
    };

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isModalOpen);
        return () => document.body.classList.remove('overflow-hidden');
    }, [isModalOpen]);

    return (
        <section className="LeaderShip-Team md:pt-10 pt-5" ref={sectionRef}>
            <div className="container mx-auto p-8">
                {/* Heading Section */}
                <motion.div
                    className="text-center mb-8 space-y-1"
                    initial={{ opacity: 0, y: -20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="md:text-base text-small text-[#8C919B] font-semibold">VCGA leadership</h3>
                    <h1 className="text-large font-bold text-primary">
                        Meet VCGA's{' '}
                        <span className="bg-gradient rounded-full text-[#1D49C3] leading-10 font-bold py-1 px-2">
                            senior leadership team
                        </span>
                    </h1>
                </motion.div>

                {/* Team-Member Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                    variants={container}
                    initial="hidden"
                    animate={sectionInView ? "show" : "hidden"}
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            className="relative group cursor-pointer text-center"
                            variants={item}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-xl object-cover w-full h-60 mb-4 transition-transform"
                                onClick={() => openModal(member)}
                            />
                            <h4 className="text-lg font-bold mb-1 text-[#1C181D]">{member.name}</h4>
                            <p className="text-sm font-normal text-slate-700">{member.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal with Animation */}
            <AnimatePresence>
                {isModalOpen && selectedMember && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white relative p-10 rounded-lg shadow-lg w-3/4 max-w-4xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-end">
                                <button onClick={closeModal} className="text-primary focus:outline-none">
                                    <IoClose className="size-8 absolute top-0 right-0 bg-light-blue text-white" />
                                </button>
                            </div>

                            <div className="flex gap-10">
                                <div className="w-1/3">
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="rounded-md object-cover h-72 w-full"
                                    />
                                </div>

                                <div className="flex-1 space-y-3">
                                    <h2 className="text-base font-bold text-[#1C181D] mt-5">{selectedMember.name}</h2>
                                    <p className="text-small text-gray-700 font-normal mb-4">{selectedMember.title}</p>
                                    <p className="text-medium text-[#1C181D] font-medium">{selectedMember.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LeadershipTeam;