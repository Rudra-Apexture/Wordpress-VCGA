import React, { lazy, Suspense } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CaseDetails from '../Pages/CaseStudies/CaseDetails';
import ScrollToTop from '../components/Scroll-to-Top';
import AuthorPage from '../Pages/Blogs/AuthorPage';
import DateArchivePage from '../Pages/Blogs/DateArchivePage';
import CategoryBlogs from '../Pages/Blogs/CategoryBlogs';


const Service = lazy(() => import('../Pages/Services/Service'));
const Case = lazy(() => import('../Pages/CaseStudies/Case'));
const Blog = lazy(() => import('../Pages/Blogs/Blog'));
const BlogDetails = lazy(() => import('../Pages/Blogs/BlogDetails'));
const Review = lazy(() => import('../Pages/Reviews/Review'));
const AboutUs = lazy(() => import('../Pages/AboutUs/AboutUs'));
const Contact = lazy(() => import('../Pages/ContactUs/Contact'));
const Privacy = lazy(() => import('../Pages/PrivacyPolicy'));
const TermService = lazy(() => import('../Pages/TermService'));
const FeatureMain = lazy(() => import('../Pages/Features/FeatureMain'));
const PlanPage = lazy(() => import('../../src/Pages/Plan/PlanPage'));
const Error404 = lazy(() => import('../../src/Pages/Error404'));



const Website_Route = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:blogSlug" element={<BlogDetails />} />
                    <Route path="/category/:categorySlug" element={<CategoryBlogs />} />
                    <Route path="/author/:authorName" element={<AuthorPage />} />
                    <Route path="/date/:year/:month/:day" element={<DateArchivePage />} />
                    <Route path="/case-studies" element={<Case />} />
                    <Route path="/case-study/:slug" element={<CaseDetails />} />
                    <Route path="/reviews" element={<Review />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                    <Route path="/term-service" element={<TermService />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/see-pricing" element={<PlanPage />} />
                    <Route path="/checkout" element={<FeatureMain />} />
                    {/* Added Error404 route */}
                    <Route path="*" element={<Error404 />} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Website_Route


