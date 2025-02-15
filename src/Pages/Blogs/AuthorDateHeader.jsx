import React from 'react';

const AuthorDateHeader = ({ authorName, archiveDate }) => {
    const formattedDate = archiveDate
        ? new Date(archiveDate).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : null;

    return (
        <div className="bg-light-blue py-12 text-center">
            <div className="container mx-auto space-y-4">
                <p className="text-white text-small">
                    Home / Archives for {authorName}
                </p>
                <h1 className="text-white lg:text-4xl text-3xl font-bold">
                    {authorName}'s Blog
                </h1>
                {formattedDate && (
                    <p className="text-white capitalize text-lg">
                        Releted date : {formattedDate}
                    </p>
                )}
                <p className="text-white text-lg italic opacity-80">
                    Exploring the world through {authorName}'s unique perspective.
                </p>
            </div>
        </div>
    );
};

export default AuthorDateHeader;