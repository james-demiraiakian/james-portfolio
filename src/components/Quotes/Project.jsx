import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectArr = [
  {
    pGitHub: 'https://github.com/Pixil2',
    pDeploy: 'https://pixl2.netlify.app/',
    pDescription:
      'Written in a two week sprint in a team of four using React V18 and React-Router V6, mere weeks after their release, Pixl 2 is a full stack refactoring of the original Pixl project, a pixel art application designed to allow the creation and display of pixel creations.',
    pHeader: 'Pixl 2',
    pImg: '/images/pixl.PNG',
  },
  {
    pGitHub: 'https://github.com/Alchemy-Chess-Group/react-chess-project-week',
    pDeploy: 'https://once-upawn-a-time.netlify.app',
    pDescription:
      'Written using React v17, React Router v5, Chess.js. React Chessboard, MSW, and Jest, this Chess app allows users to play and chat in realtime.',
    pHeader: 'Once Upawn a Time',
    pImg: '/images/chess.PNG',
  },
  {
    pGitHub: 'https://github.com/james-demiraiakian/buttermoths',
    pDeploy: 'https://buttermoths.netlify.app',
    pDescription:
      'An app that grabs every entry on Butterflies and Moths from an academic database. Built using React Router',
    pHeader: 'ButterMoths',
    pImg: '/images/buttermoths.PNG',
  },
  {
    pGitHub: 'https://github.com/james-demiraiakian/james-portfolio',
    pDeploy: 'https://www.jamesarmen.tech/',
    pDescription: `My portfolio website, written using the latest version of React, React-Router, as well as framer-motion for the animations. This project took me over 2 months to complete, due to work responsibilities, life, and the endless desire for the one site that will represent me more than anything else to look pixel-perfect.`,
    pHeader: 'jamesarmen.tech',
    pImg: '/images/portfolio.PNG',
  },
];

export default function Project() {
  const [currentProject, setCurrentProject] = useState(projectArr[0]);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    index === projectArr.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  useEffect(() => {
    setCurrentProject(projectArr[index]);
  }, [index]);

  return (
    <>
      <AnimatePresence mode={'wait'} initial={false}>
        <motion.div
          className="motion-div"
          key={index}
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -800 }}
          transition={{ bounce: 0, duration: 1 }}
        >
          <div className="project-card">
            <h3 className="p-name">{`${index + 1}. ${
              currentProject.pHeader
            }`}</h3>
            <img
              className="p-deploy-image"
              src={`${process.env.PUBLIC_URL}${currentProject.pImg}`}
              alt="project page"
            />
            <div className="p-links">
              <a href={currentProject.pDeploy} className="p-deploy-url">
                {currentProject.pHeader}
              </a>
              <a href={currentProject.pGitHub} className="p-gh-url">
                <img
                  className="p-gh-logo"
                  src={`${process.env.PUBLIC_URL}/images/github.png`}
                  alt="github logo"
                />
                GitHub Repo
              </a>
            </div>
            <div>
              <p className="p-description">{currentProject.pDescription}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="p-button" onClick={handleClick}>
        Next
      </button>
    </>
  );
}
