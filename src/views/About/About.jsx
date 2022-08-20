import React from 'react';
import Quotes from '../../components/Quotes/Quotes';
import Header from '../Header/Header';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="left-bar" />
      <div className="content-container">
        <Header />
        <div className="intro-container">
          <div className="intro">
            I am a well rounded person with experience spanning multiple
            different industries and companies, and have a multitude of diverse
            interests. I am a very driven and motivated individual, always
            seeking to improve myself, expand my knowledge and understanding,
            and learn new things. I throw myself into problems and challenges
            head first, and can usually come up with a workable solution within
            a reasonable time frame, and then take the time to refactor that
            solution into something more efficient.
          </div>
        </div>
        <br />
        <div className="work-container">
          <div className="work">
            A (semi-comprehensive) list of my work experience, most recent
            first:
            <ul>
              <li>Software Engineering TA - Alchemy Code Lab</li>
              <li>Manufacturing Supervisor - High Life Farms</li>
              <li>Lab Tech Supervisor - G1 Perez</li>
              <li>Vehicle Prep - Enterprise</li>
              <li>Sign Language TA - College of the Desert</li>
            </ul>
          </div>
        </div>
        <div className="hobby-container">
          <div className="hobbies">
            Some of my hobbies and interests include:
            <ul>
              <li>Saber Fencing</li>
              <li>Lightsaber Fencing</li>
              <li>Disassembling old electronics</li>
              <li>Tinkering with Mechanics and Electronics</li>
              <li>PC Building</li>
              <li>Riding and maintaining my Motorcycle</li>
            </ul>
          </div>
        </div>
        <div className="quote-container">
          <Quotes />
        </div>
      </div>
      <div className="right-bar" />
    </div>
  );
}
