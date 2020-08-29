import React from 'react';
import logo from '../../images/logo.jpg';
import './Courses.css';

const Courses = () => {
    return (
        <div className="header-part">
            <img src={logo} alt = ""/>
            <nav>
                <a href="/Courses"> Courses</a>
                <a href="/Courses-for-Business">Courses for Business</a>
                <a href="/Tech-Courses">Tech Courses</a>
               
            </nav>
        </div>
    );
};

export default Courses;