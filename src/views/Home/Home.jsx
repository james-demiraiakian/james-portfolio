import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      layout
      transition={{ duration: 1.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home component"
    >
      <div className="profile-image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/james.jpg`}
          alt="headshot"
        />
      </div>
      <div className="bio-container">
        <p>
          I am a Software Engineer who values clear and open communication,
          problem solving, and functional code. I have spent the past year
          working individually and with small teams writing a variety of small
          applications, often in the span of a week or less. I also have
          significant experience working to diagnose and correct bugs and other
          issues in others code, as well as answering questions and explaining
          coding concepts and practices.
        </p>
        <p>
          Through positions in unrelated fields, I have also gained a lot of
          managerial experience, interpersonal skills, and communication skills.
        </p>
        <p>
          More personally, I am a fencer, and have been for about 10 years. I
          also have a few years of experience with pottery. I've built my own
          computer, done minor and moderate repairs on my car and motorcycle, as
          well as some small electrical, woodworking, and stone projects. I am
          also conversant in American Sign Language. I love learning, regardless
          of topic or relevance and will sometimes spend hours reading through
          Wikipedia or documentation.
        </p>
      </div>
    </motion.div>
  );
}
