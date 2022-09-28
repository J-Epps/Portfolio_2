import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../../components/animatedletters";
import Logo from "./logo/index";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [" ", "J", "e", "r", "e", "m", "y"];
  const jobArray = [
    "a",
    " ",
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    "."
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 style={{ color: "black" }}>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>l</span>
            <span className={`${letterClass} _15`}>o</span>
            <br />
            <span className={`${letterClass} _16`}>I</span>
            <span className={`${letterClass} _17`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2 style={{ color: "black" }}>
            Front End Developer / React Developer / JavaScript Expert {" "}
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
