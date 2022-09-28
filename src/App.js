import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/index.js";
import Home from "./components/home/index.js";
import About from "./components/about/index.js";
import Skills from "./components/skills/index.js";
import Contact from "./components/contact/index.js";
import Projects from "./components/projects/index.js";
import "./App.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}
