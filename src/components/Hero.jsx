import React from 'react';

const Hero = ({
    title,
    mainHeading,
    mainHeadingHighlight,
    description,
    buttonText,
    showButton = true,
    descriptionMaxWidth
}) => {
    const descriptionStyle = {
        maxWidth: descriptionMaxWidth,
    };

    // Smooth Scroll Function
    const handleScrollToPlans = () => {
        const plansSection = document.getElementById("pricing-plan");
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className='Hero-section'>
            <div className="bg-light-blue lg:py-24 py-16 text-white">
                <div className="max-w-7xl mx-auto md:space-y-10 space-y-5 px-4">
                    <h2 className="lg:text-basic text-base font-bold text-center">{title}</h2>
                    <h1 className="lg:text-[55px] md:text-4xl text-xlarge leading-[50px] font-bold text-white text-center">
                        {mainHeading}{' '}
                        <span className="bg-gradient-2 rounded-full font-bold">
                            {mainHeadingHighlight}
                        </span>{' '}
                    </h1>
                    <div className='flex justify-center'>
                        <p className="md:text-medium text-small leading-6 font-medium max-w-2xl text-center" style={descriptionStyle} >
                            {description}
                        </p>
                    </div>
                    {showButton && (
                        <div className='flex justify-center'>
                            <button
                                onClick={handleScrollToPlans}
                                className="bg-white text-light-blue text-center font-semibold py-4 px-10 rounded-lg transition-all duration-300"
                            >
                                {buttonText}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
