import React from 'react';
import Quotes from '../../components/Quotes/Quotes';
import Header from '../Header/Header';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <Header />
      <span className="intro">
        I am a well rounded person with experience spanning multiple different
        industries and companies, as well as a multitude of diverse interests.
      </span>
      <br />
      <span className="work">
        Here is a (semi-comprehensive) list of my work experience, most recent
        first.
        <ul>
          <li>Software Engineering TA - Alchemy Code Lab</li>
          <li>Manufacturing Supervisor - High Life Farms</li>
          <li>Lab Tech Supervisor - G1 Perez</li>
          <li>Vehicle Prep - Enterprise</li>
          <li>Sign Language TA - College of the Desert</li>
        </ul>
      </span>
      <span className="hobbies">
        Some of my hobbies and interests include:
        <ul>
          <li>Saber Fencing</li>
          <li>Lightsaber Fencing</li>
          <li>Disassembling old electronics</li>
          <li>Building small mechanical or electronic objects</li>
          <li>PC Building</li>
        </ul>
      </span>
      <Quotes />
    </div>
  );
}
