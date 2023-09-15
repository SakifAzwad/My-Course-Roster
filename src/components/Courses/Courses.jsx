/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses,setCourses]=useState([]);
    
    useEffect(()=>
    {
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className="pb-10">
            <div className="grid grid-cols-3 ml-24 max-w-5xl w-full gap-y-6">
            {
                courses.map(course=><Course key={course.id}
                 course={course}   
                ></Course>)
            }            
        </div>
        </div>
    );
};

export default Courses;