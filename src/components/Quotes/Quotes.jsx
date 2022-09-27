import React, { useEffect, useState } from 'react';

const quoteArray = [
  {
    quote: `"James is a talented developer with a penchant for challenging logic puzzles. He’s also an engaged and supportive teammate, always willing to pause what he’s working on to help out when someone needs it!”`,
    name: 'Emma Egstad',
  },
  {
    quote: `"James is always willing to not only help out his juniors, but to take the time to teach and explain complex concepts. While he may be the smartest person in the room, he is a great leader, treating others with respect and patience. He is an asset to any team!"`,
    name: 'Spencer Eagleton',
  },
  {
    quote: `"My experience at Alchemy Code Lab would not be the same with out James, as a cohort colleague and as a coworker. James works well with others and often brightens the room with good humor and friendly conversation. He has continuously demonstrated a strong ability to communicate coding concepts and plans, both in efforts to build full stack web apps with different teams as well as in assisting and supporting students in their JavaScript learning experience."`,
    name: 'Forest Heims',
  },
  {
    quote: `"James truly shines when helping others, his ability to dive into someone elses code and debug with them makes him a great team member. He demonstrates a great ability to verbalize the problem and explain bugs thoroughly."`,
    name: 'Bailey Kuebelbeck',
  },
  {
    quote: `"James isn't afraid to take agency on problems and his approach to debugging is top-notch. He's a kind person, easy to work with, and a solid asset to any team."`,
    name: 'Casey Cameron',
  },
];

export default function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(quoteArray[0].quote);
  const [currentName, setCurrentName] = useState(quoteArray[0].name);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      index === quoteArray.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 7000);

    return () => {
      setCurrentQuote(quoteArray[index].quote);
      setCurrentName(quoteArray[index].name);
    };
  }, [index]);

  return (
    <div className="quote">
      <p>{currentQuote}</p>
      <p>- {currentName}</p>
    </div>
  );
}
