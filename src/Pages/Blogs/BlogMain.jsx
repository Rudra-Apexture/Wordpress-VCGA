import React from 'react'
import BlogList from '../../components/BlogList';

const BlogMain = () => {
    return (
        <div className='Blog-Main'>
            <div className='container mx-auto'>
                <h1 className='md:text-xlarge text-basic font-bold text-primary md:pt-10 pt-5'>Latest <span className='bg-gradient rounded-full text-[#1D49C3] py-0.5 font-bold '>Updates Here </span> </h1>
            </div>
            <BlogList />
        </div>
    )
}

export default BlogMain