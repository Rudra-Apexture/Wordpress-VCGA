// import React from 'react';
// import HighlightedHeading from '../components/HighlightedHeading';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const Trusted = () => {
//     const data = [
//         {
//             id: 1,
//             value: 98,
//             suffix: "%",
//             description: "98% happiness score with 5+ years of the WordPress expertise.",
//         },
//         {
//             id: 2,
//             value: 1500,
//             suffix: "k",
//             description: "1.5k projects delivered on time, guaranteed issue-free.",
//         },
//         {
//             id: 3,
//             value: 5,
//             suffix: "sec",
//             description: "Need help? Wait less than 5 seconds for instant customer service.",
//         },
//     ];

//     const { ref, inView } = useInView({
//         threshold: 1,
//         triggerOnce: true,
//     });

//     return (
//         <section className="bg-white md:pt-10 pt-5" ref={ref}>
//             <div className="container mx-auto">
//                 <div className='flex justify-center items-center'>
//                     <HighlightedHeading
//                         mainText="Your Trusted Partner"
//                         highlightedText="WordPress Care"
//                         center={true}
//                     />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:py-20 py-5">
//                     {data.map((item) => (
//                         <div key={item.id} className="flex flex-col items-center justify-center space-y-5 md:border-none border-b border-gray-300 md:pb-0 pb-5">
//                             <CountUp
//                                 start={0}
//                                 end={inView ? item.value : 0}
//                                 duration={4}
//                                 separator=","
//                                 suffix={item.suffix}
//                                 className="lg:text-5xl text-large font-bold text-primary"
//                             />
//                             <p className="text-center lg:text-medium font-medium">
//                                 {item.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Trusted;

import React from 'react';
import HighlightedHeading from '../components/HighlightedHeading';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Trusted = () => {
    const data = [
        {
            id: 1,
            value: 98,
            suffix: "%",
            description: "98% happiness score with 5+ years of the WordPress expertise.",
        },
        {
            id: 2,
            value: 1500,
            suffix: "k",
            description: "1.5k projects delivered on time, guaranteed issue-free.",
        },
        {
            id: 3,
            value: 5,
            suffix: "sec",
            description: "Need help? Wait less than 5 seconds for instant customer service.",
        },
    ];

    const { ref, inView } = useInView({
        threshold: 0.5,  //  50% Show Display Section after animation starts
        triggerOnce: true,
    });

    return (
        <section className="bg-white pt-10" ref={ref}>
            <div className="container mx-auto">
                <div className='flex justify-center items-center'>
                    <HighlightedHeading
                        mainText="Your Trusted Partner"
                        highlightedText="WordPress Care"
                        center={true}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:py-20 py-5">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center space-y-5 md:border-none border-b border-gray-300 md:pb-0 pb-5">
                            <div className="lg:text-5xl text-3xl font-bold">
                                <span className="text-light-blue">
                                    <CountUp
                                        start={0}
                                        end={inView ? item.value : 0}
                                        duration={5}
                                        separator=","
                                    />
                                </span>
                                <span className="text-primary lg:text-3xl text-xl">{item.suffix}</span>
                            </div>
                            <p className="text-center lg:text-medium font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trusted;