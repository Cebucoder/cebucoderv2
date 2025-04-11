import React, { useEffect, useState } from 'react';
import './Projects.css'

import proj_img1 from '/src/assets/proj_img1.jpg'
import proj_img2 from '/src/assets/proj_img2.jpg'
import proj_img3 from '/src/assets/proj_img3.jpg'
import proj_img4 from '/src/assets/proj_img4.jpg'
import proj_img5 from '/src/assets/proj_img5.jpg'
import proj_img6 from '/src/assets/proj_img6.jpg'
import proj_img7 from '/src/assets/proj_img7.jpg'
import proj_img8 from '/src/assets/proj_img8.jpg'
import proj_img9 from '/src/assets/proj_img9.jpg'
import proj_img10 from '/src/assets/proj_img10.jpg'
import proj_img11 from '/src/assets/proj_img11.jpg'
import proj_img12 from '/src/assets/proj_img12.jpg'
import proj_img13 from '/src/assets/proj_img13.jpg'
import proj_img14 from '/src/assets/proj_img14.jpg'
import proj_img15 from '/src/assets/proj_img15.jpg'
import proj_img16 from '/src/assets/proj_img16.jpg'
import proj_img17 from '/src/assets/proj_img17.jpg'
import proj_img18 from '/src/assets/proj_img18.jpg'
import proj_img19 from '/src/assets/proj_img19.jpg'
import proj_img20 from '/src/assets/proj_img20.jpg'
import proj_img21 from '/src/assets/proj_img21.jpg'
import proj_img22 from '/src/assets/proj_img22.jpg'
import proj_img23 from '/src/assets/proj_img23.jpg'
import proj_img24 from '/src/assets/proj_img24.jpg'
import proj_img25 from '/src/assets/proj_img25.jpg'
import proj_img26 from '/src/assets/proj_img25.jpg'

import proj_img27 from '/src/assets/proj_img27.jpg'
import proj_img28 from '/src/assets/proj_img28.jpg'
import proj_img29 from '/src/assets/proj_img29.jpg'
import proj_img30 from '/src/assets/proj_img30.jpg'
import proj_img31 from '/src/assets/proj_img31.jpg'
import proj_img32 from '/src/assets/proj_img32.jpg'
import proj_img33 from '/src/assets/proj_img33.jpg'
import proj_img34 from '/src/assets/proj_img34.jpg'
import proj_img35 from '/src/assets/proj_img35.jpg'
import proj_img36 from '/src/assets/proj_img36.jpg'
import proj_img37 from '/src/assets/proj_img37.jpg'
import proj_img38 from '/src/assets/proj_img38.jpg'
import proj_img39 from '/src/assets/proj_img38.jpg'
import proj_img40 from '/src/assets/proj_img40.jpg'
import proj_img41 from '/src/assets/proj_img41.jpg'
import proj_img42 from '/src/assets/proj_img42.jpg'
import proj_img43 from '/src/assets/proj_img43.jpg'
import proj_img44 from '/src/assets/proj_img44.jpg'
import proj_img45 from '/src/assets/proj_img45.jpg'
import proj_img46 from '/src/assets/proj_img46.jpg'
import proj_img47 from '/src/assets/proj_img47.jpg'





const Projects = ({ activeCategory }) => {
    const projectData = {
        front_end_proj: [
            { img: proj_img1, link: "https://example.com/front-end-1" },
            { img: proj_img2, link: "https://example.com/front-end-2" },
            { img: proj_img4, link: "https://example.com/front-end-3" },
            { img: proj_img5, link: "https://example.com/front-end-3" },
            { img: proj_img6, link: "https://example.com/front-end-3" },
            { img: proj_img8, link: "https://example.com/front-end-3" },
            { img: proj_img9, link: "https://example.com/front-end-3" },
            { img: proj_img12, link: "https://example.com/front-end-3" },
            { img: proj_img13, link: "https://example.com/front-end-3" },
            { img: proj_img14, link: "https://example.com/front-end-3" },
            { img: proj_img15, link: "https://example.com/front-end-3" },
            { img: proj_img16, link: "https://example.com/front-end-3" },
            { img: proj_img17, link: "https://example.com/front-end-3" },
            { img: proj_img18, link: "https://example.com/front-end-3" },
            { img: proj_img19, link: "https://example.com/front-end-3" },
            { img: proj_img20, link: "https://example.com/front-end-3" },
            { img: proj_img21, link: "https://example.com/front-end-3" },
            { img: proj_img22, link: "https://example.com/front-end-3" },
            { img: proj_img23, link: "https://example.com/front-end-3" },
            { img: proj_img24, link: "https://example.com/front-end-3" },
            { img: proj_img25, link: "https://example.com/front-end-3" },
            { img: proj_img26, link: "https://example.com/front-end-3" },
        ],
        wordpress_proj: [
            { img: proj_img4, link: "https://example.com/wordpress-1" },
            { img: proj_img5, link: "https://example.com/wordpress-2" },
            { img: proj_img6, link: "https://example.com/wordpress-3" },
        ],
        react_js_proj: [
            { img: proj_img22, link: "https://example.com/react-1" },
        ],
        javascript_proj: [
            { img: proj_img1, link: "https://example.com/js-1" },
            { img: proj_img2, link: "https://example.com/js-2" },
            { img: proj_img3, link: "https://example.com/js-3" },
            { img: proj_img27, link: "https://example.com/js-3" },
            { img: proj_img28, link: "https://example.com/js-3" },
            { img: proj_img29, link: "https://example.com/js-3" },
            { img: proj_img30, link: "https://example.com/js-3" },
            { img: proj_img31, link: "https://example.com/js-3" },
            { img: proj_img32, link: "https://example.com/js-3" },
            { img: proj_img33, link: "https://example.com/js-3" },
            { img: proj_img34, link: "https://example.com/js-3" },
            { img: proj_img41, link: "https://example.com/js-3" },
            { img: proj_img40, link: "https://example.com/js-3" },
            { img: proj_img43, link: "https://example.com/js-3" },
            { img: proj_img44, link: "https://example.com/js-3" },
            { img: proj_img45, link: "https://example.com/js-3" },
            { img: proj_img46, link: "https://example.com/js-3" },
            { img: proj_img47, link: "https://example.com/js-3" },
        ],
        html_css_proj: [
            { img: proj_img4, link: "https://example.com/html-css-1" },
            { img: proj_img5, link: "https://example.com/html-css-2" },
            { img: proj_img8, link: "https://example.com/html-css-3" },
            { img: proj_img9, link: "https://example.com/html-css-3" },
            { img: proj_img10, link: "https://example.com/html-css-3" },
            { img: proj_img18, link: "https://example.com/html-css-3" },
            { img: proj_img19, link: "https://example.com/html-css-3" },
            { img: proj_img20, link: "https://example.com/html-css-3" },
            { img: proj_img21, link: "https://example.com/html-css-3" },
            { img: proj_img25, link: "https://example.com/html-css-3" },
            { img: proj_img26, link: "https://example.com/html-css-3" },
            { img: proj_img35, link: "https://example.com/html-css-3" },
            { img: proj_img37, link: "https://example.com/html-css-3" },
            { img: proj_img42, link: "https://example.com/html-css-3" },
            { img: proj_img46, link: "https://example.com/html-css-3" },
        ],
        tools_proj: [
            { img: proj_img1, link: "https://example.com/tools-1" },
            { img: proj_img2, link: "https://example.com/tools-1" },
            { img: proj_img3, link: "https://example.com/tools-2" },
            { img: proj_img7, link: "https://example.com/tools-3" },
            { img: proj_img10, link: "https://example.com/tools-3" },
            { img: proj_img11, link: "https://example.com/tools-3" },
        ],
    };

    return (
        <div className="project_con">
            <div className={`temp_con  ${activeCategory}`}>
                <ul>
                    {projectData[activeCategory]?.map(({ img, link }, idx) => (
                        <li key={idx}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img src={img} alt={`Project ${idx + 1}`} loading='lazy' />
                                </figure>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects
