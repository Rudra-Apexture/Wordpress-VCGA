import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import HighlightedHeading from '../../components/HighlightedHeading'

const CaseStudies = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-10'>
                <HighlightedHeading
                    mainText="See How We "
                    highlightedText="Deliver Results "
                    center={false}
                />
            </div>
            <CaseStudy />
        </div>
    )
}

export default CaseStudies
