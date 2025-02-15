import React from 'react'
import CaseStudy from '../components/CaseStudy'
import HighlightedHeading from '../components/HighlightedHeading'

const CaseStudies = () => {
  return (
    <div className='container mx-auto'>
      <HighlightedHeading
        mainText="Explore Our "
        highlightedText="Case Studies "
        center={false}
      />
      <CaseStudy />
    </div>
  )
}

export default CaseStudies
