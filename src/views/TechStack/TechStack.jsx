import React from 'react';
import './TechStack.css';

export default function TechStack() {
  return (
    <div className="tech-stack">
      <h1 className="title">Tech Stack</h1>
      <div className="list-container">
        <div className="list">
          <h3>Languages</h3>
          <ul>
            <li>
              <div>JavaScript</div>
            </li>
            <li>
              <div>HTML</div>
            </li>
            <li>
              <div>CSS</div>
            </li>
            <li>
              <div>SQL</div>
            </li>
          </ul>
        </div>
        <div className="list">
          <h3>Libraries and Frameworks</h3>
          <ul>
            <li>
              <div>React</div>
            </li>
            <li>
              <div>React Router</div>
            </li>
            <li>
              <div>Node.js</div>
            </li>
            <li>
              <div>Redux</div>
            </li>
            <li>
              <div>Supabase</div>
            </li>
            <li>
              <div>Rest API</div>
            </li>
            <li>
              <div>Express</div>
            </li>
            <li>
              <div>Material-UI</div>
            </li>
            <li>
              <div>Tailwind</div>
            </li>
          </ul>
        </div>
        <div className="list">
          <h3>Testing</h3>
          <ul>
            <li>
              <div>React Testing Library</div>
            </li>
            <li>
              <div>MSW</div>
            </li>
            <li>
              <div>Jest</div>
            </li>
            <li>
              <div>QUnit</div>
            </li>
            <li>
              <div>Supertest</div>
            </li>
          </ul>
        </div>
        <div className="list">
          <h3>Tools</h3>
          <ul>
            <li>
              <div>VS Code</div>
            </li>
            <li>
              <div>GitHub</div>
            </li>
            <li>
              <div>Git</div>
            </li>
            <li>
              <div>Netlify</div>
            </li>
            <li>
              <div>Postman</div>
            </li>
            <li>
              <div>Miro</div>
            </li>
            <li>
              <div>Heroku</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
