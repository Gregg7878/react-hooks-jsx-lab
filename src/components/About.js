import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        <ul>
          <li>I am lovable.</li>
          <li>I am a good person.</li>
          <li>I deserve to be.</li>
          <li>I am responsible for my own happiness.</li>
          <li>I profoundly and deeply accept myself.</li>
          <li>I have realistic expectations of myself.</li>
          <li>My opinion of me is more important than others' opinion of me.</li>
        </ul>
        <img alt="I made this" src={image} />
      </p>
    </div>
  );
}

export default About;
