/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleClick}) => {

    const [courses,setCourses]=useState([]);
    
    useEffect(()=>
    {
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])



    return (
        <div className="pb-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:ml-4 lg:ml-24 max-w-5xl w-full gap-y-6">
            {
                courses.map(course=><Course key={course.id}
                handleClick={handleClick}
                 course={course}   
                ></Course>)
            }            
        </div>
        </div>
    );
};

export default Courses;