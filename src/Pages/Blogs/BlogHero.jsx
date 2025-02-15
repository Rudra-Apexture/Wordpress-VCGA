import React from 'react';
import Hero from '../../components/Hero';


const BlogHero = () => {
    return (
        <Hero
            mainHeading="Level Up Your "
            mainHeadingHighlight="Blogs "
            description="Welcome to our blog! Here you'll find our thoughts on [topic], from expert advice to behind-the-scenes stories. Join the discussion and connect with our community of readers."
            showButton={false} // Set showButton to false to hide the button
        />
    );
};

export default BlogHero;

