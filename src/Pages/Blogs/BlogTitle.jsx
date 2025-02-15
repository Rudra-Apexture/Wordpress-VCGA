// BlogTitle.js
import React from 'react';
import { FaAnglesRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const BlogTitle = () => {
    const { categorySlug } = useParams();
    const categoryName = categorySlug.replace(/-/g, ' ');

    // Get today's date and format it
    const today = new Date().toLocaleDateString();

    return (
        <div className="bg-blue-700 py-20 text-white space-y-5 px-4">
            <div className='text-center capitalize font-bold text-white lg:text-5xl text-2xl'>
                {categoryName}
            </div>
            <div className="flex flex-wrap items-center justify-center font-medium lg:text-medium text-xs mb-2">
                <Link to="/" className='flex items-center gap-2'>
                    <FaHome />
                    <span className="hover:underline">Home</span>
                </Link>
                <span className="mx-2">
                    <FaAnglesRight />
                </span>
                <span className="capitalize">{categoryName}</span>
            </div>
        </div>
    );
};

export default BlogTitle;