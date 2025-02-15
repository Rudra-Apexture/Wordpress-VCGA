import React from 'react';

const ClientIssues = ({ clientIssuesData, clientIssuesImage }) => {
    if (!clientIssuesData) {
        return <p className="text-red-500 text-center my-4">No data for client issues</p>;
    }

    return (
        <section className="Clients-issues">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='heading-wrap'>
                        <h2 className="md:text-large text-base font-bold mb-4">The Client Issues: </h2>
                        <ol className="list-outside list-decimal pl-5 space-y-5">
                            {clientIssuesData.map((issue, index) => (
                                <li key={index} className="mb-3 md:pl-2 lg:text-medium text-small font-medium leading-6">
                                    {issue}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="flex items-center">
                        <img
                            src={clientIssuesImage}
                            alt="Client Issues Illustration"
                            className="w-full rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientIssues;
