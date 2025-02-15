import React, { useState, useEffect, useRef, useCallback } from 'react';
import logo from "../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isSticky, setIsSticky] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Toggle Menu
    const toggleMenu = useCallback(() => {
        setIsTransitioning(true);
        setIsMenuOpen(prev => !prev);
    }, []);

    // Close menu on outside click
    const handleClickOutside = useCallback((event) => {
        if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
            setIsTransitioning(true);
            setIsMenuOpen(false);
        }
    }, [isMenuOpen]);

    // Sticky header effect
    const handleScroll = useCallback(() => {
        setIsSticky(window.scrollY > (isHomePage ? 300 : 100));
    }, [isHomePage]);

    // Close menu after animation delay
    useEffect(() => {
        let timerId;
        if (!isMenuOpen) {
            timerId = setTimeout(() => {
                setIsTransitioning(false);
            }, 300);
        }
        return () => clearTimeout(timerId);
    }, [isMenuOpen]);

    // Click outside listener
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    // Sticky header listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-20"></div>}

            <header className={`top-0 z-30 relative transition-shadow duration-300 lg:py-2 py-4 
                ${isHomePage ? (isSticky ? "bg-white shadow-main" : "") : "bg-white shadow-main"}
                ${isSticky ? "sticky transition-all duration-300" : ""}`}>

                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="VCGA Logo" className="md:h-11 h-8 mr-2" />
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden">
                        {!isMenuOpen ? (
                            <IoMdMenu className='h-6 w-6 cursor-pointer' onClick={toggleMenu} />
                        ) : (
                            <IoClose className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>

                    {/* 🔥 **Desktop Navigation with Animated Underline** */}
                    <nav className="hidden lg:flex space-x-7 items-center z-10">
                        {[
                            { path: "/services", label: "Services" },
                            { path: "/case-studies", label: "Case Studies" },
                            { path: "/blog", label: "Blogs" },
                            { path: "/reviews", label: "Reviews" },
                            { path: "/about-us", label: "About Us" },
                            { path: "/contact-us", label: "Contact Us" },
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    to={item.path}
                                    className={`text-primary font-medium text-small hover:text-blues transition-all ease-in duration-200 relative block
                                    ${isActive(item.path) ? 'text-[#1D49C6] font-semibold' : ''}`}
                                >
                                    {item.label}
                                    <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-blues transform origin-right scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:origin-left`}></span>
                                </Link>
                            </div>
                        ))}
                        <Link to="/see-pricing" className="bg-light-blue text-white px-10 text-small py-3 rounded-lg font-medium hover:bg-[#103498] transition-all duration-300 ease-in">
                            See Plans
                        </Link>
                    </nav>

                    {/* 🔥 **Mobile Navigation with Fixed Active Class** */}
                    <nav
                        ref={navRef}
                        className={`lg:hidden border-r border-gray-300 fixed top-0 left-0 h-full w-64 bg-white shadow-main transform transition-transform duration-500 ease-in-out flex flex-col p-4 z-30 
                            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                            ${isTransitioning ? "" : "pointer-events-none"}`}>

                        {isMenuOpen && (
                            <div className="lg:hidden flex justify-end mb-4">
                                <IoClose className="h-8 w-8 cursor-pointer border p-1 rounded-full" onClick={toggleMenu} />
                            </div>
                        )}

                        {[
                            { path: "/services", label: "Services" },
                            { path: "/case-studies", label: "Case Studies" },
                            { path: "/blog", label: "Blog" },
                            { path: "/reviews", label: "Reviews" },
                            { path: "/about-us", label: "About Us" },
                            { path: "/contact-us", label: "Contact Us" },
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`text-primary font-normal text-medium hover:text-blues transition-colors duration-200 mb-4 
                                    ${isActive(item.path) ? 'text-light-blue font-semibold' : ''}`}
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link to="/see-pricing" className="bg-light-blue bottom-2 w-4/5 text-center left-6 absolute inline-block text-white px-6 py-2.5 rounded-xl font-medium text-medium hover:bg-blue-900 transition-colors duration-200">
                            See Plans
                        </Link>
                    </nav>

                </div>
            </header>
        </>
    );
};

export default Header;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import logo from "../assets/images/logo.png";
// import { IoMdMenu } from "react-icons/io";
// import { IoClose } from "react-icons/io5";
// import { Link, useLocation } from 'react-router-dom';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navRef = useRef(null);
//     const location = useLocation();
//     const isHomePage = location.pathname === "/";
//     const [isSticky, setIsSticky] = useState(false);
//     const [isTransitioning, setIsTransitioning] = useState(false);

//     const toggleMenu = useCallback(() => {
//         setIsTransitioning(true);
//         setIsMenuOpen(prev => !prev);
//     }, []);

//     const handleClickOutside = useCallback((event) => {
//         if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
//             setIsTransitioning(true);
//             setIsMenuOpen(false);
//         }
//     }, [isMenuOpen]);

//     const handleScroll = useCallback(() => {
//         setIsSticky(window.scrollY > (isHomePage ? 300 : 100));
//     }, [isHomePage]);

//     useEffect(() => {
//         let timerId;
//         if (!isMenuOpen) {
//             timerId = setTimeout(() => {
//                 setIsTransitioning(false);
//             }, 300);
//         }
//         return () => clearTimeout(timerId);
//     }, [isMenuOpen]);

//     useEffect(() => {
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [handleClickOutside]);

//     useEffect(() => {
//         document.body.style.overflow = isMenuOpen ? 'hidden' : '';
//         return () => { document.body.style.overflow = ''; };
//     }, [isMenuOpen]);

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [handleScroll]);

//     // Enhanced isActive function with exact path matching and optional partial matching
//     const isActive = (path) => {
//         if (path === '/') {
//             return location.pathname === '/';
//         }
//         return location.pathname === path || location.pathname.startsWith(`${path}/`);
//     };

//     const navItems = [
//         { path: "/services", label: "Services" },
//         { path: "/case-studies", label: "Case Studies" },
//         { path: "/blog", label: "Blogs" },
//         { path: "/reviews", label: "Reviews" },
//         { path: "/about-us", label: "About Us" },
//         { path: "/contact-us", label: "Contact Us" },
//     ];

//     return (
//         <>
//             {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-20"></div>}

//             <header className={`top-0 z-30 relative transition-shadow duration-300 lg:py-2 py-4 
//                 ${isHomePage ? (isSticky ? "bg-white shadow-main" : "") : "bg-white shadow-main"}
//                 ${isSticky ? "sticky transition-all duration-300" : ""}`}>

//                 <div className="container mx-auto flex justify-between items-center">
//                     <div className="flex items-center">
//                         <Link to="/">
//                             <img src={logo} alt="VCGA Logo" className="md:h-11 h-8 mr-2" />
//                         </Link>
//                     </div>

//                     <div className="lg:hidden">
//                         {!isMenuOpen ? (
//                             <IoMdMenu className='h-6 w-6 cursor-pointer' onClick={toggleMenu} />
//                         ) : (
//                             <IoClose className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
//                         )}
//                     </div>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex space-x-7 items-center z-10">
//                         {navItems.map((item, index) => (
//                             <div key={index} className="relative group">
//                                 <Link
//                                     to={item.path}
//                                     className={`text-primary font-medium text-small transition-all ease-in duration-200 relative block
//                                         ${isActive(item.path)
//                                             ? 'text-[#1D49c3] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blues'
//                                             : 'hover:text-blues'}`}
//                                 >
//                                     {item.label}
//                                 </Link>
//                             </div>
//                         ))}
//                         <Link to="/see-pricing" className="bg-light-blue text-white px-10 text-small py-3 rounded-lg font-medium hover:bg-[#103498] transition-all duration-300 ease-in">
//                             See Plans
//                         </Link>
//                     </nav>

//                     {/* Mobile Navigation */}
//                     <nav
//                         ref={navRef}
//                         className={`lg:hidden border-r border-gray-300 fixed top-0 left-0 h-full w-64 bg-white shadow-main transform transition-transform duration-500 ease-in-out flex flex-col p-4 z-30 
//                             ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
//                             ${isTransitioning ? "" : "pointer-events-none"}`}>

//                         {isMenuOpen && (
//                             <div className="lg:hidden flex justify-end mb-4">
//                                 <IoClose className="h-8 w-8 cursor-pointer border p-1 rounded-full" onClick={toggleMenu} />
//                             </div>
//                         )}

//                         {navItems.map((item, index) => (
//                             <Link
//                                 key={index}
//                                 to={item.path}
//                                 className={`text-primary font-normal text-medium transition-colors duration-200 mb-4 
//                                     ${isActive(item.path)
//                                         ? 'text-light-blue font-semibold relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-light-blue'
//                                         : 'hover:text-blues'}`}
//                                 onClick={toggleMenu}
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}

//                         <Link to="/see-pricing" className="bg-light-blue bottom-2 w-4/5 text-center left-6 absolute inline-block text-white px-6 py-2.5 rounded-xl font-medium text-medium hover:bg-blue-900 transition-colors duration-200">
//                             See Plans
//                         </Link>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     );
// };

// export default Header;