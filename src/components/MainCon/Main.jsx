import React, { useState } from 'react';
import './main.css'
import Projects from '../Projects/Projects'

const Main = () => {

    const [activeCategory, setActiveCategory] = useState("front_end_proj");

    const categories = [
        { label: "Front End", className: "front_end_proj" },
        { label: "WordPress", className: "wordpress_proj" },
        { label: "React Js", className: "react_js_proj" },
        { label: "Javascript", className: "javascript_proj" },
        { label: "Html CSS", className: "html_css_proj" },
        { label: "Tools", className: "tools_proj" },
    ];

    const handleCategoryClick = (className) => {
        setActiveCategory(className);
    };


    return (
        <div className='main'>
            <div className="temp_wrapper">
                <div className="main_con">
                    {/* Category Buttons */}
                    <div className="proj_btn_con">
                        <ul>
                            {categories.map(({ label, className }) => (
                                <li
                                    key={className}
                                    className={activeCategory === className ? 'proj_btn_active' : ''}
                                    onClick={() => handleCategoryClick(className)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects Component */}
                    <div className="main_holder">
                        <Projects activeCategory={activeCategory} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
