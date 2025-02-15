// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { slugify } from '../../../utils';
// import AuthorPageHeader from './AuthorPageHeader';

// const DateArchivePage = () => {
//     const { year, month, day } = useParams();
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const PLACEHOLDER_IMAGE = '/images/placeholder.png'; // Replace with your placeholder

//     const transformBlogPost = useCallback((post) => {
//         let imageUrl = PLACEHOLDER_IMAGE;
//         if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//                 const featuredMedia = post._embedded['wp:featuredmedia'];
//                 if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                     imageUrl = featuredMedia[0].source_url;
//                 } else if (featuredMedia.source_url) {
//                     imageUrl = featuredMedia.source_url;
//                 }
//             }
//         }

//         return {
//             id: post.id,
//             title: post.title.rendered,
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//             image: imageUrl,
//         };
//     }, [PLACEHOLDER_IMAGE]);

//     useEffect(() => {
//         const fetchBlogsByDate = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // 1. Construct the date range for the WordPress API
//                 const startDate = `${year}-${month}-${day}T00:00:00`; // Start of the day
//                 const endDate = `${year}-${month}-${day}T23:59:59`; // End of the day

//                 // Debugging: Log the constructed date query
//                 console.log("Date range being sent to API:", startDate, endDate);

//                 // 2. Fetch Blog Posts by Date Range
//                 const response = await fetch(
//                     `https://vcga.uk/wp-json/wp/v2/posts?_embed&after=${startDate}&before=${endDate}`
//                 );

//                 if (!response.ok) {
//                     // Log the error status and body
//                     const errorBody = await response.text(); // Read the response body
//                     console.error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 // 3. Check if the API returned an error (common with incorrect date formats or no posts)
//                 if (data.length === 0) {
//                     setBlogs([]); // Set blogs to empty array if no data
//                     console.warn("No posts found for this date range.");
//                     return; // Exit the function early to prevent further processing
//                 }

//                 console.log("api data ", data);

//                 const transformedBlogs = data.map(transformBlogPost);
//                 setBlogs(transformedBlogs);

//             } catch (err) {
//                 console.error("Error fetching blog data by date:", err);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogsByDate();
//     }, [year, month, day, transformBlogPost]);

//     if (loading) {
//         return <p>Loading blog posts from {year}-{month}-{day}...</p>;
//     }

//     if (error) {
//         return <p>Error: {error.message}</p>;
//     }

//     if (blogs.length === 0) {
//         return <p>No blog posts found for {year}-{month}-{day}.</p>;
//     }

//     return (
//         <section className="Date-Archive-Page">
//             {/* AuthorDateHeader */}
//             <AuthorPageHeader />
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {blogs.map(blog => (
//                         <div key={blog.id} className="bg-white border border-slate-300 rounded-xl shadow-md">
//                             <Link to={`/blog/${blog.slug}`}>
//                                 <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-newbox mb-2" />
//                             </Link>
//                             <div className="p-4 space-y-5">
//                                 <h2 className="text-medium font-medium text-primary mb-2">{blog.title}</h2>
//                                 <p className="text-gray-700 font-normal text-small">
//                                     <span className="text-light-blue font-bold">
//                                         {blog.category} - &nbsp;
//                                     </span>
//                                     {blog.date}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DateArchivePage;

// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { slugify } from '../../../utils';
// import AuthorPageHeader from './AuthorPageHeader';
// import { FaRegClock, FaRegFileAlt } from "react-icons/fa";
// import { FaRegComment } from "react-icons/fa";
// import AuthorDateHeader from './AuthorDateHeader';


// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const DateArchivePage = () => {
//     const { year, month, day } = useParams();
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [authorName, setAuthorName] = useState('Unknown Author');
//     const PLACEHOLDER_IMAGE = '/images/placeholder.png';

//     const transformBlogPost = useCallback((post) => {
//         let imageUrl = PLACEHOLDER_IMAGE;
//         if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//                 const featuredMedia = post._embedded['wp:featuredmedia'];
//                 if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                     imageUrl = featuredMedia[0].source_url;
//                 } else if (featuredMedia.source_url) {
//                     imageUrl = featuredMedia.source_url;
//                 }
//             }
//         }

//         return {
//             id: post.id,
//             title: post.title.rendered,
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//             image: imageUrl,
//         };
//     }, [PLACEHOLDER_IMAGE]);

//     useEffect(() => {
//         const fetchBlogsByDate = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 const startDate = `${year}-${month}-${day}T00:00:00`;
//                 const endDate = `${year}-${month}-${day}T23:59:59`;

//                 console.log("Date range being sent to API:", startDate, endDate);

//                 const response = await fetch(
//                     `https://vcga.uk/wp-json/wp/v2/posts?_embed&after=${startDate}&before=${endDate}`
//                 );

//                 if (!response.ok) {
//                     const errorBody = await response.text();
//                     console.error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.length === 0) {
//                     setBlogs([]);
//                     console.warn("No posts found for this date range.");
//                     return;
//                 }

//                 console.log("api data ", data);

//                 const transformedBlogs = data.map(transformBlogPost);
//                 setBlogs(transformedBlogs);

//                 // Extract author name from the first blog post (if available)
//                 if (transformedBlogs.length > 0) {
//                     setAuthorName(transformedBlogs[0].author); // Use the transformed data
//                 }

//             } catch (err) {
//                 console.error("Error fetching blog data by date:", err);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogsByDate();
//     }, [year, month, day, transformBlogPost]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div class="dot-spinner">
//                     <div class="dot-spinner__dot"></div>
//                     <div class="dot-spinner__dot"></div>
//                     <div class="dot-spinner__dot"></div>
//                     <div class="dot-spinner__dot"></div>
//                     <div class="dot-spinner__dot"></div>
//                     <div class="dot-spinner__dot"></div>
//                     <div class="dot-spinner__dot"></div>
//                     <div class="dot-spinner__dot"></div>
//                 </div>
//             </div>
//         );
//     }


//     return (
//         <section className="Date-Archive-Page">
//             {/* AuthorDateHeader */}
//             <AuthorDateHeader authorName={authorName} archiveDate={`${year}-${month}-${day}`} />
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//                     {blogs.map(blog => (
//                         <div key={blog.id} className="bg-white border border-slate-300 rounded-xl shadow-md">
//                             <Link to={`/blog/${blog.slug}`}>
//                                 <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-newbox" />
//                             </Link>
//                             <div className="p-4 space-y-2.5">
//                                 <h2 className="text-medium font-semibold text-light-blue">{blog.title}</h2>
//                                 <div className='text-gray-700 font-normal text-small h-36' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 28).join(' ') + '...' }} />
//                                 <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
//                                     <div className="flex items-center text-green-500 font-medium text-xs">
//                                         <span className='flex items-center gap-1'>
//                                             <FaRegClock />
//                                             {blog.date}
//                                         </span>
//                                         <span className="mx-2 text-primary">•</span>
//                                         <span className='text-primary'>{blog.readTime}</span>
//                                     </div>

//                                     <div className="flex items-center gap-0.5">
//                                         {/* <FaRegComment className="" />
//                                         <span>{blog.comments || 0}</span> */}
//                                         <FaRegFileAlt />
//                                         <Link
//                                             to={`/blog/${blog.slug}`}
//                                             className="text-light-blue hover:underline flex "
//                                         >
//                                             Read more
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DateArchivePage;

// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { slugify } from '../../../utils';
// import AuthorPageHeader from './AuthorPageHeader'; // You might not need this anymore
// import AuthorDateHeader from './AuthorDateHeader';
// import { FaRegClock, FaRegFileAlt } from "react-icons/fa";
// import { FaRegComment } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'; // Import the styles


// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const DateArchivePage = () => {
//     const { year, month, day } = useParams();
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [authorName, setAuthorName] = useState('Unknown Author');
//     const PLACEHOLDER_IMAGE = '/images/placeholder.png';

//     const transformBlogPost = useCallback((post) => {
//         let imageUrl = PLACEHOLDER_IMAGE;
//         if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//                 const featuredMedia = post._embedded['wp:featuredmedia'];
//                 if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                     imageUrl = featuredMedia[0].source_url;
//                 } else if (featuredMedia.source_url) {
//                     imageUrl = featuredMedia.source_url;
//                 }
//             }
//         }

//         return {
//             id: post.id,
//             title: post.title.rendered,
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//             image: imageUrl,
//         };
//     }, [PLACEHOLDER_IMAGE]);

//     useEffect(() => {
//         const fetchBlogsByDate = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 const startDate = `${year}-${month}-${day}T00:00:00`;
//                 const endDate = `${year}-${month}-${day}T23:59:59`;

//                 console.log("Date range being sent to API:", startDate, endDate);

//                 const response = await fetch(
//                     `https://vcga.uk/wp-json/wp/v2/posts?_embed&after=${startDate}&before=${endDate}`
//                 );

//                 if (!response.ok) {
//                     const errorBody = await response.text();
//                     console.error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.length === 0) {
//                     setBlogs([]);
//                     console.warn("No posts found for this date range.");
//                     return;
//                 }

//                 console.log("api data ", data);

//                 const transformedBlogs = data.map(transformBlogPost);
//                 setBlogs(transformedBlogs);

//                 // Extract author name from the first blog post (if available)
//                 if (transformedBlogs.length > 0) {
//                     setAuthorName(transformedBlogs[0].author); // Use the transformed data
//                 }

//             } catch (err) {
//                 console.error("Error fetching blog data by date:", err);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogsByDate();
//     }, [year, month, day, transformBlogPost]);


//     const renderSkeletons = () => {
//         return Array(6) // Adjust the number as needed
//             .fill(0)
//             .map((_, index) => (
//                 <div key={index} className="bg-white border border-slate-300 rounded-xl shadow-md">
//                     <Skeleton height={200} className="w-full rounded-newbox" />
//                     <div className="p-4 space-y-2.5">
//                         <Skeleton height={24} width="80%" />
//                         <Skeleton height={16} count={3} />
//                         <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
//                             <Skeleton height={16} width="40%" />
//                             <Skeleton height={16} width="20%" />
//                         </div>
//                     </div>
//                 </div>
//             ));
//     };


//     return (
//         <section className="Date-Archive-Page">
//             <AuthorDateHeader authorName={authorName} archiveDate={`${year}-${month}-${day}`} />

//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//                     {loading ? (
//                         renderSkeletons()
//                     ) : (
//                         blogs.map(blog => (
//                             <div key={blog.id} className="bg-white border border-slate-300 rounded-xl shadow-md">
//                                 <Link to={`/blog/${blog.slug}`}>
//                                     <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-newbox" />
//                                 </Link>
//                                 <div className="p-4 space-y-2.5">
//                                     <h2 className="text-medium font-semibold text-light-blue">{blog.title}</h2>
//                                     <div className='text-gray-700 font-normal text-small h-36' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 28).join(' ') + '...' }} />
//                                     <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {blog.date}
//                                             </span>
//                                             <span className="mx-2 text-primary">•</span>
//                                             <span className='text-primary'>{blog.readTime}</span>
//                                         </div>

//                                         <div className="flex items-center gap-0.5">
//                                             {/* <FaRegComment className="" />
//                                         <span>{blog.comments || 0}</span> */}
//                                             <FaRegFileAlt />
//                                             <Link
//                                                 to={`/blog/${blog.slug}`}
//                                                 className="text-light-blue hover:underline flex "
//                                             >
//                                                 Read more
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DateArchivePage;


// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { slugify } from '../../../utils';
// import AuthorDateHeader from './AuthorDateHeader';
// import { FaRegClock, FaRegFileAlt } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const DateArchivePage = () => {
//     const { year, month, day } = useParams();
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [authorName, setAuthorName] = useState(''); // Initialize as empty string. Crucial!
//     const [archiveDate, setArchiveDate] = useState('');
//     const PLACEHOLDER_IMAGE = '/images/placeholder.png';

//     const transformBlogPost = useCallback((post) => {
//         let imageUrl = PLACEHOLDER_IMAGE;
//         if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//                 const featuredMedia = post._embedded['wp:featuredmedia'];
//                 if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                     imageUrl = featuredMedia[0].source_url;
//                 } else if (featuredMedia.source_url) {
//                     imageUrl = featuredMedia.source_url;
//                 }
//             }
//         }

//         return {
//             id: post.id,
//             title: post.title.rendered,
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//             image: imageUrl,
//         };
//     }, [PLACEHOLDER_IMAGE]);

//     useEffect(() => {
//         const fetchBlogsByDate = async () => {
//             setLoading(true);
//             setError(null);
//             setAuthorName(''); // Reset author name on each fetch.
//             setArchiveDate('');

//             try {
//                 await delay(1500);

//                 const startDate = `${year}-${month}-${day}T00:00:00`;
//                 const endDate = `${year}-${month}-${day}T23:59:59`;

//                 console.log("Date range being sent to API:", startDate, endDate);

//                 const response = await fetch(
//                     `https://vcga.uk/wp-json/wp/v2/posts?_embed&after=${startDate}&before=${endDate}`
//                 );

//                 if (!response.ok) {
//                     const errorBody = await response.text();
//                     console.error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.length === 0) {
//                     setBlogs([]);
//                     console.warn("No posts found for this date range.");
//                     return;
//                 }

//                 console.log("api data ", data);

//                 const transformedBlogs = data.map(transformBlogPost);
//                 setBlogs(transformedBlogs);

//                 // Extract author name from the first blog post (if available)
//                 if (transformedBlogs.length > 0) {
//                     setAuthorName(transformedBlogs[0].author);
//                 }

//                 setArchiveDate(`${year}-${month}-${day}`);

//             } catch (err) {
//                 console.error("Error fetching blog data by date:", err);
//                 setError(err);
//                 setAuthorName('Unknown Author'); // Set a default in case of error
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogsByDate();
//     }, [year, month, day, transformBlogPost]);

//     const renderSkeletons = () => {
//         return Array(6)
//             .fill(0)
//             .map((_, index) => (
//                 <div key={index} className="bg-white border border-slate-300 rounded-xl shadow-md">
//                     <Skeleton height={200} className="w-full rounded-newbox" />
//                     <div className="p-4 space-y-2.5">
//                         <Skeleton height={24} width="80%" />
//                         <Skeleton height={16} count={3} />
//                         <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
//                             <Skeleton height={16} width="40%" />
//                             <Skeleton height={16} width="20%" />
//                         </div>
//                     </div>
//                 </div>
//             ));
//     };

//     return (
//         <section className="Date-Archive-Page">
//             <AuthorDateHeader authorName={authorName} archiveDate={archiveDate} />

//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//                     {loading ? (
//                         renderSkeletons()
//                     ) : (
//                         blogs.map(blog => (
//                             <div key={blog.id} className="bg-white border border-slate-300 rounded-xl shadow-md">
//                                 <Link to={`/blog/${blog.slug}`}>
//                                     <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-newbox" />
//                                 </Link>
//                                 <div className="p-4 space-y-2.5">
//                                     <h2 className="text-medium font-semibold text-light-blue">{blog.title}</h2>
//                                     <div className='text-gray-700 font-normal text-small h-36' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 28).join(' ') + '...' }} />
//                                     <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {blog.date}
//                                             </span>
//                                             <span className="mx-2 text-primary">•</span>
//                                             <span className='text-primary'>{blog.readTime}</span>
//                                         </div>

//                                         <div className="flex items-center gap-0.5">
//                                             <FaRegFileAlt />
//                                             <Link
//                                                 to={`/blog/${blog.slug}`}
//                                                 className="text-light-blue hover:underline flex "
//                                             >
//                                                 Read more
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DateArchivePage;

// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { slugify } from '../../../utils';
// import AuthorDateHeader from './AuthorDateHeader';
// import { FaRegClock, FaRegFileAlt } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const DateArchivePage = () => {
//     const { year, month, day } = useParams();
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [authorName, setAuthorName] = useState('Loading...'); // Default to "Loading..."
//     const [archiveDate, setArchiveDate] = useState('');
//     const PLACEHOLDER_IMAGE = '/images/placeholder.png';

//     const transformBlogPost = useCallback((post) => {
//         let imageUrl = PLACEHOLDER_IMAGE;
//         if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//                 const featuredMedia = post._embedded['wp:featuredmedia'];
//                 if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                     imageUrl = featuredMedia[0].source_url;
//                 } else if (featuredMedia.source_url) {
//                     imageUrl = featuredMedia.source_url;
//                 }
//             }
//         }

//         return {
//             id: post.id,
//             title: post.title.rendered,
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//             image: imageUrl,
//         };
//     }, [PLACEHOLDER_IMAGE]);

//     useEffect(() => {
//         const fetchBlogsByDate = async () => {
//             setLoading(true);
//             setError(null);
//             setAuthorName('Loading...');  // Set to "Loading..." on each fetch.
//             setArchiveDate('');

//             try {
//                 await delay(1500);

//                 const startDate = `${year}-${month}-${day}T00:00:00`;
//                 const endDate = `${year}-${month}-${day}T23:59:59`;

//                 console.log("Date range being sent to API:", startDate, endDate);

//                 const response = await fetch(
//                     `https://vcga.uk/wp-json/wp/v2/posts?_embed&after=${startDate}&before=${endDate}`
//                 );

//                 if (!response.ok) {
//                     const errorBody = await response.text();
//                     console.error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.length === 0) {
//                     setBlogs([]);
//                     console.warn("No posts found for this date range.");
//                     return;
//                 }

//                 console.log("api data ", data);

//                 const transformedBlogs = data.map(transformBlogPost);
//                 setBlogs(transformedBlogs);

//                 // Extract author name from the first blog post (if available)
//                 if (transformedBlogs.length > 0) {
//                     setAuthorName(transformedBlogs[0].author);
//                 }

//                 setArchiveDate(`${year}-${month}-${day}`);

//             } catch (err) {
//                 console.error("Error fetching blog data by date:", err);
//                 setError(err);
//                 setAuthorName('Unknown Author'); // Set a default in case of error
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogsByDate();
//     }, [year, month, day, transformBlogPost]);

//     const renderSkeletons = () => {
//         return Array(6)
//             .fill(0)
//             .map((_, index) => (
//                 <div key={index} className="bg-white shadow-md rounded-xl">
//                     <Skeleton height={200} className="w-full rounded-xl" />
//                     <div className="p-4 space-y-2.5">
//                         <Skeleton height={24} width="80%" />
//                         <Skeleton height={16} count={3} />
//                         <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
//                             <Skeleton height={16} width="40%" />
//                             <Skeleton height={16} width="20%" />
//                         </div>
//                     </div>
//                 </div>
//             ));
//     };

//     return (
//         <section className="Date-Archive-Page">
//             <AuthorDateHeader authorName={authorName} archiveDate={archiveDate} />

//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//                     {loading ? (
//                         renderSkeletons()
//                     ) : (
//                         blogs.map(blog => (
//                             <div key={blog.id} className="bg-white border border-slate-100 rounded-xl shadow-md">
//                                 <Link to={`/blog/${blog.slug}`}>
//                                     <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-xl" />
//                                 </Link>
//                                 <div className="p-4 space-y-2.5">
//                                     <h2 className="text-medium font-semibold text-light-blue">{blog.title}</h2>
//                                     <div className='text-gray-700 font-normal text-small h-36' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 28).join(' ') + '...' }} />
//                                     <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {blog.date}
//                                             </span>
//                                             <span className="mx-2 text-primary">•</span>
//                                             <span className='text-primary'>{blog.readTime}</span>
//                                         </div>

//                                         <div className="flex items-center gap-0.5">
//                                             <FaRegFileAlt />
//                                             <Link
//                                                 to={`/blog/${blog.slug}`}
//                                                 className="text-light-blue hover:underline flex "
//                                             >
//                                                 Read more
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DateArchivePage;

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { slugify } from '../../../utils';
import AuthorDateHeader from './AuthorDateHeader';
import { FaRegClock, FaRegFileAlt } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const DateArchivePage = () => {
    const { year, month, day } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [authorName, setAuthorName] = useState('Loading...'); // Default to "Loading..."
    const [archiveDate, setArchiveDate] = useState('');
    const PLACEHOLDER_IMAGE = '/images/placeholder.png';

    const transformBlogPost = useCallback((post) => {
        let imageUrl = PLACEHOLDER_IMAGE;
        if (post.featured_media && post.featured_media !== 0) {
            if (post._embedded && post._embedded['wp:featuredmedia']) {
                const featuredMedia = post._embedded['wp:featuredmedia'];
                if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
                    imageUrl = featuredMedia[0].source_url;
                } else if (featuredMedia.source_url) {
                    imageUrl = featuredMedia.source_url;
                }
            }
        }

        return {
            id: post.id,
            title: decodeEntities(post.title.rendered),  // Decode title
            content: decodeEntities(post.content.rendered), // Decode content
            slug: slugify(post.title.rendered),
            author: post._embedded?.author?.[0]?.name || 'Unknown Author',
            date: new Date(post.date).toLocaleDateString(),
            category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
            readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
            image: imageUrl,
        };
    }, [PLACEHOLDER_IMAGE]);

    // Function to decode HTML entities
    const decodeEntities = (encodedString) => {
        let parser = new DOMParser();
        let dom = parser.parseFromString(
            '<!doctype html><body>' + encodedString,
            'text/html');
        return dom.body.textContent;
    }

    useEffect(() => {
        const fetchBlogsByDate = async () => {
            setLoading(true);
            setError(null);
            setAuthorName('Loading...');  // Set to "Loading..." on each fetch.
            setArchiveDate('');

            try {
                await delay(1500);

                const startDate = `${year}-${month}-${day}T00:00:00`;
                const endDate = `${year}-${month}-${day}T23:59:59`;

                console.log("Date range being sent to API:", startDate, endDate);

                const response = await fetch(
                    `https://vcga.uk/wp-json/wp/v2/posts?_embed&after=${startDate}&before=${endDate}`
                );

                if (!response.ok) {
                    const errorBody = await response.text();
                    console.error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data.length === 0) {
                    setBlogs([]);
                    console.warn("No posts found for this date range.");
                    return;
                }

                console.log("api data ", data);

                const transformedBlogs = data.map(transformBlogPost);
                setBlogs(transformedBlogs);

                // Extract author name from the first blog post (if available)
                if (transformedBlogs.length > 0) {
                    setAuthorName(transformedBlogs[0].author);
                }

                setArchiveDate(`${year}-${month}-${day}`);

            } catch (err) {
                console.error("Error fetching blog data by date:", err);
                setError(err);
                setAuthorName('Unknown Author'); // Set a default in case of error
            } finally {
                setLoading(false);
            }
        };

        fetchBlogsByDate();
    }, [year, month, day, transformBlogPost]);

    const renderSkeletons = () => {
        return Array(6)
            .fill(0)
            .map((_, index) => (
                <div key={index} className="bg-white shadow-md rounded-xl">
                    <Skeleton height={200} className="w-full rounded-xl" />
                    <div className="p-4 space-y-2.5">
                        <Skeleton height={24} width="80%" />
                        <Skeleton height={16} count={3} />
                        <div className="flex items-center justify-between text-gray-500 gap-1.5 text-small">
                            <Skeleton height={16} width="40%" />
                            <Skeleton height={16} width="20%" />
                        </div>
                    </div>
                </div>
            ));
    };

    return (
        <section className="Date-Archive-Page">
            <AuthorDateHeader authorName={authorName} archiveDate={archiveDate} />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {loading ? (
                        renderSkeletons()
                    ) : (
                        blogs.map(blog => (
                            <div key={blog.id} className="bg-white border border-slate-100 rounded-xl shadow-md">
                                <Link to={`/blog/${blog.slug}`}>
                                    <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-xl" />
                                </Link>
                                <div className="p-4">
                                    <h2 className="text-medium font-semibold text-light-blue mb-4">{blog.title}</h2>
                                    <div className='text-gray-700 font-normal text-small h-28 mb-4' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 28).join(' ') + '...' }} />
                                    <div className='border-t border-gray-300 py-2'></div>
                                    <div className="flex justify-between items-center text-primary font-normal text-xs">
                                        <span className='flex items-center gap-1' >
                                            <FaRegClock />
                                            {blog.date}</span>
                                        <Link to={`/blog/${blog.slug}`} className="text-light-blue font-semibold">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default DateArchivePage;