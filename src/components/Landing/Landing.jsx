import React, { useState } from "react";
import classes from "./Landing.module.css";
import logo from "../../assets/logo.png";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

const Landing = () => {
  const [section, setSection] = useState("about");

  const changeSection = (name) => {
    setSection(name);
  };

  return (
    <>
      <div className={classes.main_section}>
        <nav className={classes.navbar}>
          <ul className={classes.list}>
            <li onClick={() => changeSection("about")} className={classes.link}>
              About
            </li>
            <li
              onClick={() => changeSection("projects")}
              className={classes.link}
            >
              Projects
            </li>
          </ul>

          <div className={classes.container}>
            <img className={classes.logo} src={logo} alt="" />
          </div>
          <ul className={classes.list}>
            <li className={classes.link}>
              <a href="https://www.linkedin.com/in/om-gawande/"> LinkedIn</a>
            </li>
            <li className={classes.link}>
              <a href="https://www.linkedin.com/in/om-gawande/"> Instagram</a>
            </li>
          </ul>
        </nav>
        {section === "about" ? <Home /> : <Projects />}
        {/* <Home />
        <Projects /> */}
      </div>
    </>
  );
};

export default Landing;
