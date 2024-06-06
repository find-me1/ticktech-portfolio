// ./pages/Frontpage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import "../pagestyles/Frontpage.css";

export default function Frontpage({ toggled }) {
  return (
    <>
      <div className="frontpagecontainer">
        <div className={"linksdef"}>
          <ul className="a1">
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li>
              <a href="a">
                <FontAwesomeIcon
                  icon={faKiwiBird}
                  className={` ${toggled ? "fai" : "fai-toggle"}`}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <span className="frontpagetext">
          <span className={"p1"}>Hello!</span>
          <p className={`p2 ${toggled ? "" : "p2-toggle"}`}>
            I'm <span className="anishp">Anish</span>👋
            <hr className={`styled-h ${toggled ? "" : "styled-h-toggle"}`} />
          </p>
          <p className={`p3 ${toggled ? "" : "p3-toggle"}`}>
            UI/UX Designer, Front-End Developer & Thinker,
            <br />
            Based in India.
          </p>
          <div className="downtouch">
            <a href="a">
              <span className="down">Download cv</span>
            </a>
            <a href="a">
              <span className={` ${toggled ? "touch" : "touch-toggle"}`}>
                Get in Touch!
              </span>
            </a>
          </div>
        </span>
        <img src="./profilepic.png" className="profileimg" alt="logo" />
        <span
          className={`indexpagep1 ${
            toggled ? "indexpagep1" : "indexpagep1-toggle"
          }`}
        >
          <span className="dash">| &nbsp;&nbsp;</span>{" "}
          sinhaanishkumar@outlook.com{" "}
        </span>
      </div>
    </>
  );
}
