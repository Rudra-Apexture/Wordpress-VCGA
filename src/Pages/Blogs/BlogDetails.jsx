// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
// import { FaFacebook } from "react-icons/fa";
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?id=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
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
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map(heading => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView();
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     if (loading) {
//         return <p>Loading blog post...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop />
//             </div>
//             <div className="container mx-auto py-10">
//                 <article className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10">
//                         <div className="flex flex-col w-full lg:w-1/4 ">
//                             <div className="flex space-x-3">
//                                 <h1 className="text-primary text-small font-medium flex items-center">Share</h1>
//                                 {/* Facebook */}
//                                 <a
//                                     href="https://www.facebook.com/share_channel/#"
//                                     className="p-2.5 bg-[#3B5998] rounded-md transition-colors"
//                                     aria-label="Share on Facebook"
//                                 >
//                                     <FaFacebook className="size-5 text-white" />
//                                 </a>
//                                 {/* Twitter */}
//                                 <a
//                                     href="https://x.com/intent/post?url=https%3A%2F%2Fvcga.uk%2Fhow-credentone-elevated-their-online-presence-with-our-wordpress-maintenance-services%2F&=&="
//                                     className="p-2.5 bg-black rounded-md transition-colors"
//                                     aria-label="Share on Twitter"
//                                 >
//                                     <FaTwitter className="size-5 text-white" />
//                                 </a>
//                                 {/* LinkedIn */}
//                                 <a
//                                     href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fvcga.uk%2Fhow-credentone-elevated-their-online-presence-with-our-wordpress-maintenance-services%2F"
//                                     className="p-2.5 bg-[#0077B5] rounded-md transition-colors"
//                                     aria-label="Share on LinkedIn"
//                                 >
//                                     <FaLinkedinIn className="size-5 text-white" />
//                                 </a>
//                                 {/* Email */}
//                                 <a
//                                     href="mailto:info@vcga.com"
//                                     className="p-2.5 bg-[#EA4335] rounded-md transition-colors"
//                                     aria-label="Share via Email"
//                                 >
//                                     <FaEnvelope className="size-5 text-white" />
//                                 </a>
//                             </div>
//                             <div className='border-t w-60 my-5'>

//                             </div>

//                             {/* Table-Contents */}
//                             <div className='flex space-x-8' onClick={toggleToc} style={{ cursor: "pointer" }}>
//                                 <h1 className='text-primary font-bold text-small uppercase'>Table of Contents</h1>
//                                 <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                             </div>
//                             <div
//                                 className={`space-y-2 py-5 transition-all duration-500 overflow-hidden ${isTocOpen ? 'max-h-[150px]' : 'max-h-0 '
//                                     }`}
//                             >
//                                 {tocLinks.map((link) => (
//                                     <h1 key={link.id} className='text-primary font-medium text-small cursor-pointer hover:text-blue-500' onClick={() => scrollToSection(link.id)}>{link.text}</h1>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="w-full flex lg:w-3/5 flex-col items-center" >
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="mb-6 w-full">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover" />
//                                 </div>
//                             )}

//                             {/* Text Content */}
//                             <div ref={blogContentRef} className=" text-content max-w-[800px] w-full text-primary font-medium">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>
//                         </div>

//                     </div>

//                 </article>
//             </div>
//             <div className='blog-reply'>
//                 <BlogReply />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;



// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook } from 'react-icons/fa';
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];

//                 setCommentCount(post.comment_count || 0);  // Initialize comment count

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
//                 };

//                 setBlog(transformedBlog);

//             }
//             finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map(heading => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     // Callback to update the comment count in BlogDetail
//     const updateCommentCount = useCallback((newCount) => {
//         setCommentCount(newCount);
//     }, []);

//     if (loading) {
//         return <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
//         </div>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop />
//             </div>
//             <div className="container mx-auto py-10">
//                 <article className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10">
//                         <div className="flex flex-col w-full lg:w-1/4 pr-6">
//                             {/* Share Section */}
//                             <div className="mb-4">
//                                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Share</h2>
//                                 <div className="flex space-x-2">
//                                     <a
//                                         href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                                         className="p-2 bg-[#3B5998] text-white rounded hover:bg-blue-700 transition-colors"
//                                         aria-label="Share on Facebook"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaFacebook className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
//                                         className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
//                                         aria-label="Share on Twitter"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaTwitter className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
//                                         className="p-2 bg-blue-700 text-white rounded hover:bg-blue-900 transition-colors"
//                                         aria-label="Share on LinkedIn"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaLinkedinIn className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
//                                         className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
//                                         aria-label="Share via Email"
//                                     >
//                                         <FaEnvelope className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className='border-t w-60 my-5'></div>

//                             {/* Table of Contents */}
//                             <div className="mb-4">
//                                 <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
//                                     <h2 className="text-lg font-semibold text-gray-800 uppercase">Table of Contents</h2>
//                                     <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                                 </div>
//                                 <nav
//                                     className={`overflow-hidden transition-all duration-500 ${isTocOpen ? 'max-h-96' : 'max-h-0'
//                                         }`}
//                                 >
//                                     <ul className="space-y-2 py-2">
//                                         {tocLinks.map((link) => (
//                                             <li key={link.id} className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(link.id)}>
//                                                 {link.text}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>

//                         <div className="w-full lg:w-3/4 flex flex-col items-center">
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="mb-6 w-full max-w-3xl">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover shadow-md" />
//                                 </div>
//                             )}

//                             {/* Text Content */}
//                             <div ref={blogContentRef} className="text-gray-700 max-w-3xl w-full prose prose-lg">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>
//                         </div>
//                     </div>
//                     <p className="text-sm text-gray-500 mt-4">Total Comments: {commentCount}</p>
//                 </article>
//             </div>
//             <div className='blog-reply'>
//                 <BlogReply updateCommentCount={updateCommentCount} initialCommentCount={commentCount} />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;


// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook } from 'react-icons/fa';
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);
//     const [commentCount, setCommentCount] = useState(0);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];

//                 setCommentCount(post.comment_count || 0);  // Initialize comment count

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
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
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map(heading => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     // Callback to update the comment count in BlogDetail
//     const updateCommentCount = useCallback((newCount) => {
//         setCommentCount(newCount);
//     }, []);

//     if (loading) {
//         return <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
//         </div>;
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop updateCommentCount={updateCommentCount} blogSlugProp={blogSlug} />
//             </div>
//             <div className="container mx-auto py-10">
//                 <article className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10">
//                         <div className="flex flex-col w-full lg:w-1/4 pr-6">
//                             {/* Share Section */}
//                             <div className="mb-4">
//                                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Share</h2>
//                                 <div className="flex space-x-2">
//                                     <a
//                                         href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                                         className="p-2 bg-[#3B5998] text-white rounded hover:bg-blue-700 transition-colors"
//                                         aria-label="Share on Facebook"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaFacebook className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
//                                         className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
//                                         aria-label="Share on Twitter"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaTwitter className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
//                                         className="p-2 bg-blue-700 text-white rounded hover:bg-blue-900 transition-colors"
//                                         aria-label="Share on LinkedIn"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaLinkedinIn className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
//                                         className="p-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
//                                         aria-label="Share via Email"
//                                     >
//                                         <FaEnvelope className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className='border-t w-60 my-5'></div>

//                             {/* Table of Contents */}
//                             <div className="mb-4">
//                                 <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
//                                     <h2 className="text-lg font-semibold text-gray-800 uppercase">Table of Contents</h2>
//                                     <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                                 </div>
//                                 <nav
//                                     className={`overflow-hidden transition-all duration-500 ${isTocOpen ? 'max-h-96' : 'max-h-0'
//                                         }`}
//                                 >
//                                     <ul className="space-y-2 py-2">
//                                         {tocLinks.map((link) => (
//                                             <li key={link.id} className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(link.id)}>
//                                                 {link.text}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>

//                         <div className="w-full lg:w-3/4 flex flex-col items-center">
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="mb-6 w-full max-w-3xl">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover shadow-md" />
//                                 </div>
//                             )}

//                             {/* Text Content */}
//                             <div ref={blogContentRef} className="text-gray-700 max-w-3xl w-full prose prose-lg">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             </div>
//             <div className='blog-reply'>
//                 <BlogReply updateCommentCount={updateCommentCount} />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook } from 'react-icons/fa';
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);
//     const [commentCount, setCommentCount] = useState(0); // Store comment count

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?id=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];
//                 const initialCommentCount = post.comment_count || 0; // Get initial comment count
//                 setCommentCount(initialCommentCount);

//                 const transformedBlog = {
//                     id: post.id,
//                     title: post.title.rendered,
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
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
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map(heading => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     const updateCommentCount = useCallback((newCount) => {
//         setCommentCount(newCount);
//     }, []);

//     if (loading) {
//         return <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
//         </div>;
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop updateCommentCount={updateCommentCount} blogSlugProp={blogSlug} />
//             </div>
//             <div className="container mx-auto py-10">
//                 <article className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10">
//                         <div className="flex flex-col w-full lg:w-1/4 pr-6">
//                             {/* Share Section */}
//                             <div className="mb-4">
//                                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Share</h2>
//                                 <div className="flex space-x-2">
//                                     <a
//                                         href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                                         className="p-2.5 bg-[#3B5998] text-white rounded-md transition-colors"
//                                         aria-label="Share on Facebook"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaFacebook className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
//                                         className="p-2.5 bg-black text-white rounded-md transition-colors"
//                                         aria-label="Share on Twitter"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaTwitter className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
//                                         className="p-2.5 bg-[#0077B5] text-white rounded-md transition-colors"
//                                         aria-label="Share on LinkedIn"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaLinkedinIn className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
//                                         className="p-2.5 bg-[#EA4335] text-white rounded-md transition-colors"
//                                         aria-label="Share via Email"
//                                     >
//                                         <FaEnvelope className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className='border-t w-60 my-5'></div>

//                             {/* Table of Contents */}
//                             <div className="mb-4">
//                                 <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
//                                     <h2 className="text-lg font-semibold text-gray-800 uppercase">Table of Contents</h2>
//                                     <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                                 </div>
//                                 <nav
//                                     className={`overflow-hidden transition-all duration-500 ${isTocOpen ? 'max-h-96' : 'max-h-0'
//                                         }`}
//                                 >
//                                     <ul className="space-y-2 py-2">
//                                         {tocLinks.map((link) => (
//                                             <li key={link.id} className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(link.id)}>
//                                                 {link.text}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>

//                         <div className="w-full lg:w-3/4 flex flex-col items-center">
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="mb-6 w-full max-w-3xl">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover shadow-md" />
//                                 </div>
//                             )}

//                             {/* Text Content */}
//                             <div ref={blogContentRef} className="text-gray-700 max-w-3xl w-full prose prose-lg">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             </div>
//             <div className='blog-reply'>
//                 <BlogReply updateCommentCount={updateCommentCount} initialCommentCount={commentCount} />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;


// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook } from 'react-icons/fa';
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);
//     const [commentCount, setCommentCount] = useState(0); // Store comment count

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];
//                 const initialCommentCount = post.comment_count || 0; // Get initial comment count
//                 setCommentCount(initialCommentCount);

//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHtml(post.title.rendered), // Decode HTML entities
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
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
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map(heading => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     const updateCommentCount = useCallback((newCount) => {
//         setCommentCount(newCount);
//     }, []);

//     if (loading) {
//         return <div className="flex justify-center items-center h-screen">
//             <div class="dot-spinner">
//                 <div class="dot-spinner__dot"></div>
//                 <div class="dot-spinner__dot"></div>
//                 <div class="dot-spinner__dot"></div>
//                 <div class="dot-spinner__dot"></div>
//                 <div class="dot-spinner__dot"></div>
//                 <div class="dot-spinner__dot"></div>
//                 <div class="dot-spinner__dot"></div>
//                 <div class="dot-spinner__dot"></div>
//             </div>
//         </div>;

//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop updateCommentCount={updateCommentCount} blogSlugProp={blogSlug} />
//             </div>
//             <div className="container mx-auto py-10">
//                 <article className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10">
//                         <div className="flex flex-col w-full lg:w-1/4 pr-6">
//                             {/* Share Section */}
//                             <div className="mb-4">
//                                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Share</h2>
//                                 <div className="flex space-x-2">
//                                     <a
//                                         href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                                         className="p-2.5 bg-[#3B5998] text-white rounded-md transition-colors"
//                                         aria-label="Share on Facebook"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaFacebook className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
//                                         className="p-2.5 bg-black text-white rounded-md transition-colors"
//                                         aria-label="Share on Twitter"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaTwitter className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
//                                         className="p-2.5 bg-[#0077B5] text-white rounded-md transition-colors"
//                                         aria-label="Share on LinkedIn"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaLinkedinIn className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
//                                         className="p-2.5 bg-[#EA4335] text-white rounded-md transition-colors"
//                                         aria-label="Share via Email"
//                                     >
//                                         <FaEnvelope className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className='border-t w-60 my-5'></div>

//                             {/* Table of Contents */}
//                             <div className="mb-4">
//                                 <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
//                                     <h2 className="text-lg font-semibold text-gray-800 uppercase">Table of Contents</h2>
//                                     <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                                 </div>
//                                 <nav
//                                     className={`overflow-hidden transition-all duration-500 ${isTocOpen ? 'max-h-lvh' : 'max-h-0'
//                                         }`}
//                                 >
//                                     <ul className="space-y-2 py-2">
//                                         {tocLinks.map((link) => (
//                                             <li key={link.id} className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(link.id)}>
//                                                 {link.text}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>

//                         <div className="w-full lg:w-3/4 flex flex-col items-center">
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="mb-6 w-full max-w-3xl">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover shadow-md" />
//                                 </div>
//                             )}

//                             {/* Text Content */}
//                             <div ref={blogContentRef} className="text-gray-700 max-w-3xl w-full overflow-hidden">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             </div>
//             <div className='blog-reply'>
//                 <BlogReply updateCommentCount={updateCommentCount} initialCommentCount={commentCount} />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook } from 'react-icons/fa';
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// // Utility function to introduce a delay
// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);
//     const [commentCount, setCommentCount] = useState(0); // Store comment count

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 // await delay(1500);

//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];
//                 const initialCommentCount = post.comment_count || 0; // Get initial comment count
//                 setCommentCount(initialCommentCount);

//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHtml(post.title.rendered), // Decode HTML entities
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
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
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map(heading => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     const updateCommentCount = useCallback((newCount) => {
//         setCommentCount(newCount);
//     }, []);

//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div class="spinner"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop updateCommentCount={updateCommentCount} blogSlugProp={blogSlug} />
//             </div>
//             <div className="container mx-auto py-10">
//                 <article className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10">
//                         <div className="flex flex-col w-full lg:w-1/3 pr-6">
//                             {/* Share Section */}
//                             <div className="mb-4">
//                                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Share</h2>
//                                 <div className="flex space-x-2">
//                                     <a
//                                         href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                                         className="p-2.5 bg-[#3B5998] text-white rounded-md transition-colors"
//                                         aria-label="Share on Facebook"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaFacebook className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
//                                         className="p-2.5 bg-black text-white rounded-md transition-colors"
//                                         aria-label="Share on Twitter"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaTwitter className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
//                                         className="p-2.5 bg-[#0077B5] text-white rounded-md transition-colors"
//                                         aria-label="Share on LinkedIn"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaLinkedinIn className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
//                                         className="p-2.5 bg-[#EA4335] text-white rounded-md transition-colors"
//                                         aria-label="Share via Email"
//                                     >
//                                         <FaEnvelope className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className='border-t border-gray-300 w-full my-5'></div>

//                             {/* Table of Contents */}
//                             <div className="mb-4">
//                                 <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
//                                     <h2 className="text-base font-semibold text-light-blue">Table of Contents</h2>
//                                     <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                                 </div>
//                                 <nav
//                                     className={`overflow-hidden transition-all duration-500 ${isTocOpen ? 'max-h-lvh' : 'max-h-0'
//                                         }`}
//                                 >
//                                     <ul className="space-y-2 py-2">
//                                         {tocLinks.map((link) => (
//                                             <li key={link.id} className="cursor-pointer text-small" onClick={() => scrollToSection(link.id)}>
//                                                 {link.text}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>

//                         <div className="w-full lg:w-2/3 flex flex-col items-center">
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="mb-6 w-full max-w-3xl">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover shadow-md" />
//                                 </div>
//                             )}

//                             {/* Text Content */}
//                             <div ref={blogContentRef} className="text-gray-700 max-w-3xl w-full overflow-hidden">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             </div>
//             <div className='blog-reply'>
//                 <BlogReply updateCommentCount={updateCommentCount} initialCommentCount={commentCount} />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook } from 'react-icons/fa';
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// // Utility function to introduce a delay
// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);
//     const [commentCount, setCommentCount] = useState(0); // Store comment count

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 // await delay(1500);

//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];
//                 const initialCommentCount = post.comment_count || 0; // Get initial comment count
//                 setCommentCount(initialCommentCount);

//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHtml(post.title.rendered), // Decode HTML entities
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
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
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map((heading, index) => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent,
//                 number: index + 1, // Add a number for each link
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     const updateCommentCount = useCallback((newCount) => {
//         setCommentCount(newCount);
//     }, []);

//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div class="spinner"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop updateCommentCount={updateCommentCount} blogSlugProp={blogSlug} />
//             </div>
//             <div className="container mx-auto py-10">
//                 <article className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10">
//                         <div className="flex flex-col w-full lg:w-1/3 pr-6">
//                             {/* Share Section */}
//                             <div className="mb-4">
//                                 <h2 className="text-lg font-semibold text-gray-800 mb-2">Share</h2>
//                                 <div className="flex space-x-2">
//                                     <a
//                                         href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                                         className="p-2.5 bg-[#3B5998] text-white rounded-md transition-colors"
//                                         aria-label="Share on Facebook"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaFacebook className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
//                                         className="p-2.5 bg-black text-white rounded-md transition-colors"
//                                         aria-label="Share on Twitter"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaTwitter className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
//                                         className="p-2.5 bg-[#0077B5] text-white rounded-md transition-colors"
//                                         aria-label="Share on LinkedIn"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaLinkedinIn className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
//                                         className="p-2.5 bg-[#EA4335] text-white rounded-md transition-colors"
//                                         aria-label="Share via Email"
//                                     >
//                                         <FaEnvelope className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className='border-t border-gray-300 w-full my-5'></div>

//                             {/* Table of Contents */}
//                             <div className="mb-4">
//                                 <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
//                                     <h2 className="text-base font-semibold text-light-blue">Table of Contents</h2>
//                                     <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                                 </div>
//                                 <nav
//                                     className={`overflow-hidden transition-all duration-500 ${isTocOpen ? 'max-h-60 overflow-y-auto custom-scroll' : 'max-h-0'
//                                         }`}
//                                 >
//                                     {/* <ul className="space-y-4 py-2">
//                                         {tocLinks.map((link) => (
//                                             <li key={link.id} className="cursor-pointer text-small flex gap-2.5 items-center" onClick={() => scrollToSection(link.id)}>
//                                                 <span className='text-white rounded-full text-xxs   flex font-bold items-center justify-center size-6 bg-light-blue '>
//                                                     {link.number}
//                                                 </span>
//                                                 {link.text}  
//                                             </li>
//                                         ))}
//                                     </ul> */}

//                                     <ul className="space-y-4 py-2 ">
//                                         {tocLinks.map((link) => (
//                                             <li
//                                                 key={link.id}
//                                                 className="cursor-pointer relative  text-small flex gap-2.5 items-center hover:text-light-blue pb-2"
//                                                 onClick={() => scrollToSection(link.id)}
//                                             >
//                                                 <div className='text-white rounded-full text-xxs flex font-bold items-center justify-center size-6 bg-light-blue '>
//                                                     {link.number}
//                                                 </div>
//                                                 <div to="/case-studies" className="text-primary inline-block text-small font-semibold  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-light-blue after:transition-all after:duration-500 hover:after:w-full">
//                                                     {link.text}
//                                                 </div>
//                                             </li>
//                                         ))}
//                                     </ul>

//                                 </nav>
//                             </div>
//                         </div>

//                         <div className="w-full lg:w-2/3 flex flex-col items-center">
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="mb-6 w-full max-w-3xl">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover shadow-md" />
//                                 </div>
//                             )}

//                             {/* Text Content */}
//                             <div ref={blogContentRef} className="text-gray-700 max-w-3xl w-full overflow-hidden">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             </div>
//             <div className='blog-reply'>
//                 <BlogReply updateCommentCount={updateCommentCount} initialCommentCount={commentCount} />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;


// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BlogTop from './BlogTop';
// import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
// import { IoIosArrowUp } from "react-icons/io";
// import { slugify } from '../../../utils';
// import BlogReply from './BlogReply';
// import "./blog.module.css"; // import blog.module.css 

// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// // Utility function to introduce a delay
// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const BlogDetail = () => {
//     const { blogSlug } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isTocOpen, setIsTocOpen] = useState(true);
//     const navigate = useNavigate();
//     const blogContentRef = useRef(null);
//     const [tocLinks, setTocLinks] = useState([]);
//     const [commentCount, setCommentCount] = useState(0); // Store comment count

//     useEffect(() => {
//         const fetchBlog = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

//                 if (response.status !== 200) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 if (!response.data || response.data.length === 0) {
//                     setError("Post not found.");
//                     return;
//                 }

//                 const post = response.data[0];
//                 const initialCommentCount = post.comment_count || 0; // Get initial comment count
//                 setCommentCount(initialCommentCount);

//                 const transformedBlog = {
//                     id: post.id,
//                     title: decodeHtml(post.title.rendered), // Decode HTML entities
//                     content: post.content.rendered,
//                     author: post._embedded?.author?.[0]?.name || 'Anonymous',
//                     date: new Date(post.date).toLocaleDateString(),
//                     readTime: '5 min read',
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                     image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
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
//     }, [blogSlug, navigate]);

//     useEffect(() => {
//         if (blog && blogContentRef.current) {
//             const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
//             const newTocLinks = headings.map((heading, index) => ({
//                 id: slugify(heading.textContent),
//                 text: heading.textContent,
//                 number: index + 1, // Add the number
//             }));

//             setTocLinks(newTocLinks);
//             addIdsToHeadings();
//         }

//     }, [blog])

//     const toggleToc = () => {
//         setIsTocOpen(!isTocOpen);
//     };

//     const scrollToSection = (id) => {
//         const element = blogContentRef.current.querySelector(`#${id}`);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
//         }
//     };

//     const addIdsToHeadings = () => {
//         if (!blog || !blogContentRef.current) return;

//         const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
//         headings.forEach((heading) => {
//             const slug = slugify(heading.textContent);
//             heading.setAttribute('id', slug);
//         });
//     };

//     const updateCommentCount = useCallback((newCount) => {
//         setCommentCount(newCount);
//     }, []);

//     if (loading) {
//         return (
//             <div className='flex justify-center items-center h-screen'>
//                 <div class="spinner"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="text-red-500 text-center py-4">Error: {error}</div>;
//     }

//     return (
//         <>
//             <div className='Blog-Main'>
//                 <BlogTop updateCommentCount={updateCommentCount} blogSlugProp={blogSlug} />
//             </div>
//             <div className="container mx-auto py-10">
//                 <div className='my-12'>
//                     <div className="flex flex-col lg:flex-row items-start border-b pb-10 gap-10">

//                         {/* Leftside Content */}
//                         <div className="flex flex-col w-full lg:w-1/4 md:sticky top-20 h-full">
//                             {/* Share Section */}
//                             <div className="mb-l4 flex flex-col md:items-start items-center">
//                                 <h2 className="text-base font-semibold text-light-blue mb-4">Share</h2>
//                                 <div className="flex space-x-2.5">
//                                     <a
//                                         href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
//                                         className="p-2.5 bg-[#3B5998] text-white rounded-md transition-colors"
//                                         aria-label="Share on Facebook"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaFacebook className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
//                                         className="p-2.5 bg-[#1DA1F2] text-white rounded-md transition-colors"
//                                         aria-label="Share on Twitter"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaTwitter className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
//                                         className="p-2.5 bg-[#0077B5] text-white rounded-md transition-colors"
//                                         aria-label="Share on LinkedIn"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <FaLinkedinIn className="w-5 h-5" />
//                                     </a>
//                                     <a
//                                         href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
//                                         className="p-2.5 bg-[#DD4B39] text-white rounded-md transition-colors"
//                                         aria-label="Share via Email"
//                                     >
//                                         <FaEnvelope className="w-5 h-5" />
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className='border-t border-gray-300 w-full my-5'></div>

//                             {/* Table of Contents */}
//                             <div className="mb-4">
//                                 <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
//                                     <h2 className="text-base font-semibold text-light-blue">Table of Contents</h2>
//                                     <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
//                                 </div>
//                                 <nav
//                                     className={`overflow-hidden transition-all  duration-500 ${isTocOpen ? 'max-h-80 overflow-y-auto custom-scroll' : 'max-h-0'
//                                         }`}
//                                 >
//                                     <ul className="space-y-2 lg:space-y-3 py-2">
//                                         {tocLinks.map((link) => (
//                                             <li
//                                                 key={link.id}
//                                                 className="cursor-pointer relative text-small flex gap-2.5 items-center pb-2"
//                                                 onClick={() => scrollToSection(link.id)}
//                                             >
//                                                 <div className='text-white rounded-full text-xxs flex lg:font-bold font-medium items-center justify-center size-5 lg:size-6 bg-light-blue '>
//                                                     {link.number}
//                                                 </div>
//                                                 <div className="text-primary inline-block  text-xs lg:text-small font-semibold relative overflow-hidden group" >
//                                                     <span className="absolute bottom-0 left-0  w-0 h-[2px] bg-light-blue transition-all duration-500 group-hover:w-full"></span>
//                                                     {link.text.split(' ').slice(0, 4).join(' ') + '...'}
//                                                 </div>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             </div>

//                         </div>

//                         {/* Rightside content */}
//                         <div className="w-full lg:w-3/4 flex flex-col">
//                             {/* Image */}
//                             {blog.image && (
//                                 <div className="w-full max-w-2xl blog_content">
//                                     <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover" />
//                                 </div>
//                             )}

//                             <div ref={blogContentRef} className="text-primary font-normal max-w-2xl w-full overflow-hidden blog_content">
//                                 <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
//                             </div>

//                         </div>
//                     </div>
//                 </div >
//             </div >
//             <div className='blog-reply'>
//                 <BlogReply updateCommentCount={updateCommentCount} initialCommentCount={commentCount} />
//             </div>
//         </>
//     );
// };

// export default BlogDetail;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogTop from './BlogTop';
import { FaTwitter, FaLinkedinIn, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosArrowUp } from "react-icons/io";
import { slugify } from '../../../utils';
import BlogReply from './BlogReply';
import styles from "./blog.module.css"; // import blog.module.css 

const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

// Utility function to introduce a delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

const BlogDetail = () => {
    const { blogSlug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isTocOpen, setIsTocOpen] = useState(true);
    const navigate = useNavigate();
    const blogContentRef = useRef(null);
    const [tocLinks, setTocLinks] = useState([]);
    const [commentCount, setCommentCount] = useState(0); // Store comment count

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            setError(null);
            try {
                // Introduce a 1-second delay *before* the API call
                await delay(1500);

                const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?slug=${blogSlug}&_embed`);

                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                if (!response.data || response.data.length === 0) {
                    setError("Post not found.");
                    return;
                }

                const post = response.data[0];
                const initialCommentCount = post.comment_count || 0; // Get initial comment count
                setCommentCount(initialCommentCount);

                const transformedBlog = {
                    id: post.id,
                    title: decodeHtml(post.title.rendered), // Decode HTML entities
                    content: post.content.rendered,
                    author: post._embedded?.author?.[0]?.name || 'Anonymous',
                    date: new Date(post.date).toLocaleDateString(),
                    readTime: '5 min read',
                    category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
                    image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
                };

                setBlog(transformedBlog);

            } catch (err) {
                console.error("Error fetching blog data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogSlug, navigate]);

    useEffect(() => {
        if (blog && blogContentRef.current) {
            const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
            const newTocLinks = headings.map((heading, index) => ({
                id: slugify(heading.textContent),
                text: heading.textContent,
                number: index + 1, // Add the number
            }));

            setTocLinks(newTocLinks);
            addIdsToHeadings();
        }

    }, [blog])

    const toggleToc = () => {
        setIsTocOpen(!isTocOpen);
    };

    const scrollToSection = (id) => {
        const element = blogContentRef.current.querySelector(`#${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });  // Smooth scrolling
        }
    };

    const addIdsToHeadings = () => {
        if (!blog || !blogContentRef.current) return;

        const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
        headings.forEach((heading) => {
            const slug = slugify(heading.textContent);
            heading.setAttribute('id', slug);
        });
    };

    const updateCommentCount = useCallback((newCount) => {
        setCommentCount(newCount);
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div class="spinner"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">Error: {error}</div>;
    }

    return (
        <>
            <div className='Blog-Main'>
                <BlogTop updateCommentCount={updateCommentCount} blogSlugProp={blogSlug} />
            </div>
            <div className="container mx-auto py-10">
                <div className='my-12'>
                    <div className="flex flex-col lg:flex-row items-start border-b pb-10 gap-10">

                        {/* Leftside Content */}
                        <div className="flex flex-col w-full lg:w-1/4 md:sticky top-20 h-full">
                            {/* Share Section */}
                            <div className="mb-l4 flex flex-col md:items-start items-center">
                                <h2 className="text-base font-semibold text-light-blue mb-4">Share</h2>
                                <div className="flex space-x-2.5">
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                        className="p-2.5 bg-[#3B5998] text-white rounded-md transition-colors"
                                        aria-label="Share on Facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaFacebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
                                        className="p-2.5 bg-[#1DA1F2] text-white rounded-md transition-colors"
                                        aria-label="Share on Twitter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaTwitter className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${blog.title}`}
                                        className="p-2.5 bg-[#0077B5] text-white rounded-md transition-colors"
                                        aria-label="Share on LinkedIn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedinIn className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={`mailto:?subject=${blog.title}&body=Check out this article: ${window.location.href}`}
                                        className="p-2.5 bg-[#DD4B39] text-white rounded-md transition-colors"
                                        aria-label="Share via Email"
                                    >
                                        <FaEnvelope className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className='border-t border-gray-300 w-full my-5'></div>

                            {/* Table of Contents */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleToc}>
                                    <h2 className="text-base font-semibold text-light-blue">Table of Contents</h2>
                                    <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
                                </div>
                                <nav
                                    className={`overflow-hidden transition-all  duration-500 ${isTocOpen ? 'max-h-80 overflow-y-auto custom-scroll' : 'max-h-0'
                                        }`}
                                >
                                    <ul className="space-y-2 py-2">
                                        {tocLinks.map((link) => (
                                            <li
                                                key={link.id}
                                                className="cursor-pointer relative text-small flex gap-2.5 items-center pb-2"
                                                onClick={() => scrollToSection(link.id)}
                                            >
                                                <div className='text-white rounded-full text-xxs flex lg:font-bold font-medium items-center justify-center size-5 lg:size-6 bg-light-blue '>
                                                    {link.number}
                                                </div>
                                                <div className="text-primary inline-block  text-xs lg:text-small font-semibold relative overflow-hidden group" >
                                                    <span className="absolute bottom-0 left-0  w-0 h-[2px] bg-light-blue transition-all duration-500 group-hover:w-full"></span>
                                                    {link.text.split(' ').slice(0, 4).join(' ') + '...'}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>

                        {/* Rightside content */}
                        <div className="w-full lg:w-3/4 flex flex-col">
                            {/* Image */}
                            {blog.image && (
                                <div className="w-full max-w-2xl">
                                    <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover rounded-lg mb-4" />
                                </div>
                            )}

                            <div ref={blogContentRef} className="text-primary font-normal max-w-2xl w-full overflow-hidden">
                                <div className={styles.blog_content} dangerouslySetInnerHTML={{ __html: blog.content }} />
                            </div>

                        </div>
                    </div>
                </div >
            </div >
            <div className='blog-reply'>
                <BlogReply updateCommentCount={updateCommentCount} initialCommentCount={commentCount} />
            </div>
        </>
    );
};

export default BlogDetail;