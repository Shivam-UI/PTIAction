import React, { useState } from "react";
import "../App.css";

const ReadMore = ({ children }) => {
    
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p style={{ display: 'inline', width: '100%' }} className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span style={{ color: 'rgb(192,192,192)', cursor: 'pointer' }} onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: '50%' }} className="container">
            <ReadMore>
                GeeksforGeeks: A Computer Science portal for geeks.
                It contains well written, well thought and well explained
                computer science, programming articles and quizzes.
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live,
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars by Industry Experts, Internship opportunities, and Job
                Opportunities. Knowledge is power!
            </ReadMore>
        </div>
    );
};

export default Content;