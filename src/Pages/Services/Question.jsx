import React from 'react'
import FAQS from '../../components/FAQS'
import HighlightedHeading from '../../components/HighlightedHeading'

const Question = () => {
    return (
        <div className='FaQ-Data'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center my-10'>
                    <HighlightedHeading
                        mainText="Top Questions "
                        highlightedText="We Get "
                        center={false}
                    />
                </div>
            </div>
            <FAQS />
        </div>
    )
}

export default Question
