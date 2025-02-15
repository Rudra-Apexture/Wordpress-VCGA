// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import AuthorPageHeader from './AuthorPageHeader';
// import { FaRegClock } from 'react-icons/fa';

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const delay = (ms) => new Promise(res => setTimeout(res, ms));


// const AuthorPage = () => {
//     const { authorName } = useParams();
//     const [author, setAuthor] = useState(null);
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [authorId, setAuthorId] = useState(null);

//     useEffect(() => {
//         const fetchAuthorAndBlogs = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 const usersResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/users?slug=${authorName}`);
//                 if (!usersResponse.ok) {
//                     throw new Error(`Failed to fetch user data: ${usersResponse.status}`);
//                 }

//                 const usersData = await usersResponse.json();

//                 if (usersData.length === 0) {
//                     setAuthor(authorName);
//                     setBlogs([]);
//                     setLoading(false);
//                     return;
//                 }

//                 const authorData = usersData[0];
//                 setAuthor(authorData.name);
//                 setAuthorId(authorData.id);

//                 const postsResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/posts?_embed&author=${authorData.id}`);

//                 if (!postsResponse.ok) {
//                     throw new Error(`Failed to fetch posts: ${postsResponse.status}`);
//                 }

//                 const postsData = await postsResponse.json();

//                 const transformedBlogs = postsData.map(post => ({
//                     id: post.id,
//                     title: decodeHtml(post.title.rendered),
//                     content: post.content.rendered,
//                     slug: post.slug,
//                     author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//                     date: new Date(post.date).toLocaleDateString(),
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name ? decodeHtml(post._embedded?.['wp:term']?.[0]?.[0]?.name) : 'Uncategorized',
//                     readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//                     image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder.png',
//                 }));

//                 setBlogs(transformedBlogs);
//             } catch (err) {
//                 console.error("Error fetching author data:", err);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAuthorAndBlogs();
//     }, [authorName]);

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

//     if (error) {
//         return (
//             <div className="container mx-auto py-8 text-center">
//                 <p className="text-red-500">Error loading author data. Please try again later.</p>
//             </div>
//         );
//     }

//     return (
//         <section className="Author-Page">
//             <AuthorPageHeader authorName={author} />
//             <div className="container mx-auto">
//                 {blogs.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {blogs.map(blog => (
//                             <div key={blog.id} className="bg-white border border-slate-100 rounded-2xl shadow-md">
//                                 <Link to={`/blog/${blog.slug}`}>
//                                     <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-newbox" />
//                                     <div className='p-4 space-y-2.5'>
//                                         <h1 className='text-medium font-semibold text-primary'>{blog.category}</h1>
//                                         <h2 className="text-medium font-medium text-light-blue" dangerouslySetInnerHTML={{ __html: blog.title }}></h2>
//                                         <div className='text-gray-700 font-normal text-small break-words h-32' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 24).join(' ') + '...' }} />
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {blog.date}
//                                             </span>
//                                             <span className="mx-2 text-primary">•</span>
//                                             <span className='text-primary'>{blog.readTime}</span>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No posts by this author yet.</p>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default AuthorPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import AuthorPageHeader from './AuthorPageHeader';
// import { FaRegClock } from 'react-icons/fa';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const delay = (ms) => new Promise(res => setTimeout(res, ms));


// const AuthorPage = () => {
//     const { authorName } = useParams();
//     const [author, setAuthor] = useState(null);
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [authorId, setAuthorId] = useState(null);
//     const skeletonCount = 6; // Number of skeleton items to show

//     useEffect(() => {
//         const fetchAuthorAndBlogs = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 const usersResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/users?slug=${authorName}`);
//                 if (!usersResponse.ok) {
//                     throw new Error(`Failed to fetch user data: ${usersResponse.status}`);
//                 }

//                 const usersData = await usersResponse.json();

//                 if (usersData.length === 0) {
//                     setAuthor(authorName);
//                     setBlogs([]);
//                     setLoading(false);
//                     return;
//                 }

//                 const authorData = usersData[0];
//                 setAuthor(authorData.name);
//                 setAuthorId(authorData.id);

//                 const postsResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/posts?_embed&author=${authorData.id}`);

//                 if (!postsResponse.ok) {
//                     throw new Error(`Failed to fetch posts: ${postsResponse.status}`);
//                 }

//                 const postsData = await postsResponse.json();

//                 const transformedBlogs = postsData.map(post => ({
//                     id: post.id,
//                     title: decodeHtml(post.title.rendered),
//                     content: post.content.rendered,
//                     slug: post.slug,
//                     author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//                     date: new Date(post.date).toLocaleDateString(),
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name ? decodeHtml(post._embedded?.['wp:term']?.[0]?.[0]?.name) : 'Uncategorized',
//                     readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//                     image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder.png',
//                 }));

//                 setBlogs(transformedBlogs);
//             } catch (err) {
//                 console.error("Error fetching author data:", err);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAuthorAndBlogs();
//     }, [authorName]);

//     if (loading) {
//         return (
//             <>
//                 <AuthorPageHeader authorName={author} />
//                 <section className="Author-Page">
//                     <div className="container mx-auto">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {Array(skeletonCount).fill().map((_, index) => (
//                                 <div key={index} className="bg-white border border-slate-100 rounded-2xl shadow-md">
//                                     <Skeleton height={200} style={{ width: '100%', borderRadius: '12px 12px 0 0' }} />
//                                     <div className='p-4 space-y-2.5'>
//                                         <Skeleton width={80} height={20} />
//                                         <Skeleton height={24} />
//                                         <Skeleton height={16} count={3} />
//                                         <Skeleton width={120} height={16} />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </>
//         );
//     }

//     if (error) {
//         return (
//             <div className="container mx-auto py-8 text-center">
//                 <p className="text-red-500">Error loading author data. Please try again later.</p>
//             </div>
//         );
//     }

//     return (
//         <section className="Author-Page">
//             <AuthorPageHeader authorName={author} />
//             <div className="container mx-auto">
//                 {blogs.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {blogs.map(blog => (
//                             <div key={blog.id} className="bg-white border border-slate-100 rounded-2xl shadow-md">
//                                 <Link to={`/blog/${blog.slug}`}>
//                                     <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-newbox" />
//                                     <div className='p-4 space-y-2.5'>
//                                         <h1 className='text-medium font-semibold text-primary'>{blog.category}</h1>
//                                         <h2 className="text-medium font-medium text-light-blue" dangerouslySetInnerHTML={{ __html: blog.title }}></h2>
//                                         <div className='text-gray-700 font-normal text-small break-words h-32' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 24).join(' ') + '...' }} />
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {blog.date}
//                                             </span>
//                                             <span className="mx-2 text-primary">•</span>
//                                             <span className='text-primary'>{blog.readTime}</span>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No posts by this author yet.</p>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default AuthorPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import AuthorPageHeader from './AuthorPageHeader';
// import { FaRegClock } from 'react-icons/fa';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// // Utility function to decode HTML entities
// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const delay = (ms) => new Promise(res => setTimeout(res, ms));


// const AuthorPage = () => {
//     const { authorName } = useParams();
//     const [author, setAuthor] = useState(null);
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [authorId, setAuthorId] = useState(null);
//     const skeletonCount = 6; // Number of skeleton items to show

//     useEffect(() => {
//         const fetchAuthorAndBlogs = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 const usersResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/users?slug=${authorName}`);
//                 if (!usersResponse.ok) {
//                     throw new Error(`Failed to fetch user data: ${usersResponse.status}`);
//                 }

//                 const usersData = await usersResponse.json();

//                 if (usersData.length === 0) {
//                     setAuthor(authorName);
//                     setBlogs([]);
//                     setLoading(false);
//                     return;
//                 }

//                 const authorData = usersData[0];
//                 setAuthor(authorData.name);
//                 setAuthorId(authorData.id);

//                 const postsResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/posts?_embed&author=${authorData.id}`);

//                 if (!postsResponse.ok) {
//                     throw new Error(`Failed to fetch posts: ${postsResponse.status}`);
//                 }

//                 const postsData = await postsResponse.json();

//                 const transformedBlogs = postsData.map(post => ({
//                     id: post.id,
//                     title: decodeHtml(post.title.rendered),
//                     content: post.content.rendered,
//                     slug: post.slug,
//                     author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//                     date: new Date(post.date).toLocaleDateString(),
//                     category: post._embedded?.['wp:term']?.[0]?.[0]?.name ? decodeHtml(post._embedded?.['wp:term']?.[0]?.[0]?.name) : 'Uncategorized',
//                     readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//                     image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder.png',
//                 }));

//                 setBlogs(transformedBlogs);
//             } catch (err) {
//                 console.error("Error fetching author data:", err);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAuthorAndBlogs();
//     }, [authorName]);

//     if (loading) {
//         return (
//             <>
//                 <AuthorPageHeader authorName={authorName} />
//                 <section className="Author-Page">
//                     <div className="container mx-auto">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {Array(skeletonCount).fill().map((_, index) => (
//                                 <div key={index} className="bg-white border border-slate-100 rounded-2xl shadow-md">
//                                     <Skeleton height={200} style={{ width: '100%', borderRadius: '12px 12px 0 0' }} />
//                                     <div className='p-4 space-y-2.5'>
//                                         <Skeleton width={80} height={20} />
//                                         <Skeleton height={24} />
//                                         <Skeleton height={16} count={3} />
//                                         <Skeleton width={120} height={16} />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </>
//         );
//     }

//     if (error) {
//         return (
//             <div className="container mx-auto py-8 text-center">
//                 <p className="text-red-500">Error loading author data. Please try again later.</p>
//             </div>
//         );
//     }

//     return (
//         <section className="Author-Page">
//             <AuthorPageHeader authorName={author} />
//             <div className="container mx-auto">
//                 {blogs.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {blogs.map(blog => (
//                             <div key={blog.id} className="bg-white border border-slate-100 rounded-2xl shadow-md">
//                                 <Link to={`/blog/${blog.slug}`}>
//                                     <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-newbox" />
//                                     <div className='p-4 space-y-2.5'>
//                                         <h1 className='text-medium font-semibold text-primary'>{blog.category}</h1>
//                                         <h2 className="text-medium font-medium text-light-blue" dangerouslySetInnerHTML={{ __html: blog.title }}></h2>
//                                         <div className='text-gray-700 font-normal text-small break-words h-32' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 24).join(' ') + '...' }} />
//                                         <div className="flex items-center text-green-500 font-medium text-xs">
//                                             <span className='flex items-center gap-1'>
//                                                 <FaRegClock />
//                                                 {blog.date}
//                                             </span>
//                                             <span className="mx-2 text-primary">•</span>
//                                             <span className='text-primary'>{blog.readTime}</span>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No posts by this author yet.</p>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default AuthorPage;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AuthorPageHeader from './AuthorPageHeader';
import { FaRegClock } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Utility function to decode HTML entities
const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const AuthorPage = () => {
    const { authorName } = useParams();
    const [author, setAuthor] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [authorId, setAuthorId] = useState(null);
    const [skeletonCount, setSkeletonCount] = useState(6); // Default skeleton count, fallback
    const [totalPosts, setTotalPosts] = useState(0);

    useEffect(() => {
        const fetchAuthorInfo = async () => {
            setLoading(true);
            setError(null);

            try {
                // Introduce a 1-second delay *before* the API call
                await delay(1500);

                const usersResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/users?slug=${authorName}`);
                if (!usersResponse.ok) {
                    throw new Error(`Failed to fetch user data: ${usersResponse.status}`);
                }

                const usersData = await usersResponse.json();

                if (usersData.length === 0) {
                    setAuthor(authorName);
                    setBlogs([]);
                    setLoading(false);
                    return;
                }

                const authorData = usersData[0];
                setAuthor(authorData.name);
                setAuthorId(authorData.id);

                // Fetch total posts for the author
                const totalPostsResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/posts?author=${authorData.id}&per_page=1`);

                if (!totalPostsResponse.ok) {
                    throw new Error(`Failed to fetch total posts: ${totalPostsResponse.status}`);
                }

                const totalPostsCount = totalPostsResponse.headers.get('X-WP-Total');
                setTotalPosts(parseInt(totalPostsCount || '0', 10)); // Parse or default to 0
                setSkeletonCount(parseInt(totalPostsCount || '6', 10)); // skeleton count be the real number

                // Now fetch the actual posts
                const postsResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/posts?_embed&author=${authorData.id}`);

                if (!postsResponse.ok) {
                    throw new Error(`Failed to fetch posts: ${postsResponse.status}`);
                }

                const postsData = await postsResponse.json();

                const transformedBlogs = postsData.map(post => ({
                    id: post.id,
                    title: decodeHtml(post.title.rendered),
                    content: post.content.rendered,
                    slug: post.slug,
                    author: post._embedded?.author?.[0]?.name || 'Unknown Author',
                    date: new Date(post.date).toLocaleDateString(),
                    category: post._embedded?.['wp:term']?.[0]?.[0]?.name ? decodeHtml(post._embedded?.['wp:term']?.[0]?.[0]?.name) : 'Uncategorized',
                    readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
                    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder.png',
                }));

                setBlogs(transformedBlogs);
            } catch (err) {
                console.error("Error fetching author data:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthorInfo();
    }, [authorName]);

    if (loading) {
        return (
            <>
                <AuthorPageHeader authorName={authorName} />
                <section className="Author-Page">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array(skeletonCount).fill().map((_, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-md">
                                    <Skeleton height={200} style={{ width: '100%', borderRadius: '16px 16px 0 0' }} />
                                    <div className='p-4 space-y-2.5'>
                                        <Skeleton width={80} height={20} />
                                        <Skeleton height={24} />
                                        <Skeleton height={16} count={3} />
                                        <Skeleton width={120} height={16} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto py-8 text-center">
                <p className="text-red-500">Error loading author data. Please try again later.</p>
            </div>
        );
    }

    return (
        <section className="Author-Page">
            <AuthorPageHeader authorName={author} />
            <div className="container mx-auto">
                {blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map(blog => (
                            <div key={blog.id} className="bg-white border border-slate-100 rounded-2xl shadow-md">
                                <Link to={`/blog/${blog.slug}`}>
                                    <img src={blog.image} alt={blog.title} className="w-full object-cover rounded-newbox" />
                                    <div className='p-4'>
                                        <h2 className="text-medium font-semibold text-light-blue mb-4" dangerouslySetInnerHTML={{ __html: blog.title }}></h2>
                                        <div className='text-gray-700 font-normal text-small break-words h-28 mb-4' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 24).join(' ') + '...' }} />
                                        <div className='border-t border-gray-300 py-2'></div>
                                        <div className="flex justify-between items-center text-primary font-normal text-xs">
                                            <span className='flex items-center gap-1' >
                                                <FaRegClock />
                                                {blog.date}</span>
                                            <Link to={`/blog/${blog.slug}`} className="text-light-blue font-semibold">Read More</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No posts by this author yet.</p>
                )}
            </div>
        </section>
    );
};

export default AuthorPage;

