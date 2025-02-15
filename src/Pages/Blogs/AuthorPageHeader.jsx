import React from 'react';
import { Link } from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";


const AuthorPageHeader = ({ authorName, archiveDate }) => {
    const formattedDate = archiveDate
        ? new Date(archiveDate).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : null;

    return (
        <div className="mb-8 text-center bg-light-blue py-20 relative">
            <div className="text-base text-white space-y-5 container mx-auto">
                <div className="breadcrumb capitalize">
                    <Link to="/" className="hover:underline">Home</Link> <FaAnglesRight className='inline-block' /> <span className="text-white">Archives for {authorName}</span>
                </div>
                <h1 className="text-5xl font-extrabold text-white capitalize tracking-tight leading-tight drop-shadow-md">
                    {authorName}'s Blog
                </h1>
                <p className="text-medium font-medium text-white opacity-85 italic">
                    Exploring the world through {authorName}'s unique perspective.
                </p>
            </div>
        </div>
    );
};

export default AuthorPageHeader;