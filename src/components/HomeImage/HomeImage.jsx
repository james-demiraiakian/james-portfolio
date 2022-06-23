import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const imageArray = [
    'there',
    'will',
    'be',
    'a',
    'set',
    'of',
    'rotating',
    'images',
];

export default function HomeImage() {
    const [currentImage, setCurrentImage] = useState(imageArray[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(index);
            index === imageArray.length - 1 ? setIndex(0) : setIndex(index + 1);
            // setIndex((i) => i + 1);
        }, 2000);

        return () => {
            setCurrentImage(imageArray[index]);
            clearInterval(timer);
        };
    }, [index]);

    return (
        <div>
            HomeImage
            <h1>{currentImage}</h1>
        </div>
    );
}
