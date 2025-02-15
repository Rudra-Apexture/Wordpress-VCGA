import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import { FaChevronUp, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { fetchCases } from '../Pages/CaseStudies/caseStudyService';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMail } from 'react-icons/gr';
import { CiMail } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [categories, setCategories] = useState([]); // State for categories
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (icon) => {
        setHoveredIcon(icon);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    const iconStyle = (icon) => {
        let translateX = 0;

        if (hoveredIcon === icon) {
            translateX = '0px'; // Move to the center
        } else {
            translateX = '0px'; // Stay in the center initially
        }

        return {
            transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
            transform: `translateX(${translateX})`,
        };
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling
        });
    };

    useEffect(() => {
        const loadCases = async () => {
            try {
                const data = await fetchCases();
                setCaseStudies(data);
            } catch (err) {
                console.error("Error fetching cases:", err);
            }
        };
        loadCases();

        // Fetch Categories
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://vcga.uk/wp-json/wp/v2/categories');  // Adjust the URL accordingly
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // Function to decode HTML entities
    const decodeHTMLEntities = (text) => {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    };

    return (
        <footer className="bg-white py-12">
            <div className="mx-auto container">
                <div className='site-footer'>
                    <div className='scroll-top-wrapper'>
                        <a className="scroll-top cursor-pointer">
                            <div onClick={scrollToTop} className="border border-gray-300 mb-10 flex items-center justify-center relative group">
                                <button
                                    className="text-white text-medium px-1 py-3.5 rounded-xl absolute -top-10 border border-gray-300 group-hover:border-light-blue transition-colors"
                                >
                                    <FaChevronUp className='text-black h-2.5 group-hover:text-light-blue transition-transform ease-in duration-300 group-hover:-translate-y-3' />
                                </button>
                                <h1 className='absolute top-1.5 text-dark-black font-medium text-nowrap uppercase text-xxs'>Back on top</h1>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row text-primary font-semibold">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="mb-8 md:mb-0 space-y-5 flex flex-col">
                            <Link to="/">
                                <img src={logo} alt="VCGA Logo" className="lg:w-1/2 w-2/3" />
                            </Link>
                            <p className="max-w-80 text-primary font-medium text-small">We've got backups, updates, and security covered, with hosting included.</p>
                            <a href='mailto:info@vcga.com' className="lg:text-small text-xs flex items-center gap-2 font-medium text-primary">
                                <FiMail className='size-5 text-slate-700/70' />
                                info@vcga.czom
                            </a>
                            <a href='#' className="lg:text-small text-xs flex items-center gap-2 text-primary font-medium">
                                <LuMapPin className='size-5 text-slate-700/70' />
                                279 high street north london</a>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-light-blue underline-animation">Site Links</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/about-us" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term-service" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-light-blue underline-animation">Case Studies</h4>
                            <ul className="space-y-4">
                                {caseStudies.map((study) => (
                                    <li key={study.id}>
                                        <Link to={`/case-study/${study.slug}`} className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
                                            {study.heading}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-light-blue underline-animation">Resources</h4>
                            {/* Category  */}
                            <ul className="space-y-4">
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <Link to={`/category/${category.slug}`} className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
                                            {decodeHTMLEntities(category.name)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social-Media */}
                <div className="mt-6 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-primary">
                    <p className="text-small mb-4 md:mb-0 font-medium text-gray-700">© 2024 VCGA. All right reserved</p>
                    <div>
                        <div className='flex justify-center md:justify-start gap-5'>
                            <a href="https://www.facebook.com/people/VCGA/61572283934920/" className='p-2 bg-[#3B5998] rounded-md hover:bg-blue-700 transition-colors ease-in duration-200'>
                                <FaFacebook className='size-5 text-white' />
                            </a>
                            <a href="https://www.linkedin.com/company/vcgauk/about/?viewAsMember=true" className='p-2 bg-[#0077B5] rounded-md hover:bg-sky-700 transition-colors ease-in duration-200'>
                                <FaLinkedin className='size-5 text-white' />
                            </a>
                            <a href="https://x.com/VCGAPVTLTD" className='p-2 bg-black rounded-md hover:bg-dark-black transition-colors ease-in duration-200'>
                                <FaXTwitter className='size-5 text-white' />
                            </a>
                            <a href="mailto:info@vcga.com" className='p-2 bg-[#EA4335] rounded-md hover:bg-red-700 transition-colors ease-in duration-200'>
                                <GrMail className='size-5 text-white' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// import React, { useState, useEffect, useRef } from 'react';
// import logo from "../assets/images/logo.png";
// import { FaChevronUp, FaFacebook } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { fetchCases } from '../Pages/CaseStudies/caseStudyService';
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { GrMail } from 'react-icons/gr';
// import { CiMail } from "react-icons/ci";
// import { LuMapPin } from "react-icons/lu";
// import { FiMail } from "react-icons/fi";

// const Footer = () => {
//     const [caseStudies, setCaseStudies] = useState([]);
//     const [categories, setCategories] = useState([]); // State for categories
//     const [hoveredIcon, setHoveredIcon] = useState(null);
//     const [showChatbot, setShowChatbot] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const chatboxRef = useRef(null);

//     // Mock chatbot responses (replace with real logic or an API)
//     const chatbotResponses = {
//         'hello': 'Hi there! How can I help you today?',
//         'wordpress': 'We specialize in WordPress maintenance and services.',
//         'contact': 'You can reach us at info@vcga.com or 279 high street north london.',
//         'case studies': 'Check out our case studies section for more information!',
//         'default': 'I am sorry, I don\'t understand. Please ask something else.',
//     };

//     const handleMouseEnter = (icon) => {
//         setHoveredIcon(icon);
//     };

//     const handleMouseLeave = () => {
//         setHoveredIcon(null);
//     };

//     const iconStyle = (icon) => {
//         let translateX = 0;

//         if (hoveredIcon === icon) {
//             translateX = '0px'; // Move to the center
//         } else {
//             translateX = '0px'; // Stay in the center initially
//         }

//         return {
//             transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
//             transform: `translateX(${translateX})`,
//         };
//     };
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth', // Add smooth scrolling
//         });
//     };

//     useEffect(() => {
//         const loadCases = async () => {
//             try {
//                 const data = await fetchCases();
//                 setCaseStudies(data);
//             } catch (err) {
//                 console.error("Error fetching cases:", err);
//             }
//         };
//         loadCases();

//         // Fetch Categories
//         const fetchCategories = async () => {
//             try {
//                 const response = await fetch('https://vcga.uk/wp-json/wp/v2/categories');  // Adjust the URL accordingly
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setCategories(data);
//             } catch (error) {
//                 console.error("Error fetching categories:", error);
//             }
//         };
//         fetchCategories();
//         // Scroll chatbox to bottom on message update
//         if (chatboxRef.current) {
//             chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
//         }
//     }, [messages]);

//     // Function to decode HTML entities
//     const decodeHTMLEntities = (text) => {
//         const textArea = document.createElement('textarea');
//         textArea.innerHTML = text;
//         return textArea.value;
//     };

//     // Chatbot functionality
//     const toggleChatbot = () => {
//         setShowChatbot(!showChatbot);
//         if (!showChatbot) {
//             setMessages([{ text: 'Hi! How can I help you today?', sender: 'bot' }]);
//         }
//     };

//     const handleSendMessage = (event) => {
//         event.preventDefault();
//         const messageInput = event.target.elements.message;
//         const userMessage = messageInput.value.trim().toLowerCase();

//         if (!userMessage) return;

//         setMessages(prevMessages => [...prevMessages, { text: userMessage, sender: 'user' }]);
//         messageInput.value = '';

//         // Simulate chatbot response after a short delay
//         setTimeout(() => {
//             const botResponse = chatbotResponses[userMessage] || chatbotResponses['default'];
//             setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
//         }, 500);
//     };

//     return (
//         <footer className="bg-white py-12 relative">
//             <div className="mx-auto container">
//                 <div className='site-footer'>
//                     <div className='scroll-top-wrapper'>
//                         <a className="scroll-top cursor-pointer">
//                             <div onClick={scrollToTop} className="border border-gray-300 mb-10 flex items-center justify-center relative group">
//                                 <button
//                                     className="text-white text-medium px-1 py-3.5 rounded-xl absolute -top-10 border border-gray-300 group-hover:border-light-blue transition-colors"
//                                 >
//                                     <FaChevronUp className='text-black h-2.5 group-hover:text-light-blue transition-transform ease-in duration-300 group-hover:-translate-y-3' />
//                                 </button>
//                                 <h1 className='absolute top-1.5 text-dark-black font-medium text-nowrap uppercase text-xxs'>Back on top</h1>
//                             </div>
//                         </a>
//                     </div>
//                 </div>

//                 <div className="flex flex-col items-center md:flex-row text-primary font-semibold">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         <div className="mb-8 md:mb-0 space-y-5 flex flex-col">
//                             <Link to="/">
//                                 <img src={logo} alt="VCGA Logo" className="lg:w-1/2 w-2/3" />
//                             </Link>
//                             <p className="max-w-80 text-primary font-medium text-small">We've got backups, updates, and security covered, with hosting included.</p>
//                             <a href='mailto:info@vcga.com' className="lg:text-small text-xs flex items-center gap-2 font-medium text-primary">
//                                 <FiMail className='size-5 text-slate-700/70' />
//                                 info@vcga.czom
//                             </a>
//                             <a href='#' className="lg:text-small text-xs flex items-center gap-2 text-primary font-medium">
//                                 <LuMapPin className='size-5 text-slate-700/70' />
//                                 279 high street north london</a>
//                         </div>
//                         <div>
//                             <h4 className="font-bold mb-4 text-light-blue underline-animation">Site Links</h4>
//                             <ul className="space-y-4">
//                                 <li>
//                                     <Link to="/about-us" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
//                                         About us
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/contact-us" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
//                                         Contact us
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/privacy-policy" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
//                                         Privacy Policy
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/term-service" className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
//                                         Terms of Service
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h4 className="font-bold mb-4 text-light-blue underline-animation">Case Studies</h4>
//                             <ul className="space-y-4">
//                                 {caseStudies.map((study) => (
//                                     <li key={study.id}>
//                                         <Link to={`/case-study/${study.slug}`} className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
//                                             {study.heading}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h4 className="font-bold mb-4 text-light-blue underline-animation">Resources</h4>
//                             {/* Category  */}
//                             <ul className="space-y-4">
//                                 {categories.map(category => (
//                                     <li key={category.id}>
//                                         <Link to={`/category/${category.slug}`} className="hover:text-light-blue transition-all duration-300 hover:translate-x-3 inline-block">
//                                             {decodeHTMLEntities(category.name)}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Social-Media */}
//                 <div className="mt-6 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-primary">
//                     <p className="text-small mb-4 md:mb-0 font-medium text-gray-700">© 2024 VCGA. All right reserved</p>
//                     <div>
//                         <div className='flex justify-center md:justify-start gap-5'>
//                             <a href="https://www.facebook.com/people/VCGA/61572283934920/" className='p-2 bg-[#3B5998] rounded-md hover:bg-blue-700 transition-colors ease-in duration-200'>
//                                 <FaFacebook className='size-5 text-white' />
//                             </a>
//                             <a href="https://www.linkedin.com/company/vcgauk/about/?viewAsMember=true" className='p-2 bg-[#0077B5] rounded-md hover:bg-sky-700 transition-colors ease-in duration-200'>
//                                 <FaLinkedin className='size-5 text-white' />
//                             </a>
//                             <a href="https://x.com/VCGAPVTLTD" className='p-2 bg-black rounded-md hover:bg-dark-black transition-colors ease-in duration-200'>
//                                 <FaXTwitter className='size-5 text-white' />
//                             </a>
//                             <a href="mailto:info@vcga.com" className='p-2 bg-[#EA4335] rounded-md hover:bg-red-700 transition-colors ease-in duration-200'>
//                                 <GrMail className='size-5 text-white' />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Chatbot Button */}
//             <button
//                 className="fixed bottom-8 right-8 bg-light-blue text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50"
//                 onClick={toggleChatbot}
//             >
//                 <CiMail className="w-6 h-6" />
//             </button>

//             {/* Chatbot Window */}
//             {showChatbot && (
//                 <div className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
//                     <div className="bg-light-blue text-white p-4">
//                         <h5 className="font-semibold">Chat with us</h5>
//                     </div>
//                     <div ref={chatboxRef} className="p-4 h-64 overflow-y-auto">
//                         {messages.map((message, index) => (
//                             <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
//                                 <span
//                                     className={`inline-block p-2 rounded-lg text-sm ${message.sender === 'user'
//                                         ? 'bg-blue-200 text-blue-800'
//                                         : 'bg-gray-200 text-gray-800'
//                                         }`}
//                                 >
//                                     {message.text}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                     <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-300">
//                         <div className="flex">
//                             <input
//                                 type="text"
//                                 name="message"
//                                 className="flex-grow rounded-l-md border border-gray-300 p-2 focus:outline-none"
//                                 placeholder="Type your message..."
//                             />
//                             <button
//                                 type="submit"
//                                 className="bg-light-blue text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors"
//                             >
//                                 Send
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}
//         </footer >
//     );
// };

// export default Footer;

