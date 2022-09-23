import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactTinyLink } from 'react-tiny-link';

const projectArr = [
  {
    pGitHub: 'https://github.com/Pixil2',
    pDeploy: 'https://pixl2.netlify.app/',
    pDescription:
      'A refactoring of the original Pixl project, bringing it into modern React',
    pHeader: 'Pixl 2',
  },
  {
    pGitHub: 'github URL 2',
    pDeploy: 'deploy URL 2',
    pDescription: '',
    pHeader: '',
  },
  {
    pGitHub: 'github URL 3',
    pDeploy: 'deploy URL 3',
    pDescription: '',
    pHeader: '',
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
    <div>
      <div className="project-card">
        <div className="p-name">{currentProject.pName}</div>
        <div className="p-img">{currentProject.pImg}</div>
        {/* <div className="p-gh-url">{currentProject.pGitHub}</div>
        <div className="p-deploy-url">{currentProject.pDeploy}</div> */}
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          header={currentProject.pHeader}
          description={currentProject.pDescription}
          url={currentProject.pDeploy}
        />
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}
