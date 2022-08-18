import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const imageArray = [
  'There',
  'will',
  'be',
  'a',
  'set',
  'of',
  'rotating',
  'images',
  'RESET',
];

export default function HomeImage() {
  const [currentImage, setCurrentImage] = useState(imageArray[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      index === imageArray.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 2000);

    return () => {
      setCurrentImage(imageArray[index]);
    };
  }, [index]);

  return (
    <div>
      <h1>{`HomeImage: ${currentImage}`}</h1>
    </div>
  );
}
