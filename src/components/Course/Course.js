import React from 'react';
import fakeData from '../../fakeData/FakeData';
import {useState} from 'react';
import './Course.css';
import EnrollCourse from '../EnrollCourse/EnrollCourse';
import Cart from '../Cart/Cart';


const Course = () => {
       
       const first15 = fakeData.slice(0,15);
       const [courses, setCourses] = useState(first15);
       const [enroll,setEnroll] = useState([])

       const handleEnrollcourse = (course) =>{
           console.log('product added');
                  const newEnrollcourse = [...enroll, course];
                  setEnroll(newEnrollcourse);
       }
    return (
        <div className="courses-container">
            <div className="enroll-course-container">
                  {
                      courses.map(course => <EnrollCourse
                        handleEnrollcourse={handleEnrollcourse}
                        course={course}></EnrollCourse>)
                  }
            </div>
            <div className="purchas-course-container">
                  <Cart enroll={enroll}></Cart>
            </div>
        </div>
    );
};

export default Course;