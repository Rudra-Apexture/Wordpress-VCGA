import React from 'react';

const HighlightedHeading = ({ mainText, highlightedText, textSize = 'xlarge', center = false }) => {
    const alignmentClass = center ? 'text-center' : '';
    return (
        <h1 className={`md:text-${textSize} text-[26px] max-w-2xl md:leading-[45px] leading-9 font-bold text-primary ${alignmentClass}`}>
            {mainText} <span className='bg-gradient rounded-full text-light-blue py-0.5 font-bold'>{highlightedText}</span>
        </h1>
    );
};

export default HighlightedHeading;