import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import Review from './Review';
import { IoMdMail } from 'react-icons/io';
import { BiSolidMap } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

const Contact = () => {
    const [status, setStatus] = useState("idle");

    const handleClick = () => {
        if (status === "idle") {
            setStatus("loading");
            setTimeout(() => setStatus("checked"), 1000);
        }
    };

    // Form Input State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    //Handle Input Change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Clear specific error when the user starts to type in that field
        setErrors({ ...errors, [id]: '' });

    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required';
            isValid = false;
        }
        if (!formData.website.trim()) {
            tempErrors.website = "Website URL is Required"
            isValid = false;
        }
        if (!formData.message.trim()) {
            tempErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm(); // Validate form
        if (isValid && !isSubmitting) {
            setIsSubmitting(true);
            try {
                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbxbXucJkwfB9zFoRyzfS_fJHWWNvADmxJBQWiE_src/dev",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }
                );

                if (response.ok) {
                    toast.success("Form submitted Successfully!", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        website: "",
                        message: "",
                    });
                    setErrors({});
                } else {
                    toast.error("Failed to submit the form!", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                    });
                    console.error("Failed to submit the form:", response.statusText);
                }
            } catch (error) {
                toast.error("An error occurred during form submission!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
                console.error("Error during form submission:", error);
            }
            finally {
                setIsSubmitting(false)
            }
        } else {
            toast.error('Please fix the errors in the form!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
    };
    return (
        <>
            <section className="bg-[#c3d8ff] py-10">
                <div className="container mx-auto">
                    <div className="flex justify-between lg:flex-row flex-col">
                        {/* Left Side - Text Content */}
                        <div className="space-y-6 lg:max-w-lg">
                            <h2 className="text-light-blue text-4xl font-bold">Get In Touch</h2>
                            <p className="text-primary md:text-medium text-small font-normal leading-5 md:leading-6">
                                Have questions about our WordPress maintenance plans? Want to discuss how we can
                                keep your site secure, fast, and updated? Fill out the form below or reach out to
                                us using any of the options provided. We're here to help!
                            </p>
                            <div className="space-y-3 flex flex-col">
                                <a href='mailto:info@vcga.com' className="lg:text-small text-xs flex items-center gap-2 font-medium text-primary">
                                    <FiMail className='lg:size-5 text-slate-700/70' />
                                    info@vcga.czom
                                </a>
                                <a href='#' className="lg:text-small text-xs flex items-center gap-2 text-primary font-medium">
                                    <LuMapPin className='lg:size-5 text-slate-700/70' />
                                    279 high street north london
                                </a>
                            </div>
                            <div className='py-10'>
                                <h3 className="text-primary md:text-basic text-base font-bold mb-4 md:text-left text-center">Follow Us on Social Media</h3>
                                <div className='flex justify-center md:justify-start gap-5'>
                                    <a href="https://www.facebook.com/people/VCGA/61572283934920/" className='md:p-3 p-2 bg-[#3B5998] rounded-md hover:bg-blue-700 transition-all ease-in duration-200'>
                                        <FaFacebook className='md:size-5 size-4 text-white' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/vcgauk/about/?viewAsMember=true" className='md:p-3 p-2 bg-[#0077B5] rounded-md hover:bg-sky-700 transition-all ease-in duration-200'>
                                        <FaLinkedin className='md:size-5 size-4 text-white' />
                                    </a>
                                    <a href="https://x.com/VCGAPVTLTD" className='md:p-3 p-2 bg-black rounded-md hover:bg-dark-black transition-all ease-in duration-200'>
                                        <FaXTwitter className='md:size-5 size-4 text-white' />
                                    </a>
                                    <a href="mailto:info@vcga.com" className='md:p-3 p-2 bg-[#EA4335] rounded-md hover:bg-red-700 transition-all ease-in duration-200'>
                                        <GrMail className='md:size-5 size-4 text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form-Field */}
                        <div className="bg-white rounded-2xl md:p-10 p-4 lg:max-w-md shadow-lg border border-slate-300">
                            <h3 className="text-primary text-base font-bold mb-4">
                                Get in Touch with Our WordPress Experts
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-3 text-primary">
                                <div>
                                    <label htmlFor="name" className="block font-medium">Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.name ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block  font-medium">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.email ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block  font-medium">Subject*</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.subject ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label htmlFor="website" className="block  font-medium">Website URL(Optional)</label>
                                    <input type="text" id="website" value={formData.website}
                                        onChange={handleInputChange}
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg ${errors.website ? 'border-red-500' : ''
                                            }`} />
                                    {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block  font-medium">Message</label>
                                    <textarea id="message" rows="5" value={formData.message}
                                        onChange={handleInputChange}
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-lg resize-none ${errors.message ? 'border-red-500' : ''
                                            }`}></textarea>
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                <button type="submit" disabled={isSubmitting} className={`bg-light-blue text-white w-full md:py-4 py-2.5 font-medium rounded-lg hover:bg-[#103498] transition-all ease-in duration-200 focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    {isSubmitting ? "Sending..." : "Send My Request"}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
            <Review />
        </>
    );
};

export default Contact;

// import React, { useState } from 'react';
// import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
// import { IoMdMail } from "react-icons/io";
// import { BiSolidMap } from "react-icons/bi";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { GrMail } from "react-icons/gr";


// const Contact = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData({ ...formData, [id]: value });
//         setErrors({ ...errors, [id]: '' });
//     };

//     const validateForm = () => {
//         let tempErrors = {};
//         let isValid = true;

//         if (!formData.name.trim()) {
//             tempErrors.name = 'Name is required';
//             isValid = false;
//         }
//         if (!formData.email.trim()) {
//             tempErrors.email = 'Email is required';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = 'Invalid email';
//             isValid = false;
//         }
//         if (!formData.message.trim()) {
//             tempErrors.message = 'Message is required';
//             isValid = false;
//         }

//         setErrors(tempErrors);
//         return isValid;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validateForm() && !isSubmitting) {
//             setIsSubmitting(true);
//             toast.success("Message sent successfully!");
//             setTimeout(() => setIsSubmitting(false), 2000);
//         } else {
//             toast.error("Please fix the errors.");
//         }
//     };

//     return (
//         <section className="relative bg-white py-16 flex justify-center items-center">
//             <div className="w-full max-w-5xl bg-blue-500 rounded-xl p-6 flex flex-col md:flex-row gap-10">
//                 {/* Contact Details */}
//                 <div className="w-full md:w-1/2 text-white space-y-6">
//                     <h2 className="text-3xl font-bold">Get in Touch</h2>
//                     <p className="text-small font-medium">Have questions about our WordPress maintenance plans? Want to discuss how we can
//                         keep your site secure, fast, and updated? Fill out the form below or reach out to                                 us using any of the options provided. We're here to help!.</p>
//                     <div className="space-y-3">
//                         <p className="flex items-center gap-2"><IoMdMail /> info@vcga.com</p>
//                         <p className="flex items-center gap-2"><BiSolidMap /> 279 High Street, London</p>
//                     </div>
//                     <div className="flex gap-4 mt-4">
//                         <a href="#" className="p-3 bg-blue-600 rounded-full hover:bg-blue-800"><FaFacebookF /></a>
//                         <a href="#" className="p-3 bg-sky-600 rounded-full hover:bg-sky-800"><FaLinkedinIn /></a>
//                         <a href="#" className="p-3 bg-black rounded-full hover:bg-gray-800"><FaXTwitter /></a>
//                         <a href="#" className="p-3 bg-red-500 rounded-full hover:bg-gray-800"><GrMail /></a>
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
//                     <h3 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <input type="text" id="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
//                         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//                         <input type="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//                         <textarea id="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" className={`w-full p-3 rounded-lg border resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`} rows="5"></textarea>
//                         {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

//                         <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-800 transition">
//                             {isSubmitting ? 'Sending...' : 'Submit'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;
