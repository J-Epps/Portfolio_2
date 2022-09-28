import { useEffect, useState } from "react";
import Loader from "react-loaders";
import gsap from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
import AnimatedLetters from "../animatedletters";
import "./index.scss";

const About = () => {
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
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <h2 id="quote" style={{ color: "black" }}>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </h2>
          <h2 id="quote" style={{ color: "black" }}>
            I'm confident, naturally curious, and look forward to improving my
            skills and knowledge one project at a time.
          </h2>
          <h2 id="quote" style={{ color: "black" }}>
            If I need to describe myself with one sentence that would be
            ambitious person with a never-ending thirst for knowledge and
            information.
          </h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
