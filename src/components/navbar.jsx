import React, { useState } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../images/icon-close.svg"
import openIcon from "../images/icon-hamburger.svg"


const NavbarComponent = ({ currentRoute }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <header>
      <div
        className="navbar-outside"
        style={isShowing ? { display: "block" } : { display: "none" }}
        onClick={() => setIsShowing(!isShowing)}
      ></div>

      <div
        className="bars-navbar"
        style={isShowing ? { display: "none" } : { display: "flex" }}
      >
        <img src={openIcon} alt="" onClick={() => setIsShowing(!isShowing)} />
      </div>
      <ul
        className="navbar"
        style={isShowing ? { right: "0" } : { right: "-50vh" }}
      >
        <div className="close">
          <img
            src={closeIcon}
            alt=""
            onClick={() => setIsShowing(!isShowing)}
          />
        </div>
        <li>
          <Link
            to="/"
            style={
              currentRoute === ""
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            H O M E
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={
              currentRoute === "about"
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            A B O U T
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={
              currentRoute === "projects"
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            P R O J E C T S
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={
              currentRoute === "contact"
                ? { borderBottom: "2px solid white" }
                : { borderBottom: "2px solid transparent" }
            }
          >
            C O N T A C T
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default NavbarComponent