// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { slugify } from '../../../utils';
// import BlogTitle from './BlogTitle'; // Import the BlogTitle component
// import { FaRegClock } from 'react-icons/fa';

// const decodeHtml = (html) => {
//     const txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
// };

// const delay = (ms) => new Promise(res => setTimeout(res, ms));


// const CategoryBlogs = () => {
//     const { categorySlug } = useParams();  // Get category slug from URL
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [categoryName, setCategoryName] = useState(null);


//     useEffect(() => {
//         const fetchBlogsByCategory = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // Introduce a 1-second delay *before* the API call
//                 await delay(1500);

//                 // Fetch category ID based on the slug
//                 const categoryResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/categories?slug=${categorySlug}`);
//                 if (!categoryResponse.ok) {
//                     throw new Error(`HTTP error! Category status: ${categoryResponse.status}`);
//                 }
//                 const categoryData = await categoryResponse.json();

//                 if (categoryData.length === 0) {
//                     setError("Category not found.");
//                     setLoading(false);
//                     return;
//                 }

//                 const categoryId = categoryData[0].id;
//                 setCategoryName(categoryData[0].name);


//                 // Fetch blogs based on the category ID
//                 const blogsResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/posts?categories=${categoryId}&_embed`);

//                 if (!blogsResponse.ok) {
//                     throw new Error(`HTTP error! Blog status: ${blogsResponse.status}`);
//                 }

//                 const data = await blogsResponse.json();

//                 const transformedBlogs = data.map(post => {
//                     let imageUrl = 'placeholder_image_url';
//                     if (post.featured_media && post.featured_media !== 0) {
//                         if (post._embedded && post._embedded['wp:featuredmedia']) {
//                             const featuredMedia = post._embedded['wp:featuredmedia'];
//                             if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
//                                 imageUrl = featuredMedia[0].source_url
//                             } else if (featuredMedia.source_url) {
//                                 imageUrl = featuredMedia.source_url
//                             }
//                         }
//                     }

//                     return {
//                         id: post.id,
//                         title: decodeHtml(post.title.rendered), // Decode title
//                         content: decodeHtml(post.content.rendered), // Decode content
//                         slug: post.slug,
//                         author: post._embedded?.author?.[0]?.name || 'Unknown Author',
//                         date: new Date(post.date).toLocaleDateString(),
//                         category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
//                         readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
//                         image: imageUrl,
//                     };
//                 });

//                 setBlogs(transformedBlogs);
//             } catch (err) {
//                 console.error("Error fetching blogs by category:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogsByCategory();
//     }, [categorySlug]);


//     return (
//         <>
//             <BlogTitle />
//             <section className="category-blogs py-12">
//                 <div className="container mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {blogs.map(blog => (
//                             <div key={blog.id} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden">
//                                 <Link to={`/blog/${blog.slug}`}>
//                                     <img
//                                         src={blog.image}
//                                         alt={blog.title}
//                                         className="w-full object-cover"
//                                     />
//                                 </Link>
//                                 <div className="p-4">
//                                     <h2 className="text-medium font-semibold text-light-blue mb-4">
//                                         <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
//                                     </h2>
//                                     <div className='text-gray-700 font-normal text-small break-words h-28 mb-4' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 24).join(' ') + '...' }} />
//                                     <div className='border-t border-gray-300 py-2'></div>
//                                     <div className="flex justify-between items-center text-primary font-normal text-xs">
//                                         <span className='flex items-center gap-1' >
//                                             <FaRegClock />
//                                             {blog.date}</span>
//                                         <Link to={`/blog/${blog.slug}`} className="text-light-blue font-semibold">Read More</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section >
//         </>
//     );
// };

// export default CategoryBlogs;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { slugify } from '../../../utils';
import BlogTitle from './BlogTitle'; // Import the BlogTitle component
import { FaRegClock } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));


const CategoryBlogs = () => {
    const { categorySlug } = useParams();  // Get category slug from URL
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryName, setCategoryName] = useState(null);

    // Number of skeleton items to display while loading
    const skeletonCount = 6;  // Adjust as needed to match your grid


    useEffect(() => {
        const fetchBlogsByCategory = async () => {
            setLoading(true);
            setError(null);

            try {
                // Introduce a 1-second delay *before* the API call
                await delay(1500);

                // Fetch category ID based on the slug
                const categoryResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/categories?slug=${categorySlug}`);
                if (!categoryResponse.ok) {
                    throw new Error(`HTTP error! Category status: ${categoryResponse.status}`);
                }
                const categoryData = await categoryResponse.json();

                if (categoryData.length === 0) {
                    setError("Category not found.");
                    setLoading(false);
                    return;
                }

                const categoryId = categoryData[0].id;
                setCategoryName(categoryData[0].name);


                // Fetch blogs based on the category ID
                const blogsResponse = await fetch(`https://vcga.uk/wp-json/wp/v2/posts?categories=${categoryId}&_embed`);

                if (!blogsResponse.ok) {
                    throw new Error(`HTTP error! Blog status: ${blogsResponse.status}`);
                }

                const data = await blogsResponse.json();

                const transformedBlogs = data.map(post => {
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

                    return {
                        id: post.id,
                        title: decodeHtml(post.title.rendered), // Decode title
                        content: decodeHtml(post.content.rendered), // Decode content
                        slug: post.slug,
                        author: post._embedded?.author?.[0]?.name || 'Unknown Author',
                        date: new Date(post.date).toLocaleDateString(),
                        category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
                        readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
                        image: imageUrl,
                    };
                });

                setBlogs(transformedBlogs);
            } catch (err) {
                console.error("Error fetching blogs by category:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogsByCategory();
    }, [categorySlug]);


    return (
        <>
            <BlogTitle />
            <section className="category-blogs py-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            // Display Skeletons While Loading
                            Array(skeletonCount).fill().map((_, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                                    <Skeleton height={250} style={{ marginBottom: '8px' }} />  {/* Image Skeleton */}
                                    <div className="p-4">
                                        <Skeleton count={2} style={{ marginBottom: '8px' }} />  {/* Title Skeletons */}
                                        <Skeleton count={3} style={{ marginBottom: '8px' }} />  {/* Content Skeletons */}
                                        <Skeleton style={{ marginTop: '12px' }} /> {/* Footer Skeleton */}
                                    </div>
                                </div>
                            ))
                        ) : error ? (
                            // Display Error Message if there is an error
                            <p className="text-red-500">Error: {error}</p>
                        ) : blogs.length > 0 ? (
                            // Display Blogs When Data is Loaded
                            blogs.map(blog => (
                                <div key={blog.id} className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden">
                                    <Link to={`/blog/${blog.slug}`}>
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full object-cover"
                                        />
                                    </Link>
                                    <div className="p-4">
                                        <h2 className="text-medium font-semibold text-light-blue mb-4">
                                            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h2>
                                        <div className='text-gray-700 font-normal text-small break-words h-28 mb-4' dangerouslySetInnerHTML={{ __html: blog.content.split(' ').slice(0, 24).join(' ') + '...' }} />
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
                        ) : (
                            // Display a message when no blogs are found
                            <p>No blogs found in this category.</p>
                        )}
                    </div>
                </div>
            </section >
        </>
    );
};

export default CategoryBlogs;