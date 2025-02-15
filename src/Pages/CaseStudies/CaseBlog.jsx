// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchCases } from './caseStudyService'; // Assuming service file path


// const CaseBlog = () => {
//     const [cases, setCases] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     useEffect(() => {
//         const loadCases = async () => {
//             setLoading(true);
//             try {
//                 const data = await fetchCases();
//                 setCases(data);
//             } catch (err) {
//                 console.error("Error fetching case data:", err);
//                 setError("Failed to load case data. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loadCases();
//     }, []);

//     const handleBlogClick = (caseSlug) => {
//         navigate(`/case-study/${caseSlug}`); // Use navigate to redirect to the details page with slug
//     };

//     if (error) {
//         return (
//             <div className="text-red-500 text-center py-8">
//                 {error}
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => window.location.reload()}>
//                     Try Again
//                 </button>
//             </div>
//         );
//     }
//     return (
//         <section className='case-blogs py-12'>
//             <div className='container mx-auto'>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {cases.map((caseItem) => (
//                         <article
//                             key={caseItem.id}
//                             className="bg-white rounded-lg cursor-pointer"
//                             onClick={() => handleBlogClick(caseItem.slug)} // use the slug now
//                         >
//                             <div className="max-h-full">
//                                 <img
//                                     src={caseItem.image}
//                                     width={400}
//                                     height={300}
//                                     alt={`Case Study ${caseItem.id}`}
//                                     className="object-cover w-full h-full rounded-xl"
//                                 />
//                             </div>
//                             <h2 className="lg:text-basic text-medium text-primary font-bold mt-4">{caseItem.title}</h2>
//                             <div className="flex flex-wrap mt-6 gap-2">
//                                 {caseItem.tags.map((tag, index) => (
//                                     <span key={index} aria-label={tag} className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default CaseBlog;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCases } from './caseStudyService'; // Assuming service file path

const CaseBlog = () => {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadCases = async () => {
            setLoading(true);
            try {
                const data = await fetchCases();
                setCases(data);
            } catch (err) {
                console.error("Error fetching case data:", err);
                setError("Failed to load case data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadCases();
    }, []);

    const handleBlogClick = (caseSlug) => {
        navigate(`/case-study/${caseSlug}`); // Navigate to the case study details page
    };

    if (error) {
        return (
            <div className="text-red-500 text-center py-8">
                {error}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <section className='case-blogs py-12'>
            <div className='container mx-auto'>
                {loading ? (
                    <div className="text-center">Loading cases...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cases.map((caseItem) => (
                            <article
                                key={caseItem.id}
                                className="bg-white rounded-medium shadow-main border border-sky-100 overflow-hidden cursor-pointer relative group"
                                onClick={() => handleBlogClick(caseItem.slug)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={caseItem.image}
                                        alt={`Case Study ${caseItem.title}`}
                                        className="object-cover w-full"
                                    />


                                    {/* <div
                                        className="absolute bottom-0 left-0 w-full p-4 bg-[#020202a4] text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-20 transition-all duration-500 ease-in-out"
                                    >
                                        <h2 className="text-xl font-medium text-center">{caseItem.heading}</h2>
                                    </div> */}

                                    <div
                                        className="absolute top-40 left-0 w-full p-4 bg-[#020202b6] text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-32 transition-all duration-500 ease-in-out"
                                    >
                                        <h2 className="lg:text-xl text-small font-medium text-center">{caseItem.heading}</h2>
                                    </div>

                                </div>

                                <div className="p-4">
                                    <div className="flex flex-wrap mt-2 gap-2">
                                        <div className='text-base font-medium'>
                                            {caseItem.title}
                                        </div>
                                        {caseItem.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                aria-label={tag}
                                                className="inline-block border border-slate-300 rounded-full px-3.5 py-2 text-sm font-medium text-gray-700 transition-colors duration-200"
                                            >
                                                {tag.title}
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CaseBlog;
