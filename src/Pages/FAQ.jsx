import React from 'react'
import FAQS from '../components/FAQS'
import HighlightedHeading from '../components/HighlightedHeading'

const FAQ = () => {
    return (
        <div className='FaQ-Data pt-10' >
            <div className='flex justify-center items-center pb-10'>
                <HighlightedHeading
                    mainText="Frequently Asked"
                    highlightedText="Questions "
                    center={true}
                />
            </div>
            <FAQS />
        </div>
    )
}

export default FAQ
