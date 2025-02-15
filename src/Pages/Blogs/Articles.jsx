// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { FaRegClock } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import errors from "../../assets/images/man-despair-data-leak_11197-392.avif";

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const delay = (ms) => new Promise(res => setTimeout(res, ms));


// const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [activeCategory, setActiveCategory] = useState(0);
//     const [categories, setCategories] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const categoriesRef = useRef(null);  // Ref for the categories container

//     useEffect(() => {
//         const fetchArticlesAndCategories = async () => {
//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 const [postsResponse, categoriesResponse] = await Promise.all([
//                     axios.get('https://vcga.uk/wp-json/wp/v2/posts?_embed'),
//                     axios.get('https://vcga.uk/wp-json/wp/v2/categories')
//                 ]);

//                 const articlesData = postsResponse.data.map(article => {
//                     const decodedTitle = decodeHtml(article.title.rendered); // Decode the title

//                     return {
//                         id: article.id,
//                         slug: article.slug, // Use the slug from the API response
//                         title: decodedTitle,
//                         excerpt: article.excerpt.rendered,
//                         date: new Date(article.date).toLocaleDateString(),
//                         image: article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url : 'placeholder.jpg',
//                         categories: article.categories,
//                         content: article.content.rendered
//                     }
//                 });

//                 // Decode category names *before* setting the state
//                 const decodedCategories = [{ id: 0, name: 'All Posts' }, ...categoriesResponse.data.map(cat => ({ id: cat.id, name: decodeHtml(cat.name) }))];
//                 setCategories(decodedCategories);
//                 setArticles(articlesData);


//             } catch (err) {
//                 setError(err);
//                 console.error("Error fetching data:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchArticlesAndCategories();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="dot-spinner">
//                     <div className="dot-spinner__dot"></div>
//                     <div className="dot-spinner__dot"></div>
//                     <div className="dot-spinner__dot"></div>
//                     <div className="dot-spinner__dot"></div>
//                     <div className="dot-spinner__dot"></div>
//                     <div className="dot-spinner__dot"></div>
//                     <div className="dot-spinner__dot"></div>
//                     <div className="dot-spinner__dot"></div>
//                 </div>
//             </div>
//         );
//     }

//     const handleCategoryClick = (categoryId) => {
//         setActiveCategory(categoryId);
//     };

//     const scrollCategories = (scrollAmount) => {
//         if (categoriesRef.current) {
//             categoriesRef.current.scrollLeft += scrollAmount;
//         }
//     };



//     const filteredArticles = activeCategory === 0
//         ? articles
//         : articles.filter(article => article.categories.includes(activeCategory));

//     return (
//         <section className="blog-articles md:pt-10 pt-5">
//             <div className="container mx-auto">
//                 <h2 className="text-4xl text-primary font-bold">Recent articles</h2>
//                 <div className="category-tabs my-5 relative">
//                     {/* categories */}
//                     <div
//                         className="overflow-x-auto whitespace-nowrap scroll-smooth space-x-2 pb-3"
//                         ref={categoriesRef}
//                     >
//                         {categories.map((category) => (
//                             <button
//                                 key={category.id}
//                                 onClick={() => handleCategoryClick(category.id)}
//                                 className={`inline-block border px-4 py-2 font-medium rounded-full hover:border-primary transition-colors duration-300 ease-in-out ${activeCategory === category.id ? 'bg-black text-white border-black' : 'border-gray-300 text-primary'}`}
//                             >
//                                 {category.name}  {/* Display decoded name */}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {filteredArticles.length === 0 ? (
//                     <div className='flex flex-col justify-center items-center'>
//                         <img src={errors} alt="" className='lg:h-96 h-80' />
//                         <p className="text-center text-light-blue font-medium lg:text-base capitalize -mt-5">There are no posts in this category , you can try another categorys</p>
//                     </div>

//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
//                         {filteredArticles.map((article) => (
//                             <div key={article.id} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
//                                 <Link to={`/blog/${article.slug}`}  >
//                                     <div className="relative">
//                                         <img
//                                             src={article.image}
//                                             alt={article.title}
//                                             className="w-full h-64 object-cover"
//                                         />
//                                         <div className="absolute bottom-0 right-0 bg-light-blue text-white px-2.5 py-1 text-xs font-medium">
//                                             {article.categories.length > 0 && categories.find(cat => cat.id === article.categories[0])?.name || 'Uncategorized'}
//                                         </div>
//                                     </div>
//                                 </Link>

//                                 <div className="p-4 space-y-4">
//                                     <h3 className="text-medium font-semibold text-light-blue" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
//                                     <p className="text-gray-700 font-normal text-small h-28" dangerouslySetInnerHTML={{ __html: article.excerpt.split(' ').slice(0, 26).join(' ') + '...' }}></p>
//                                     <div className="flex items-center mt-2 justify-between">
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {article.date}</span>
//                                         </div>
//                                         <Link to={`/blog/${article.slug}`} className="text-light-blue rounded-md text-small font-medium">Read More</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Articles;


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { FaRegClock } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import errors from "../../assets/images/man-despair-data-leak_11197-392.avif";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import './Articles.css'; // Make sure to create this file

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [activeCategory, setActiveCategory] = useState(0);
//     const [categories, setCategories] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const categoriesRef = useRef(null);  // Ref for the categories container
//     const skeletonCount = 6; // Number of skeleton items to show

//     useEffect(() => {
//         const fetchArticlesAndCategories = async () => {
//             try {
//                 // Introduce a 1.5-second delay *before* the API call
//                 await delay(1500);

//                 const [postsResponse, categoriesResponse] = await Promise.all([
//                     axios.get('https://vcga.uk/wp-json/wp/v2/posts?_embed'),
//                     axios.get('https://vcga.uk/wp-json/wp/v2/categories')
//                 ]);

//                 const articlesData = postsResponse.data.map(article => {
//                     const decodedTitle = decodeHtml(article.title.rendered); // Decode the title

//                     return {
//                         id: article.id,
//                         slug: article.slug, // Use the slug from the API response
//                         title: decodedTitle,
//                         excerpt: article.excerpt.rendered,
//                         date: new Date(article.date).toLocaleDateString(),
//                         image: article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url : 'placeholder.jpg',
//                         categories: article.categories,
//                         content: article.content.rendered
//                     }
//                 });

//                 // Decode category names *before* setting the state
//                 const decodedCategories = [{ id: 0, name: 'All Posts' }, ...categoriesResponse.data.map(cat => ({ id: cat.id, name: decodeHtml(cat.name) }))];
//                 setCategories(decodedCategories);
//                 setArticles(articlesData);


//             } catch (err) {
//                 setError(err);
//                 console.error("Error fetching data:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchArticlesAndCategories();
//     }, []);


//     const handleCategoryClick = (categoryId) => {
//         setActiveCategory(categoryId);
//     };

//     const scrollCategories = (scrollAmount) => {
//         if (categoriesRef.current) {
//             categoriesRef.current.scrollLeft += scrollAmount;
//         }
//     };

//     const filteredArticles = activeCategory === 0
//         ? articles
//         : articles.filter(article => article.categories.includes(activeCategory));

//     return (
//         <section className="blog-articles md:pt-10 pt-5">
//             <div className="container mx-auto">
//                 <h2 className="text-4xl text-primary font-bold">Recent articles</h2>
//                 <div className="category-tabs my-5 relative">
//                     {/* categories */}
//                     <div
//                         className="overflow-x-auto whitespace-nowrap scroll-smooth space-x-2 pb-3"
//                         ref={categoriesRef}
//                     >
//                         {loading ? (
//                             // Skeleton loading for categories
//                             Array(categories.length > 0 ? categories.length : 5).fill().map((_, index) => (
//                                 <Skeleton key={index} width={80} height={36} inline={true} style={{ marginRight: '8px', borderRadius: '20px' }} />
//                             ))
//                         ) : (
//                             categories.map((category) => (
//                                 <button
//                                     key={category.id}
//                                     onClick={() => handleCategoryClick(category.id)}
//                                     className={`inline-block border px-4 py-2 font-medium rounded-full hover:border-primary transition-colors duration-300 ease-in-out ${activeCategory === category.id ? 'bg-black text-white border-black' : 'border-gray-300 text-primary'}`}
//                                 >
//                                     {category.name}  {/* Display decoded name */}
//                                 </button>
//                             ))
//                         )}
//                     </div>
//                 </div>

//                 {loading ? (
//                     // Skeleton loading for articles
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {Array(skeletonCount).fill().map((_, index) => (
//                             <div key={index} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
//                                 <Skeleton height={256} style={{ width: '100%', borderRadius: '12px' }} />
//                                 <div className="p-4 space-y-4">
//                                     <Skeleton height={24} width="80%" />
//                                     <Skeleton height={16} width="90%" />
//                                     <Skeleton height={16} width="60%" />
//                                     <div className="flex items-center mt-2 justify-between">
//                                         <Skeleton width={60} height={16} />
//                                         <Skeleton width={80} height={24} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : filteredArticles.length === 0 ? (
//                     <div className='flex flex-col justify-center items-center'>
//                         <img src={errors} alt="" className='lg:h-96 h-80' />
//                         <p className="text-center text-light-blue font-medium lg:text-base capitalize -mt-5">There are no posts in this category, you can try another category</p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
//                         {filteredArticles.map((article) => (
//                             <div key={article.id} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
//                                 <Link to={`/blog/${article.slug}`}  >
//                                     <div className="relative">
//                                         <img
//                                             src={article.image}
//                                             alt={article.title}
//                                             className="w-full h-64 object-cover"
//                                         />
//                                         <div className="absolute bottom-0 right-0 bg-light-blue text-white px-2.5 py-1 text-xs font-medium">
//                                             {article.categories.length > 0 && categories.find(cat => cat.id === article.categories[0])?.name || 'Uncategorized'}
//                                         </div>
//                                     </div>
//                                 </Link>

//                                 <div className="p-4 space-y-4">
//                                     <h3 className="text-medium font-semibold text-light-blue" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
//                                     <p className="text-gray-700 font-normal text-small h-28" dangerouslySetInnerHTML={{ __html: article.excerpt.split(' ').slice(0, 26).join(' ') + '...' }}></p>
//                                     <div className="flex items-center mt-2 justify-between">
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {article.date}</span>
//                                         </div>
//                                         <Link to={`/blog/${article.slug}`} className="text-light-blue rounded-md text-small font-medium">Read More</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Articles;

// 2:17

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import errors from "../../assets/images/man-despair-data-leak_11197-392.avif";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import './Articles.css'; // Make sure to create this file
import { useInView } from 'react-intersection-observer';

// Utility function to decode HTML entities
const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const categoriesRef = useRef(null);  // Ref for the categories container
    const skeletonCount = 6; // Number of skeleton items to show
    const [hasFetched, setHasFetched] = useState(false); // Track if data has been fetched
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.5, // Trigger when 20% of the section is in view
        triggerOnce: true, // Only trigger the callback once
    });

    useEffect(() => {
        const fetchArticlesAndCategories = async () => {
            setLoading(true); // Start loading
            try {
                // Introduce a 1second delay *before* the API call
                await delay(1000);

                const [postsResponse, categoriesResponse] = await Promise.all([
                    axios.get('https://vcga.uk/wp-json/wp/v2/posts?_embed'),
                    axios.get('https://vcga.uk/wp-json/wp/v2/categories')
                ]);

                const articlesData = postsResponse.data.map(article => {
                    const decodedTitle = decodeHtml(article.title.rendered); // Decode the title

                    return {
                        id: article.id,
                        slug: article.slug, // Use the slug from the API response
                        title: decodedTitle,
                        excerpt: article.excerpt.rendered,
                        date: new Date(article.date).toLocaleDateString(),
                        image: article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url : 'placeholder.jpg',
                        categories: article.categories,
                        content: article.content.rendered
                    }
                });

                // Decode category names *before* setting the state
                const decodedCategories = [{ id: 0, name: 'All Posts' }, ...categoriesResponse.data.map(cat => ({ id: cat.id, name: decodeHtml(cat.name) }))];
                setCategories(decodedCategories);
                setArticles(articlesData);
                setHasFetched(true); // Data fetched successfully

            } catch (err) {
                setError(err);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        // Only fetch data when the section is in view and hasn't been fetched yet
        if (sectionInView && !hasFetched) {
            fetchArticlesAndCategories();
        }

    }, [sectionInView, hasFetched]);


    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const scrollCategories = (scrollAmount) => {
        if (categoriesRef.current) {
            categoriesRef.current.scrollLeft += scrollAmount;
        }
    };

    const filteredArticles = activeCategory === 0
        ? articles
        : articles.filter(article => article.categories.includes(activeCategory));

    return (
        <section className="blog-articles md:pt-10 pt-5" ref={sectionRef}>
            <div className="container mx-auto">
                <h2 className="text-4xl text-primary font-bold">Recent articles</h2>
                <div className="category-tabs my-5 relative">
                    {/* categories */}
                    <div
                        className="overflow-x-auto whitespace-nowrap scroll-smooth space-x-2 pb-3"
                        ref={categoriesRef}
                    >
                        {loading ? (
                            // Skeleton loading for categories
                            Array(categories.length > 0 ? categories.length : 5).fill().map((_, index) => (
                                <Skeleton key={index} width={80} height={36} inline={true} style={{ marginRight: '8px', borderRadius: '16px' }} />
                            ))
                        ) : (
                            categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id)}
                                    className={`inline-block border px-4 py-2 font-medium rounded-full hover:border-primary transition-colors duration-300 ease-in-out ${activeCategory === category.id ? 'bg-black text-white border-black' : 'border-gray-300 text-primary'}`}
                                >
                                    {category.name}  {/* Display decoded name */}
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {loading ? (
                    // Skeleton loading for articles
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array(skeletonCount).fill().map((_, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <Skeleton height={256} style={{ width: '100%', borderRadius: '12px' }} />
                                <div className="p-4 space-y-4">
                                    <Skeleton height={24} width="80%" />
                                    <Skeleton height={16} width="90%" />
                                    <Skeleton height={16} width="60%" />
                                    <div className="flex items-center mt-2 justify-between">
                                        <Skeleton width={60} height={16} />
                                        <Skeleton width={80} height={24} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <div className='flex flex-col justify-center items-center'>
                        <img src={errors} alt="" className='lg:h-96 h-80' />
                        <p className="text-center text-light-blue font-medium lg:text-base capitalize -mt-5">There are no posts in this category, you can try another category</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
                        {filteredArticles.map((article) => (
                            <div key={article.id} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <Link to={`/blog/${article.slug}`}  >
                                    <div className="relative">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        {/* <div className="absolute top-4 left-2 bg-blue-700 text-white px-2 py-1 text-xs rounded-full font-bold">
                                            {article.categories.length > 0 && categories.find(cat => cat.id === article.categories[0])?.name || 'Uncategorized'}
                                        </div> */}
                                    </div>
                                </Link>

                                <div className="p-4">
                                    <h3 className="text-medium font-semibold text-light-blue mb-4" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
                                    <p className="text-gray-700 font-normal text-small h-28 mb-4" dangerouslySetInnerHTML={{ __html: article.excerpt.split(' ').slice(0, 26).join(' ') + '...' }}></p>
                                    <div className='border-t border-gray-300 py-2'></div>
                                    <div className="flex justify-between items-center text-primary font-normal text-xs">
                                        <span className='flex items-center gap-1' >
                                            <FaRegClock />
                                            {article.date}</span>
                                        <Link to={`/blog/${article.slug}`} className="text-light-blue font-semibold">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Articles;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { FaRegClock } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import errors from "../../assets/images/man-despair-data-leak_11197-392.avif";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { useInView } from 'react-intersection-observer';

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [activeCategory, setActiveCategory] = useState(0);
//     const [categories, setCategories] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const categoriesRef = useRef(null);
//     const skeletonCount = 6;
//     const [hasFetched, setHasFetched] = useState(false);
//     const { ref: sectionRef, inView: sectionInView } = useInView({
//         threshold: 0.5,
//         triggerOnce: true,
//     });

//     // Ref to track whether data is currently being fetched
//     const isFetchingData = useRef(false);

//     useEffect(() => {
//         const fetchArticlesAndCategories = async () => {
//             // Check if data is already being fetched
//             if (isFetchingData.current) {
//                 return;
//             }

//             // Set loading to true only if not already fetching data
//             if (!loading) {
//                 setLoading(true);
//             }
//             isFetchingData.current = true;

//             try {
//                 // Introduce a 1.5-second delay *before* the API call
//                 await delay(1500);

//                 const [postsResponse, categoriesResponse] = await Promise.all([
//                     axios.get('https://vcga.uk/wp-json/wp/v2/posts?_embed'),
//                     axios.get('https://vcga.uk/wp-json/wp/v2/categories')
//                 ]);

//                 const articlesData = postsResponse.data.map(article => {
//                     const decodedTitle = decodeHtml(article.title.rendered);

//                     return {
//                         id: article.id,
//                         slug: article.slug,
//                         title: decodedTitle,
//                         excerpt: article.excerpt.rendered,
//                         date: new Date(article.date).toLocaleDateString(),
//                         image: article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url : 'placeholder.jpg',
//                         categories: article.categories,
//                         content: article.content.rendered
//                     }
//                 });

//                 // Decode category names *before* setting the state
//                 const decodedCategories = [{ id: 0, name: 'All Posts' }, ...categoriesResponse.data.map(cat => ({ id: cat.id, name: decodeHtml(cat.name) }))];
//                 setCategories(decodedCategories);
//                 setArticles(articlesData);
//                 setHasFetched(true);

//             } catch (err) {
//                 setError(err);
//                 console.error("Error fetching data:", err);
//             } finally {
//                 setLoading(false);
//                 isFetchingData.current = false;
//             }
//         };

//         // Only fetch data when the section is in view and hasn't been fetched yet
//         if (sectionInView && !hasFetched) {
//             fetchArticlesAndCategories();
//         }

//         // Re-fetch articles when the active category changes
//     }, [sectionInView, hasFetched, activeCategory]);


//     const handleCategoryClick = (categoryId) => {
//         setArticles([]); // Clear existing articles
//         setHasFetched(false); // reset hasFetched to allow new data fetching
//         setActiveCategory(categoryId);
//         setLoading(true); // set loading to true when the category is clicked
//     };


//     const scrollCategories = (scrollAmount) => {
//         if (categoriesRef.current) {
//             categoriesRef.current.scrollLeft += scrollAmount;
//         }
//     };

//     const filteredArticles = activeCategory === 0
//         ? articles
//         : articles.filter(article => article.categories.includes(activeCategory));

//     return (
//         <section className="blog-articles md:pt-10 pt-5" ref={sectionRef}>
//             <div className="container mx-auto">
//                 <h2 className="text-4xl text-primary font-bold">Recent articles</h2>
//                 <div className="category-tabs my-5 relative">
//                     {/* categories */}
//                     <div
//                         className="overflow-x-auto whitespace-nowrap scroll-smooth space-x-2 pb-3"
//                         ref={categoriesRef}
//                     >
//                         {loading ? (
//                             // Skeleton loading for categories
//                             Array(categories.length > 0 ? categories.length : 5).fill().map((_, index) => (
//                                 <Skeleton key={index} width={80} height={36} inline={true} style={{ marginRight: '8px', borderRadius: '16px' }} />
//                             ))
//                         ) : (
//                             categories.map((category) => (
//                                 <button
//                                     key={category.id}
//                                     onClick={() => handleCategoryClick(category.id)}
//                                     className={`inline-block border px-4 py-2 font-medium rounded-full hover:border-primary transition-colors duration-300 ease-in-out ${activeCategory === category.id ? 'bg-black text-white border-black' : 'border-gray-300 text-primary'}`}
//                                 >
//                                     {category.name}  {/* Display decoded name */}
//                                 </button>
//                             ))
//                         )}
//                     </div>
//                 </div>

//                 {loading ? (
//                     // Skeleton loading for articles
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {Array(skeletonCount).fill().map((_, index) => (
//                             <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
//                                 <Skeleton height={256} style={{ width: '100%', borderRadius: '12px' }} />
//                                 <div className="p-4 space-y-4">
//                                     <Skeleton height={24} width="80%" />
//                                     <Skeleton height={16} width="90%" />
//                                     <Skeleton height={16} width="60%" />
//                                     <div className="flex items-center mt-2 justify-between">
//                                         <Skeleton width={60} height={16} />
//                                         <Skeleton width={80} height={24} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : filteredArticles.length === 0 ? (
//                     <div className='flex flex-col justify-center items-center'>
//                         <img src={errors} alt="" className='lg:h-96 h-80' />
//                         <p className="text-center text-light-blue font-medium lg:text-base capitalize -mt-5">There are no posts in this category, you can try another category</p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
//                         {filteredArticles.map((article) => (
//                             <div key={article.id} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
//                                 <Link to={`/blog/${article.slug}`}  >
//                                     <div className="relative">
//                                         <img
//                                             src={article.image}
//                                             alt={article.title}
//                                             className="w-full h-64 object-cover"
//                                         />
//                                         <div className="absolute bottom-0 right-0 bg-light-blue text-white px-2.5 py-1 text-xs font-medium">
//                                             {article.categories.length > 0 && categories.find(cat => cat.id === article.categories[0])?.name || 'Uncategorized'}
//                                         </div>
//                                     </div>
//                                 </Link>

//                                 <div className="p-4 space-y-4">
//                                     <h3 className="text-medium font-semibold text-light-blue" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
//                                     <p className="text-gray-700 font-normal text-small h-28" dangerouslySetInnerHTML={{ __html: article.excerpt.split(' ').slice(0, 26).join(' ') + '...' }}></p>
//                                     <div className="flex items-center mt-2 justify-between">
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {article.date}</span>
//                                         </div>
//                                         <Link to={`/blog/${article.slug}`} className="text-light-blue rounded-md text-small font-medium">Read More</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Articles;

