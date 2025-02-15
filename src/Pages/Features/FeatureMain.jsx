import React, { useState } from 'react'
import content from "../../assets/images/writing.png";
import silver from "../../assets/images/silver.png";

const FeatureMain = () => {

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the formData to your backend for processing
        console.log('Form submitted:', formData);
    };

    return (
        <section className='Card-Checkout py-10'>
            <div className='container mx-auto'>
                {/* The Final Step */}
                <div className="bg-white flex flex-col md:flex-row items-center border-b border-gray-300">
                    <div className="md:w-1/2 w-full md:pr-10 md:space-y-3 space-y-2 text-center md:text-left">
                        <p className="text-primary text-basic font-bold">The Final Step</p>
                        <h1 className="lg:text-5xl text-4xl font-bold text-light-blue">Enter Your Details</h1>
                        <p className="text-primary text-medium font-medium">And Let Us Take Care Of Your Website.</p>
                    </div>
                    <div className="md:w-1/2 w-full flex md:justify-end justify-center">
                        <img src={content} alt="illustration" className="max-h-72" />
                    </div>
                </div>

                {/* Checkout Table */}
                <div className="bg-white border my-10 rounded-xl shadow-main">
                    <div className="border-b">
                        <div className="flex md:p-3 p-2">
                            <div className="w-1/2 text-dark-black md:text-medium text-small font-bold">Item Name</div>
                            <div className="w-1/2 text-dark-black md:text-medium text-small font-bold text-right">Item Price</div>
                        </div>
                    </div>
                    <div className="border-b">
                        <div className="flex items-center md:p-3 p-2">
                            <div className="w-1/2 flex items-center">
                                <img src={silver} alt="Item Icon" className="size-6 mr-2" />
                                <span className="text-primary text-sm md:text-medium font-medium">SiteGuard Essentials - Silver</span>
                            </div>
                            <div className="w-1/2 text-primary text-right">
                                <span>$39.00</span>
                                <button className="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-b">
                        <div className="flex items-center md:p-3 p-2">
                            <div className="w-1/2 flex items-center">
                                <img src={silver} alt="Item Icon" className="size-6 mr-2" />
                                <span className="text-primary text-sm md:text-medium font-medium">SiteGuard Elite – Platinum </span>
                            </div>
                            <div className="w-1/2 text-primary text-right">
                                <span>$189.00 </span>
                                <button className="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-4 flex justify-end">
                        <div className='Wrap-Total'>
                            <div className="flex justify-between">
                                <span className="font-bold text-medium text-dark-black">Total : </span>
                                <span className="font-bold text-medium text-dark-black">$228.00</span>
                            </div>
                            <button className="bg-light-blue text-white rounded-md py-2 px-6 mt-10 hover:bg-blue-700">Save Cart</button>
                        </div>
                    </div>
                </div>

                {/* Personal Info */}
                <div className='Form-Handle'>
                    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-6 bg-white border border-gray-300 rounded-medium shadow-md">
                        <h2 className="text-xl text-primary font-bold mb-4">Personal Info</h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                Email address<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border placeholder:text-gray-500 focus:placeholder:text-[#2A27E9] border-gray-300 rounded-md focus:outline-none focus:bg-[#f7f7f7] focus:border-[#2A27E9]"
                                placeholder="Email address"
                            />
                            <p className="text-small text-primary font-normal mt-2">We will send the purchase receipt to this address.</p>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
                                First name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border placeholder:text-gray-500 focus:placeholder:text-[#2A27E9] border-gray-300 rounded-md focus:outline-none focus:bg-[#f7f7f7] focus:border-[#2A27E9]"
                                placeholder="First name"
                            />
                            <p className="text-small text-primary font-normal mt-2">We will use this to personalize your account experience.</p>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border placeholder:text-gray-500 focus:placeholder:text-[#2A27E9] border-gray-300 rounded-md focus:outline-none focus:bg-[#f7f7f7] focus:border-[#2A27E9]"
                                placeholder="Last name"
                            />
                            <p className="text-small text-primary font-normal mt-2">We will use this as well to personalize your account experience.</p>
                        </div>

                        <button type="submit" className="bg-light-blue inline-block hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                            Purchase
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FeatureMain
