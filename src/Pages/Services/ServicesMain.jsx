import React from 'react';
import Hero from '../../components/Hero'; // Adjust the path based on where you saved your Hero component

const ServicesMain = () => {
    return (
        <div>
            {/* Hero Section for Services */}
            <Hero
                mainHeading="WordPress "
                mainHeadingHighlight="Maintenance Service"
                description="Are you struggling to manage WordPress? Let us handle all the technical
                            details with 24/7 support, giving you a hassle-free website that will
                            effortlessly grow your business."
                buttonText="Get Started Now!"
            />
        </div>
    );
};

export default ServicesMain;