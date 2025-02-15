import React from 'react';

const Support = () => {
    return (
        <div className="container mx-auto p-8 ">
            {/* Heading */}
            <h1 className="md:text-xlarge text-large font-bold text-primary pb-5">
                Why{' '}
                <span className="bg-gradient rounded-full text-[#1D49C3] font-bold ">
                    VCGA?
                </span>{' '}
            </h1>

            {/* Paragraph */}
            <p className="text-primary font-medium text-medium leading-relaxed mb-6">
                Since we started in 2017, we have successfully assisted thousands of WordPress
                users on everything from fixing small bugs to building completely custom
                solutions. Here's why you should choose VCGA:
            </p>

            {/* Content */}
            <div className="text-primary font-medium text-medium space-y-4">
                <p>
                    <span className="font-bold text-primary">Professional Support: </span> Our
                    team consists of WordPress professionals who understand every nook and
                    cranny inside the system. Whether you're struggling with a technical
                    issue or need advice on the best plugins to use, we're here to help.
                </p>
                <p>
                    <span className="font-bold text-primary">Learning Resources:</span> We
                    believe that the users themselves should be empowered with knowledge.
                    Our blog and tutorials are designed to help you learn and grow.
                    Whether it's for beginners, like getting started, or for advanced
                    tips, we make WordPress accessible to everyone.
                </p>
                <p>
                    <span className="font-bold text-primary">Security & Performance First:</span>
                    We know how important it is for you to have a fast and secure website.
                    Our team works diligently to ensure your site is protected against threats and
                    performs at its best, so you can focus on growing the audience or business.
                </p>
                <p>
                    <span className="font-bold text-primary">Transparent Pricing: </span>
                    Transparency is our thing. All our prices are transparent, and no hidden fees will ever come up. We charge for just what we give, and our maintenance plans are flexible to fit whatever budget.
                </p>
                <p>
                    <span className="font-bold text-primary">Community-focused : </span>
                    We are not just service providers, but a part of the WordPress community. We frequently participate in forums, team up with other WordPress experts, and share our knowledge with the greater community.
                </p>
            </div>
        </div>
    );
};

export default Support;