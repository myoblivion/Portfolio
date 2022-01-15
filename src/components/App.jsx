import React from "react";
import { Route, useLocation } from "react-router-dom";

// Components
import NavbarComponent from "../components/navbar";
import HomeComponent from "../components/home";
import AboutComponent from "./about";
import ProjectsComponent from "./projects";
import ContactComponent from "./contact";
// styles
import "./scss/index.scss";

const Appcomponent = () => {
    const location = useLocation().pathname;
    const newClass = location.split("/")[1];
    return (
        <div className={"main " + newClass}>
        <NavbarComponent currentRoute={newClass}/>
    <Route exact path="/">
        <HomeComponent />
    </Route>
    <Route path="/about">
    <AboutComponent />
    </Route>
    <Route path="/projects">
    <ProjectsComponent />
    </Route>
    <Route path="/Contact">
    <ContactComponent />
    </Route>
        </div>
        );
};

export default Appcomponent;