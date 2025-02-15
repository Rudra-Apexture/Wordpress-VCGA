import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCaseStudies(data);
            } catch (error) {
                console.error("Error fetching case studies:", error);
            }
        };

        fetchCaseStudies();
    }, []);

    return (
        <section className='Case-studies pt-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
                {caseStudies.slice(0, 2).map(study => (
                    <Link key={study.id} to={`/case-study/${study.slug}`} className="block">
                        <div className="rounded-medium shadow-main border  border-slate-100 relative group overflow-hidden transition-transform duration-300">
                            <div className="relative overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={`Case Study ${study.title}`}
                                    className="object-cover w-full"
                                />
                                <div
                                    className="absolute top-40 left-0 w-full p-4 bg-[#020202b6] text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-32 transition-all duration-500 ease-in-out"
                                >
                                    <h2 className="lg:text-xl text-small font-medium text-center">{study.heading}</h2>
                                </div>
                            </div>
                            <div className="lg:p-6 p-4 lg:space-y-5 space-y-3">
                                <h2 className="lg:text-base text-small font-medium">{study.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map((tag, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={`inline-block border border-slate-300 rounded-full px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors duration-200`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                <div className="inline-flex gap-2.5 items-center relative cursor-pointer">
                    <Link to="/case-studies" className="text-light-blue md:text-basic inline-block lg:text-base text-small font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-light-blue after:transition-all after:duration-500 hover:after:w-[38%]">
                        See all case studies
                    </Link>
                    <svg className="lg:h-8 h-4 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>


            </div>
        </section>

    );
};

export default CaseStudy;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const CaseStudy = () => {
//     const [caseStudies, setCaseStudies] = useState([]);

//     useEffect(() => {
//         const fetchCaseStudies = async () => {
//             try {
//                 const response = await fetch('/data.json');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setCaseStudies(data);
//             } catch (error) {
//                 console.error("Error fetching case studies:", error);
//             }
//         };

//         fetchCaseStudies();
//     }, []);

//     return (
//         <section className='Case-studies pt-10'>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
//                 {caseStudies.slice(0, 2).map(study => (
//                     <Link key={study.id} to={`/case-study/${study.slug}`} className="block">
//                         <div className="rounded-medium shadow-main border  border-slate-100 relative group overflow-hidden transition-transform duration-300">
//                             <div className="relative overflow-hidden">
//                                 <img
//                                     src={study.image}
//                                     alt={`Case Study ${study.title}`}
//                                     className="object-cover w-full"
//                                 />
//                                 <div
//                                     className="absolute bottom-0 left-0 w-full p-4 bg-[#020202a4] text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-20 transition-all duration-500 ease-in-out"
//                                 >
//                                     <h2 className="lg:text-xl text-small font-medium text-center">{study.titleUnderImage}</h2> {/* Changed to titleUnderImage */}
//                                 </div>
//                             </div>
//                             <div className="lg:p-6 p-4 lg:space-y-5 space-y-3">
//                                 <h2 className="lg:text-base text-small font-medium">{study.title}</h2>
//                                 <p className="lg:text-sm text-xs">{study.description}</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {study.tags.map((tag, index) => {
//                                         return (
//                                             <span
//                                                 key={index}
//                                                 className={`inline-block border border-slate-300 rounded-full px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors duration-200`}
//                                             >
//                                                 {tag}
//                                             </span>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}

//                 <div className="inline-flex gap-2.5 items-center relative cursor-pointer">
//                     <Link to="/case-studies" className="text-light-blue md:text-basic inline-block lg:text-base text-small font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-light-blue after:transition-all after:duration-500 hover:after:w-[38%]">
//                         See all case studies
//                     </Link>
//                     <svg className="lg:h-8 h-4 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
//                 </div>


//             </div>
//         </section>

//     );
// };

// export default CaseStudy;

