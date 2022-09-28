import { useEffect, useState } from "react";
import Loader from "react-loaders";
import gsap from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
import AnimatedLetters from "../animatedletters";
import Store from "../../assets/images/Store.png";
import Commerce from "../../assets/images/E-Commerce.png";
import RickNMorty from "../../assets/images/Rick_and_Morty.png";
import "./index.scss";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  useEffect(() => {
    var timeline = gsap.timeline(),
      mySplitText = new SplitText("#quote", { type: "words,chars" }),
      chars = mySplitText.chars;

    gsap.registerPlugin(SplitText);
    gsap.set("#quote", { perspective: 400 });
    timeline.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    });
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 style={{ color: "black" }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
            />
          </h1>
          <h2 id="quote" style={{ color: "black" }}>
            These are some of my personal projects that I have designed. At this
            time only 1 of these projects are available for viewing.
          </h2>
        </div>
        <div className="container-project">
          <div className="project-container" style={{ right: "20%" }}>
            <div className="projects">
              <img
                src={Store}
                alt="store"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="projects">
              <a href="https://csb-m79473.netlify.app/">
                <img
                  src={Commerce}
                  alt="commerce"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
            <div className="projects">
              <a href="https://csb-hwk3kn.netlify.app/">
                <img
                  src={RickNMorty}
                  alt="Rick-N-Morty"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
