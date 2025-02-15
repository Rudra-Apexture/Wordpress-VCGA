// import React, { useState } from 'react';
// import HighlightedHeading from '../../components/HighlightedHeading';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';

// const Tooltip = ({ content, isVisible }) => {
//     return (
//         <div
//             className={`term-tooltip-content bg-white border border-gray-300 rounded-xl absolute md:left-4 left-0 md:text-small text-xxs text-primary font-medium md:top-10 top-14 z-10 p-5 shadow-main transform transition-transform duration-300 ease-in pointer-events-none ${isVisible ? 'translate-y-0' : '-translate-y-2'
//                 }`}
//             style={{
//                 opacity: isVisible ? 1 : 0, // Maintain opacity for transition
//             }}
//         >
//             {content}
//         </div>
//     );
// };

// const ComparePlan = () => {
//     const planData = [
//         {
//             feature: "High Speed SiteGround hosting free",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔"
//         },
//         {
//             feature: "WordPress core, themes, and plugins Updates",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Core, Themes and Plugin file update for your WordPress site. everyday by our Team Tested & Reviewed."

//         },
//         {
//             feature: "Cloud Backup",
//             silver: "14 Days",
//             gold: "30 Days",
//             platinum: "30 Days",
//             tooltip: "Cloud Backup for your WordPress site"
//         },
//         {
//             feature: "Uptime Monitoring",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Uptime Monitoring for your WordPress site"
//         },
//         {
//             feature: "Speed & Performance Optimization",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Speed & Performance Optimization for your WordPress site"
//         },
//         {
//             feature: "Version Control",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Version Control for your WordPress site"
//         },
//         {
//             feature: "Activity Log",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Activity Log for your WordPress site"
//         },
//         {
//             feature: "Database Management",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Database Management for your WordPress site"
//         },
//         {
//             feature: "Git Management",
//             silver: "",
//             gold: "",
//             platinum: "✔",
//             tooltip: "Git Management for your WordPress site"
//         },
//         {
//             feature: "Image Optimization",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Image Optimization for your WordPress site"
//         },
//         {
//             feature: "Monthly SEO Reports",
//             silver: "",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Monthly SEO Reports for your WordPress site"
//         },
//         {
//             feature: "Ongoing CRO strategies",
//             silver: "",
//             gold: "",
//             platinum: "✔",
//             tooltip: "Ongoing CRO strategies for your WordPress site"
//         },
//         {
//             feature: "Detailed SEO audits",
//             silver: "",
//             gold: "",
//             platinum: "✔",
//             tooltip: "Detailed SEO audits for your WordPress site"
//         },
//         {
//             feature: "WooCommerce Optimization",
//             silver: "",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "WooCommerce Optimization for your WordPress site"
//         },
//         {
//             feature: "Site Maintenance Report",
//             silver: "Monthly",
//             gold: "Bi-Weekly",
//             platinum: "Weekly Comprehensive",
//             tooltip: "Site Maintenance Report for your WordPress site"
//         },
//         {
//             feature: "24/7 Support",
//             silver: "Email Support",
//             gold: "Email & Chat Support",
//             platinum: "Email, Chat & Call Support",
//             tooltip: "24/7 Support for your WordPress site"
//         },
//         {
//             feature: "Advanced (Firewall, Complete Malware )",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "Advanced (Firewall, Complete Malware ) for your WordPress site"
//         },
//         {
//             feature: "24/7 real-time security monitoring",
//             silver: "✔",
//             gold: "✔",
//             platinum: "✔",
//             tooltip: "24/7 real-time security monitoring for your WordPress site"
//         }
//     ];

//     const planTypes = ["silver", "gold", "platinum"];

//     return (
//         <section className='Pricing-Plan md:pt-10 pt-5'>
//             <div className='container mx-auto'>
//                 <div className='flex justify-center items-center'>
//                     <HighlightedHeading
//                         mainText='Compare '
//                         highlightedText='Plans '
//                         center={true}

//                     />
//                 </div>
//             </div>

//             <div className='lg:max-w-7xl mx-auto bg-white shadow-main rounded-lg overflow-hidden py-10'>
//                 {/* <!-- Pricing Table --> */}
//                 <div className='lg:block hidden'>
//                     <table className='table-auto w-full text-left border-collapse'>
//                         <thead>
//                             <tr>
//                                 <th className="px-6 py-4 lg:block hidden">
//                                 </th>
//                                 <th>
//                                     <button className='lg:px-20 px-10 rounded-lg py-2 text-[#4B494B] text-medium bg-[#C9C9C9] flex items-center gap-2'>
//                                         <img src={ring} alt="" />
//                                         Silver
//                                     </button>
//                                 </th>
//                                 <th>
//                                     <button className='lg:px-20 px-10 rounded-lg py-2 text-[#E4B200] text-medium bg-[#F7E8B3] flex items-center gap-2'>
//                                         <img src={gold} alt="" />
//                                         Gold
//                                     </button>
//                                 </th>
//                                 <th>
//                                     <button className='lg:px-20 px-10 rounded-lg py-2 text-[#00458A] text-medium bg-[#B3C8DC] flex items-center gap-2'>
//                                         <img src={star} alt="" />
//                                         Platinum
//                                     </button>
//                                 </th>
//                             </tr>
//                         </thead>

//                         <tbody className='lg:text-medium text-small font-normal'>
//                             {planData.map((item, index) => {
//                                 const [isTooltipVisible, setIsTooltipVisible] = useState(false);
//                                 return (
//                                     <tr key={index}>
//                                         <th
//                                             className={`px-6 py-3 border-b border-dashed font-normal relative cursor-help`}
//                                             onMouseEnter={() => setIsTooltipVisible(true)}
//                                             onMouseLeave={() => setIsTooltipVisible(false)}
//                                         >
//                                             {item.feature}
//                                             {item.tooltip && (
//                                                 <Tooltip content={item.tooltip} isVisible={isTooltipVisible} />
//                                             )}
//                                         </th>
//                                         <td className='px-6 py-3 text-center'>{item.silver}</td>
//                                         <td className='px-6 py-3 text-center '>{item.gold}</td>
//                                         <td className='px-6 py-3 text-center'>{item.platinum}</td>
//                                     </tr>
//                                 )
//                             })}
//                             <tr>
//                                 <td></td>
//                                 <td>
//                                     <button className='lg:px-12 text-nowrap rounded-lg py-4 mt-5 text-white text-medium bg-light-blue font-medium capitalize'>
//                                         get started now
//                                     </button>
//                                 </td>
//                                 <td>
//                                     <button className='lg:px-12 text-nowrap rounded-lg lg:block hidden py-4 mt-5 text-white text-medium bg-light-blue font-medium capitalize'>
//                                         get started now
//                                     </button>
//                                 </td>
//                                 <td>
//                                     <button className='lg:px-12 text-nowrap rounded-lg lg:block hidden py-4 mt-5 text-white text-medium bg-light-blue font-medium capitalize'>
//                                         get started now
//                                     </button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Mobile View */}
//                 <div className="lg:hidden block px-4">
//                     <div className='flex flex-col justify-center space-y-4 mb-6'>
//                         {planTypes.map(plan => (
//                             <button key={plan} className={`px-6 py-5 rounded-lg text-medium  flex items-center gap-2  
//                          ${plan === 'silver' ? 'bg-[#C9C9C9] text-[#4B494B]'
//                                     : plan === 'gold' ? 'bg-[#F7E8B3] text-[#E4B200]'
//                                         : 'bg-[#B3C8DC] text-[#00458A]'}`}>
//                                 {plan === 'silver' && <img src={ring} alt="" />}
//                                 {plan === 'gold' && <img src={gold} alt="" />}
//                                 {plan === 'platinum' && <img src={star} alt="" />}
//                                 {plan.charAt(0).toUpperCase() + plan.slice(1)}
//                             </button>
//                         ))}
//                     </div>

//                     {planData.map((item, index) => {
//                         const [isTooltipVisible, setIsTooltipVisible] = useState(false);
//                         return (
//                             <div key={index} className='mb-4 flex justify-between relative '
//                                 onMouseEnter={() => setIsTooltipVisible(true)}
//                                 onMouseLeave={() => setIsTooltipVisible(false)}>
//                                 <h4 className='font-medium border-b border-dashed border-gray-300 relative'>{item.feature}
//                                     {item.tooltip && (
//                                         <Tooltip content={item.tooltip} isVisible={isTooltipVisible} />
//                                     )}
//                                 </h4>

//                                 <div className='flex items-center'>
//                                     {item.silver && <span className='text-primary font-medium text-xs md:text-medium'>
//                                         {item.silver}
//                                     </span>}

//                                 </div>

//                             </div>
//                         )
//                     })}
//                     {/* buttons */}
//                     <div className="flex justify-center mt-5">
//                         <button className='text-nowrap rounded-lg py-3 text-white text-medium bg-light-blue font-medium capitalize'>
//                             get started now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ComparePlan;

// import React, { useState } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';

// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');

//     const plans = ['Silver', 'Gold', 'Platinum'];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' } },
//         { name: 'Uptime Monitoring', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Git Management', included: ['Platinum'] },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', 'Platinum'] }
//     ];

//     const getPlanColor = (plan) => {
//         switch (plan) {
//             case 'Silver':
//                 return 'bg-[#C9C9C9] hover:bg-gray-300';
//             case 'Gold':
//                 return 'bg-[#F7E8B3] hover:bg-yellow-200';
//             case 'Platinum':
//                 return 'bg-[#B3C8DC] hover:bg-blue-200';
//             default:
//                 return 'bg-gray-300 hover:bg-gray-100';
//         }
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-4">
//             {/* Mobile Plan Selection */}
//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan}
//                         onClick={() => setSelectedPlan(plan)}
//                         className={`w-full p-3 rounded-lg text-left ${selectedPlan === plan ? getPlanColor(plan) : 'bg-gray-50'
//                             }`}
//                     >
//                         {plan}
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 {/* Feature Names - Left side on desktop */}
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-12"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3">
//                             <span className="underline decoration-gray-300">
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4 mb-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan}
//                                 className={`p-3 rounded-lg text-center ${getPlanColor(plan)}`}
//                             >
//                                 {plan}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between">
//                                 <div className="underline decoration-gray-300 mb-2">
//                                     {feature.name}
//                                 </div>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="p-3 text-center">
//                                         {feature.values ? (
//                                             feature.values[plan]
//                                         ) : (
//                                             feature.included.includes(plan) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PricingTable;

// import React, { useState } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';
// import HighlightedHeading from '../../components/HighlightedHeading';


// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');

//     const plans = [
//         { name: 'Silver', icon: ring, price: '$19' },
//         { name: 'Gold', icon: gold, price: '$29' },
//         { name: 'Platinum', icon: star, price: '$49' },
//     ];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' } },
//         { name: 'Uptime Monitoring', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Git Management', included: ['Platinum'] },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', 'Platinum'] }
//     ];

//     const getPlanColor = (plan) => {
//         switch (plan) {
//             case 'Silver':
//                 return 'bg-[#C9C9C9] text-[#4B494B] font-bold text-base';
//             case 'Gold':
//                 return 'bg-[#F7E8B3] text-[#E4B200] font-bold text-base';
//             case 'Platinum':
//                 return 'bg-[#B3C8DC] text-[#00458A] font-bold text-base';
//             default:
//                 return 'bg-gray-300';
//         }
//     };

//     return (
//         <div className="max-w-6xl mx-auto md:pt-10 pt-5 px-4">
//             {/* Mobile Plan Selection */}
//             <div className='container mx-auto'>
//                 <div className='flex justify-center items-center mb-10'>
//                     <HighlightedHeading
//                         mainText='Compare '
//                         highlightedText='Plans '
//                         center={true}

//                     />
//                 </div>
//             </div>

//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan.name}
//                         onClick={() => setSelectedPlan(plan.name)}
//                         className={`w-full p-3 rounded-lg text-left ${selectedPlan === plan.name ? getPlanColor(plan.name) : 'bg-gray-50'
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                             <span>{plan.name}</span>
//                         </div>
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 {/* Feature Names - Left side on desktop */}
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-12"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3">
//                             <span className="underline decoration-gray-300">
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4 mb-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className={`p-3 rounded-lg text-center ${getPlanColor(plan.name)}`}
//                             >
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <img src={plan.icon} alt={plan.name} className="size-6" />
//                                     <span>{plan.name}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between">
//                                 <div className="underline decoration-gray-300 mb-2">
//                                     {feature.name}
//                                 </div>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="p-3 text-center">
//                             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                                 Choose {selectedPlan} Plan
//                             </button>
//                         </div>
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan.name} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="p-3 text-center">
//                                         {feature.values ? (
//                                             feature.values[plan.name]
//                                         ) : (
//                                             feature.included.includes(plan.name) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PricingTable;


// import React, { useState } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';
// import { Link } from 'react-router-dom';

// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');

//     const plans = [
//         { name: 'Silver', icon: ring, price: '$19' },
//         { name: 'Gold', icon: gold, price: '$29' },
//         { name: 'Platinum', icon: star, price: '$49' },
//     ];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' } },
//         { name: 'Uptime Monitoring', values: { Silver: '✔', Gold: '✔', Platinum: '✔' } },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Git Management', included: ['Platinum'] },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', ''] },
//         { name: 'Monthly SEO Reports', included: ['', 'Gold', 'Platinum'] },
//         { name: 'Ongoing CRO strategies', included: ['', '', 'Platinum'] },
//         { name: 'Detailed SEO audits', included: ['', '', 'Platinum'] },
//         { name: 'Google Analytics Integration', included: ['', '', 'Platinum'] },
//         { name: 'WooCommerce Optimization', included: ['', 'Gold', 'Platinum'] },
//         { name: 'Cart Abandonment Solutions', included: ['', 'Gold', 'Platinum'] },
//         { name: 'Secure Payment Gateway Integration', included: ['', '', 'Platinum'] },
//         { name: 'Performance and Speed Optimization', included: ['', '', 'Platinum'] },
//         { name: 'White-Label Options for Agency', included: ['', '', 'Platinum'] },
//         { name: 'Advanced (Firewall, Malware Scan & Removal )', included: ['Silver', 'Gold', 'Platinum'] },
//         { name: '24/7 real-time security monitoring', included: ['Silver', 'Gold', ''] },
//     ];

//     const getPlanColor = (planName) => {
//         switch (planName) {
//             case 'Silver':
//                 return 'bg-[#C9C9C9] text-[#4B494B] font-bold text-base';
//             case 'Gold':
//                 return 'bg-[#F7E8B3] text-[#E4B200] font-bold text-base';
//             case 'Platinum':
//                 return 'bg-[#B3C8DC] text-[#00458A] font-bold text-base';
//             default:
//                 return 'bg-gray-300 ';
//         }
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-4">
//             {/* Mobile Plan Selection */}
//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan.name}
//                         onClick={() => setSelectedPlan(plan.name)}
//                         className={`w-full p-3 rounded-lg text-left ${selectedPlan === plan.name ? getPlanColor(plan.name) : 'bg-gray-300'
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                             <span>{plan.name}</span>
//                         </div>
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-14"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3 flex items-center"> {/* Added flex and items-center */}
//                             <span className="border-b-2 border-dotted">
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className={`p-3.5 rounded-lg text-center ${getPlanColor(plan.name)}`}
//                             >
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                     <span>{plan.name}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between items-center">  {/* Added items-center */}
//                                 <div className="underline decoration-gray-300 mb-2">
//                                     {feature.name}
//                                 </div>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="p-3 text-center">
//                             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                                 Get Started Now!
//                             </button>
//                         </div>
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan.name} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="text-center p-1.5">
//                                         {feature.values ? (
//                                             feature.values[plan.name]
//                                         ) : (
//                                             feature.included.includes(plan.name) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PricingTable;


// import React, { useState } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';
// import { Link } from 'react-router-dom';

// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');
//     const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

//     const plans = [
//         { name: 'Silver', icon: ring, price: '$19' },
//         { name: 'Gold', icon: gold, price: '$29' },
//         { name: 'Platinum', icon: star, price: '$49' },
//     ];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'], description: 'Benefit from top-tier hosting on SiteGround' },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'], description: 'Automatic updates keep your WordPress site secure and up-to-date' },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' }, description: 'Regular backups ensure your data is safe' },
//         { name: 'Uptime Monitoring', values: { Silver: '✔', Gold: '✔', Platinum: '✔' }, description: '24/7 monitoring to ensure your site is always online' },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'Optimize your website for fast loading times and peak performance' },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'], description: 'Track changes and revert to previous versions of your site' },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'], description: 'Monitor all activities on your website' },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'], description: 'Tools for managing and optimizing your website database' },
//         { name: 'Git Management', included: ['Platinum'], description: 'Version control using Git for advanced development workflows' },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'Automatically optimize images for faster loading times' },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', ''], description: 'Track keyword rankings to optimize your content' },
//         { name: 'Monthly SEO Reports', included: ['', 'Gold', 'Platinum'], description: 'Receive detailed SEO reports every month' },
//         { name: 'Ongoing CRO strategies', included: ['', '', 'Platinum'], description: 'Continuous Conversion Rate Optimization strategies' },
//         { name: 'Detailed SEO audits', included: ['', '', 'Platinum'], description: 'Comprehensive SEO audits to identify areas for improvement' },
//         { name: 'Google Analytics Integration', included: ['', '', 'Platinum'], description: 'Seamless integration with Google Analytics' },
//         { name: 'WooCommerce Optimization', included: ['', 'Gold', 'Platinum'], description: 'Optimize your WooCommerce store for sales' },
//         { name: 'Cart Abandonment Solutions', included: ['', 'Gold', 'Platinum'], description: 'Reduce cart abandonment and increase sales' },
//         { name: 'Secure Payment Gateway Integration', included: ['', '', 'Platinum'], description: 'Integrate secure payment gateways' },
//         { name: 'Performance and Speed Optimization', included: ['', '', 'Platinum'], description: 'Advanced techniques to boost performance' },
//         { name: 'White-Label Options for Agency', included: ['', '', 'Platinum'], description: 'Offer services under your own brand' },
//         { name: 'Advanced (Firewall, Malware Scan & Removal )', included: ['Silver', 'Gold', 'Platinum'], description: 'Robust security measures to protect your site' },
//         { name: '24/7 real-time security monitoring', included: ['Silver', 'Gold', ''], description: 'Constant monitoring for security threats' },

//     ];

//     const getPlanColor = (planName) => {
//         switch (planName) {
//             case 'Silver':
//                 return 'bg-[#C9C9C9] text-[#4B494B] font-bold text-base';
//             case 'Gold':
//                 return 'bg-[#F7E8B3] text-[#E4B200] font-bold text-base';
//             case 'Platinum':
//                 return 'bg-[#B3C8DC] text-[#00458A] font-bold text-base';
//             default:
//                 return 'bg-gray-300 ';
//         }
//     };

//     const handleMouseEnter = (e, text) => {
//         const rect = e.target.getBoundingClientRect();
//         setTooltip({
//             visible: true,
//             text: text,
//             x: rect.left + window.scrollX, // Use window.scrollX to account for scrolling
//             y: rect.bottom + window.scrollY + 5, // Adjust for desired position
//         });
//     };

//     const handleMouseLeave = () => {
//         setTooltip({ visible: false, text: '', x: 0, y: 0 });
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-4">
//             {/* Mobile Plan Selection */}
//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan.name}
//                         onClick={() => setSelectedPlan(plan.name)}
//                         className={`w-full p-3 rounded-lg text-left ${selectedPlan === plan.name ? getPlanColor(plan.name) : 'bg-gray-300'
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                             <span>{plan.name}</span>
//                         </div>
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-14"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3 flex items-center"> {/* Added flex and items-center */}
//                             <span
//                                 className="border-b-2 border-dotted cursor-help"
//                                 onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className={`p-3.5 rounded-lg text-center ${getPlanColor(plan.name)}`}
//                             >
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                     <span>{plan.name}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between items-center">  {/* Added items-center */}
//                                 <span
//                                     className="underline decoration-gray-300 mb-2 cursor-pointer"
//                                     onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                     onMouseLeave={handleMouseLeave}
//                                 >
//                                     {feature.name}
//                                 </span>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="p-3 text-center">
//                             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                                 Get Started Now!
//                             </button>
//                         </div>
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan.name} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="text-center p-1.5">
//                                         {feature.values ? (
//                                             feature.values[plan.name]
//                                         ) : (
//                                             feature.included.includes(plan.name) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {tooltip.visible && (
//                 <div
//                     className="absolute bg-gray-100 border border-gray-300 p-2 rounded shadow-md z-10 transition-opacity duration-200"
//                     style={{
//                         top: tooltip.y,
//                         left: tooltip.x,
//                         opacity: 1, // Ensure the opacity is set to 1 when visible
//                         pointerEvents: 'none', // prevent tooltip from capturing hover events
//                     }}
//                 >
//                     {tooltip.text}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PricingTable;


// import React, { useState, useRef, useEffect } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';
// import { Link } from 'react-router-dom';
// import { GiCheckMark } from "react-icons/gi";


// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');
//     const [tooltip, setTooltip] = useState({
//         visible: false,
//         text: '',
//         x: 0,
//         y: 0,
//         translateY: -100 // Start off-screen to the left
//     });

//     const plans = [
//         { name: 'Silver', icon: ring },
//         { name: 'Gold', icon: gold },
//         { name: 'Platinum', icon: star },
//     ];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'], description: 'Your visitors will enjoy lightning-quick loading times and a seamless browsing experience' },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'], description: 'Core, Themes and Plugin file update for your WordPress site. everyday by our Team Tested & Reviewed.' },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' }, description: 'Your Backups are Saved Daily on our Secure Cloud Storage, If Anything Happens, We have core File & Database Store.Also We have Secure Offsite Storage with 14-days Retention. If you want to enhance your site security with a 30-day retention period and access additional services, simply upgrade your plan.' },
//         { name: 'Uptime Monitoring', values: { Silver: '✔', Gold: '✔', Platinum: '✔' }, description: 'Automated Site Checks 24/7 a team of WordPress Expert available to help at any Time with Immediate alerts and quick issue Resolution.' },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'You Don\'t Worry about that Our Engineers to achive Loading times Under 2 Second. And Keeps your Site Fast.' },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'], description: 'We offer version control services to keep track of changes, facilitate collaborative work, and guarantee that the code and content of your website are always current, with the option to revert to previous versions if necessary.' },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'], description: 'WordPress Activity log Premium License. The most Comprehensive wordpress Activity log Plugin. To keep a Record of Useful Changes, Ease, Trubleshooting & Identify Suspicious behaviour early to thwart malicious Hacks.' },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'], description: 'Facilitates of the your WordPress database by enabling backups, optimization, and migration. It ensures data integrity during updates and helps restore the site in case of failures or corruption.' },
//         { name: 'Git Management', included: ['Platinum'], description: 'Are you Palnning your WordPress site that\'s integrated with Git? We\'ll help you commit all the plugin, theme, and core file updates! Proactive website edit commits beyond normal updates available at an additional hourly rate.' },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'Our team will Compress all your Images Correct Size of the Image for the Container. We use lossless compression to optimize all your images without sacrificing quality.' },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', ''], description: 'Our SEO experts provide keyword tracking services to monitor up to 10 keywords, helping you analyze performance and improve your website\'s search engine rankings effectively.' },
//         { name: 'Monthly SEO Reports', included: ['', 'Gold', 'Platinum'], description: 'We provide monthly SEO reports with detailed insights into your rankings and actionable suggestions for improvement.' },
//         { name: 'Ongoing CRO strategies', included: ['', '', 'Platinum'], description: 'Suggest best ongoing CRO strategies to boost conversions, enhance engagement, and drive more traffic to high-volume websites.' },
//         { name: 'Detailed SEO audits', included: ['', '', 'Platinum'], description: 'Our SEO Expert conduct detailed SEO audits to identify opportunities, fix issues, and optimize your website for better performance and useful for search engine rankings.' },
//         { name: 'Google Analytics Integration', included: ['', '', 'Platinum'], description: 'Google Analytics integration to provide you with valuable insights into your website\'s traffic, user behavior, and overall performance, to helping you make data-driven decisions for growth.' },
//         { name: 'WooCommerce Optimization', included: ['', 'Gold', 'Platinum'], description: 'Is your online store running at its full potential? Our WooCommerce Optimization service provides specialized support for online stores, ensuring faster load times, improved functionality, and expert assistance for seamless customer experiences.' },
//         { name: 'Cart Abandonment Solutions', included: ['', 'Gold', 'Platinum'], description: 'With our Cart Abandonment Solutions, we set up and manage effective strategies to recover lost sales, ensuring that your customers return and complete their purchases, boosting your store\'s revenue and growth.' },
//         { name: 'Secure Payment Gateway Integration', included: ['', '', 'Platinum'], description: 'We provide Secure Payment Gateway Integration, ensuring safe, seamless transactions for your customers, enhancing trust and boosting conversions on your online store.' },
//         { name: 'Performance and Speed Optimization', included: ['', '', 'Platinum'], description: 'We specialize in Performance and Speed Optimization, utilizing caching and CDN integration to enhance site loading times, ensuring a faster and smoother user experience for your visitors.' },
//         { name: 'White-Label Options for Agency', included: ['', '', 'Platinum'], description: 'Our White-Label Solutions enable agencies to deliver premium WordPress maintenance services under your brand, ensuring a professional, customized experience for your clients.' },
//         { name: 'Advanced (Firewall, Malware Scan & Removal )', included: ['Silver', 'Gold', 'Platinum'], description: 'Security Monitoring comes with a strong firewall, full malware scanning, and complete removal for complete protection from various threats against your website, ensuring your data and users are always secure.' },
//         { name: '24/7 real-time security monitoring', included: ['Silver', 'Gold', ''], description: 'we make sure that your website is continuously watched for any threats or exposures. 24/7 Real-Time Security Monitoring, so your site is made secure at all times.' },
//     ];

//     const getPlanColor = (planName) => {
//         switch (planName) {
//             case 'Silver':
//                 return 'bg-[#C9C9C9] text-[#4B494B] font-bold text-base';
//             case 'Gold':
//                 return 'bg-[#F7E8B3] text-[#E4B200] font-bold text-base';
//             case 'Platinum':
//                 return 'bg-[#B3C8DC] text-[#00458A] font-bold text-base';
//             default:
//                 return 'bg-gray-300 ';
//         }
//     };

//     const handleMouseEnter = (e, text) => {
//         const rect = e.target.getBoundingClientRect();
//         setTooltip({
//             visible: true,
//             text: text,
//             x: rect.left + window.scrollX,
//             y: rect.bottom + window.scrollY + 5,
//             translateY: -100 // Reset translateY for animation
//         });
//         // Trigger the animation to start after a slight delay
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, translateY: 0 }));
//         }, 10);
//     };

//     const handleMouseLeave = () => {
//         // Start the animation to move the tooltip out of the screen
//         setTooltip(prev => ({ ...prev, translateY: -100 }));
//         // After the animation, hide the tooltip
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, visible: false }));
//         }, 200); // Make sure the timeout is same as the transition duration
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             {/* Mobile Plan Selection */}
//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan.name}
//                         onClick={() => setSelectedPlan(plan.name)}
//                         className={`w-full p-3 rounded-lg text-left ${selectedPlan === plan.name ? getPlanColor(plan.name) : 'bg-white'
//                             }`}
//                     >
//                         <div className="flex items-center space-x-2">
//                             <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                             <span>{plan.name}</span>
//                             {/* tick-mark */}
//                             <GiCheckMark className='size-4' />
//                         </div>
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-14"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3 flex items-center"> {/* Added flex and items-center */}
//                             <span
//                                 className="border-b-2 border-dotted cursor-pointer"
//                                 onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className={`p-3.5 rounded-lg text-center ${getPlanColor(plan.name)}`}
//                             >
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                     <span>{plan.name}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between items-center">
//                                 <span
//                                     className="border-b-2 border-dotted cursor-pointer"
//                                     onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                     onMouseLeave={handleMouseLeave}
//                                 >
//                                     {feature.name}
//                                 </span>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="p-3 text-center">
//                             <Link to="/services" className="bg-light-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan.name} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="text-center p-1.5">
//                                         {feature.values ? (
//                                             feature.values[plan.name]
//                                         ) : (
//                                             feature.included.includes(plan.name) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Show Tooltip */}
//             {tooltip.visible &&
//                 (
//                     <div
//                         className="absolute bg-white font-normal text-xs border max-w-md border-gray-300 lg:p-2.5 p-1.5 rounded-md shadow-md z-10"
//                         style={{
//                             top: tooltip.y,
//                             left: tooltip.x,
//                             transform: `translateY(${tooltip.translateY}%)`,
//                             transition: 'transform 0.5s ease-in-out',
//                             pointerEvents: 'none'
//                         }}
//                     >
//                         {tooltip.text}
//                     </div>
//                 )}
//         </div>
//     );
// };

// export default PricingTable;


// import React, { useState, useRef, useEffect } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';
// import { Link } from 'react-router-dom';
// import { GiCheckMark } from "react-icons/gi";


// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');
//     const [tooltip, setTooltip] = useState({
//         visible: false,
//         text: '',
//         x: 0,
//         y: 0,
//         translateY: -100 // Start off-screen to the left
//     });

//     const plans = [
//         { name: 'Silver', icon: ring },
//         { name: 'Gold', icon: gold },
//         { name: 'Platinum', icon: star },
//     ];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'], description: 'Your visitors will enjoy lightning-quick loading times and a seamless browsing experience' },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'], description: 'Core, Themes and Plugin file update for your WordPress site. everyday by our Team Tested & Reviewed.' },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' }, description: 'Your Backups are Saved Daily on our Secure Cloud Storage, If Anything Happens, We have core File & Database Store.Also We have Secure Offsite Storage with 14-days Retention. If you want to enhance your site security with a 30-day retention period and access additional services, simply upgrade your plan.' },
//         { name: 'Uptime Monitoring', values: { Silver: '✔', Gold: '✔', Platinum: '✔' }, description: 'Automated Site Checks 24/7 a team of WordPress Expert available to help at any Time with Immediate alerts and quick issue Resolution.' },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'You Don\'t Worry about that Our Engineers to achive Loading times Under 2 Second. And Keeps your Site Fast.' },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'], description: 'We offer version control services to keep track of changes, facilitate collaborative work, and guarantee that the code and content of your website are always current, with the option to revert to previous versions if necessary.' },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'], description: 'WordPress Activity log Premium License. The most Comprehensive wordpress Activity log Plugin. To keep a Record of Useful Changes, Ease, Trubleshooting & Identify Suspicious behaviour early to thwart malicious Hacks.' },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'], description: 'Facilitates of the your WordPress database by enabling backups, optimization, and migration. It ensures data integrity during updates and helps restore the site in case of failures or corruption.' },
//         { name: 'Git Management', included: ['Platinum'], description: 'Are you Palnning your WordPress site that\'s integrated with Git? We\'ll help you commit all the plugin, theme, and core file updates! Proactive website edit commits beyond normal updates available at an additional hourly rate.' },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'Our team will Compress all your Images Correct Size of the Image for the Container. We use lossless compression to optimize all your images without sacrificing quality.' },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', ''], description: 'Our SEO experts provide keyword tracking services to monitor up to 10 keywords, helping you analyze performance and improve your website\'s search engine rankings effectively.' },
//         { name: 'Monthly SEO Reports', included: ['', 'Gold', 'Platinum'], description: 'We provide monthly SEO reports with detailed insights into your rankings and actionable suggestions for improvement.' },
//         { name: 'Ongoing CRO strategies', included: ['', '', 'Platinum'], description: 'Suggest best ongoing CRO strategies to boost conversions, enhance engagement, and drive more traffic to high-volume websites.' },
//         { name: 'Detailed SEO audits', included: ['', '', 'Platinum'], description: 'Our SEO Expert conduct detailed SEO audits to identify opportunities, fix issues, and optimize your website for better performance and useful for search engine rankings.' },
//         { name: 'Google Analytics Integration', included: ['', '', 'Platinum'], description: 'Google Analytics integration to provide you with valuable insights into your website\'s traffic, user behavior, and overall performance, to helping you make data-driven decisions for growth.' },
//         { name: 'WooCommerce Optimization', included: ['', 'Gold', 'Platinum'], description: 'Is your online store running at its full potential? Our WooCommerce Optimization service provides specialized support for online stores, ensuring faster load times, improved functionality, and expert assistance for seamless customer experiences.' },
//         { name: 'Cart Abandonment Solutions', included: ['', 'Gold', 'Platinum'], description: 'With our Cart Abandonment Solutions, we set up and manage effective strategies to recover lost sales, ensuring that your customers return and complete their purchases, boosting your store\'s revenue and growth.' },
//         { name: 'Secure Payment Gateway Integration', included: ['', '', 'Platinum'], description: 'We provide Secure Payment Gateway Integration, ensuring safe, seamless transactions for your customers, enhancing trust and boosting conversions on your online store.' },
//         { name: 'Performance and Speed Optimization', included: ['', '', 'Platinum'], description: 'We specialize in Performance and Speed Optimization, utilizing caching and CDN integration to enhance site loading times, ensuring a faster and smoother user experience for your visitors.' },
//         { name: 'White-Label Options for Agency', included: ['', '', 'Platinum'], description: 'Our White-Label Solutions enable agencies to deliver premium WordPress maintenance services under your brand, ensuring a professional, customized experience for your clients.' },
//         { name: 'Advanced (Firewall, Malware Scan & Removal )', included: ['Silver', 'Gold', 'Platinum'], description: 'Security Monitoring comes with a strong firewall, full malware scanning, and complete removal for complete protection from various threats against your website, ensuring your data and users are always secure.' },
//         { name: '24/7 real-time security monitoring', included: ['Silver', 'Gold', ''], description: 'we make sure that your website is continuously watched for any threats or exposures. 24/7 Real-Time Security Monitoring, so your site is made secure at all times.' },
//     ];

//     const getPlanColor = (planName) => {
//         switch (planName) {
//             case 'Silver':
//                 return 'bg-[#C9C9C9] text-[#4B494B] font-bold text-base';
//             case 'Gold':
//                 return 'bg-[#F7E8B3] text-[#E4B200] font-bold text-base';
//             case 'Platinum':
//                 return 'bg-[#B3C8DC] text-[#00458A] font-bold text-base';
//             default:
//                 return 'bg-gray-300 ';
//         }
//     };

//     const handleMouseEnter = (e, text) => {
//         const rect = e.target.getBoundingClientRect();
//         setTooltip({
//             visible: true,
//             text: text,
//             x: rect.left + window.scrollX,
//             y: rect.bottom + window.scrollY + 5,
//             translateY: -100 // Reset translateY for animation
//         });
//         // Trigger the animation to start after a slight delay
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, translateY: 0 }));
//         }, 10);
//     };

//     const handleMouseLeave = () => {
//         // Start the animation to move the tooltip out of the screen
//         setTooltip(prev => ({ ...prev, translateY: -100 }));
//         // After the animation, hide the tooltip
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, visible: false }));
//         }, 200); // Make sure the timeout is same as the transition duration
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             {/* Mobile Plan Selection */}
//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan.name}
//                         onClick={() => setSelectedPlan(plan.name)}
//                         className={`w-full p-3 rounded-lg text-left ${selectedPlan === plan.name ? getPlanColor(plan.name) : 'bg-white'
//                             }`}
//                     >
//                         <div className="flex items-center justify-between space-x-2">
//                             <div className='flex items-center gap-2'>
//                                 <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                 <span>{plan.name}</span>
//                             </div>
//                             {/* tick-mark */}
//                             <div className='active-mark'>
//                                 {selectedPlan === plan.name && <GiCheckMark className='size-4' />}
//                             </div>
//                         </div>
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-14"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3 flex items-center"> {/* Added flex and items-center */}
//                             <span
//                                 className="border-b-2 border-dotted cursor-pointer"
//                                 onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className={`p-3.5 rounded-lg text-center ${getPlanColor(plan.name)}`}
//                             >
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                     <span>{plan.name}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between items-center">
//                                 <span
//                                     className="border-b-2 border-dotted cursor-pointer"
//                                     onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                     onMouseLeave={handleMouseLeave}
//                                 >
//                                     {feature.name}
//                                 </span>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="p-3 text-center">
//                             <Link to="/services" className="bg-light-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan.name} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="text-center p-1.5">
//                                         {feature.values ? (
//                                             feature.values[plan.name]
//                                         ) : (
//                                             feature.included.includes(plan.name) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Show Tooltip */}
//             {tooltip.visible &&
//                 (
//                     <div
//                         className="absolute bg-white font-normal text-xs border max-w-md border-gray-300 lg:p-2.5 p-1.5 rounded-md shadow-md z-10"
//                         style={{
//                             top: tooltip.y,
//                             left: tooltip.x,
//                             transform: `translateY(${tooltip.translateY}%)`,
//                             transition: 'transform 0.5s ease-in-out',
//                             pointerEvents: 'none'
//                         }}
//                     >
//                         {tooltip.text}
//                     </div>
//                 )}
//         </div>
//     );
// };

// export default PricingTable;


// import React, { useState, useRef, useEffect } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';
// import { Link } from 'react-router-dom';
// import { GiCheckMark } from "react-icons/gi";


// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');
//     const [tooltip, setTooltip] = useState({
//         visible: false,
//         text: '',
//         x: 0,
//         y: 0,
//         translateY: -100 // Start off-screen to the left
//     });

//     const plans = [
//         { name: 'Silver', icon: ring },
//         { name: 'Gold', icon: gold },
//         { name: 'Platinum', icon: star },
//     ];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'], description: 'Your visitors will enjoy lightning-quick loading times and a seamless browsing experience' },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'], description: 'Core, Themes and Plugin file update for your WordPress site. everyday by our Team Tested & Reviewed.' },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' }, description: 'Your Backups are Saved Daily on our Secure Cloud Storage, If Anything Happens, We have core File & Database Store.Also We have Secure Offsite Storage with 14-days Retention. If you want to enhance your site security with a 30-day retention period and access additional services, simply upgrade your plan.' },
//         { name: 'Uptime Monitoring', values: { Silver: '✔', Gold: '✔', Platinum: '✔' }, description: 'Automated Site Checks 24/7 a team of WordPress Expert available to help at any Time with Immediate alerts and quick issue Resolution.' },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'You Don\'t Worry about that Our Engineers to achive Loading times Under 2 Second. And Keeps your Site Fast.' },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'], description: 'We offer version control services to keep track of changes, facilitate collaborative work, and guarantee that the code and content of your website are always current, with the option to revert to previous versions if necessary.' },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'], description: 'WordPress Activity log Premium License. The most Comprehensive wordpress Activity log Plugin. To keep a Record of Useful Changes, Ease, Trubleshooting & Identify Suspicious behaviour early to thwart malicious Hacks.' },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'], description: 'Facilitates of the your WordPress database by enabling backups, optimization, and migration. It ensures data integrity during updates and helps restore the site in case of failures or corruption.' },
//         { name: 'Git Management', included: ['Platinum'], description: 'Are you Palnning your WordPress site that\'s integrated with Git? We\'ll help you commit all the plugin, theme, and core file updates! Proactive website edit commits beyond normal updates available at an additional hourly rate.' },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'Our team will Compress all your Images Correct Size of the Image for the Container. We use lossless compression to optimize all your images without sacrificing quality.' },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', ''], description: 'Our SEO experts provide keyword tracking services to monitor up to 10 keywords, helping you analyze performance and improve your website\'s search engine rankings effectively.' },
//         { name: 'Monthly SEO Reports', included: ['', 'Gold', 'Platinum'], description: 'We provide monthly SEO reports with detailed insights into your rankings and actionable suggestions for improvement.' },
//         { name: 'Ongoing CRO strategies', included: ['', '', 'Platinum'], description: 'Suggest best ongoing CRO strategies to boost conversions, enhance engagement, and drive more traffic to high-volume websites.' },
//         { name: 'Detailed SEO audits', included: ['', '', 'Platinum'], description: 'Our SEO Expert conduct detailed SEO audits to identify opportunities, fix issues, and optimize your website for better performance and useful for search engine rankings.' },
//         { name: 'Google Analytics Integration', included: ['', '', 'Platinum'], description: 'Google Analytics integration to provide you with valuable insights into your website\'s traffic, user behavior, and overall performance, to helping you make data-driven decisions for growth.' },
//         { name: 'WooCommerce Optimization', included: ['', 'Gold', 'Platinum'], description: 'Is your online store running at its full potential? Our WooCommerce Optimization service provides specialized support for online stores, ensuring faster load times, improved functionality, and expert assistance for seamless customer experiences.' },
//         { name: 'Cart Abandonment Solutions', included: ['', 'Gold', 'Platinum'], description: 'With our Cart Abandonment Solutions, we set up and manage effective strategies to recover lost sales, ensuring that your customers return and complete their purchases, boosting your store\'s revenue and growth.' },
//         { name: 'Secure Payment Gateway Integration', included: ['', '', 'Platinum'], description: 'We provide Secure Payment Gateway Integration, ensuring safe, seamless transactions for your customers, enhancing trust and boosting conversions on your online store.' },
//         { name: 'Performance and Speed Optimization', included: ['', '', 'Platinum'], description: 'We specialize in Performance and Speed Optimization, utilizing caching and CDN integration to enhance site loading times, ensuring a faster and smoother user experience for your visitors.' },
//         { name: 'White-Label Options for Agency', included: ['', '', 'Platinum'], description: 'Our White-Label Solutions enable agencies to deliver premium WordPress maintenance services under your brand, ensuring a professional, customized experience for your clients.' },
//         { name: 'Advanced (Firewall, Malware Scan & Removal )', included: ['Silver', 'Gold', 'Platinum'], description: 'Security Monitoring comes with a strong firewall, full malware scanning, and complete removal for complete protection from various threats against your website, ensuring your data and users are always secure.' },
//         { name: '24/7 real-time security monitoring', included: ['Silver', 'Gold', ''], description: 'we make sure that your website is continuously watched for any threats or exposures. 24/7 Real-Time Security Monitoring, so your site is made secure at all times.' },
//     ];

//     const getPlanColor = (planName) => {
//         switch (planName) {
//             case 'Silver':
//                 return 'bg-[#C9C9C9] text-[#4B494B] font-bold text-base';
//             case 'Gold':
//                 return 'bg-[#F7E8B3] text-[#E4B200] font-bold text-base';
//             case 'Platinum':
//                 return 'bg-[#B3C8DC] text-[#00458A] font-bold text-base';
//             default:
//                 return 'bg-gray-300 ';
//         }
//     };

//     const handleMouseEnter = (e, text) => {
//         const rect = e.target.getBoundingClientRect();
//         setTooltip({
//             visible: true,
//             text: text,
//             x: rect.left + window.scrollX,
//             y: rect.bottom + window.scrollY + 5,
//             translateY: -100 // Reset translateY for animation
//         });
//         // Trigger the animation to start after a slight delay
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, translateY: 0 }));
//         }, 10);
//     };

//     const handleMouseLeave = () => {
//         // Start the animation to move the tooltip out of the screen
//         setTooltip(prev => ({ ...prev, translateY: -100 }));
//         // After the animation, hide the tooltip
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, visible: false }));
//         }, 200); // Make sure the timeout is same as the transition duration
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             {/* Mobile Plan Selection */}
//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan.name}
//                         onClick={() => setSelectedPlan(plan.name)}
//                         className={`w-full p-3 rounded-lg text-left ${selectedPlan === plan.name ? getPlanColor(plan.name) : 'bg-white'
//                             }`}
//                         style={{ backgroundColor: selectedPlan === plan.name ? getPlanColor(plan.name).split(' ')[0] : 'yellow' }}

//                     >
//                         <div className="flex items-center space-x-2">
//                             <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                             <span>{plan.name}</span>
//                             {/* tick-mark */}
//                             {selectedPlan === plan.name && <GiCheckMark className='size-4' />}
//                         </div>
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-14"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3 flex items-center"> {/* Added flex and items-center */}
//                             <span
//                                 className="border-b-2 border-dotted cursor-pointer"
//                                 onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className={`p-3.5 rounded-lg text-center ${getPlanColor(plan.name)}`}
//                             >
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                     <span>{plan.name}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between items-center">
//                                 <span
//                                     className="border-b-2 border-dotted cursor-pointer"
//                                     onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                     onMouseLeave={handleMouseLeave}
//                                 >
//                                     {feature.name}
//                                 </span>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="p-3 text-center">
//                             <Link to="/services" className="bg-light-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan.name} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="text-center p-1.5">
//                                         {feature.values ? (
//                                             feature.values[plan.name]
//                                         ) : (
//                                             feature.included.includes(plan.name) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Show Tooltip */}
//             {tooltip.visible &&
//                 (
//                     <div
//                         className="absolute bg-white font-normal text-xs border max-w-md border-gray-300 lg:p-2.5 p-1.5 rounded-md shadow-md z-10"
//                         style={{
//                             top: tooltip.y,
//                             left: tooltip.x,
//                             transform: `translateY(${tooltip.translateY}%)`,
//                             transition: 'transform 0.5s ease-in-out',
//                             pointerEvents: 'none'
//                         }}
//                     >
//                         {tooltip.text}
//                     </div>
//                 )}
//         </div>
//     );
// };

// export default PricingTable;

// import React, { useState, useRef, useEffect } from 'react';
// import ring from '../../assets/images/ring.svg';
// import gold from '../../assets/images/gold.svg';
// import star from '../../assets/images/star.svg';
// import { Link } from 'react-router-dom';
// import { GiCheckMark } from "react-icons/gi";


// const PricingTable = () => {
//     const [selectedPlan, setSelectedPlan] = useState('Silver');
//     const [tooltip, setTooltip] = useState({
//         visible: false,
//         text: '',
//         x: 0,
//         y: 0,
//         translateY: -100 // Start off-screen to the left
//     });

//     const plans = [
//         { name: 'Silver', icon: ring, bgColor: '#C9C9C9' },
//         { name: 'Gold', icon: gold, bgColor: '#F7E8B3' },
//         { name: 'Platinum', icon: star, bgColor: '#B3C8DC' },
//     ];

//     const features = [
//         { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'], description: 'Your visitors will enjoy lightning-quick loading times and a seamless browsing experience' },
//         { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'], description: 'Core, Themes and Plugin file update for your WordPress site. everyday by our Team Tested & Reviewed.' },
//         { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' }, description: 'Your Backups are Saved Daily on our Secure Cloud Storage, If Anything Happens, We have core File & Database Store.Also We have Secure Offsite Storage with 14-days Retention. If you want to enhance your site security with a 30-day retention period and access additional services, simply upgrade your plan.' },
//         { name: 'Uptime Monitoring', values: { Silver: '✔', Gold: '✔', Platinum: '✔' }, description: 'Automated Site Checks 24/7 a team of WordPress Expert available to help at any Time with Immediate alerts and quick issue Resolution.' },
//         { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'You Don\'t Worry about that Our Engineers to achive Loading times Under 2 Second. And Keeps your Site Fast.' },
//         { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'], description: 'We offer version control services to keep track of changes, facilitate collaborative work, and guarantee that the code and content of your website are always current, with the option to revert to previous versions if necessary.' },
//         { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'], description: 'WordPress Activity log Premium License. The most Comprehensive wordpress Activity log Plugin. To keep a Record of Useful Changes, Ease, Trubleshooting & Identify Suspicious behaviour early to thwart malicious Hacks.' },
//         { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'], description: 'Facilitates of the your WordPress database by enabling backups, optimization, and migration. It ensures data integrity during updates and helps restore the site in case of failures or corruption.' },
//         { name: 'Git Management', included: ['Platinum'], description: 'Are you Palnning your WordPress site that\'s integrated with Git? We\'ll help you commit all the plugin, theme, and core file updates! Proactive website edit commits beyond normal updates available at an additional hourly rate.' },
//         { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'Our team will Compress all your Images Correct Size of the Image for the Container. We use lossless compression to optimize all your images without sacrificing quality.' },
//         { name: 'Keyword Tracking', included: ['Silver', 'Gold', ''], description: 'Our SEO experts provide keyword tracking services to monitor up to 10 keywords, helping you analyze performance and improve your website\'s search engine rankings effectively.' },
//         { name: 'Monthly SEO Reports', included: ['', 'Gold', 'Platinum'], description: 'We provide monthly SEO reports with detailed insights into your rankings and actionable suggestions for improvement.' },
//         { name: 'Ongoing CRO strategies', included: ['', '', 'Platinum'], description: 'Suggest best ongoing CRO strategies to boost conversions, enhance engagement, and drive more traffic to high-volume websites.' },
//         { name: 'Detailed SEO audits', included: ['', '', 'Platinum'], description: 'Our SEO Expert conduct detailed SEO audits to identify opportunities, fix issues, and optimize your website for better performance and useful for search engine rankings.' },
//         { name: 'Google Analytics Integration', included: ['', '', 'Platinum'], description: 'Google Analytics integration to provide you with valuable insights into your website\'s traffic, user behavior, and overall performance, to helping you make data-driven decisions for growth.' },
//         { name: 'WooCommerce Optimization', included: ['', 'Gold', 'Platinum'], description: 'Is your online store running at its full potential? Our WooCommerce Optimization service provides specialized support for online stores, ensuring faster load times, improved functionality, and expert assistance for seamless customer experiences.' },
//         { name: 'Cart Abandonment Solutions', included: ['', 'Gold', 'Platinum'], description: 'With our Cart Abandonment Solutions, we set up and manage effective strategies to recover lost sales, ensuring that your customers return and complete their purchases, boosting your store\'s revenue and growth.' },
//         { name: 'Secure Payment Gateway Integration', included: ['', '', 'Platinum'], description: 'We provide Secure Payment Gateway Integration, ensuring safe, seamless transactions for your customers, enhancing trust and boosting conversions on your online store.' },
//         { name: 'Performance and Speed Optimization', included: ['', '', 'Platinum'], description: 'We specialize in Performance and Speed Optimization, utilizing caching and CDN integration to enhance site loading times, ensuring a faster and smoother user experience for your visitors.' },
//         { name: 'White-Label Options for Agency', included: ['', '', 'Platinum'], description: 'Our White-Label Solutions enable agencies to deliver premium WordPress maintenance services under your brand, ensuring a professional, customized experience for your clients.' },
//         { name: 'Advanced (Firewall, Malware Scan & Removal )', included: ['Silver', 'Gold', 'Platinum'], description: 'Security Monitoring comes with a strong firewall, full malware scanning, and complete removal for complete protection from various threats against your website, ensuring your data and users are always secure.' },
//         { name: '24/7 real-time security monitoring', included: ['Silver', 'Gold', ''], description: 'we make sure that your website is continuously watched for any threats or exposures. 24/7 Real-Time Security Monitoring, so your site is made secure at all times.' },
//     ];

//     const getPlanColor = (planName) => {
//         switch (planName) {
//             case 'Silver':
//                 return 'text-[#4B494B] font-bold text-base';
//             case 'Gold':
//                 return 'text-[#E4B200] font-bold text-base';
//             case 'Platinum':
//                 return 'text-[#00458A] font-bold text-base';
//             default:
//                 return 'text-gray-300 ';
//         }
//     };

//     const handleMouseEnter = (e, text) => {
//         const rect = e.target.getBoundingClientRect();
//         setTooltip({
//             visible: true,
//             text: text,
//             x: rect.left + window.scrollX,
//             y: rect.bottom + window.scrollY + 5,
//             translateY: -100 // Reset translateY for animation
//         });
//         // Trigger the animation to start after a slight delay
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, translateY: 0 }));
//         }, 10);
//     };

//     const handleMouseLeave = () => {
//         // Start the animation to move the tooltip out of the screen
//         setTooltip(prev => ({ ...prev, translateY: -100 }));
//         // After the animation, hide the tooltip
//         setTimeout(() => {
//             setTooltip(prev => ({ ...prev, visible: false }));
//         }, 200); // Make sure the timeout is same as the transition duration
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             {/* Mobile Plan Selection */}
//             <div className="md:hidden space-y-2 mb-6">
//                 {plans.map((plan) => (
//                     <button
//                         key={plan.name}
//                         onClick={() => setSelectedPlan(plan.name)}
//                         className={`w-full p-3 rounded-lg text-left`}
//                         style={{ backgroundColor: plan.bgColor }}

//                     >
//                         <div className="flex items-center justify-between space-x-2">
//                             <div className='flex gap-2 '>
//                                 <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                 <span>{plan.name}</span>
//                             </div>
//                             <div className='active-mark'>
//                                 {/* tick-mark */}
//                                 {selectedPlan === plan.name && <GiCheckMark className='size-4' />}
//                             </div>
//                         </div>
//                     </button>
//                 ))}
//             </div>

//             {/* Desktop and Mobile Table */}
//             <div className="flex flex-col md:flex-row w-full">
//                 <div className="hidden md:block md:w-[40%]">
//                     <div className="h-14"></div> {/* Header spacing */}
//                     {features.map((feature) => (
//                         <div key={feature.name} className="p-3 flex items-center"> {/* Added flex and items-center */}
//                             <span
//                                 className="border-b-2 border-dotted cursor-pointer"
//                                 onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 {feature.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Plan Columns - Right side on desktop */}
//                 <div className="md:w-[60%]">
//                     {/* Desktop Plan Headers */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className={`p-3.5 rounded-lg text-center`}
//                                 style={{ backgroundColor: plan.bgColor }}
//                             >
//                                 <div className="flex items-center justify-center space-x-2">
//                                     <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
//                                     <span>{plan.name}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile: Selected Plan Features */}
//                     <div className="md:hidden">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="p-3 flex justify-between items-center">
//                                 <span
//                                     className="border-b-2 border-dotted cursor-pointer"
//                                     onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
//                                     onMouseLeave={handleMouseLeave}
//                                 >
//                                     {feature.name}
//                                 </span>
//                                 {feature.values ? (
//                                     <div>{feature.values[selectedPlan]}</div>
//                                 ) : (
//                                     <div>
//                                         {feature.included.includes(selectedPlan) ? '✔' : ''}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="p-3 text-center">
//                             <Link to="/services" className="bg-light-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Desktop: All Plan Features */}
//                     <div className="hidden md:grid md:grid-cols-3 gap-4">
//                         {plans.map((plan) => (
//                             <div key={plan.name} className="space-y-4">
//                                 {features.map((feature) => (
//                                     <div key={feature.name} className="text-center p-1.5">
//                                         {feature.values ? (
//                                             feature.values[plan.name]
//                                         ) : (
//                                             feature.included.includes(plan.name) ? '✔' : ''
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                         <div className="text-center">
//                             <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
//                                 Get Started Now!
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Show Tooltip */}
//             {tooltip.visible &&
//                 (
//                     <div
//                         className="absolute bg-white font-normal text-xs border max-w-md border-gray-300 lg:p-2.5 p-1.5 rounded-md shadow-md z-10"
//                         style={{
//                             top: tooltip.y,
//                             left: tooltip.x,
//                             transform: `translateY(${tooltip.translateY}%)`,
//                             transition: 'transform 0.5s ease-in-out',
//                             pointerEvents: 'none'
//                         }}
//                     >
//                         {tooltip.text}
//                     </div>
//                 )}
//         </div>
//     );
// };

// export default PricingTable;


import React, { useState, useRef, useEffect } from 'react';
import ring from '../../assets/images/ring.svg';
import gold from '../../assets/images/gold.svg';
import star from '../../assets/images/star.svg';
import { Link } from 'react-router-dom';
import { GiCheckMark } from "react-icons/gi";


const PricingTable = () => {
    const [selectedPlan, setSelectedPlan] = useState('Silver');
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: '',
        x: 0,
        y: 0,
        translateY: 100 // Start off-screen to the left
    });

    const plans = [
        { name: 'Silver', icon: ring, bgColor: '#C9C9C9' },
        { name: 'Gold', icon: gold, bgColor: '#F7E8B3' },
        { name: 'Platinum', icon: star, bgColor: '#B3C8DC' },
    ];

    const features = [
        { name: 'High Speed SiteGround hosting free', included: ['Silver', 'Gold', 'Platinum'], description: 'Your visitors will enjoy lightning-quick loading times and a seamless browsing experience' },
        { name: 'WordPress core, themes, and plugins Updates', included: ['Silver', 'Gold', 'Platinum'], description: 'Core, Themes and Plugin file update for your WordPress site. everyday by our Team Tested & Reviewed.' },
        { name: 'Cloud Backup', values: { Silver: '14 Days', Gold: '30 Days', Platinum: '30 Days' }, description: 'Your Backups are Saved Daily on our Secure Cloud Storage, If Anything Happens, We have core File & Database Store.Also We have Secure Offsite Storage with 14-days Retention. If you want to enhance your site security with a 30-day retention period and access additional services, simply upgrade your plan.' },
        { name: 'Uptime Monitoring', included: ['Silver', 'Gold', ''], description: 'Automated Site Checks 24/7 a team of WordPress Expert available to help at any Time with Immediate alerts and quick issue Resolution.' },
        { name: 'Speed & Performance Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'You Don\'t Worry about that Our Engineers to achive Loading times Under 2 Second. And Keeps your Site Fast.' },
        { name: 'Version Control', included: ['Silver', 'Gold', 'Platinum'], description: 'We offer version control services to keep track of changes, facilitate collaborative work, and guarantee that the code and content of your website are always current, with the option to revert to previous versions if necessary.' },
        { name: 'Activity Log', included: ['Silver', 'Gold', 'Platinum'], description: 'WordPress Activity log Premium License. The most Comprehensive wordpress Activity log Plugin. To keep a Record of Useful Changes, Ease, Trubleshooting & Identify Suspicious behaviour early to thwart malicious Hacks.' },
        { name: 'Database Management', included: ['Silver', 'Gold', 'Platinum'], description: 'Facilitates of the your WordPress database by enabling backups, optimization, and migration. It ensures data integrity during updates and helps restore the site in case of failures or corruption.' },
        { name: 'Git Management', included: ['Platinum'], description: 'Are you Palnning your WordPress site that\'s integrated with Git? We\'ll help you commit all the plugin, theme, and core file updates! Proactive website edit commits beyond normal updates available at an additional hourly rate.' },
        { name: 'Image Optimization', included: ['Silver', 'Gold', 'Platinum'], description: 'Our team will Compress all your Images Correct Size of the Image for the Container. We use lossless compression to optimize all your images without sacrificing quality.' },
        { name: 'Keyword Tracking', included: ['Silver', 'Gold', ''], description: 'Our SEO experts provide keyword tracking services to monitor up to 10 keywords, helping you analyze performance and improve your website\'s search engine rankings effectively.' },
        { name: 'Monthly SEO Reports', included: ['', 'Gold', 'Platinum'], description: 'We provide monthly SEO reports with detailed insights into your rankings and actionable suggestions for improvement.' },
        { name: 'Ongoing CRO strategies', included: ['', '', 'Platinum'], description: 'Suggest best ongoing CRO strategies to boost conversions, enhance engagement, and drive more traffic to high-volume websites.' },
        { name: 'Detailed SEO audits', included: ['', '', 'Platinum'], description: 'Our SEO Expert conduct detailed SEO audits to identify opportunities, fix issues, and optimize your website for better performance and useful for search engine rankings.' },
        { name: 'Google Analytics Integration', included: ['', '', 'Platinum'], description: 'Google Analytics integration to provide you with valuable insights into your website\'s traffic, user behavior, and overall performance, to helping you make data-driven decisions for growth.' },
        { name: 'WooCommerce Optimization', included: ['', 'Gold', 'Platinum'], description: 'Is your online store running at its full potential? Our WooCommerce Optimization service provides specialized support for online stores, ensuring faster load times, improved functionality, and expert assistance for seamless customer experiences.' },
        { name: 'Cart Abandonment Solutions', included: ['', 'Gold', 'Platinum'], description: 'With our Cart Abandonment Solutions, we set up and manage effective strategies to recover lost sales, ensuring that your customers return and complete their purchases, boosting your store\'s revenue and growth.' },
        { name: 'Secure Payment Gateway Integration', included: ['', '', 'Platinum'], description: 'We provide Secure Payment Gateway Integration, ensuring safe, seamless transactions for your customers, enhancing trust and boosting conversions on your online store.' },
        { name: 'Performance and Speed Optimization', included: ['', '', 'Platinum'], description: 'We specialize in Performance and Speed Optimization, utilizing caching and CDN integration to enhance site loading times, ensuring a faster and smoother user experience for your visitors.' },
        { name: 'White-Label Options for Agency', included: ['', '', 'Platinum'], description: 'Our White-Label Solutions enable agencies to deliver premium WordPress maintenance services under your brand, ensuring a professional, customized experience for your clients.' },
        { name: 'Advanced (Firewall, Malware Scan & Removal )', included: ['Silver', 'Gold', 'Platinum'], description: 'Security Monitoring comes with a strong firewall, full malware scanning, and complete removal for complete protection from various threats against your website, ensuring your data and users are always secure.' },
        { name: '24/7 real-time security monitoring', included: ['Silver', 'Gold', ''], description: 'we make sure that your website is continuously watched for any threats or exposures. 24/7 Real-Time Security Monitoring, so your site is made secure at all times.' },
    ];

    const getPlanColor = (planName) => {
        switch (planName) {
            case 'Silver':
                return 'text-[#4B494B] font-bold text-base';
            case 'Gold':
                return 'text-[#E4B200] font-bold text-base';
            case 'Platinum':
                return 'text-[#00458A] font-bold text-base';
            default:
                return 'text-gray-300 ';
        }
    };

    const handleMouseEnter = (e, text) => {
        const rect = e.target.getBoundingClientRect();
        setTooltip({
            visible: true,
            text: text,
            x: rect.left + window.scrollX,
            y: rect.bottom + window.scrollY + 5,
            translateY: -100 // Reset translateY for animation
        });
        // Trigger the animation to start after a slight delay
        setTimeout(() => {
            setTooltip(prev => ({ ...prev, translateY: 0 }));
        }, 10);
    };

    const handleMouseLeave = () => {
        // Start the animation to move the tooltip out of the screen
        setTooltip(prev => ({ ...prev, translateY: -100 }));
        // After the animation, hide the tooltip
        setTimeout(() => {
            setTooltip(prev => ({ ...prev, visible: false }));
        }, 200); // Make sure the timeout is same as the transition duration
    };

    const getCheckmarkColor = (planName) => {
        switch (planName) {
            case 'Silver':
                return '#4B494B';
            case 'Gold':
                return '#E4B200';
            case 'Platinum':
                return '#00458A';
            default:
                return 'black'; // Default color
        }
    };


    return (
        <div className="max-w-7xl mx-auto p-4">
            {/* Mobile Plan Selection */}
            <div className="md:hidden space-y-2 mb-6">
                {plans.map((plan) => (
                    <button
                        key={plan.name}
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`w-full p-3 rounded-lg text-left`}
                        style={{ backgroundColor: plan.bgColor }}

                    >
                        <div className="flex items-center justify-between space-x-2">
                            <div className='flex gap-2 '>
                                <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
                                <span className='text-p'>{plan.name}</span>
                            </div>
                            <div className='active-mark'>
                                {/* tick-mark */}
                                {selectedPlan === plan.name && <GiCheckMark className='size-4' color={getCheckmarkColor(plan.name)} />}
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Desktop and Mobile Table */}
            <div className="flex flex-col md:flex-row w-full">
                <div className="hidden md:block md:w-[40%]">
                    <div className="h-14"></div> {/* Header spacing */}
                    {features.map((feature) => (
                        <div key={feature.name} className="p-3 flex items-center"> {/* Added flex and items-center */}
                            <span
                                className="border-b-2 border-dotted cursor-pointer"
                                onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {feature.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Plan Columns - Right side on desktop */}
                <div className="md:w-[60%]">
                    {/* Desktop Plan Headers */}
                    <div className="hidden md:grid md:grid-cols-3 gap-4">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`p-3.5 rounded-lg text-center`}
                                style={{ backgroundColor: plan.bgColor }}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <img src={plan.icon} alt={plan.name} className="h-6 w-6" />
                                    <span>{plan.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Selected Plan Features */}
                    <div className="md:hidden">
                        {features.map((feature) => (
                            <div key={feature.name} className="p-3 flex justify-between items-center">
                                <span
                                    className="border-b-2 border-dotted cursor-pointer"
                                    onMouseEnter={(e) => handleMouseEnter(e, feature.description)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {feature.name}
                                </span>
                                {feature.values ? (
                                    <div>{feature.values[selectedPlan]}</div>
                                ) : (
                                    <div style={{ color: getCheckmarkColor(selectedPlan) }}>
                                        {feature.included.includes(selectedPlan) ? '✔' : ''}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="p-3 text-center">
                            <Link to="/services" className="bg-light-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                                Get Started Now!
                            </Link>
                        </div>
                    </div>

                    {/* Desktop: All Plan Features */}
                    <div className="hidden md:grid md:grid-cols-3 gap-4">
                        {plans.map((plan) => (
                            <div key={plan.name} className="space-y-4">
                                {features.map((feature) => (
                                    <div key={feature.name} className="text-center p-1.5">
                                        {feature.values ? (
                                            feature.values[plan.name]
                                        ) : (
                                            <div style={{ color: getCheckmarkColor(plan.name) }}>
                                                {feature.included.includes(plan.name) ? '✔' : ''}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="text-center">
                            <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
                                Get Started Now!
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
                                Get Started Now!
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link to="/services" className="bg-light-blue inline-block w-full rounded-md text-nowrap hover:bg-blue-700 text-white font-bold py-4 px-10">
                                Get Started Now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Show Tooltip */}
            {tooltip.visible &&
                (
                    <div
                        className="absolute bg-white font-normal text-xs border max-w-md border-gray-300 lg:p-2.5 p-1.5 rounded-md shadow-md z-10"
                        style={{
                            top: tooltip.y,
                            left: tooltip.x,
                        }}
                    >
                        {tooltip.text}
                    </div>
                )}
        </div>
    );
};

export default PricingTable;


