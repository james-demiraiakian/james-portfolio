import React from 'react';
import Header from '../Header/Header';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        I'm James, a Software Developer.
        <br />
        I'm skilled at learning new information quickly, and being able to teach
        others that information, as well as picking out bugs and issues within
        code.
      </div>
    </div>
  );
}
