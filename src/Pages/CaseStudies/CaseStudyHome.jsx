import React from 'react';
import Hero from '../../components/Hero';

const CaseStudyHome = () => {
    return (
        <Hero
            mainHeading="Case "
            mainHeadingHighlight="Studies "
            description="Hear it from the experts! Our case studies combine real user experiences with impactful stats to show what VCGA can do for you."
            showButton={false} // Set showButton to false to hide the button
        />
    );
};

export default CaseStudyHome;