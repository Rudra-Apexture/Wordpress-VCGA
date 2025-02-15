import React from 'react'
import BlogHero from './BlogHero'
import BlogMain from './BlogMain';
import Articles from './Articles';

const Blog = () => {
  return (
    <main>
      <BlogHero />
      <BlogMain />
      <Articles />
    </main>
  )
}

export default Blog