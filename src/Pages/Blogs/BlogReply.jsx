import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion

const BlogReply = ({ updateCommentCount, initialCommentCount = 0 }) => {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
        saveInfo: false,
    });
    const [replyingTo, setReplyingTo] = useState(null);

    useEffect(() => {
        const savedName = localStorage.getItem('commentName');
        const savedEmail = localStorage.getItem('commentEmail');

        if (savedName && savedEmail) {
            setFormData(prevFormData => ({
                ...prevFormData,
                name: savedName,
                email: savedEmail,
                saveInfo: true,
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });

        if (name === 'saveInfo') {
            if (checked) {
                localStorage.setItem('commentName', formData.name);
                localStorage.setItem('commentEmail', formData.email);
            } else {
                localStorage.removeItem('commentName');
                localStorage.removeItem('commentEmail');
            }
        }

        if (formData.saveInfo && (name === 'name' || name === 'email')) {
            localStorage.setItem('commentName', name === 'name' ? newValue : formData.name);
            localStorage.setItem('commentEmail', name === 'email' ? newValue : formData.email);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.comment) {
            alert('Please fill in all required fields.');
            return;
        }

        const newComment = {
            id: uuidv4(),
            name: formData.name,
            email: formData.email,
            comment: formData.comment,
            date: new Date().toLocaleString(),
            replyTo: replyingTo,
        };

        setComments(prevComments => {
            let updatedComments = [...prevComments, newComment];

            if (replyingTo) {
                updatedComments = prevComments.map(comment => {
                    if (comment.id === replyingTo) {
                        return { ...comment, replies: [...(comment.replies || []), newComment] };
                    }
                    return comment;
                });
            }

            updateCommentCount(updatedComments.length + initialCommentCount); // Account for initial comments
            return updatedComments;
        });

        setFormData({
            name: '',
            email: '',
            comment: '',
            saveInfo: formData.saveInfo,
        });
        setReplyingTo(null);
    };

    const handleReply = (commentId) => {
        setReplyingTo(commentId);
    };

    const commentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
        exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeInOut" } },
    };


    const renderComments = (comments, parentId = null) => {
        return (
            <AnimatePresence>
                {comments
                    .filter(comment => comment.replyTo === parentId)
                    .map(comment => (
                        <motion.div
                            key={comment.id}
                            className="bg-white p-4 max-w-2xl rounded-xl space-y-3 shadow-md border border-slate-300"
                            variants={commentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <h3 className="text-base font-semibold capitalize text-primary">{comment.name} Says : </h3>
                            <p className="text-light-blue font-medium text-base capitalize">{comment.comment}</p>
                            <p className="text-small font-medium text-primary">{comment.date}</p>

                            <button
                                onClick={() => handleReply(comment.id)}
                                className="bg-light-blue hover:bg-blue-900 text-white font-bold py-2 px-10 inline-block rounded-lg transition-colors ease-in duration-200"
                            >
                                Reply
                            </button>

                            {comment.replies && renderComments(comment.replies, comment.id)}
                        </motion.div>
                    ))}
            </AnimatePresence>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-2">Leave a Reply</h2>
            <p className="text-small font-normal text-gray-500 mb-4">
                Your email address will not be published. Required fields are marked *
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-primary text-small font-medium mb-1">Comment *</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="5"
                        value={formData.comment}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:bg-[#f7f7f7] focus:outline-none focus:border-[#2A27E9]"
                        required
                    />
                </div>

                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                        <label htmlFor="name" className="block text-primary text-small font-medium mb-1">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:bg-[#f7f7f7] focus:outline-none focus:border-[#2A27E9]"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="email" className="block text-primary text-small font-medium mb-1">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:bg-[#f7f7f7] focus:outline-none focus:border-[#2A27E9]"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="saveInfo"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="mr-2 border border-gray-300 rounded"
                    />
                    <label htmlFor="saveInfo" className="text-primary text-small">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>

                <button type="submit" className="bg-light-blue text-white py-2 px-6 rounded-md hover:bg-blue-900 transition-colors duration-200 ease-in focus:outline-none">
                    Post Comment
                </button>
            </form>

            <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
                {renderComments(comments, null)}
            </div>
        </div>
    );
};

export default BlogReply;