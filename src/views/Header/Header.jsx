import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleHome = () => {
        console.log('home');
        navigate('/');
    };

    const handleTechStack = () => {
        console.log('tech-stack');
        navigate('/tech-stack');
    };

    const handleProjects = () => {
        console.log('projects');
        navigate('/projects');
    };

    const handleResume = () => {
        console.log('resume');
        navigate('/resume');
    };

    const handleAbout = () => {
        console.log('about');
        navigate('/about');
    };

    return (
        <div className="header">
            <div className="headerLink" onClick={handleHome}>
                Home
            </div>
            <div className="headerLink" onClick={handleTechStack}>
                Tech Stack
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
