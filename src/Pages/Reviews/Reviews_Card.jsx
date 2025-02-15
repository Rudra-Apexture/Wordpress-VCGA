import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import logo from "../../assets/images/google.svg";

const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < maxRating; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} className="inline-block text-[#FBBF24]" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="inline-block text-[#FBBF24]" />);
    } else {
      stars.push(<FaStar key={i} className="inline-block" />);
    }
  }

  return <div className="inline-block text-white">{stars}</div>;
};

const ReviewCard = ({ reviewerName, avatarUrl, rating, comment }) => {
  return (
    <div className="bg-white border border-[#D3D3D3] rounded-medium shadow-main lg:p-6 p-4 flex flex-col items-start relative mb-4">
      <div className="flex md:flex-row items-center w-full justify-center">
        <div className="flex flex-col md:flex-row items-center md:mr-auto">
          <img
            src={avatarUrl}
            alt={`Avatar of ${reviewerName}`}
            className="lg:size-16 size-14 rounded-full object-cover mb-2 md:mb-0 md:mr-4"
          />
          <div className="flex flex-col items-center md:items-start">
            <div className="font-medium text-[#1C1A1D] lg:text-medium text-small text-nowrap">{reviewerName}</div>
            <StarRating rating={rating} />
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 md:top-8">
        <img src={logo} alt="" className="lg:h-10 h-8" />
      </div>

      <div className="text-dark-black font-normal mt-4 leading-6">
        {comment}
      </div>
    </div>
  );
};


const ReviewCards = () => {
  const [reviewGroups, setReviewGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const columnRefs = useRef([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/Review.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviewGroups(data.reviewGroups);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="Reviews md:pt-14 pt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {reviewGroups.map((group, index) => (
            <div
              key={group.id}
              className={`marquee-column marquee-column-${index + 1}`}
              ref={(el) => (columnRefs.current[index] = el)}
            >
              <div className="marquee-content">
                {group.reviews.map((review, reviewIndex) => (
                  <ReviewCard key={reviewIndex} {...review} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;