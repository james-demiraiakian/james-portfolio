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
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/images/logo-300x100.gif`}
        alt="james-demiraiakian-logo"
      />
      <h1 className="title">James Demiraiakian</h1>
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
  );
}
