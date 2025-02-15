import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClientIssues from './ClientIssues';
import DetailsSection from './DetailsSection';
import SolutionSection from './SolutionSection';
import StatsSection from './StatsSection';
import ClientResult from './ClientResult';
import Testimonial from './Testimonial';
import { fetchCaseStudyBySlug } from './caseStudyService';
import CaseService from './CaseService';


const delay = (ms) => new Promise(res => setTimeout(res, ms));


const CaseDetails = () => {
  const { slug } = useParams();
  const [caseItem, setCaseItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCaseStudy = async () => {
      setLoading(true);
      try {
        // Introduce a 1-second delay *before* the API call
        await delay(1500);

        const caseData = await fetchCaseStudyBySlug(slug);
        setCaseItem(caseData);
      } catch (err) {
        console.error("Error fetching case data:", err);
        setError("Failed to load case content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        {error}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="case-details py-12">
        <div className="container mx-auto">
          <div className="space-y-5">
            <p className="md:text-base text-[#8C918B] font-semibold">{caseItem?.heading}</p>
            <h2 className="md:text-4xl text-medium text-primary max-w-4xl capitalize font-bold mt-4 md:leading-[45px]">
              {caseItem?.title}
            </h2>
            <div className="max-h-full">
              <img
                src={caseItem?.image}
                alt={`Case Study ${caseItem?.id}`}
                className="object-cover rounded-medium"
              />
            </div>
            <p className="text-primary font-medium pt-5 text-medium ">{caseItem?.paragraph}</p>
          </div>
        </div>
      </section>

      {/* Client Issues Section */}
      <ClientIssues
        clientIssuesData={caseItem?.clientIssues}
        clientIssuesImage={caseItem?.clientIssuesImage}
      />

      <DetailsSection details={caseItem?.details} />

      <SolutionSection solution={caseItem?.solution} />

      <StatsSection stats={caseItem?.stats} />

      <ClientResult
        clientResultData={caseItem?.clientResult}
        clientResultImage={caseItem?.clientResultImage}
      />

      <div className="container mx-auto">
        <Testimonial testimonial={caseItem?.testimonial} />
      </div>

      <CaseService />
    </>
  );
};

export default CaseDetails;



