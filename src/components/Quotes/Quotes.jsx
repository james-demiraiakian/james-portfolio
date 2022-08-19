import React, { useEffect, useState } from 'react';

const quoteArray = [
  `“James is a talented developer with a penchant for challenging logic puzzles. He’s also an engaged and supportive teammate, always willing to pause what he’s working on to help out when someone needs it!”
  - Emma Egstad`,
  `"James is always willing to not only help out his juniors, but to take the time to teach and explain complex concepts. While he may be the smartest person in the room, he is a great leader, treating others with respect and patience. He is an asset to any team!"
  - Spencer Eagleton`,
];

export default function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(quoteArray[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      index === quoteArray.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 6000);

    return () => {
      setCurrentQuote(quoteArray[index]);
    };
  }, [index]);

  return <p className="quote">{currentQuote}</p>;
}
