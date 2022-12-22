import React from "react";

import { ReactComponent as IconFacebook } from "../Assets/icons/facebook.svg";
import { ReactComponent as IconTwitter } from "../Assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "../Assets/icons/github.svg";
import AnimationRobot from "./AnimationRobot";
import "./Construction.css";

class Construction extends React.Component {
  render = () => {
    return (
      <>
        <div>
          <div className="card">
            <div className="header">
              <div className="logo">
                <a href="." style={{ color: "#fff" }}>
                  Classroom-Scheduler
                </a>
              </div>
              <div className="social">
                <a
                  href="https://facebook.com"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconFacebook className="icon" />
                </a>
                <a
                  href="https://twitter.com"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTwitter className="icon" />
                </a>
                <a
                  href="https://github.com/shubhmore96/CDAC-Project.git"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconGithub className="icon" />
                </a>
              </div>
            </div>
            <div className="content">
              <a href="mailto:user@example.com">
                <div className="cta" style={{ color: "GrayText" }}>
                  Send us an email
                </div>
              </a>
              <div className="title-holder">
                <h1>This page is under Construction</h1>
                <p>
                  <h2>
                    Please check back to know more. Shoot us an email if you're
                    curious.
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div>
            <AnimationRobot />
          </div>
        </div>
      </>
    );
  };
}

export default Construction;
