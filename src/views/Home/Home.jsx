import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div>
      <div className="home">
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
            significant experience working to diagnose and correct bugs and
            other issues in others code, as well as answering questions and
            explaining coding concepts and practices.
          </p>
          <p>
            Through positions in unrelated fields, I have also gained a lot of
            managerial experience, interpersonal skills, and communication
            skills.
          </p>
          <p>
            More personally, I am a fencer, and have been for about 10 years. I
            also have a few years of experience with pottery. I've built my own
            computer, done minor and moderate repairs on my car and motorcycle,
            done some small electrical, woodworking, and stone projects. I love
            to learn
          </p>
        </div>
      </div>
    </div>
  );
}
