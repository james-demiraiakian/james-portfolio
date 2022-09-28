import React from 'react';
import Project from '../../components/Quotes/Project';
import { motion } from 'framer-motion';
import './Projects.css';

export default function Projects() {
  return (
    <motion.div
      layout
      transition={{ duration: 1.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="projects component"
    >
      <h1>Projects</h1>
      <Project />
    </motion.div>
  );
}
