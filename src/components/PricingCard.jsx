import React from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const PricingCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-4">
            {data.map(item => (
                <div key={item.id} className="bg-white rounded-medium shadow-main border border-gray-300 p-6 flex flex-col space-y-4 relative">
                    <div className={`rounded-md inline-block w-24 text-center p-1.5 text-small font-bold`} style={getTagStyle(item.tag)}>{item.tag}</div>
                    <h3 className="lg:text-base text-medium font-semibold text-primary">{item.name}</h3>
                    <div className="flex items-center mb-4">
                        <span className="lg:text-5xl text-large font-bold text-primary">{item.price}</span>
                        <span className="text-[#020D0AB2] font-medium ml-2 mt-6">Per Month</span>
                    </div>
                    <div className='py-2.5'>
                        <hr />
                    </div>
                    <button className="bg-light-blue text-white py-3.5 rounded-md
                             border border-[#103498] text-medium inline-block text-center font-medium hover:bg-[#103498] transition-colors duration-200">View Full Plans</button>
                    <ul className="list-inside list-none space-y-2">
                        {/* Lists Items */}
                        {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center mt-2">
                                <IoCheckmarkDoneSharp className='size-5 text-light-blue mr-2' />
                                <span className={`text-small text-primary font-medium leading-7 ${index === 0 ? 'font-extrabold' : ''}`}>
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PricingCard