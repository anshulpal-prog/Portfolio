// Skills Section Logo's
import htmlLogo from "./assets/Tech_logo/html.png";
import cssLogo from './assets/Tech_logo/css.png';
import javascriptLogo from './assets/Tech_logo/javascript.png';
import reactjsLogo from './assets/Tech_logo/reactjs.png';
import reduxLogo from './assets/Tech_logo/redux.png';
import tailwindcssLogo from './assets/Tech_logo/tailwindcss.png';
import materialuiLogo from './assets/Tech_logo/materialui.png';
import bootstrapLogo from './assets/Tech_logo/bootstrap.png';
import nodejsLogo from './assets/Tech_logo/nodejs.png';
import expressjsLogo from './assets/Tech_logo/express.png';
import mongodbLogo from './assets/Tech_logo/mongodb.png';
import firebaseLogo from './assets/Tech_logo/firebase.png';
import pythonLogo from './assets/Tech_logo/python.png';
import gitLogo from './assets/Tech_logo/git.png';
import githubLogo from './assets/Tech_logo/github.png';
import vscodeLogo from './assets/Tech_logo/vscode.png';
import postmanLogo from './assets/Tech_logo/postman.png';
import figmaLogo from './assets/Tech_logo/figma.png';


// Experience Section Logo's
import JSpiderLogo from './assets/Company_logo/jspider.jpeg';
import r1rcmLogo from './assets/Company_logo/r1rcm.jpeg';
import provanaLogo from './assets/Company_logo/provana.png';

// Education Section Logo's
import GniotLogo from './assets/Education_logo/gnit.jpeg';
import SRGCLogo from './assets/Education_logo/srgc.jpeg';
import DDPSLogo from './assets/Education_logo/ddps.png';

// Project Section Logo's
import githubdetLogo from './assets/Work_logo/git.jpeg';
import movierecLogo from './assets/Work_logo/movi.jpeg';
import ecommerceLogo from './assets/Work_logo/Ecom.jpeg';
import todoLogo from './assets/Work_logo/todo.png';
import portfolioLogo from './assets/Work_logo/portfolio.jpeg';
import instituteLogo from './assets/Work_logo/ins.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    role: "MERN Stack Trainee",
    company: "JSpiders Training Institute",
    img: JSpiderLogo, // <- yaha logo add kiya
    date: "March 2024 - Present",
    desc: "Hands-on training in MERN stack development with real-time projects. Worked on building responsive UIs, REST APIs, and database management using MongoDB.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "Git/GitHub"
    ],
  },
  {
    id: 1,
    role: "Technical Support Engineer",
    company: "R1 RCM",
    img: r1rcmLogo, // <- yaha logo add kiya
    date: "Dec 2024 - March 2025",
    desc: "Provided technical support in US healthcare processes, troubleshooting claim issues, and coordinating with teams for timely resolutions.",
    skills: [
      "Healthcare Process Support",
      "Claim Analysis",
      "Client Communication",
      "Issue Resolution"
    ],
  },
  {
    id: 2,
    role: "Technical Support Engineer",
    company: "Provana India Pvt. Ltd.",
    img: provanaLogo, // <- yaha logo add kiya
    date: "July 2024 - Dec 2024",
    desc: "Handled AR follow-ups with insurance providers, resolved claim-related issues, and maintained accurate documentation.",
    skills: [
      "Account Receivable (AR)",
      "Insurance Follow-Up",
      "Process Management",
      "Communication"
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: GniotLogo,
      school: "Greater Noida Institute of Technology, Knowledge Park , Greater Noida",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Greater Noida Institute of technology , Greater Noida. During my time at GNIOT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GNIOT College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: SRGCLogo,
      school: "Shri Ram Group of College (SRGC), Muzaffarnagar",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's of computer Application (B.C.A) from SRGC College, Muzaffarnagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at SRGC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: DDPSLogo,
      school: "Dehradun Public School , Muzaffarnagar",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Dehradun Public School, Muzaffarnagar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    
  ];
  
export const projects = [
  {
    id: 0,
    title: "Institute Management System",
    description:
      "A full-featured web application to manage student, staff, and course information efficiently. Provides modules for attendance, exams, and reporting, making institute operations seamless.",
    image: instituteLogo, // replace with your actual image import
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshulpal-prog/",
    webapp: "#", // live link not available
  },
  {
    id: 1,
    title: "Movie Recommendation System",
    description:
      "A React-based web application that provides movie recommendations based on genres, user preferences, and popular trends. Smooth UI ensures a seamless experience for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshulpal-prog/Movie-recommender-system",
    webapp: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects, skills, and experience. Includes sections for resume download, certificates, and contact form integration.",
    image: portfolioLogo, // replace with your actual image import
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshulpal-Prog/",
    webapp: "#",
  },
  {
    id: 3,
    title: "To-Do App",
    description:
      "A simple yet effective task management app to keep track of daily activities. Users can add, edit, delete, and mark tasks as complete, improving productivity.",
    image: todoLogo, // replace with your actual image import
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshulpal-Prog/",
    webapp: "#",
  },
  {
    id: 4,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to fetch and showcase detailed GitHub profile information. Enter a GitHub username to get stats, repositories, followers, and contributions.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/anshulpal-prog/",
    webapp: "#",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product listing, cart functionality, user authentication, and payment integration. Enables users to browse, add to cart, and purchase products seamlessly.",
    image: ecommerceLogo, // replace with your actual image import
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Stripe"],
    github: "https://github.com/anshulpal-prog/",
    webapp: "#",
  },
];
