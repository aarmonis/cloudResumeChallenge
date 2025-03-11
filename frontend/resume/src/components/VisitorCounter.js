import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                setIsLoading(true);
                // Replace with your actual API endpoint
                const response = await fetch('https://your-api-endpoint.com/counter');
                const data = await response.json();
                setVisitorCount(data.count);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <div className="mt-4 bg-blue-700 inline-block py-1 px-3 rounded-lg">
            <p className="text-sm">
                {isLoading ? (
                    "Loading visitor count..."
                ) : (
                    <>
                        <span className="font-bold">{visitorCount}</span> visitors to this site
                    </>
                )}
            </p>
        </div>
    );
};

export default VisitorCounter;