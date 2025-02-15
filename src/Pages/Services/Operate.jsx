import React from 'react'
import setting from "../../assets/images/chain.svg";
import massage from "../../assets/images/massage.svg";
import upchart from "../../assets/images/upchart.svg";
import HighlightedHeading from '../../components/HighlightedHeading';

const Operate = () => {
    return (
        <section className='operate-service md:pt-10 pt-5'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center'>
                    <HighlightedHeading
                        mainText="WordPress Website Maintenance Service -  "
                        highlightedText="How We Operate "
                        center={true}
                    />
                </div>
                <div className="grid lg:gap-8 gap-6 grid-cols-1 md:grid-cols-3 md:py-10 py-5">

                    {/* Service 1 */}
                    <div className="text-center space-y-4 md:border-none border-b border-gray-300 py-5 md:py-0">
                        <div className="flex justify-center">
                            <img src={setting} alt="Help-setting" className='lg:h-16 h-12' />
                        </div>
                        <h3 className="lg:text-base text-medium font-bold text-primary">Plans That Fit Your Needs</h3>
                        <p className="lg:text-medium text-small font-medium text-gray-700">
                            Choose the ideal plan for your website from our affordable WordPress maintenance service
                            options. More unique ideas for it.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="text-center space-y-4 md:border-none border-b border-gray-300 py-5 md:py-0">
                        <div className="flex justify-center">
                            <img src={massage} alt="Help-setting" className='lg:h-16 h-12' />
                        </div>
                        <h3 className="lg:text-base text-medium font-bold leading-5 text-primary">Get Expert Advice to Begin</h3>
                        <p className="lg:text-medium text-small font-medium text-gray-700 lg:pt-2">
                            We’ll connect to understand your website’s needs and set up automated solutions for seamless , secure performance.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="text-center space-y-4 md:border-none border-b border-gray-300 py-5 md:py-0">
                        <div className="flex justify-center">
                            <img src={upchart} alt="Help-setting" className='lg:h-16 h-12' />
                        </div>
                        <h3 className="lg:text-base text-medium font-bold leading-5 text-primary">PlGrow Your Business, Stress-Free</h3>
                        <p className="lg:text-medium text-small font-medium text-gray-700 lg:pt-2">
                            Have a coffee while our experts tackle website problems, securing and optimizing your site for flawless performance.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Operate