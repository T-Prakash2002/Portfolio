import img from './assets/images/profile_1.png'
import heroImg from './assets/images/hero.jpeg'

import html from './assets/icons/html-1 (1).svg'
import css from './assets/icons/css-3 (1).svg'
import js from './assets/icons/javascript-1 (1).svg'
import bootstrap from './assets/icons/bootstrap-5-1.svg'
import reactjs from './assets/icons/react-2 (1).svg'
import nodejs from './assets/icons/nodejs-1.svg'
import expressjs from './assets/icons/icons8-express-js-100.svg'
import mongodb from './assets/icons/mongodb-icon-1-1.svg'
import mysql from './assets/icons/mysql-3.svg'
import github from './assets/icons/github-icon-1 (1).svg'

import task from './assets/projects/Task-management.jpg'
import egadgets from './assets/projects/E-gadgets.jfif'
import tours from './assets/projects/tour-management.jfif'
import real from './assets/projects/real-estate.jpg'   
import time from './assets/projects/Time-tracking.jpg'

const data={
    "id": 1,
    "first_name": "Prakash",
    "last_name": "T",
    "full_name": "Prakash T",
    "age": 22,
    "contacts": {
        "email": "prakasht1405@gmail.com",
        "phone": "9894976519",
        "address": {
            "Door_No": "5/184",
            "Street": "Arshana Street",
            "Village": "S.N.Puthur",
            "Taluk": "Thuraiyur",
            "District": "Trichy",
            "State": "Tamil Nadu",
            "Country": "India",
            "Pincode": "621003"
        },
        "socials": [
        {
            "name": "LinkedIn",
            "icon_images": "https://img.icons8.com/color/48/000000/linkedin.png",
            "link": "https://www.linkedin.com/in/prakash1405",
            "icon_class": "fab fa-linkedin"
        },
        {
            "name": "Github",
            "icon_images": "https://img.icons8.com/color/48/000000/github.png",
            "link": "https://github.com/T-Prakash2002",
            "icon_class": "fab fa-github"
        },
        {
            "name": "GMail",
            "icon_images": "https://img.icons8.com/color/48/000000/gmail.png",
            "link": "mailto:prakasht1405@gmail.com",
            "icon_class": "fas fa-envelope"
        },
        
        
    ]
    },
    "heroImg":heroImg,
    "image": img,
    "about": "I am a Full stack Developer",
    "role": [
        "MERN Full Stack Developer",
        "Web Developer"
    ],
    "education": {
        "course": {
            "institute": "Guvi",
            "Course_name": "MERN Stack",
            "Duration": "4 Months"
        },
        "college": {
            "Institute": "Selvam College of Technology",
            "year": 2023,
            "degree": "B.E",
            "branch": "Computer Science and Engineering",
            "city": "Namakkal",
            "state": "Tamil Nadu",
            "CGPA": 8.23,
            "percentage": 82,
            "Classification": "First Class"
        },
        "HSC": {
            "school": "A.A Govt.Higher Secondary School",
            "year": "2018 - 2019",
            "std": "12",
            "branch": "Computer Science & Maths",
            "percentage": 65,
            "city": "Trichy",
            "place": " Pachaperumal Patty"
        },
        "SSLC": {
            "school": "A.D.W Govt High School",
            "year": "2016 - 2017",
            "std": "10",
            "percentage": 88,
            "city": "Trichy",
            "place": " Balakrishnampatty "
        }
    },
    "projects": [
        {
            "name": "Task Management System",
            "front_end": "https://github.com/T-Prakash2002/Task-Management-FrontEnd.git",
            "back_end": "https://github.com/T-Prakash2002/Task-Management-BackEnd.git",
            "image": task,
            "live_link": "https://task-management-task123.netlify.app/",
            "tech_used": "ReactJs,Nodejs,MongoDB"
        },
        {
            "name": "E-Store",
            "front_end": "https://github.com/T-Prakash2002/E-Store-ForntEnd",
            "back_end": "https://github.com/T-Prakash2002/E-Store-BackEnd",
            "image": egadgets,
            "live_link": "https://e-digital-stores.netlify.app/",
            "tech_used": "ReactJs,Nodejs,MongoDB"
        },
        {
            "name": "Tour Management System",
            "front_end": "https://github.com/T-Prakash2002/Tour_Management_FE.git",
            "back_end": "https://github.com/T-Prakash2002/Tour_Management_BE.git",
            "image": tours,
            "live_link":"https://tour-management001.netlify.app/",
            "tech_used": "ReactJs,Nodejs,MongoDB"
        },
        {
            "name": "Real-Estate Management",
            "front_end": "https://github.com/T-Prakash2002/Real-EState-FrontEnd.git",
            "back_end": "https://github.com/T-Prakash2002/Real-EState-BackEnd.git",
            "image": real,
            "live_link":"https://real-estate-464.netlify.app/",
            "tech_used": "ReactJs,Nodejs,MongoDB"
        },
        {
            "name": "Time-Tracking Interface",
            "front_end": "https://github.com/T-Prakash2002/Time-Tracking-Interface-ts.git",
            "back_end": "https://github.com/T-Prakash2002/Time-Tracking-Interface-BE.git",
            "image": time,
            "live_link":"https://time-tracking132.netlify.app/",
            "tech_used": "ReactJs,Nodejs,MongoDB"
        }
    ],
    "skills": [
        {
            "name": "HTML",
            "icon_images": html,
            "description": "HTML is the standard markup language for creating web pages and web applications. It defines the structure of web pages, including the layout, the presentation of information, and the interactivity of content and functionality."
        },
        {
            "name": "CSS",
            "icon_images": css,
            "description": "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. It is often used to style the appearance of a web page."
        },
        {
            "name": "JavaScript",
            "icon_images": js,
            "description": "JavaScript is a high-level, interpreted programming language. It is primarily used for adding interactivity to websites."
        },
        {
            "name": "Bootstrap",
            "icon_images":bootstrap,
            "description": "Bootstrap is a popular open-source front-end framework for building responsive, mobile-first websites. It provides a set of pre-built UI components and a responsive grid system for designing and developing websites."
        },
        {
            "name": "React.js",
            "icon_images": reactjs,
            "description": "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them when the underlying data changes."
        },
        {
            "name": "Node.js",
            "icon_images": nodejs,
            "description": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, which makes it ideal for building scalable and high-performance web applications."
        },
        {
            "name": "Express.js",
            "icon_images": expressjs,
            "description": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
        },
        {
            "name": "MongoDB",
            "icon_images": mongodb,
            "description": "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It is widely used for building scalable and high-performance web applications."
        },
        {
            "name": "MySQL",
            "icon_images":mysql,
            "description": "MySQL is a widely used open-source relational database management system (RDBMS) that was developed by Oracle Corporation. It is known for its speed, scalability, and ease of use."
        },
        {
            "name": "GitGub",
            "icon_images": github,
            "description": "GitHub is a web-based hosting service for version control of code using Git. It is widely used for collaboration and version control of code."
        }
    ],
    
    "resume": "https://drive.google.com/file/d/1h80T4FX7jX_PLLZWFrvsrZGxBJ1-DHMc/view?usp=sharing",
    "language": ["English","Tamil"]
    
}


export default data;
