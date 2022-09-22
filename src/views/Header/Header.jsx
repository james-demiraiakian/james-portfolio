import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleTechStack = () => {
    navigate('/tech-stack');
  };

  const handleProjects = () => {
    navigate('/projects');
  };

  const handleResume = () => {
    navigate('/resume');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <div className="header">
      <i className="logo">James Demiraiakian</i>
      <div className="link-container">
        <div className="headerLink" onClick={handleHome}>
          Home
        </div>
        <div className="headerLink" onClick={handleTechStack}>
          Tech-Stack
        </div>
        <div className="headerLink" onClick={handleProjects}>
          Projects
        </div>
        <div className="headerLink" onClick={handleResume}>
          Resume
        </div>
        <div className="headerLink" onClick={handleAbout}>
          About
        </div>
      </div>
    </div>
  );
}
