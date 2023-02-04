import React from "react";
import { name, city } from "../data/data.js";

console.log(name, city);

function Home() {
  // update the JSX being returned!
  return  <div id="home">
    <h1>
      <div style={{color:'firebrick'}}></div>
      Your Name is a Web Developer from Your City    
    </h1>
   </div>;
};

export default Home;
