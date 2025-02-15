import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import google from "../../assets/images/google.svg";
import HighlightedHeading from "../../components/HighlightedHeading";


const ReviewCard = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("reviews.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    if (loading) {
        return <div className="text-center py-12">Loading reviews...</div>;
    }
    if (error) {
        return <div className="text-center py-12">Error: {error.message}</div>;
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-5">
                    <HighlightedHeading
                        mainText="What Our "
                        highlightedText="Clients Say "
                        center={false}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-8 rounded-xl border shadow-main transition-all duration-300 ease-in-out transform hover:-translate-y-5"
                        >
                            <div className="flex items-center mb-6">
                                <img
                                    className="size-16 rounded-full object-cover mr-4"
                                    src={review.image}
                                    alt={review.name}
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">
                                        {review.name}
                                    </h3>
                                    <div className="flex items-center text-yellow-500">
                                        {Array(review.stars)
                                            .fill()
                                            .map((_, index) => (
                                                <FaStar key={index} />
                                            ))}
                                    </div>
                                </div>
                                <img
                                    src={google}
                                    alt="Google Logo"
                                    className="ml-auto w-10 opacity-70"
                                />
                            </div>
                            <p className="text-gray-600 leading-relaxed">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewCard;
