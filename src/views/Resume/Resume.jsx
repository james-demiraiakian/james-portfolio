import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

export default function Resume() {
  return (
    <motion.div
      layout
      transition={{ duration: 1.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="component"
    >
      <div className="resume">
        <iframe
          className="iframe"
          title="resume"
          loading="lazy"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE4owRPKGU&#x2F;view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        className="download"
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View and Download Resume
      </a>{' '}
    </motion.div>
  );
}
