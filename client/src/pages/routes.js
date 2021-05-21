import {
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    EDUCATION_ROUTE,
    HOME_ROUTE,
    SERVICES_ROUTE,
    SKILLS_ROUTE
} from "../utils/constants";
import Home from "./Home/Home";
import AboutMe from "./About/AboutMe";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutMe
    },
    {
        path: EDUCATION_ROUTE,
        Component: Education
    },
    {
        path: SKILLS_ROUTE,
        Component: Skills
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
]