import { useEffect, useState } from "react";
import Loader from "react-loaders";
import gsap from "gsap-trial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrambleTextPlugin from "gsap-trial/ScrambleTextPlugin";
import AnimatedLetters from "../animatedletters";
import {
  faCss3,
  faNodeJs,
  faHtml5,
  faJsSquare,
  faReact,
  faNpm
} from "@fortawesome/free-brands-svg-icons";

import "./index.scss";

const Skills = () => {
  const timeLine = gsap.timeline({ defaults: { duration: 2, ease: "bounce" } });
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);
    timeLine
      .to("#Programmer", {
        scrambleText: {
          text:
            "I am a self-taught programmer whose been programming since the end of 2020. \n During this time I have become familiar a variety of different libraries and frameworks such as Material UI, ExpressJS etc. The skill level I believe I am at are as follows.",
          chars: "01",
          revealDelay: 0.5,
          tweenLength: false
        }
      })
      .to("#ReactJS", {
        scrambleText: {
          text: "ReactJS: Intermediate",
          chars: "01",
          revealDelay: 0.5,
          tweenLength: false
        }
      })
      .to("#JavaScript", {
        scrambleText: {
          text: "JavaScript: Intermediate",
          chars: "01",
          revealDelay: 0.5,
          tweenLength: false
        }
      })
      .to("#HTML", {
        scrambleText: {
          text: "HTML: Proficient",
          chars: "01",
          revealDelay: 0.5,
          tweenLength: false
        }
      })
      .to("#CSS", {
        scrambleText: {
          text: "CSS: Proficient",
          chars: "01",
          revealDelay: 0.5,
          tweenLength: false
        }
      })
      .to("#Sass", {
        scrambleText: {
          text: "Sass: Proficient",
          chars: "01",
          revealDelay: 0.5,
          tweenLength: false
        }
      })
      .to("#Node", {
        scrambleText: {
          text: "Node : Familiar",
          chars: "01",
          revealDelay: 0.5,
          tweenLength: false
        }
      });
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1 style={{ color: "black" }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <h2 id="Programmer" style={{ color: "black" }}></h2>
          <h3 id="ReactJS" style={{ color: "red" }}></h3>
          <h3 id="JavaScript" style={{ color: "orange" }}></h3>
          <h3 id="HTML" style={{ color: "blue" }}></h3>
          <h3 id="CSS" style={{ color: "green" }}></h3>
          <h3 id="Sass" style={{ color: "purple" }}></h3>
          <h3 id="Node" style={{ color: "brown" }}></h3>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNpm} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
