import React from 'react';

// Define default styles and optional variations
const defaultStyles =
    "text-white px-8 py-2.5 rounded-md font-medium transition-colors duration-200";

const buttonVariations = {
    "light-blue": "bg-light-blue hover:bg-blue-900",
    "dark-blue": "bg-blue-900 hover:bg-blue-800",
    "gray": "bg-gray-500 hover:bg-gray-600",
    "red": "bg-red-500 hover:bg-red-600" // Example of another style
};


const Button = ({
    href,
    children,
    variant = "light-blue", // Default variant if none specified
    onClick,
    style = {} // optional prop to add inline styles
}) => {
    // Add dynamic classes based on the variant prop or fall back to light-blue
    const className = `${defaultStyles} ${buttonVariations[variant] || buttonVariations["light-blue"]
        }`;

    // use the <a> if the href prop is defined.
    if (href) {
        return (
            <a
                href={href}
                className={className}
                style={style}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            onClick={onClick}
            className={className}
            style={style}
        >
            {children}
        </button>
    )
};

export default Button;