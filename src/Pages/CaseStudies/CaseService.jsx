import React from 'react'
import wordpressSetting from '../../assets/images/wordpressSetting.png';
import { Link } from 'react-router';

const CaseService = () => {
    return (
        <section className='Case-service'>
            <div className='py-10'>
                <div className="bg-light-blue py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
                        <div className="text-white md:text-left md:order-1 order-2">
                            <h2 className='lg:text-4xl md:text-large text-basic max-w-xl font-bold lg:leading-[50px] my-6'>Transform Your Website Today with Our Expert WordPress Maintenance Services.</h2>
                            <Link to="/contact-us" className="bg-white text-primary py-4 px-8 font-normal text-medium mt-4 rounded-md hover:bg-gray-100">Get Expert care</Link>
                        </div>
                        <div className="md:order-2 order-1 -mt-24 md:-mt-40">
                            <div className="relative">
                                <div>
                                    <img src={wordpressSetting} alt="setting" className='lg:w-96 w-80' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseService