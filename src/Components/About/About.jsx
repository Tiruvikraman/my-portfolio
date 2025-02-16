import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img className="profile-img" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              AI/ML and Full Stack Developer with expertise in machine learning,
              scalable web applications, and performance optimization. Skilled
              in Python, JavaScript, TensorFlow, React, Node.js, and SQL.
              Passionate about building intelligent systems and delivering
              real-world value through AI/ML.
            </p>
            <p>
              {" "}
              Strong problem-solving skills and a track record of driving
              projects from concept to completion while collaborating with
              cross-functional teams.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Machine Learning</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Deep Learning</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Generative AI</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo-DB</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-acheivements">
        <div className="about-acheivement">
          <h1>450+</h1>
          <p>PROBLEMS PRACTICED ON LEETCODE</p>
        </div>
        <hr />
        <div className="about-acheivement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-acheivement">
          <h1>3+</h1>
          <p>INTERNSHIP</p>
        </div>
        <hr />
        <div className="about-acheivement">
          <h1>7x</h1>
          <p>HACKATHON WINNER</p>
        </div>
        <hr />
        <div className="about-acheivement">
          <h1>149TH</h1>
          <p>GLOBAL RANK IN CODECHEF</p>
        </div>
      </div>
    </div>
  );
};

export default About;
