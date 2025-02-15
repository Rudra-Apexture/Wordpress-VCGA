import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Breadcrumb = ({ items }) => {

    const truncateLabel = (label) => {
        const words = label.split(' ');
        if (words.length <= 4) {
            return label;
        }
        return words.slice(0, 4).join(' ') + '...';
    };

    return (
        <nav aria-label="breadcrumb" className="flex">
            <ol className="flex flex-wrap items-center gap-2">
                {items.map((item, index) => (
                    <li key={index} >
                        {index === 0 ? (
                            <Link to="/" className="text-black">
                                <FaHome className="size-5 md:size-6 inline-block align-middle" />
                            </Link>
                        ) : (
                            <>
                                <span className="text-gray-400 space-x-2">
                                    <FaChevronRight className="size-3 inline-block align-middle text-black" />
                                    {item.to ? (
                                        <Link
                                            to={item.to}
                                            className="text-black font-medium text-[16px] hover:underline underline-offset-1"
                                        >
                                            {truncateLabel(item.label)}
                                        </Link>
                                    ) : (
                                        <span className="text-black text-[16px] font-medium inline-block">
                                            {truncateLabel(item.label)}
                                        </span>
                                    )}
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;