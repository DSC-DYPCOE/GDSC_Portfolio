import React from "react";
import profile from "../../assets/profile.png";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.landing_section}>
        <div className={classes.info}>
          <h1 className={classes.heading}>
            Turning Vision Into Reality With Code And Design.{" "}
          </h1>
          <p className={classes.para}>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
        </div>
        <div className={classes.container}>
          <img className={classes.image} src={profile} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
