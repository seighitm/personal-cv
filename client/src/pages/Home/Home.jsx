import React from 'react';
import Social from "./Social";
import './home.css'
import profilePhoto from "../../assets/img/profilePhoto.png"
import pdf from '../../assets/cv.pdf'

const Home = () => {
    return (
        <div className="home__data">
            <div className="home__img">
                <img src={profilePhoto} alt=""/>
            </div>
            <div className="home__title">Seighit Mihail</div>
            <span className="home__profession">Web Developer</span>
            <Social/>
            <a download="" href={pdf} className="button home__button">Download Resume</a>
        </div>
    );
};

export default Home;