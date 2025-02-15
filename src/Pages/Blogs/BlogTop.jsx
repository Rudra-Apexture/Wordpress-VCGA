// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";
// import { Link, useParams } from 'react-router-dom';


// const BlogTop = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setLoading(false);
//                 setError("Blog slug not provided.");
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);
//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const post = response.data[0];

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     commentCount: post.comment_status === 'open' ? post.comment_count : 0,
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,

//                 };

//                 setBlog(transformedBlog);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     const truncateTitle = (title, limit = 4) => {
//         if (!title) return "";
//         const words = title.split(' ');
//         if (words.length <= limit) {
//             return title;
//         }
//         return `${words.slice(0, limit).join(' ')}...`;
//     };

//     const truncatedTitle = blog ? truncateTitle(blog.title) : '';

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className='hover:underline underline-offset-1' > Home </Link>
//                             <span>
//                                 <FaAngleRight className='size-5' />
//                             </span>
//                             {truncatedTitle}
//                         </h2>
//                         <div className='flex justify-center'>
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]" >
//                                 {blog.title}
//                             </p>
//                         </div>
//                         <div className='flex justify-center space-x-5'>
//                             <h1 className='flex items-center gap-1'>
//                                 <FaRegUserCircle className='size-4' />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className='flex items-center gap-1'>
//                                 <FaCalendar className='size-4' />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className='flex items-center gap-1'>
//                                 <IoChatbubbleEllipsesOutline className='size-4' />
//                                 <span>{blog.commentCount} Comments</span>
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";
// import { Link, useParams } from 'react-router-dom';

// const BlogTop = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0); // State for comment count

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setLoading(false);
//                 setError("Blog slug not provided.");
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);
//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (response.data.length === 0) {
//                     throw new Error(`Blog post with slug "${blogSlug}" not found.`);
//                 }

//                 const post = response.data[0];
//                 setCommentCount(post.comment_count || 0); // Get initial comment count

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     commentStatus: post.comment_status,
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//             } catch (err) {
//                 console.error("Error fetching blog data:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     const truncateTitle = (title, limit = 4) => {
//         if (!title) return "";
//         const words = title.split(' ');
//         if (words.length <= limit) {
//             return title;
//         }
//         return `${words.slice(0, limit).join(' ')}...`;
//     };

//     const truncatedTitle = blog ? truncateTitle(blog.title) : '';

//     // Function to update comment count (passed from BlogDetail)
//     const updateCommentCount = (newCount) => {
//         setCommentCount(newCount);
//     };

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className='hover:underline underline-offset-1' > Home </Link>
//                             <span>
//                                 <FaAngleRight className='size-5' />
//                             </span>
//                             {truncatedTitle}
//                         </h2>
//                         <div className='flex justify-center'>
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]" >
//                                 {blog.title}
//                             </p>
//                         </div>
//                         <div className='flex justify-center space-x-5'>
//                             <h1 className='flex items-center gap-1'>
//                                 <FaRegUserCircle className='size-4' />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className='flex items-center gap-1'>
//                                 <FaCalendar className='size-4' />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className='flex items-center gap-1'>
//                                 <IoChatbubbleEllipsesOutline className='size-4' />
//                                 <span>{commentCount} Comments</span> {/* Use commentCount here */}
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";
// import { Link, useParams } from 'react-router-dom';

// const BlogTop = ({ updateCommentCount, blogSlugProp }) => {  // Receive updateCommentCount from props
//     const { blogSlug } = useParams(); // Now getting it from the router
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0); // State for comment count

//     useEffect(() => {

//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setLoading(false);
//                 setError("Blog slug not provided.");
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);
//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (response.data.length === 0) {
//                     throw new Error(`Blog post with slug "${blogSlug}" not found.`);
//                 }

//                 const post = response.data[0];
//                 setCommentCount(post.comment_count || 0); // Get initial comment count

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     commentStatus: post.comment_status,
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//             } catch (err) {
//                 console.error("Error fetching blog data:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     useEffect(() => {
//         if (updateCommentCount) {
//             updateCommentCount(commentCount);
//         }
//     }, [commentCount, updateCommentCount]);

//     const truncateTitle = (title, limit = 4) => {
//         if (!title) return "";
//         const words = title.split(' ');
//         if (words.length <= limit) {
//             return title;
//         }
//         return `${words.slice(0, limit).join(' ')}...`;
//     };

//     const truncatedTitle = blog ? truncateTitle(blog.title) : '';

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className='hover:underline underline-offset-1' > Home </Link>
//                             <span>
//                                 <FaAngleRight className='size-5' />
//                             </span>
//                             {truncatedTitle}
//                         </h2>
//                         <div className='flex justify-center'>
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]" >
//                                 {blog.title}
//                             </p>
//                         </div>
//                         <div className='flex justify-center space-x-5'>
//                             <h1 className='flex items-center gap-1'>
//                                 <FaRegUserCircle className='size-4' />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className='flex items-center gap-1'>
//                                 <FaCalendar className='size-4' />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className='flex items-center gap-1'>
//                                 <IoChatbubbleEllipsesOutline className='size-4' />
//                                 <span>{commentCount} Comments</span> {/* Use commentCount here */}
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";
// import { Link, useParams } from 'react-router-dom';

// const BlogTop = ({ blogSlugProp, updateCommentCount }) => { // Receive updateCommentCount and blogSlug
//     const { blogSlug } = useParams(); // Now getting it from the router
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0); // State for comment count

//     useEffect(() => {

//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setLoading(false);
//                 setError("Blog slug not provided.");
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);
//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (response.data.length === 0) {
//                     throw new Error(`Blog post with slug "${blogSlug}" not found.`);
//                 }

//                 const post = response.data[0];
//                 setCommentCount(post.comment_count || 0); // Get initial comment count

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     commentStatus: post.comment_status,
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//             } catch (err) {
//                 console.error("Error fetching blog data:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     useEffect(() => {
//         if (updateCommentCount) {
//             updateCommentCount(commentCount);
//         }
//     }, [commentCount, updateCommentCount]);

//     const truncateTitle = (title, limit = 4) => {
//         if (!title) return "";
//         const words = title.split(' ');
//         if (words.length <= limit) {
//             return title;
//         }
//         return `${words.slice(0, limit).join(' ')}...`;
//     };

//     const truncatedTitle = blog ? truncateTitle(blog.title) : '';

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className='hover:underline underline-offset-1' > Home </Link>
//                             <span>
//                                 <FaAngleRight className='size-5' />
//                             </span>
//                             {truncatedTitle}
//                         </h2>
//                         <div className='flex justify-center'>
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]" >
//                                 {blog.title}
//                             </p>
//                         </div>
//                         <div className='flex justify-center space-x-5'>
//                             <h1 className='flex items-center gap-1'>
//                                 <FaRegUserCircle className='size-4' />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className='flex items-center gap-1'>
//                                 <FaCalendar className='size-4' />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className='flex items-center gap-1'>
//                                 <IoChatbubbleEllipsesOutline className='size-4' />
//                                 <span>{commentCount} Comments</span> {/* Use commentCount here */}
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";
// import { Link, useParams } from 'react-router-dom';

// const BlogTop = () => {
//     const { blogSlug } = useParams(); // Get slug from URL
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setLoading(false);
//                 setError("Blog slug not provided.");
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 // Fetch Blog Post Data
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?id=${blogSlug}&_embed`);
//                 const post = response.data[0];

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     commentStatus: post.comment_status,
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//                 // Fetch Comment Count
//                 fetchCommentCount(post.id);

//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     // Fetch Comment Count Separately
//     const fetchCommentCount = async (postId) => {
//         try {
//             const commentResponse = await axios.get(`https://vcga.uk/wp-json/wp/v2/comments?post=${postId}`);
//             setCommentCount(commentResponse.data.length); // Count the comments
//         } catch (err) {
//             console.error("Error fetching comments:", err);
//             setCommentCount(0); // Default to 0 if error
//         }
//     };

//     const truncateTitle = (title, limit = 4) => {
//         if (!title) return "";
//         const words = title.split(' ');
//         return words.length <= limit ? title : `${words.slice(0, limit).join(' ')}...`;
//     };

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className='hover:underline underline-offset-1'>Home</Link>
//                             <FaAngleRight className='size-5' />
//                             {truncateTitle(blog.title)}
//                         </h2>
//                         <div className='flex justify-center'>
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]">
//                                 {blog.title}
//                             </p>
//                         </div>
//                         <div className='flex justify-center space-x-5'>
//                             <h1 className='flex items-center gap-1'>
//                                 <FaRegUserCircle className='size-4' />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className='flex items-center gap-1'>
//                                 <FaCalendar className='size-4' />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className='flex items-center gap-1'>
//                                 <IoChatbubbleEllipsesOutline className='size-4' />
//                                 <span>{commentCount} Comments </span> {/* Now correctly showing comment count */}
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";
// import { Link, useParams } from 'react-router-dom';
// import { FaAnglesRight } from "react-icons/fa6";
// import { slugify } from '../../../utils';


// // Function to decode HTML entities
// const decodeHTMLEntities = (text) => {
//     const textArea = document.createElement('textarea');
//     textArea.innerHTML = text;
//     return textArea.value;
// };

// const BlogTop = () => {
//     const { blogSlug } = useParams(); // Get slug from URL
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setLoading(false);
//                 setError("Blog slug not provided.");
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 // Fetch Blog Post Data
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?id=${blogSlug}&_embed`);
//                 const post = response.data[0];

//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHTMLEntities(post.title.rendered),  // Decode the title here
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     commentStatus: post.comment_status,
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//                 // Fetch Comment Count
//                 fetchCommentCount(post.id);

//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     // Fetch Comment Count Separately
//     const fetchCommentCount = async (postId) => {
//         try {
//             const commentResponse = await axios.get(`https://vcga.uk/wp-json/wp/v2/comments?post=${postId}`);
//             setCommentCount(commentResponse.data.length); // Count the comments
//         } catch (err) {
//             console.error("Error fetching comments:", err);
//             setCommentCount(0); // Default to 0 if error
//         }
//     };

//     const truncateTitle = (title, limit = 3) => {
//         if (!title) return "";
//         const decodedTitle = decodeHTMLEntities(title); // Decode before truncating
//         const words = decodedTitle.split(' ');
//         return words.length <= limit ? decodedTitle : `${words.slice(0, limit).join(' ')}...`;
//     };

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className='hover:underline underline-offset-1'>Home</Link>
//                             <FaAnglesRight />
//                             <Link to={`/category/${slugify(blog.category)}`} className='hover:underline underline-offset-1' >{blog.category}</Link>
//                             <FaAnglesRight />
//                             {truncateTitle(blog.title)}

//                         </h2>
//                         <div className='flex justify-center'>
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]">
//                                 {blog.title}
//                             </p>
//                         </div>
//                         <div className='flex justify-center space-x-5'>
//                             <h1 className='flex items-center gap-1'>
//                                 <FaRegUserCircle className='size-4' />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className='flex items-center gap-1'>
//                                 <FaCalendar className='size-4' />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className='flex items-center gap-1'>
//                                 <IoChatbubbleEllipsesOutline className='size-4' />
//                                 <span>{commentCount} Comments </span> {/* Now correctly showing comment count */}
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaRegUserCircle } from "react-icons/fa";
// import { FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAngleRight } from "react-icons/fa6";
// import { Link, useParams } from 'react-router-dom';
// import { FaAnglesRight } from "react-icons/fa6";
// import { slugify } from '../../../utils';

// // Function to decode HTML entities
// const decodeHTMLEntities = (text) => {
//     const textArea = document.createElement('textarea');
//     textArea.innerHTML = text;
//     return textArea.value;
// };

// const BlogTop = () => {
//     const { blogSlug } = useParams(); // Get slug from URL
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setLoading(false);
//                 setError("Blog slug not provided.");
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 // Fetch Blog Post Data
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?id=${blogSlug}&_embed`);
//                 const post = response.data[0];

//                 if (!post) {
//                     setLoading(false);
//                     setError("Blog not found. Please check the slug in the URL.");  // More helpful message
//                     return;
//                 }

//                 const categories = post._embedded?.['wp:term']?.[0] || [];
//                 const categoryName = categories.length > 0 ? categories[0].name : 'Uncategorized';

//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHTMLEntities(post.title.rendered),  // Decode the title here
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     commentStatus: post.comment_status,
//                     category: categoryName, // Dynamically get the category
//                     featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//                 // Fetch Comment Count
//                 fetchCommentCount(post.id);

//             } catch (err) {
//                 console.error("Error fetching blog or comments:", err);
//                 setError("Failed to load blog.  Please check the URL and try again."); // More helpful error message
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     // Fetch Comment Count Separately
//     const fetchCommentCount = async (postId) => {
//         try {
//             const commentResponse = await axios.get(`https://vcga.uk/wp-json/wp/v2/comments?post=${postId}`);
//             setCommentCount(commentResponse.data.length); // Count the comments
//         } catch (err) {
//             console.error("Error fetching comments:", err);
//             setCommentCount(0); // Default to 0 if error
//         }
//     };

//     const truncateTitle = (title, limit = 3) => {
//         if (!title) return "";
//         const decodedTitle = decodeHTMLEntities(title); // Decode before truncating
//         const words = decodedTitle.split(' ');
//         return words.length <= limit ? decodedTitle : `${words.slice(0, limit).join(' ')}...`;
//     };

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className='hover:underline underline-offset-1'>Home</Link>
//                             <FaAnglesRight />
//                             <Link to={`/category/${slugify(blog.category)}`} className='hover:underline underline-offset-1' >{blog.category}</Link>
//                             <FaAnglesRight />
//                             {truncateTitle(blog.title)}

//                         </h2>
//                         <div className='flex justify-center'>
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]">
//                                 {blog.title}
//                             </p>
//                         </div>
//                         <div className='flex justify-center space-x-5'>
//                             <h1 className='flex items-center gap-1'>
//                                 <FaRegUserCircle className='size-4' />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className='flex items-center gap-1'>
//                                 <FaCalendar className='size-4' />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className='flex items-center gap-1'>
//                                 <IoChatbubbleEllipsesOutline className='size-4' />
//                                 <span>{commentCount} Comments </span> {/* Now correctly showing comment count */}
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaRegUserCircle, FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAnglesRight } from "react-icons/fa6";
// import { Link, useParams } from "react-router-dom";
// import { slugify } from "../../../utils";

// // Function to decode HTML entities
// const decodeHTMLEntities = (text) => {
//     const textArea = document.createElement("textarea");
//     textArea.innerHTML = text;
//     return textArea.value;
// };

// const BlogTop = () => {
//     const { blogSlug } = useParams(); // Get slug from URL
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setError("Blog slug not provided.");
//                 setLoading(false);
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 // Corrected API Query: Fetch by slug
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);
//                 const post = response.data[0];

//                 if (!post) {
//                     setError("Blog not found. Please check the URL.");
//                     setLoading(false);
//                     return;
//                 }

//                 // Extract categories dynamically
//                 const categories = post._embedded?.["wp:term"]?.[0] || [];
//                 const categoryName = categories.length > 0 ? categories[0].name : "Uncategorized";

//                 // Transform blog data
//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHTMLEntities(post.title.rendered), // Decode title
//                     author: post._embedded?.author?.[0]?.name || "Anonymous",
//                     date: new Date(post.date).toLocaleDateString(),
//                     category: categoryName, // Dynamically update category
//                     featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//                 // Fetch Comment Count
//                 fetchCommentCount(post.id);
//             } catch (err) {
//                 console.error("Error fetching blog:", err);
//                 setError("Failed to load blog. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     // Fetch Comment Count
//     const fetchCommentCount = async (postId) => {
//         try {
//             const commentResponse = await axios.get(`https://vcga.uk/wp-json/wp/v2/comments?post=${postId}`);
//             setCommentCount(commentResponse.data.length); // Update dynamically
//         } catch (err) {
//             console.error("Error fetching comments:", err);
//             setCommentCount(0);
//         }
//     };

//     // Truncate long titles for breadcrumbs
//     const truncateTitle = (title, limit = 3) => {
//         if (!title) return "";
//         const decodedTitle = decodeHTMLEntities(title); // Decode first
//         const words = decodedTitle.split(" ");
//         return words.length <= limit ? decodedTitle : `${words.slice(0, limit).join(" ")}...`;
//     };

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded text-center">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         {/* Breadcrumbs */}
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className="hover:underline underline-offset-1">Home</Link>
//                             <FaAnglesRight />
//                             <Link to={`/category/${slugify(blog.category)}`} className="hover:underline underline-offset-1">
//                                 {blog.category}
//                             </Link>
//                             <FaAnglesRight />
//                             {truncateTitle(blog.title)}
//                         </h2>

//                         {/* Blog Title */}
//                         <div className="flex justify-center">
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]">
//                                 {blog.title}
//                             </p>
//                         </div>

//                         {/* Blog Meta Data */}
//                         <div className="flex justify-center space-x-5">
//                             <h1 className="flex items-center gap-1">
//                                 <FaRegUserCircle className="size-4" />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className="flex items-center gap-1">
//                                 <FaCalendar className="size-4" />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className="flex items-center gap-1">
//                                 <IoChatbubbleEllipsesOutline className="size-4" />
//                                 <span>{commentCount} Comments</span>
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaRegUserCircle, FaCalendar } from "react-icons/fa";
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import { FaAnglesRight } from "react-icons/fa6";
// import { Link, useParams } from "react-router-dom";
// import { slugify } from "../../../utils";

// // Function to decode HTML entities
// const decodeHTMLEntities = (text) => {
//     const textArea = document.createElement("textarea");
//     textArea.innerHTML = text;
//     return textArea.value;
// };

// const BlogTop = () => {
//     const { blogSlug } = useParams(); // Get slug from URL
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!blogSlug) {
//                 setError("Blog slug not provided.");
//                 setLoading(false);
//                 return;
//             }

//             setLoading(true);
//             setError(null);
//             try {
//                 // Corrected API Query: Fetch by slug
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

//                 // Check if the API call was successful.
//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const post = response.data[0];

//                 if (!post) {
//                     setError("Blog not found. Please check the URL.");
//                     setLoading(false);
//                     return;
//                 }

//                 // Extract categories dynamically
//                 const categories = post._embedded?.["wp:term"]?.[0] || [];
//                 const categoryName = categories.length > 0 ? categories[0].name : "Uncategorized";

//                 // Transform blog data
//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHTMLEntities(post.title.rendered), // Decode title
//                     author: post._embedded?.author?.[0]?.name || "Anonymous",
//                     date: new Date(post.date).toLocaleDateString(),
//                     category: categoryName, // Dynamically update category
//                     featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
//                 };

//                 setBlog(transformedBlog);

//                 // Fetch Comment Count
//                 fetchCommentCount(post.id);
//             } catch (err) {
//                 console.error("Error fetching blog:", err);
//                 setError("Failed to load blog. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug]);

//     // Fetch Comment Count
//     const fetchCommentCount = async (postId) => {
//         try {
//             const commentResponse = await axios.get(`https://vcga.uk/wp-json/wp/v2/comments?post=${postId}`);
//             setCommentCount(commentResponse.data.length); // Update dynamically
//         } catch (err) {
//             console.error("Error fetching comments:", err);
//             setCommentCount(0);
//         }
//     };

//     // Truncate long titles for breadcrumbs
//     const truncateTitle = (title, limit = 3) => {
//         if (!title) return "";
//         const decodedTitle = decodeHTMLEntities(title); // Decode first
//         const words = decodedTitle.split(" ");
//         return words.length <= limit ? decodedTitle : `${words.slice(0, limit).join(" ")}...`;
//     };

//     return (
//         <section>
//             {loading && (
//                 <div className="loading-overlay flex items-center justify-center h-screen">
//                     <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
//                 </div>
//             )}
//             {error && (
//                 <div className="error-message bg-red-500 font-medium text-white p-4 rounded text-center">
//                     {error}
//                 </div>
//             )}
//             {!loading && !error && blog && (
//                 <div className="bg-light-blue lg:py-14 py-20 text-white">
//                     <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
//                         {/* Breadcrumbs */}
//                         <h2 className="lg:text-small text-xs font-medium text-center flex justify-center items-center gap-2">
//                             <Link to="/" className="hover:underline underline-offset-1">Home</Link>
//                             <FaAnglesRight />
//                             <Link to={`/category/${slugify(blog.category)}`} className="hover:underline underline-offset-1">
//                                 {blog.category}
//                             </Link>
//                             <FaAnglesRight />
//                             {truncateTitle(blog.title)}
//                         </h2>

//                         {/* Blog Title */}
//                         <div className="flex justify-center">
//                             <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl lg:leading-[55px]">
//                                 {blog.title}
//                             </p>
//                         </div>

//                         {/* Blog Meta Data */}
//                         <div className="flex justify-center space-x-5">
//                             <h1 className="flex items-center gap-1">
//                                 <FaRegUserCircle className="size-4" />
//                                 <span>{blog.author}</span>
//                             </h1>
//                             <h3 className="flex items-center gap-1">
//                                 <FaCalendar className="size-4" />
//                                 <span>{blog.date}</span>
//                             </h3>
//                             <h6 className="flex items-center gap-1">
//                                 <IoChatbubbleEllipsesOutline className="size-4" />
//                                 <span>{commentCount} Comments</span>
//                             </h6>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BlogTop;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegUserCircle, FaCalendar } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaAnglesRight } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { slugify } from "../../../utils";

// Function to decode HTML entities
const decodeHTMLEntities = (text) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
};

const BlogTop = () => {
    const { blogSlug } = useParams(); // Get slug from URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!blogSlug) {
                setError("Blog slug not provided.");
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);
            try {
                // Corrected API Query: Fetch by slug
                const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

                // Check if the API call was successful.
                if (response.status !== 200) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const post = response.data[0];

                if (!post) {
                    setError("Blog not found. Please check the URL.");
                    setLoading(false);
                    return;
                }

                // Extract categories dynamically
                const categories = post._embedded?.["wp:term"]?.[0] || [];
                const categoryName = categories.length > 0 ? decodeHTMLEntities(categories[0].name) : "Uncategorized"; // Decode category name here

                // Transform blog data
                const transformedBlog = {
                    id: post.id,
                    title: decodeHTMLEntities(post.title.rendered), // Decode title
                    author: post._embedded?.author?.[0]?.name || "Anonymous",
                    date: new Date(post.date).toLocaleDateString(),
                    category: categoryName, // Dynamically update category
                    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
                };

                setBlog(transformedBlog);

                // Fetch Comment Count
                fetchCommentCount(post.id);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Failed to load blog. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogSlug]);

    // Fetch Comment Count
    const fetchCommentCount = async (postId) => {
        try {
            const commentResponse = await axios.get(`https://vcga.uk/wp-json/wp/v2/comments?post=${postId}`);
            setCommentCount(commentResponse.data.length); // Update dynamically
        } catch (err) {
            console.error("Error fetching comments:", err);
            setCommentCount(0);
        }
    };

    // Truncate long titles for breadcrumbs
    const truncateTitle = (title, limit = 3) => {
        if (!title) return "";
        const decodedTitle = decodeHTMLEntities(title); // Decode first
        const words = decodedTitle.split(" ");
        return words.length <= limit ? decodedTitle : `${words.slice(0, limit).join(" ")}...`;
    };

    return (
        <section>
            {loading && (
                <div className="loading-overlay flex items-center justify-center h-screen">
                    <div className="loading-spinner animate-spin rounded-full border-4 border-t-4 border-gray-200 size-12"></div>
                </div>
            )}
            {error && (
                <div className="error-message bg-red-500 font-medium text-white p-4 rounded text-center">
                    {error}
                </div>
            )}
            {!loading && !error && blog && (
                <div className="bg-light-blue lg:py-14 py-20 text-white">
                    <div className="max-w-7xl mx-auto space-y-5 px-4">
                        {/* Breadcrumbs */}
                        <h2 className="text-medium font-medium text-center flex flex-wrap justify-center items-center gap-2">
                            <Link to="/" className="hover:underline underline-offset-1">Home</Link>
                            <FaAnglesRight />
                            <Link to={`/category/${slugify(blog.category)}`} className="hover:underline underline-offset-1">
                                {blog.category}
                            </Link>
                            <FaAnglesRight />
                            {truncateTitle(blog.title)}
                            </h2>

                        {/* Blog Title */}
                        <div className="flex justify-center">
                            <p className="lg:text-[50px] text-large font-bold capitalize text-center max-w-5xl leading-10 lg:leading-[55px]">
                                {blog.title}
                            </p>
                        </div>

                        {/* Blog Meta Data */}
                        <div className="flex justify-center space-x-5">
                            <h1 className="flex items-center gap-1">
                                <FaRegUserCircle className="size-4" />
                                <span>{blog.author}</span>
                            </h1>
                            <h3 className="flex items-center gap-1">
                                <FaCalendar className="size-4" />
                                <span>{blog.date}</span>
                            </h3>
                            <h6 className="flex items-center gap-1">
                                <IoChatbubbleEllipsesOutline className="size-4" />
                                <span>{commentCount} Comments</span>
                            </h6>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BlogTop;