import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projectArr = [
  {
    pGitHub: 'https://github.com/Pixil2',
    pDeploy: 'https://pixl2.netlify.app/',
    pDescription:
      'A refactoring of the original Pixl project, bringing it into modern React',
    pHeader: 'Pixl 2',
    pImg: '/images/pixl.PNG',
  },
  {
    pGitHub: 'https://github.com/Alchemy-Chess-Group/react-chess-project-week',
    pDeploy: 'https://once-upawn-a-time.netlify.app',
    pDescription: 'A two player chess game that includes realtime chat.',
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
];

export default function Project() {
  const [currentProject, setCurrentProject] = useState(projectArr[0]);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    console.log(index);
    index === projectArr.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  useEffect(() => {
    setCurrentProject(projectArr[index]);
  }, [index]);

  return (
    <>
      <div className="project-card">
        <h3 className="p-name">{currentProject.pHeader}</h3>
        <a href={currentProject.pDeploy} className="p-deploy-url">
          <img
            className="p-deploy-image"
            src={`${process.env.PUBLIC_URL}${currentProject.pImg}`}
            alt="project page"
          />
        </a>
        <a href={currentProject.pGitHub} className="p-gh-url">
          <img
            className="p-gh-logo"
            src={`${process.env.PUBLIC_URL}/images/github.png`}
            alt="github logo"
          />
        </a>
      </div>
      <button className="p-button" onClick={handleClick}>
        Next
      </button>
    </>
  );
}
