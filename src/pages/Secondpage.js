import React from "react";
import "../pagestyles/Secondpage.css";

export default function Secondpage({ toggled }) {
  return (
    <div className="secondcontainer">
      <img src="./leftdesign.png" className="leftimg" alt="left design" />
      <img src="./hand.png" className="handimg" alt="hand design" />
      <img src="./yellowdesign.png" className="yellowimg" alt="yellow design" />
      <span className="abouttext">
        <h1 className={`abouttexth1 ${toggled ? "" : "abouttexth1-toggle"}`}>
          <span className="abouttexth11">T</span>his is it. ;)
          <hr class="styled-hr" />
        </h1>
        <p className={`abouttextp ${toggled ? "" : "abouttextp-toggle"}`}>
          Anish Kr. Sinha is an Indian{" "}
          <span className="abouttextp1">
            UI/UX Designer & Front End Developer
          </span>{" "}
          with a passion for designing beautiful and fuctional user experiences.
          Typically, he’s Driven & permanently Curious. He’s obsessed with
          designing things and even more obsessed with designing cool & clean
          stuff for the web and mobile. He has been in the business of creating
          since he hung his first painting on the wall when he was 11.
          <br />
          <span className="abouttextp1">
            {" "}
            He holds a bachelor degree in Computer Applications.
          </span>{" "}
          During his graduation, he has been actively involved in the web design
          community for the last 3 years. he has designed websites for small
          businesses, events, nonprofits and more. Currently he’s based in
          Bihar, India. Where he’s working as an independent creative. <br />
          <br />
          His interests, however, extend beyond the web and he loves helping
          people with branding and print design. He even loves designing{" "}
          <span className="abouttextp1">3D floor plan.</span>
          <br />
          <br /> When he’s not designing, he’s probably hanging out with his
          girlfriend, watching series, sketching or messing around on something
          inspired by YouTube tutorials.
        </p>
        <hr class="styled-hr1" />
      </span>
      <img src="./bottomdesign.png" className="bottomimg" alt="bottom design" />
      <img src="./rightdesign.png" className="rightimg" alt="right design" />
    </div>
  );
}
