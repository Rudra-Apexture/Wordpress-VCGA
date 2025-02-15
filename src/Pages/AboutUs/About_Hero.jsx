import React from 'react';
import Hero from '../../components/Hero';

const About_Hero = () => {
    return (
        <Hero
            mainHeading="About "
            mainHeadingHighlight="VCGA"
            description="We make businesses shine by providing expert WordPress maintenance, smart strategies, and continuous support for creating something unique and unstoppable in the digital platform."
            showButton={false} // Set showButton to false to hide the button
        />
    );
};

export default About_Hero;