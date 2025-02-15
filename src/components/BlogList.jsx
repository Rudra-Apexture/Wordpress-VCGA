// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { slugify } from '../../utils';
// import { FaUser } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";


// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const apiUrl = 'https://vcga.uk/wp-json/wp/v2/posts?_embed';  // Store URL in variable

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           // Log the error to the console.  This is crucial for debugging
//           console.error(`HTTP error! status: ${response.status}`);
//           console.error(`Response body: ${await response.text()}`); // Log the body!
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Transform the WordPress data to match your component's structure
//         const transformedBlogs = data.map(post => {
//           let imageUrl = 'placeholder_image_url';
//           // Check if featured_media exists and is not 0
//           if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//               const featuredMedia = post._embedded['wp:featuredmedia'];
//               // Check if it's an array and has at least one item
//               if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                 imageUrl = featuredMedia[0].source_url
//               } else if (featuredMedia.source_url) {
//                 // Check if it's an object and has the source_url property
//                 imageUrl = featuredMedia.source_url
//               }
//             }
//           }

//           return {
//             id: post.id,
//             title: post.title.rendered,
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//             image: imageUrl,
//           }

//         });
//         setBlogs(transformedBlogs);


//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!blogs || blogs.length === 0) {
//     return <p>No blogs found.</p>;
//   }

//   return (
//     <section className='BLog-List md:pt-10 pt-5'>
//       <div className="container mx-auto">
//         <div className="flex flex-wrap lg:flex-nowrap gap-10">
//           {/* Left Side - Featured Blog */}
//           <div className="w-full lg:w-3/5 relative rounded-lg overflow-hidden">
//             {blogs[0] && (
//               <div className="bg-white">
//                 <Link to={`/blog/${blogs[0].slug}`}>
//                   <img
//                     src={blogs[0].image}
//                     alt="Featured Blog"
//                     className="rounded-xl object-cover w-full h-96 pb-2.5"  // Add object-cover and fixed height
//                   />
//                 </Link>
//                 <div className="space-y-2.5">
//                   <Link to={`/category/${slugify(blogs[0].category)}`} className="text-medium text-light-blue font-semibold capitalize">{blogs[0].category}</Link>
//                   <Link to={`/blog/ ${blogs[0].slug}`} className="hover:underline">
//                     <h2 className="lg:text-base font-semibold text-primary hover:underline mt-2 underline-offset-1 hover:decoration-primary">
//                       {blogs[0].title}
//                     </h2>
//                   </Link>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                     <Link to={`/author/${slugify(blogs[0].author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                       <FaUser />
//                       {blogs[0].author}
//                       <span>•</span>
//                     </Link>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors ease-in' to={`/date/${new Date(blogs[0].date).getFullYear()}/${String(new Date(blogs[0].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[0].date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blogs[0].date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center gap-1">
//                       <p>{blogs[0].readTime}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Side - Four Blogs */}
//           <div className="w-full lg:w-2/5 flex flex-col gap-6">
//             {blogs.slice(1, 4).map((blog, index) => (
//               <div key={index} className="bg-white flex items-start space-x-3  rounded-lg transition-shadow">
//                 {/* Images */}
//                 <div className="">
//                   <Link to={`/blog/${blog.slug}`}>
//                     <img
//                       alt="Blog thumbnail"
//                       src={blog.image}
//                       className="rounded-lg object-cover1 h-40 md:h-28 pr-2.5 md:pr-0"
//                     />
//                   </Link>
//                 </div>

//                 {/* Text Content */}
//                 <div className="space-y-2">
//                   <div className='text-light-blue'>
//                     <Link to={`/category/${slugify(blog.category)}`} className="text-small font-medium">{blog.category}</Link>
//                   </div>
//                   <div className='text-primary'>
//                     <Link to={`/blog/${blog.slug}`} className='hover:underline'>
//                       <h3 className="font-medium max-w-md lg:text-small text-sm hover:underline hover:decoration-2 leading-0 hover:decoration-primary">
//                         {blog.title}
//                       </h3>
//                     </Link>
//                   </div>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs lg:text-nowrap text-wrap">
//                     <Link to={`/author/${slugify(blog.author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                       <FaUser />
//                       {blog.author}
//                     </Link>
//                     <span>•</span>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blog.date).getFullYear()}/${String(new Date(blog.date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blog.date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blog.date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center">
//                       <p>{blog.readTime}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section >
//   );
// };

// export default BlogList;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { slugify } from '../../utils';
// import { FaUser } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaComment } from "react-icons/fa";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const apiUrl = 'https://vcga.uk/wp-json/wp/v2/posts?_embed';  // Store URL in variable

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           // Log the error to the console.  This is crucial for debugging
//           console.error(`HTTP error! status: ${response.status}`);
//           console.error(`Response body: ${await response.text()}`); // Log the body!
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         // Use Promise.all to fetch comments concurrently
//         const transformedBlogs = await Promise.all(data.map(async post => {
//           let imageUrl = 'placeholder_image_url';
//           if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//               const featuredMedia = post._embedded['wp:featuredmedia'];
//               if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                 imageUrl = featuredMedia[0].source_url
//               } else if (featuredMedia.source_url) {
//                 imageUrl = featuredMedia.source_url
//               }
//             }
//           }

//           // Fetch comment count
//           let commentCount = 0;
//           try {
//             const commentsUrl = `https://vcga.uk/wp-json/wp/v2/comments?post=${post.id}`;
//             const commentsResponse = await fetch(commentsUrl);
//             if (commentsResponse.ok) {
//               const commentsData = await commentsResponse.json();
//               commentCount = commentsData.length;
//             } else {
//               console.warn(`Failed to fetch comments for post ${post.id}`);
//             }
//           } catch (commentError) {
//             console.error(`Error fetching comments for post ${post.id}:`, commentError);
//           }

//           return {
//             id: post.id,
//             title: post.title.rendered,
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             commentCount: commentCount,
//             image: imageUrl,
//           };

//         }));
//         setBlogs(transformedBlogs);


//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!blogs || blogs.length === 0) {
//     return <p>No blogs found.</p>;
//   }

//   return (
//     <section className='BLog-List md:pt-10 pt-5'>
//       <div className="container mx-auto">
//         <div className="flex flex-wrap lg:flex-nowrap gap-10">
//           {/* Left Side - Featured Blog */}
//           <div className="w-full lg:w-3/5 relative rounded-lg overflow-hidden">
//             {blogs[0] && (
//               <div className="bg-white">
//                 <Link to={`/blog/${blogs[0].slug}`}>
//                   <img
//                     src={blogs[0].image}
//                     alt="Featured Blog"
//                     className="rounded-xl object-cover w-full h-96 pb-2.5"  // Add object-cover and fixed height
//                   />
//                 </Link>
//                 <div className="space-y-2.5">
//                   <Link to={`/category/${slugify(blogs[0].category)}`} className="text-xs bg-light-blue rounded-md px-2.5 py-0.5 inline-block text-white font-bold capitalize">{blogs[0].category}</Link>
//                   <Link to={`/blog/ ${blogs[0].slug}`} className="hover:underline">
//                     <h2 className="lg:text-base font-semibold text-primary hover:underline mt-2 underline-offset-1 hover:decoration-primary">
//                       {blogs[0].title}
//                     </h2>
//                   </Link>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                     <Link to={`/author/${slugify(blogs[0].author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                       <FaUser />
//                       {blogs[0].author}
//                     </Link>
//                     <span>•</span>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blogs[0].date).getFullYear()}/${String(new Date(blogs[0].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[0].date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blogs[0].date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center gap-1">
//                       <FaComment />
//                       <p>{blogs[0].commentCount}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Side - Four Blogs */}
//           <div className="w-full lg:w-2/5 flex flex-col gap-6">
//             {blogs.slice(1, 4).map((blog, index) => (
//               <div key={index} className="bg-white flex items-start space-x-3  rounded-lg transition-shadow">
//                 {/* Images */}
//                 <div className="">
//                   <Link to={`/blog/${blog.slug}`}>
//                     <img
//                       alt="Blog thumbnail"
//                       src={blog.image}
//                       className="rounded-lg object-cover1 h-40 md:h-28 pr-2.5 md:pr-0"
//                     />
//                   </Link>
//                 </div>

//                 {/* Text Content */}
//                 <div className="space-y-2">
//                   <div className='text-white inline-block px-2.5 py-0.5 rounded-md bg-light-blue'>
//                     <Link to={`/category/${slugify(blog.category)}`} className="text-xs font-bold capitalize">{blog.category}</Link>
//                   </div>
//                   <div className='text-primary'>
//                     <Link to={`/blog/${blog.slug}`} className='hover:underline'>
//                       <h3 className="font-medium max-w-md lg:text-small text-sm hover:underline hover:decoration-2 leading-0 hover:decoration-primary">
//                         {blog.title}
//                       </h3>
//                     </Link>
//                   </div>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs lg:text-nowrap text-wrap">
//                     <Link to={`/author/${slugify(blog.author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                       <FaUser />
//                       {blog.author}
//                     </Link>
//                     <span>•</span>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blog.date).getFullYear()}/${String(new Date(blogs[index].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[index].date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blog.date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center gap-1">
//                       <FaComment />
//                       <p>{blog.commentCount}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section >
//   );
// };

// export default BlogList;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { slugify } from '../../utils';
// import { FaUser } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaComment } from "react-icons/fa";

// const decodeHtml = (html) => {
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const apiUrl = 'https://vcga.uk/wp-json/wp/v2/posts?_embed';

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           console.error(`HTTP error! status: ${response.status}`);
//           console.error(`Response body: ${await response.text()}`);
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         const transformedBlogs = await Promise.all(data.map(async post => {
//           let imageUrl = 'placeholder_image_url';
//           if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//               const featuredMedia = post._embedded['wp:featuredmedia'];
//               if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                 imageUrl = featuredMedia[0].source_url
//               } else if (featuredMedia.source_url) {
//                 imageUrl = featuredMedia.source_url
//               }
//             }
//           }

//           let commentCount = 0;
//           try {
//             const commentsUrl = `https://vcga.uk/wp-json/wp/v2/comments?post=${post.id}`;
//             const commentsResponse = await fetch(commentsUrl);
//             if (commentsResponse.ok) {
//               const commentsData = await commentsResponse.json();
//               commentCount = commentsData.length;
//             } else {
//               console.warn(`Failed to fetch comments for post ${post.id}`);
//             }
//           } catch (commentError) {
//             console.error(`Error fetching comments for post ${post.id}:`, commentError);
//           }

//           return {
//             id: post.id,
//             title: decodeHtml(post.title.rendered), // Decode the title here!
//             content: post.content.rendered,
//             slug: slugify(post.title.rendered),
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//             commentCount: commentCount,
//             image: imageUrl,
//           };

//         }));
//         setBlogs(transformedBlogs);


//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!blogs || blogs.length === 0) {
//     return <p>No blogs found.</p>;
//   }

//   return (
//     <section className='BLog-List md:pt-10 pt-5'>
//       <div className="container mx-auto">
//         <div className="flex flex-wrap lg:flex-nowrap gap-10">
//           {/* Left Side - Featured Blog */}
//           <div className="w-full lg:w-3/5 relative rounded-lg overflow-hidden">
//             {blogs[0] && (
//               <div className="bg-white">
//                 <Link to={`/blog/${blogs[0].slug}`}>
//                   <img
//                     src={blogs[0].image}
//                     alt="Featured Blog"
//                     className="rounded-xl object-cover w-full h-96 pb-2.5"  // Add object-cover and fixed height
//                   />
//                 </Link>
//                 <div className="space-y-2.5">
//                   <Link to={`/category/${slugify(blogs[0].category)}`} className="text-xs bg-light-blue rounded-md px-2.5 py-0.5 inline-block text-white font-bold capitalize">{blogs[0].category}</Link>
//                   <Link to={`/blog/ ${blogs[0].slug}`} className="hover:underline">
//                     <h2 className="lg:text-base font-semibold text-primary hover:underline mt-2 underline-offset-1 hover:decoration-primary">
//                       {blogs[0].title}
//                     </h2>
//                   </Link>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                     <Link to={`/author/${slugify(blogs[0].author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                       <FaUser />
//                       {blogs[0].author}
//                     </Link>
//                     <span>•</span>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blogs[0].date).getFullYear()}/${String(new Date(blogs[0].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[0].date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blogs[0].date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center gap-1">
//                       <FaComment />
//                       <p>{blogs[0].commentCount}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Side - Four Blogs */}
//           <div className="w-full lg:w-2/5 flex flex-col gap-6">
//             {blogs.slice(1, 4).map((blog, index) => (
//               <div key={index} className="bg-white flex items-start space-x-3  rounded-lg transition-shadow">
//                 {/* Images */}
//                 <div className="">
//                   <Link to={`/blog/${blog.slug}`}>
//                     <img
//                       alt="Blog thumbnail"
//                       src={blog.image}
//                       className="rounded-lg object-cover1 h-40 md:h-28 pr-2.5 md:pr-0"
//                     />
//                   </Link>
//                 </div>

//                 {/* Text Content */}
//                 <div className="space-y-2">
//                   <div className='text-white inline-block px-2.5 py-0.5 rounded-md bg-light-blue'>
//                     <Link to={`/category/${slugify(blog.category)}`} className="text-xs font-bold capitalize">{blog.category}</Link>
//                   </div>
//                   <div className='text-primary'>
//                     <Link to={`/blog/${blog.slug}`} className='hover:underline'>
//                       <h3 className="font-medium max-w-md lg:text-small text-sm hover:underline hover:decoration-2 leading-0 hover:decoration-primary">
//                         {blog.title}
//                       </h3>
//                     </Link>
//                   </div>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs lg:text-nowrap text-wrap">
//                     <Link to={`/author/${slugify(blog.author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                       <FaUser />
//                       {blog.author}
//                     </Link>
//                     <span>•</span>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blogs[index].date).getFullYear()}/${String(new Date(blogs[index].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[index].date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blog.date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center">
//                       <FaComment />
//                       <p>{blog.commentCount}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section >
//   );
// };

// export default BlogList;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { slugify } from '../../utils';
// import { FaUser } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaComment } from "react-icons/fa";

// const decodeHtml = (html) => {
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const apiUrl = (`https://vcga.uk/wp-json/wp/v2/posts?_embed`);

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           console.error(`HTTP error! status: ${response.status}`);
//           console.error(`Response body: ${await response.text()}`);
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         const transformedBlogs = await Promise.all(data.map(async post => {
//           let imageUrl = 'placeholder_image_url';
//           if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//               const featuredMedia = post._embedded['wp:featuredmedia'];
//               if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                 imageUrl = featuredMedia[0].source_url
//               } else if (featuredMedia.source_url) {
//                 imageUrl = featuredMedia.source_url
//               }
//             }
//           }

//           let commentCount = 0;
//           try {
//             const commentsUrl = `https://vcga.uk/wp-json/wp/v2/comments?post=${post.id}`;
//             const commentsResponse = await fetch(commentsUrl);
//             if (commentsResponse.ok) {
//               const commentsData = await commentsResponse.json();
//               commentCount = commentsData.length;
//             } else {
//               console.warn(`Failed to fetch comments for post ${post.id}`);
//             }
//           } catch (commentError) {
//             console.error(`Error fetching comments for post ${post.id}:`, commentError);
//           }

//           // Decode the category name here
//           const category = post._embedded?.['wp:term']?.[0]?.[0]?.name
//             ? decodeHtml(post._embedded['wp:term'][0][0].name)
//             : 'Uncategorized';

//           return {
//             id: post.id,
//             title: decodeHtml(post.title.rendered),
//             content: post.content.rendered,
//             slug: post.slug,
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: category,
//             commentCount: commentCount,
//             image: imageUrl,
//           };
//         }));
//         setBlogs(transformedBlogs);

//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);


//   return (
//     <section className='BLog-List md:pt-10 pt-5'>
//       <div className="container mx-auto">
//         <div className="flex flex-wrap lg:flex-nowrap gap-6">
//           {/* Left Side - Featured Blog */}
//           <div className="w-full lg:w-3/5 relative overflow-hidden">
//             {blogs[0] && (
//               <div className="bg-white">
//                 <Link to={`/blog/${blogs[0].slug}`}>
//                   <img
//                     src={blogs[0].image}
//                     alt="Featured Blog"
//                     className="rounded-xl object-cover w-full pb-2.5"
//                   />
//                 </Link>
//                 <div className="space-y-2.5">
//                   <Link to={`/category/${slugify(blogs[0].category)}`} className="text-xs bg-light-blue rounded-full px-2.5 py-0.5 inline-block text-white font-normal">{blogs[0].category}</Link>
//                   <Link to={`/blog/${blogs[0].slug}`} className="hover:underline">
//                     <h2 className="lg:text-base font-medium text-primary hover:text-light-blue transition-colors ease-in duration-150 hover:underline mt-2 underline-offset-1 hover:decoration-light-blue">
//                       {blogs[0].title}
//                     </h2>
//                   </Link>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                     <Link to={`/author/${slugify(blogs[0].author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-200 ease-in">
//                       <FaUser />
//                       {blogs[0].author}
//                     </Link>
//                     <span>•</span>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blogs[0].date).getFullYear()}/${String(new Date(blogs[0].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[0].date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blogs[0].date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center gap-1">
//                       <FaComment />
//                       <p>{blogs[0].commentCount}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Side - Four Blogs */}
//           <div className="w-full lg:w-2/5 flex flex-col gap-4">
//             {blogs.slice(1, 5).map((blog, index) => (
//               <div key={index} className="bg-white flex items-start space-x-3 rounded-lg transition-shadow">
//                 {/* Images */}
//                 <div className="">
//                   <Link to={`/blog/${blog.slug}`}>
//                     <img
//                       alt="Blog thumbnail"
//                       src={blog.image}
//                       className="rounded-lg object-cover1 h-40 md:h-28 pr-2.5 md:pr-0"
//                     />
//                   </Link>
//                 </div>

//                 {/* Text Content */}
//                 <div className="space-y-2">
//                   <div className='text-white inline-block px-2.5 py-0.5 rounded-md bg-light-blue'>
//                     <Link to={`/category/${slugify(blog.category)}`} className="text-xs font-bold capitalize">{blog.category}</Link>
//                   </div>
//                   <div className='text-primary'>
//                     <Link to={`/blog/${blog.slug}`} className='hover:underline'>
//                       <h3 className="font-medium max-w-md lg:text-small text-sm hover:text-light-blue transition-colors ease-in duration-150 hover:underline underline-offset-1 hover:decoration-light-blue">
//                         {blog.title}
//                       </h3>
//                     </Link>
//                   </div>
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs lg:text-nowrap text-wrap">
//                     <Link to={`/author/${slugify(blog.author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                       <FaUser />
//                       {blog.author}
//                     </Link>
//                     <span>•</span>
//                     <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blog.date).getFullYear()}/${String(new Date(blog.date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blog.date).getDate()).padStart(2, '0')}`}>
//                       <FaCalendarAlt />
//                       {blog.date}
//                     </Link>
//                     <span>•</span>
//                     <div className="flex items-center gap-1">
//                       <FaComment />
//                       <p>{blog.commentCount}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        // Introduce a 1-second delay *before* the API call
        await delay(1000);

        const apiUrl = (`https://vcga.uk/wp-json/wp/v2/posts?_embed`);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          console.error(`Response body: ${await response.text()}`);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const transformedBlogs = await Promise.all(data.map(async post => {
          let imageUrl = 'placeholder_image_url';
          if (post.featured_media && post.featured_media !== 0) {
            if (post._embedded && post._embedded['wp:featuredmedia']) {
              const featuredMedia = post._embedded['wp:featuredmedia'];
              if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
                imageUrl = featuredMedia[0].source_url
              } else if (featuredMedia.source_url) {
                imageUrl = featuredMedia.source_url
              }
            }
          }

          let commentCount = 0;
          try {
            const commentsUrl = `https://vcga.uk/wp-json/wp/v2/comments?post=${post.id}`;
            const commentsResponse = await fetch(commentsUrl);
            if (commentsResponse.ok) {
              const commentsData = await commentsResponse.json();
              commentCount = commentsData.length;
            } else {
              console.warn(`Failed to fetch comments for post ${post.id}`);
            }
          } catch (commentError) {
            console.error(`Error fetching comments for post ${post.id}:`, commentError);
          }

          // Decode the category name here
          const category = post._embedded?.['wp:term']?.[0]?.[0]?.name
            ? decodeHtml(post._embedded['wp:term'][0][0].name)
            : 'Uncategorized';

          return {
            id: post.id,
            title: decodeHtml(post.title.rendered),
            content: post.content.rendered,
            slug: post.slug,
            author: post._embedded?.author?.[0]?.name || 'Unknown Author',
            date: new Date(post.date).toLocaleDateString(),
            category: category,
            commentCount: commentCount,
            image: imageUrl,
          };
        }));
        setBlogs(transformedBlogs);

      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className="spinner"></div>
      </div>
    );
  }



  return (
    <section className='BLog-List md:pt-10 pt-5'>
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          {/* Left Side - Featured Blog */}
          <div className="w-full lg:w-3/5 relative overflow-hidden">
            {blogs[0] && (
              <div className="bg-white">
                <Link to={`/blog/${blogs[0].slug}`}>
                  <img
                    src={blogs[0].image}
                    alt="Featured Blog"
                    className="rounded-xl object-cover w-full"
                  />
                </Link>
                <div className="space-y-1">
                  <Link to={`/category/${slugify(blogs[0].category)}`} className="text-xs mt-2 bg-light-blue rounded-full px-2 inline-block text-white font-normal">{blogs[0].category}</Link>
                  <Link to={`/blog/${blogs[0].slug}`} className="hover:underline">
                    <h2 className="lg:text-base font-medium text-primary hover:text-light-blue transition-colors ease-in duration-150 hover:underline mt-2 underline-offset-1 hover:decoration-light-blue">
                      {blogs[0].title}
                    </h2>
                  </Link>
                  <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
                    <Link to={`/author/${slugify(blogs[0].author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-200 ease-in">
                      <FaUser />
                      {blogs[0].author}
                    </Link>
                    <span>•</span>
                    <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blogs[0].date).getFullYear()}/${String(new Date(blogs[0].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[0].date).getDate()).padStart(2, '0')}`}>
                      <FaCalendarAlt />
                      {blogs[0].date}
                    </Link>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <FaComment />
                      <p>{blogs[0].commentCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Four Blogs */}
          <div className="w-full lg:w-2/5 flex flex-col md:-space-y-9  md:gap-0 gap-6">
            {blogs.slice(1, 5).map((blog, index) => (
              <div key={index} className="bg-white flex items-start space-x-3 rounded-lg transition-shadow overflow-auto">
                {/* Images */}
                <div className="md:size-40 size-36 flex-shrink-0"> {/* Added width, height and overflow hidden */}
                  <Link to={`/blog/${blog.slug}`}>
                    <img
                      alt="Blog thumbnail"
                      src={blog.image}
                      className="object-contain rounded-lg" // object-cover and h-full/w-full
                    />
                  </Link>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <div className='bg-light-blue rounded-full px-2 inline-block text-white'>
                    <Link to={`/category/${slugify(blog.category)}`} className="text-xs font-normal">{blog.category}</Link>
                  </div>
                  <div className='text-primary'>
                    <Link to={`/blog/${blog.slug}`} className='hover:underline'>
                      <h3 className="font-medium max-w-md lg:text-small text-sm hover:text-light-blue transition-colors ease-in duration-150 hover:underline underline-offset-1 hover:decoration-light-blue">
                        {blog.title}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center text-[#595F69] font-medium  text-xs lg:text-nowrap text-wrap">
                    <Link to={`/author/${slugify(blog.author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
                      <FaUser />
                      {blog.author}
                    </Link>
                    <span className='mx-1 lg:mx-2'>•</span>
                    <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blog.date).getFullYear()}/${String(new Date(blog.date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blog.date).getDate()).padStart(2, '0')}`}>
                      <FaCalendarAlt />
                      {blog.date}
                    </Link>
                    <span className='mx-1 lg:mx-2'>•</span>
                    <div className="flex items-center gap-1">
                      <FaComment />
                      <p>{blog.commentCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { slugify } from '../../utils';
// import { FaUser } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaComment } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

// const decodeHtml = (html) => {
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const apiUrl = (`https://vcga.uk/wp-json/wp/v2/posts?_embed`);

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           console.error(`HTTP error! status: ${response.status}`);
//           console.error(`Response body: ${await response.text()}`);
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         const transformedBlogs = await Promise.all(data.map(async post => {
//           let imageUrl = 'placeholder_image_url';
//           if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//               const featuredMedia = post._embedded['wp:featuredmedia'];
//               if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                 imageUrl = featuredMedia[0].source_url
//               } else if (featuredMedia.source_url) {
//                 imageUrl = featuredMedia.source_url
//               }
//             }
//           }

//           let commentCount = 0;
//           try {
//             const commentsUrl = `https://vcga.uk/wp-json/wp/v2/comments?post=${post.id}`;
//             const commentsResponse = await fetch(commentsUrl);
//             if (commentsResponse.ok) {
//               const commentsData = await commentsResponse.json();
//               commentCount = commentsData.length;
//             } else {
//               console.warn(`Failed to fetch comments for post ${post.id}`);
//             }
//           } catch (commentError) {
//             console.error(`Error fetching comments for post ${post.id}:`, commentError);
//           }

//           // Decode the category name here
//           const category = post._embedded?.['wp:term']?.[0]?.[0]?.name
//             ? decodeHtml(post._embedded['wp:term'][0][0].name)
//             : 'Uncategorized';

//           return {
//             id: post.id,
//             title: decodeHtml(post.title.rendered),
//             content: post.content.rendered,
//             slug: post.slug,
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: category,
//             commentCount: commentCount,
//             image: imageUrl,
//           };
//         }));
//         setBlogs(transformedBlogs);

//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);


//   return (
//     <section className='BLog-List md:pt-10 pt-5'>
//       <div className="container mx-auto">
//         <div className="flex flex-wrap lg:flex-nowrap gap-4">
//           {/* Left Side - Featured Blog */}
//           <div className="w-full lg:w-3/5 relative overflow-hidden">
//             {loading ? (
//               <div className="bg-white">
//                 <Skeleton height={200} className="rounded-xl" />
//                 <div className="space-y-1">
//                   <Skeleton width={100} height={20} style={{ marginTop: '10px' }} />
//                   <Skeleton height={30} style={{ marginTop: '10px' }} />
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                     <Skeleton circle={true} height={15} width={15} />
//                     <Skeleton width={50} height={15} />
//                     <span>•</span>
//                     <Skeleton circle={true} height={15} width={15} />
//                     <Skeleton width={50} height={15} />
//                     <span>•</span>
//                     <Skeleton circle={true} height={15} width={15} />
//                     <Skeleton width={20} height={15} />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               blogs[0] && (
//                 <div className="bg-white">
//                   <Link to={`/blog/${blogs[0].slug}`}>
//                     <img
//                       src={blogs[0].image}
//                       alt="Featured Blog"
//                       className="rounded-xl object-cover w-full"
//                     />
//                   </Link>
//                   <div className="space-y-1">
//                     <Link to={`/category/${slugify(blogs[0].category)}`} className="text-xs mt-2 bg-light-blue rounded-md px-2.5 py-0.5 inline-block text-white font-normal">{blogs[0].category}</Link>
//                     <Link to={`/blog/${blogs[0].slug}`} className="hover:underline">
//                       <h2 className="lg:text-base font-medium text-primary hover:text-light-blue transition-colors ease-in duration-150 hover:underline mt-2 underline-offset-1 hover:decoration-light-blue">
//                         {blogs[0].title}
//                       </h2>
//                     </Link>
//                     <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                       <Link to={`/author/${slugify(blogs[0].author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-200 ease-in">
//                         <FaUser />
//                         {blogs[0].author}
//                       </Link>
//                       <span>•</span>
//                       <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blogs[0].date).getFullYear()}/${String(new Date(blogs[0].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[0].date).getDate()).padStart(2, '0')}`}>
//                         <FaCalendarAlt />
//                         {blogs[0].date}
//                       </Link>
//                       <span>•</span>
//                       <div className="flex items-center gap-1">
//                         <FaComment />
//                         <p>{blogs[0].commentCount}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>

//           {/* Right Side - Four Blogs */}
//           <div className="w-full lg:w-2/5 flex flex-col md:-space-y-9 md:gap-0 gap-6">
//             {loading ? (
//               // Skeleton loading for right side
//               Array(4).fill().map((_, index) => (
//                 <div key={index} className="bg-white flex items-start space-x-3 rounded-lg transition-shadow overflow-auto">
//                   {/* Skeleton Images */}
//                   <div className="md:size-40 size-36 flex-shrink-0">
//                     <Skeleton height={100} width={100} className="rounded-lg" />
//                   </div>
//                   {/* Skeleton Text Content */}
//                   <div className="space-y-2">
//                     <Skeleton width={80} height={20} />
//                     <Skeleton height={25} width={150} />
//                     <div className="flex flex-wrap items-center text-[#595F69] font-medium  text-xs lg:text-nowrap text-wrap">
//                       <Skeleton circle={true} height={15} width={15} />
//                       <Skeleton width={50} height={15} />
//                       <span>•</span>
//                       <Skeleton circle={true} height={15} width={15} />
//                       <Skeleton width={50} height={15} />
//                       <span>•</span>
//                       <Skeleton circle={true} height={15} width={15} />
//                       <Skeleton width={20} height={15} />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               blogs.slice(1, 5).map((blog, index) => (
//                 <div key={index} className="bg-white flex items-start space-x-3 rounded-lg transition-shadow overflow-auto">
//                   {/* Images */}
//                   <div className="md:size-40 size-36 flex-shrink-0"> {/* Added width, height and overflow hidden */}
//                     <Link to={`/blog/${blog.slug}`}>
//                       <img
//                         alt="Blog thumbnail"
//                         src={blog.image}
//                         className="object-contain rounded-lg" // object-cover and h-full/w-full
//                       />
//                     </Link>
//                   </div>

//                   {/* Text Content */}
//                   <div className="space-y-2">
//                     <div className='bg-light-blue rounded-md px-2.5 py-0.5 inline-block text-white'>
//                       <Link to={`/category/${slugify(blog.category)}`} className="text-xs font-normal">{blog.category}</Link>
//                     </div>
//                     <div className='text-primary'>
//                       <Link to={`/blog/${blog.slug}`} className='hover:underline'>
//                         <h3 className="font-medium max-w-md lg:text-small text-sm hover:text-light-blue transition-colors ease-in duration-150 hover:underline underline-offset-1 hover:decoration-light-blue">
//                           {blog.title}
//                         </h3>
//                       </Link>
//                     </div>
//                     <div className="flex flex-wrap items-center text-[#595F69] font-medium  text-xs lg:text-nowrap text-wrap">
//                       <Link to={`/author/${slugify(blog.author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                         <FaUser />
//                         {blog.author}
//                       </Link>
//                       <span className='mx-1 lg:mx-2'>•</span>
//                       <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blog.date).getFullYear()}/${String(new Date(blog.date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blog.date).getDate()).padStart(2, '0')}`}>
//                         <FaCalendarAlt />
//                         {blog.date}
//                       </Link>
//                       <span className='mx-1 lg:mx-2'>•</span>
//                       <div className="flex items-center gap-1">
//                         <FaComment />
//                         <p>{blog.commentCount}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogList;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { slugify } from '../../utils';
// import { FaUser } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaComment } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

// const decodeHtml = (html) => {
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const apiUrl = (`https://vcga.uk/wp-json/wp/v2/posts?_embed`);

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           console.error(`HTTP error! status: ${response.status}`);
//           console.error(`Response body: ${await response.text()}`);
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         const transformedBlogs = await Promise.all(data.map(async post => {
//           let imageUrl = 'placeholder_image_url';
//           if (post.featured_media && post.featured_media !== 0) {
//             if (post._embedded && post._embedded['wp:featuredmedia']) {
//               const featuredMedia = post._embedded['wp:featuredmedia'];
//               if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                 imageUrl = featuredMedia[0].source_url
//               } else if (featuredMedia.source_url) {
//                 imageUrl = featuredMedia.source_url
//               }
//             }
//           }

//           let commentCount = 0;
//           try {
//             const commentsUrl = `https://vcga.uk/wp-json/wp/v2/comments?post=${post.id}`;
//             const commentsResponse = await fetch(commentsUrl);
//             if (commentsResponse.ok) {
//               const commentsData = await commentsResponse.json();
//               commentCount = commentsData.length;
//             } else {
//               console.warn(`Failed to fetch comments for post ${post.id}`);
//             }
//           } catch (commentError) {
//             console.error(`Error fetching comments for post ${post.id}:`, commentError);
//           }

//           // Decode the category name here
//           const category = post._embedded?.['wp:term']?.[0]?.[0]?.name
//             ? decodeHtml(post._embedded['wp:term'][0][0].name)
//             : 'Uncategorized';

//           return {
//             id: post.id,
//             title: decodeHtml(post.title.rendered),
//             content: post.content.rendered,
//             slug: post.slug,
//             author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//             date: new Date(post.date).toLocaleDateString(),
//             category: category,
//             commentCount: commentCount,
//             image: imageUrl,
//           };
//         }));
//         setBlogs(transformedBlogs);

//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);


//   return (
//     <section className='BLog-List md:pt-10 pt-5'>
//       <div className="container mx-auto">
//         <div className="flex flex-wrap lg:flex-nowrap gap-4">
//           {/* Left Side - Featured Blog */}
//           <div className="w-full lg:w-3/5 relative overflow-hidden">
//             {loading ? (
//               <div className="bg-white">
//                 <Skeleton height={480} className="rounded-xl" duration={3} highlightColor="#f5f5f5" />
//                 <div className="space-y-1">
//                   <Skeleton width={100} height={20} style={{ marginTop: '10px' }} duration={3} highlightColor="#f5f5f5" />
//                   <Skeleton height={30} style={{ marginTop: '10px' }} duration={3} highlightColor="#f5f5f5" />
//                   <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                     <Skeleton circle={true} height={15} width={15} duration={3} highlightColor="#f5f5f5" />
//                     <Skeleton width={50} height={15} duration={3} highlightColor="#f5f5f5" />
//                     <span>•</span>
//                     <Skeleton circle={true} height={15} width={15} duration={3} highlightColor="#f5f5f5" />
//                     <Skeleton width={50} height={15} duration={3} highlightColor="#f5f5f5" />
//                     <span>•</span>
//                     <Skeleton circle={true} height={15} width={15} duration={3} highlightColor="#f5f5f5" />
//                     <Skeleton width={20} height={15} duration={3} highlightColor="#f5f5f5" />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               blogs[0] && (
//                 <div className="bg-white">
//                   <Link to={`/blog/${blogs[0].slug}`}>
//                     <img
//                       src={blogs[0].image}
//                       alt="Featured Blog"
//                       className="rounded-xl object-cover w-full"
//                     />
//                   </Link>
//                   <div className="space-y-1">
//                     <Link to={`/category/${slugify(blogs[0].category)}`} className="text-xs mt-2 bg-light-blue rounded-md px-2.5 py-0.5 inline-block text-white font-normal">{blogs[0].category}</Link>
//                     <Link to={`/blog/${blogs[0].slug}`} className="hover:underline">
//                       <h2 className="lg:text-base font-medium text-primary hover:text-light-blue transition-colors ease-in duration-150 hover:underline mt-2 underline-offset-1 hover:decoration-light-blue">
//                         {blogs[0].title}
//                       </h2>
//                     </Link>
//                     <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
//                       <Link to={`/author/${slugify(blogs[0].author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-200 ease-in">
//                         <FaUser />
//                         {blogs[0].author}
//                       </Link>
//                       <span>•</span>
//                       <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blogs[0].date).getFullYear()}/${String(new Date(blogs[0].date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blogs[0].date).getDate()).padStart(2, '0')}`}>
//                         <FaCalendarAlt />
//                         {blogs[0].date}
//                       </Link>
//                       <span>•</span>
//                       <div className="flex items-center gap-1">
//                         <FaComment />
//                         <p>{blogs[0].commentCount}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>

//           {/* Right Side - Four Blogs */}
//           <div className="w-full lg:w-2/5 flex flex-col md:-space-y-9 md:gap-0 gap-6">
//             {loading ? (
//               // Skeleton loading for right side
//               Array(4).fill().map((_, index) => (
//                 <div key={index} className="bg-white flex items-start space-x-3 rounded-lg transition-shadow overflow-auto">
//                   {/* Skeleton Images */}
//                   <div className="md:size-40 size-36 flex-shrink-0">
//                     <Skeleton height={100} width={150} className="rounded-lg" duration={3} />
//                   </div>
//                   {/* Skeleton Text Content */}
//                   <div className="space-y-2">
//                     <Skeleton width={80} height={20} duration={3} />
//                     <Skeleton height={25} width={150} duration={3} />
//                     <div className="flex flex-wrap items-center text-[#595F69] font-medium text-xs lg:text-nowrap text-wrap">
//                       <Skeleton circle={true} height={15} width={15} duration={3} />
//                       <Skeleton width={50} height={15} duration={3} />
//                       <span>•</span>
//                       <Skeleton circle={true} height={15} width={15} duration={3} />
//                       <Skeleton width={50} height={15} duration={3} />
//                       <span>•</span>
//                       <Skeleton circle={true} height={15} width={15} duration={3} />
//                       <Skeleton width={20} height={15} duration={3} />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               blogs.slice(1, 5).map((blog, index) => (
//                 <div key={index} className="bg-white flex items-start space-x-3 rounded-lg transition-shadow overflow-auto">
//                   {/* Images */}
//                   <div className="md:size-40 size-36 flex-shrink-0"> {/* Added width, height and overflow hidden */}
//                     <Link to={`/blog/${blog.slug}`}>
//                       <img
//                         alt="Blog thumbnail"
//                         src={blog.image}
//                         className="object-contain rounded-lg" // object-cover and h-full/w-full
//                       />
//                     </Link>
//                   </div>

//                   {/* Text Content */}
//                   <div className="space-y-2">
//                     <div className='bg-light-blue rounded-md px-2.5 py-0.5 inline-block text-white'>
//                       <Link to={`/category/${slugify(blog.category)}`} className="text-xs font-normal">{blog.category}</Link>
//                     </div>
//                     <div className='text-primary'>
//                       <Link to={`/blog/${blog.slug}`} className='hover:underline'>
//                         <h3 className="font-medium max-w-md lg:text-small text-sm hover:text-light-blue transition-colors ease-in duration-150 hover:underline underline-offset-1 hover:decoration-light-blue">
//                           {blog.title}
//                         </h3>
//                       </Link>
//                     </div>
//                     <div className="flex flex-wrap items-center text-[#595F69] font-medium  text-xs lg:text-nowrap text-wrap">
//                       <Link to={`/author/${slugify(blog.author)}`} className="flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in">
//                         <FaUser />
//                         {blog.author}
//                       </Link>
//                       <span className='mx-1 lg:mx-2'>•</span>
//                       <Link className='flex items-center gap-1 hover:text-light-blue transition-colors duration-150 ease-in' to={`/date/${new Date(blog.date).getFullYear()}/${String(new Date(blog.date).getMonth() + 1).padStart(2, '0')}/${String(new Date(blog.date).getDate()).padStart(2, '0')}`}>
//                         <FaCalendarAlt />
//                         {blog.date}
//                       </Link>
//                       <span className='mx-1 lg:mx-2'>•</span>
//                       <div className="flex items-center gap-1">
//                         <FaComment />
//                         <p>{blog.commentCount}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogList;
