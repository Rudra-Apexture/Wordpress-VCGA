import React from 'react'
import metting from "../../assets/images/metting.jpg";

const AboutStory = () => {
    return (
        <section className="about-stroy md:pt-10 pt-5">
            <div className="container mx-auto flex flex-col md:flex-row gap-6 p-8">
                {/* <!-- Text Container --> */}
                <div className="flex-1 md:py-5">
                    <h1 className="md:text-xlarge text-large text-center md:text-left font-bold text-primary pb-5">
                        Explore Our{' '}
                        <span className="bg-gradient  rounded-full text-[#1D49C3] font-bold ">
                            Case Studies
                        </span>{' '}
                    </h1>

                    <p className="text-primary font-medium text-medium leading-normal ">
                        In 2017, our co-founder Emma Scott, a seasoned WordPress
                        developer with over 10 years of experience, noticed a common
                        struggle among her clients: maintaining WordPress sites was too
                        complicated. From updates and backups to security and
                        performance, website owners were overwhelmed.
                    </p>
                    <p className="text-primary font-medium text-medium mt-4 leading-normal">
                        Partnering with Liam Williams, a former digital marketer turned
                        WordPress expert, they launched [Website Name]. Their
                        mission? To provide reliable WordPress maintenance services
                        and educational resources that simplify site management for
                        everyone, from beginners to pros.
                    </p>
                </div>

                {/*  <!-- Image Container --> */}
                <div className="flex-1 rounded-lg overflow-hidden">
                    <img src={metting} alt="Two people working on laptop" className="w-full h-full object-cover" />
                </div>
            </div>
        </section >
    )
}

export default AboutStory