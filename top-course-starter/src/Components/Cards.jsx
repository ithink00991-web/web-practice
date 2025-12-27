import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);


    function getCourses() {
        // Check if courses data exists
        if (!props.courses) {
            return [];
        }

        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                if (Array.isArray(array)) {
                    array.forEach((courseData) => {
                        allCourses.push(courseData);
                    });
                }
            });
            return allCourses;
        }
        else {
            // Return the specific category courses or empty array if undefined
            return props.courses[category] || [];
        }
    }

    //   console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
                })
            }
        </div>
    );
};

export default Cards;
