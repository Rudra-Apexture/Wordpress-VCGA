import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = ({ stats }) => {
    if (!stats || stats.length === 0) {
        return null;
    }

    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has happened
    const countUpRefs = useRef([]); // Store references to CountUp components
    const { ref: sectionRef, inView } = useInView({
        triggerOnce: true,
        threshold: 1, // Adjust threshold as needed
    });

    useEffect(() => {
        // Initialize countUpRefs.current to an array of the correct length, filled with null
        countUpRefs.current = Array(stats.length).fill(null);
    }, [stats]);


    useEffect(() => {
        if (inView && !hasAnimated) {
            // Start animations if in view, not animated yet
            stats.forEach((stat, index) => {
                if (countUpRefs.current[index] && countUpRefs.current[index].start) { // Ensure the element exists before calling .start()
                    countUpRefs.current[index].start();
                }
            });
            setHasAnimated(true); // mark the animation happened
        }


    }, [inView, hasAnimated, stats]);


    return (
        <div className="bg-white md:py-12" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {stats.map((stat, index) => {
                        return (
                            <div key={index} className="space-y-5">
                                <p className="text-3xl lg:text-5xl font-bold text-light-blue">
                                    <CountUp
                                        ref={el => {
                                            countUpRefs.current[index] = el;
                                        }}
                                        start={0}
                                        end={stat.value}
                                        duration={5}
                                        suffix={stat.suffix || ''}
                                    />
                                </p>
                                <p className="lg:text-medium text-small font-medium text-primary lg:text-nowrap">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;



