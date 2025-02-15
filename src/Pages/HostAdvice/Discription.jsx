import React, { useState, useEffect } from 'react'
import logo from "../../assets/images/logos.webp";
import { HiOutlinePencilAlt } from "react-icons/hi";
import happy from "../../assets/images/happy.webp";
import { FaStar } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import hostman from "../../assets/images/Hostman_logo.webp";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import laptop from "../../assets/images/Laptops.webp";

const Discription = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: 'Does UltaHost offer a money-back guarantee?',
            answer:
                'Yes, you can get a refund on Shared, VPS, VDS Server, WordPress Hosting, Windows Hosting, and Windows Hosting plans within 30 days of your purchase. However, domain registration and cPanel aren\'t eligible for a refund. Also, you need to submit the request before closing your account with UltaHost so it can process.  You won\'t be able to get a refund on a monthly dedicated hosting plan. Feel free to check the <a href="#" className="text-blue-300 hover:underline">refund policy</a> for more details.',
        },
        {
            question: 'How can I join UltaHost\'s Affiliate program?',
            answer:
                'You can join the UltaHost affiliate program by visiting our <a href="#" className="text-blue-300 hover:underline">affiliate program page</a> and following the instructions to sign up. Once approved, you will gain access to all the necessary tools and resources to promote our services.',
        },
        {
            question: 'Does UltaHost offer customer support?',
            answer:
                'Yes, UltaHost offers a wide range of customer support options. Our dedicated support team can be reached through live chat, email and phone. We are committed to providing exceptional service and ensuring our clients have a smooth and seamless experience.',
        },
        {
            question: 'Can I get a free domain with UltaHost?',
            answer:
                'UltaHost offers free domain registration and transfer in its annual hosting plans.',
        },
        {
            question: 'Is UltaHost secure??',
            answer:
                'UltaHost is dedicated to its users’ security and privacy. You will benefit from dedicated firewalls, SSL certificates, login security, IP whitelisting, BitNinja security, Cloudflare CDN, SpamExperts, WAF, malware scans and reports, free daily backups, database security, and more.',
        },
        {
            question: 'Does UltaHost offer a money-back guarantee?',
            answer: 'Yes. Ultahost offers a 30-day money back guarantee on most of its plans across the different tiers. You’d have enough time to test the host’s services and decide if it’s a great fit for your website.'
        },
        {
            question: 'Can I get a free domain with UltaHost?',
            answer:
                'Yes. Ultahost allows users to register a domain for free on most of their hosting plans. You also get a free SSL certificate as part of the package.'
        },
        {
            question: 'Is Ultahost easy to use?',
            answer: 'Yes. Ultahost is incredibly easy to use. One thing in particular about them I like is how well-structured their website and client account management dashboard are. You’d have no problem finding the right service and in turn, managing your hosting once you sign up.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            {/* Ultahost Section  */}
            {/* <section className='my-10 Ultahost-1'>
                <div className='container mx-auto'>
                    <div className="flex w-full md:flex-row flex-col space-y-5 border bg-white rounded-medium shadow-sm hover:shadow-md transition-all duration-200 ease-in p-6">
                        <div className="md:w-3/4 pr-4 w-full space-y-4">
                            <h2 className="md:text-2xl text-xl font-bold text-[#0B0C0F] mb-1">Ultahost</h2>
                            <p className="text-[#16181db3] text-lg max-w-lg">
                                UltaHost delivers customized hosting solutions for all, from rookies to industry giants, emphasizing their superior VPS and managed hosting services for hassle-free website functionality.
                            </p>
                        </div>

                        <div className="w-full flex flex-col items-center justify-center space-y-5">
                            <div className="flex items-center mb-2">
                                <img src={logo} alt="Ultahost Logo" className="h-8 mr-2" />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 lg:px-10 w-full md:w-44 text-nowrap rounded-full">
                                Visit Ultahost
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}


            {/*  Ultahost Pros and Cons */}
            <section className='Ultahost-Props py-10'>
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Ultahost Pros and Cons</h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        {/*  <!-- Pros Section --> */}
                        <div className="w-full bg-white border border-l-2 border-l-green-500 rounded-2xl shadow-md p-4">
                            <h3 className="text-xl font-semibold mb-3">Pros</h3>
                            <ul className="list-none">
                                <li className="flex items-center mb-2">
                                    <span className='props'>
                                    </span>
                                    No hidden fees
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className='props'>
                                    </span>
                                    Founder owned
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className='props'>
                                    </span>
                                    Impressive customer support
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className='props'>
                                    </span>
                                    Incredibly intuitive user interface
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className='props'>
                                    </span>
                                    Impressive security features
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className='props'>
                                    </span>
                                    Free domain and SSL
                                </li>
                                <li className="flex items-center mb-2">
                                    <span className='props'>
                                    </span>
                                    Free website migration
                                </li>
                            </ul>
                        </div>

                        {/*  <!-- Cons Section --> */}
                        <div className="w-full bg-white border-l-2 border-l-red-500 rounded-2xl shadow-md p-4">
                            <h3 className="text-xl font-semibold mb-3">Cons</h3>
                            <ul className="list-none">
                                <li className="flex items-center mb-2">
                                    <span className='props data'>
                                    </span>
                                    Free website migration
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* Ultahost RightSide Content */}
            <section className='Hosting-Tips'>
                <div className='container mx-auto flex gap-5'>
                    <div className='w-3/4'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nam quo delectus suscipit ratione doloremque ad autem vel corrupti et blanditiis sit sunt sint excepturi natus minus, odit quidem aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium dolor itaque maiores maxime deserunt aliquid, culpa fuga possimus cum! Hic, provident expedita. In cupiditate sit quasi mollitia! Sint, explicabo!</p>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem incidunt sunt debitis eum, magni, ducimus alias eveniet, obcaecati iste aliquam? Labore eius dignissimos sunt, incidunt hic voluptatibus aliquid totam.</h1>
                    </div>
                    <div className='w-1/4 flex items-center flex-col border p-4 rounded-xl shadow-lg py-10 space-y-5'>
                        <img src={logo} alt="" className='h-8' />
                        <button className='bg-[#0d80F2] text-white font-medium mt-4 px-14 py-2 rounded-full'>
                            Visit Ultahost
                        </button>
                        <div className="overflow-y-auto max-h-32 w-60 custom-scroll border-t border-b border-gray-300 my-4">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-blue-500 font-medium hover:bg-gray-100">Expert Review</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-[#16181DB3] hover:text-blue-500 hover:bg-gray-50">User Reviews</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-[#16181DB3] hover:text-blue-500 hover:bg-gray-50">Hosting Plans</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-[#16181DB3] hover:text-blue-500 hover:bg-gray-50">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-1 text-[#16181DB3] hover:text-blue-500 hover:bg-gray-50">Similar Companies</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* review */}
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <HiOutlinePencilAlt className='text-[#0d80f2] size-6' />
                            <a className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>Write a review</a>
                        </div>

                    </div>
                </div>
            </section >

            {/* Ultahost RightSide Review */}
            <section section className='Ultahost-Review my-10' >
                <div className='container mx-auto flex gap-5'>
                    <div className='w-3/4'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatum praesentium sapiente voluptates maxime! Eos, quos. Natus quidem odio animi neque magnam provident laudantium beatae quaerat incidunt. Molestias, pariatur ea.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus corrupti laboriosam illum aperiam explicabo ut labore unde, eius velit deleniti aut maxime, odit odio illo molestiae, exercitationem quo reiciendis!</p>
                    </div>
                    <div className="bg-white border rounded-xl shadow-lg p-4 w-1/4 py-10">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center border-b border-gray-300 w-full pb-4">
                                <img src={happy} alt="User Avatar" className="h-16 rounded-full mr-2" />
                                <div className='space-y-1'>
                                    <div className="text-[#0b0c0f] font-bold text-[18px]">Matheilda Haze</div>
                                    <div className="text-[#16181DB3] font-medium text-sm">Germany</div>
                                    <div className="text-[#16181DB3] text-sm">
                                        <span> 24 Jan, 2025 | 06:01</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-2 gap-2">
                            <div className="text-[#0b0c0f] font-bold text-xl">5.0</div>
                            <div className="flex space-x-0.5">
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                        </div>
                        <p className="text-[#0b0c0f] text-[18px] font-bold mb-2">
                            Ultahost has filled my appetite for best hosting option available
                        </p>
                        <p className="text-[#0b0c0f] text-[16px] mb-2">
                            Considering the degree of protection they provide, Ultahost's reasonably priced domain hosting has amazed me. I like tha...
                        </p>
                        <div className='border-t border-gray-300 mt-4'>
                            <a href="#" className="text-[#0d80f2] hover:text-blue-500 font-bold block text-center mt-2">See all reviews (1,145)</a>
                        </div>
                    </div>
                </div>
            </section >


            {/* Ultahost Frequently Asked Questions */}
            <section className='FaQ-list py-10'>
                <div className='container mx-auto'>
                    <div className="max-w-7xl mx-auto mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Frequently Asked Questions
                        </h2>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <div
                                    className={`rounded-lg p-4 cursor-pointer flex justify-between items-center transition-colors duration-300 ease-in 
                            ${activeIndex === index
                                            ? 'rounded-b-none border-b-transparent text-gray-800 bg-gray-100'
                                            : 'text-gray-600 hover:bg-[#f3f4f6] hover:text-[#0b0c0f]' // Modified hover styles here
                                        }`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className={`md:text-xl font-semibold ${activeIndex === index ? 'text-[#0b0c0f]' : 'text-gray-600'}`}>
                                        {faq.question}
                                    </h3>
                                    <IoIosArrowUp className={`size-6 text-gray-500 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''} `} />
                                </div>
                                {activeIndex === index && (
                                    <div
                                        className="bg-gray-100 border-t-0 rounded-b-lg p-4"
                                    >
                                        <p className="text-gray-800 md:text-[16px] text-sm leading-6 font-medium" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ultahost User-Review */}
            <section className='User-Review py-12 bg-gray-50'>
                <div className='container mx-auto'>
                    <div className="max-w-7xl mx-auto md:px-6 px-4 py-10 bg-white border rounded-2xl shadow-xl">
                        <h2 className="md:text-3xl text-xl text-gray-800 mb-2 font-bold">
                            User Reviews
                        </h2>
                        <div className="border-b border-gray-300 mb-6"></div>
                        <h3 className="md:text-2xl text-xl font-medium text-[#0b0c0f] mb-6">
                            Top Trustpilot Testimonials
                        </h3>
                        <div className="md:space-y-10 space-y-5">
                            {/* Testimonial 1 */}
                            <div className="flex items-start md:gap-2 gap-1 flex-row">
                                <div className="border-l-4 border-blue-500 h-16 mr-4 flex-shrink-0"></div>
                                <div className='flex-1'>
                                    <p className="text-gray-700 md:text-lg italic mb-3 font-medium leading-relaxed">
                                        "Ascend Viral is PHENOMENAL!"
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        -  Michael Clayden
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="flex items-start md:gap-2 gap-1 flex-row">
                                <div className="border-l-4 border-blue-500 h-16 mr-4 flex-shrink-0"></div>
                                <div className='flex-1'>
                                    <p className="text-gray-700 md:text-lg italic mb-3 font-medium leading-relaxed">
                                        "Finally, real followers who engage! My boutique\'s sales doubled."
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        - Tamara\'s Treasures
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="flex items-start md:gap-2 gap-1 flex-row">
                                <div className="border-l-4 border-blue-500 h-16 mr-4 flex-shrink-0"></div>
                                <div className='flex-1'>
                                    <p className="text-gray-700 md:text-lg italic mb-3 font-medium leading-relaxed">
                                        "Esha (Growth Assistant) gave me game-changing advice."
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        - Katerina Pouzbouri
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-8"></div>
                        <div>
                            <p className="text-blue-600 font-semibold inline-block relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-500 hover:after:w-full cursor-pointer">
                                View all 1,200+ reviews on Trustpilot →
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Ultahost Similar Hosting Companies */}
            <section className='Ultrahost-data py-12'>
                <div className='container mx-auto'>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Check Similar Hosting Companies:
                    </h2>
                    <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg p-4 w-full max-w-md">
                        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between mb-4">
                            <div className="flex items-center">
                                <img src={hostman} alt="" className='h-10' />
                            </div>
                            <div className="text-right flex flex-col items-center space-y-1.5">
                                <div className="flex items-center justify-end">
                                    <span className="text-xl font-bold text-gray-800 mr-1">5.0</span>
                                    <div className='flex text-yellow-500 text-xl'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <h3 className="font-medium text-sm text-[#0d80f2]">Hostman review</h3>
                                <h1 className="text-[12px] text-[#16181db3] font-medium">15 reviews</h1>
                            </div>
                        </div>

                        <ul className="my-10 space-y-2">
                            <div className='flex items-center gap-2'>
                                <li className="text-gray-700 gap-2">
                                    <GiCheckMark className='h-4' />
                                </li>
                                <p className='text-sm md:text-[16px]'>
                                    Flexible Pricing & Money-back Guarantee
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <li className="text-gray-700 gap-2">
                                    <GiCheckMark className='h-4' />
                                </li>
                                <p className='text-sm md:text-[16px]'>
                                    Free Daily Backups, Website Migration, SSL for all websites, Web Server Caches, cPanel Control Panel
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <li className="text-gray-700 gap-2">
                                    <GiCheckMark className='h-4' />
                                </li>
                                <p className='text-sm md:text-[16px]'>
                                    24/7 on live chat, email, phone, and social media
                                </p>
                            </div>
                        </ul>

                        <div className="flex flex-col md:flex-row items-center justify-between py-5 space-y-5 md:space-y-0">
                            <div className="text-4xl font-medium text-black">
                                $4.00<span className="text-sm font-medium text-gray-500">/mo</span>
                            </div>
                            <a href="#" className="bg-blue-500 hover:bg-blue-700 gap-2 text-white font-bold py-2 px-10 rounded-full flex items-center">
                                Visit Site
                                <FaArrowRight className='h-6' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*  finding the right host */}
            <div className="bg-[#F6F7F8] shadow-md container mx-auto rounded-2xl">
                <div className="flex flex-col md:flex-row  items-center justify-between p-4 ">
                    <div className="max-w-2xl space-y-5 order-2 md:order-1">
                        <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-2">Need help with finding the right host for your needs?</h2>
                        <p className="text-gray-600 mb-4">Answer a few simple questions and find the perfect solution for you!</p>
                        <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 ease-in text-white font-medium py-2 px-4 rounded-full flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            Start Hosting Search
                        </button>
                    </div>
                    <div className='order-1 md:order-2 mb-10'>
                        <img src={laptop} alt="Fox with laptop" className='size-48' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discription
