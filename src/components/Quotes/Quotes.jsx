import React, { useEffect, useState } from 'react';

const quoteArray = [
    'Quote 1',
    'Quote 2',
    'Quote 3',
    'Quote 4',
    'Quote 5',
    'Quote 6',
    'Quote 7',
    'Quote 8',
];

export default function Quotes() {
    const [currentQuote, setCurrentQuote] = useState(quoteArray[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            index === quoteArray.length - 1 ? setIndex(0) : setIndex(index + 1);
        }, 2000);

        return () => {
            setCurrentQuote(quoteArray[index]);
            clearInterval(timer);
        };
    }, [index]);

    return (
        <div>
            <h1>{`Quotes: ${currentQuote}`}</h1>
        </div>
    );
}
