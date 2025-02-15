import React from 'react'
import ServicesMain from './ServicesMain'
import Operate from './Operate'
import Plan from './Plan'
import Services from './Services'
import ClientStory from './ClientStory'
import Expert from './Expert'
import CaseData from './CaseData'
import Question from './Question'


const Service = () => {
    return (
        <main>
            <ServicesMain />
            <Operate />
            <Plan />
            <Services />
            <ClientStory />
            <CaseData />
            <Expert />
            <Question />
        </main>
    )
}

export default Service