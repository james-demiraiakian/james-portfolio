import React from 'react';
import Quotes from '../../components/Quotes/Quotes';
import './About.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      layout
      transition={{ duration: 1.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="about component"
    >
      <div className="intro">
        This is a semi-comprehensive list of positions, interests, and comments
        from current and former coworkers.
      </div>
      <div className="list-container">
        <div className="lists">
          Work experience:
          <ul>
            <li>Software Engineering TA - Alchemy Code Lab</li>
            <li>Manufacturing Supervisor - High Life Farms</li>
            <li>Lab Tech Supervisor - G1 Perez</li>
            <li>Vehicle Prep - Enterprise</li>
            <li>Sign Language TA - College of the Desert</li>
          </ul>
        </div>
        <div className="lists">
          Hobbies/Interests:
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
      <Quotes />
    </motion.div>
  );
}
