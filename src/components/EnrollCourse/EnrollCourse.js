import React from 'react';
import './EnrollCourse.css';
import { Button } from 'react-bootstrap';

const EnrollCourse = (props) => {
    console.log(props);
    const {img, courseName,instructor,price} = props.course;
    return (
        <div className="enroll-course" >
            <div>
                  <img src={img} alt=""/>
            </div>

            <div className="div-course">
              <h4 className="course-name">{courseName}</h4> 
              <br/> 
               <p><small>By: {instructor}</small></p>
               <br/> 
               <p>Price:${price}</p>
               <Button variant="primary"  onClick={() => props.handleEnrollcourse(props.course)}>Enroll Course</Button>
            </div>

        </div>
    );
};

export default EnrollCourse;