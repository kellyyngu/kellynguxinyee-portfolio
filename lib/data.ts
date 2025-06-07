import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bakemyday from "@/public/bakemyday.png";
import portfolio from "@/public/portfolio.png";
import portfolio2 from "@/public/portfolio2.png";
import librarysys from "@/public/librarysys.png";
import cellularAutomata from "@/public/cellularAutomata.png";
import mentorApp from "@/public/mentorApp.png";
import frogger from "@/public/Frogger.png";
import galaDinner from "@/public/galaDinner.png";
import happyUFarm from "@/public/happyUFarm.png";
import hangman from "@/public/hangman.png";
import skyRushBird from "@/public/skyRushBird.png";

export const links = [
  // not a default export, is a named export
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "KUMON Tutor",
    location: "KUMON, Kuching, August 2023",
    description:
      "As a KUMON Tutor, I graded students’ worksheets and provided detailed, constructive feedback to help identify areas for improvement and reinforce key concepts. I also conducted personalized one-on-one tutoring sessions for students requiring additional support, which contributed to improved assessment results and boosted their academic confidence.",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Software Engineering Intern",
    location: "CHUMBAKA, Kuching, July 2023",
    description:
      "As an intern at CHUMBAKA, I educated students on Scratch and Arduino, enhancing their understanding of visual programming and hardware integration to support successful project completion. I conducted independent research to strengthen my knowledge of both platforms, enabling me to provide effective guidance and improve student outcomes. Additionally, I offered personalized support and constructive feedback on student projects, fostering creativity, building confidence, and helping them achieve their learning objectives.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title:
      "Tutor for Tenby Python Workshops, University of Nottingham Malaysia",
    location: "Tenby International School, Malaysia, November 2023",
    description:
      "As a Tutor for the Tenby Python Workshops under the University of Nottingham Malaysia, I developed a structured Python curriculum tailored for secondary school students, helping them build a strong foundation in programming concepts and boosting their confidence. I delivered engaging lessons to students with varying levels of experience, simplifying complex topics to ensure accessibility and understanding. By tracking individual progress and providing tailored feedback, I supported continuous growth and active participation, resulting in notable improvements in student performance.",
    icon: React.createElement(FaReact),
  },
  {
    title: "Organizing Committee for LYFE Project",
    location: "Heriot-Watt University, Malaysia, September 2022",
    description:
      "As part of the Organizing Committee for the LYFE Project, I guided Malaysian Youth Volunteers (MYVs) in fundraising efforts for the project’s beneficiary, Rumah Sayangan, in support of Sustainable Development Goal 4, successfully raising RM9,000. I conducted training sessions to assist MYVs in setting up and optimizing their fundraising platforms, enabling them to engage potential donors more effectively. Additionally, I managed and coordinated awards for MYVs and partners, ensuring expenses remained within budget, which allowed the project to reallocate resources toward future initiatives.",
    icon: React.createElement(FaReact),
  },
  {
    title: "Chief Delegate of FALL NILC 2022",
    location: "Heriot-Watt University, Malaysia, October 2022",
    description:
      "I served as the Chief Delegate for the National Induction Leadership Conference (NILC), representing AIESEC at Heriot-Watt University Malaysia. In this role, I led and managed a team of five delegates, fostering a collaborative and positive environment that enhanced our overall conference experience. I took responsibility for the safety and well-being of my team throughout the event, offering continuous support and guidance, while also strengthening my own leadership and team management skills.",
    icon: React.createElement(FaReact),
  },
  {
    title: "Senior Executive of Finance and Legalities at AIESEC in HWUM",
    location: "Heriot-Watt University, Malaysia, October 2022",
    description:
      "As the Senior Executive of Finance and Legalities at AIESEC in Heriot-Watt University Malaysia, I was responsible for monitoring and tracking cash flow to ensure accurate budgeting and effective resource allocation, which enhanced overall financial oversight and project alignment. I processed reimbursements for various events and activities, maintaining a timely and accurate transaction system that minimized delays and improved operational efficiency. Additionally, I created and issued receipts and invoices, maintaining organized financial records to ensure transparency and accountability across all project finances.",
    icon: React.createElement(FaReact),
  },
  {
    title: "SPM Academic Tutor",
    location: "Pusat Tuisyen Kaliber, Kuching, July 2024",
    description:
      "As an Academic Tutor at Pusat Tuisyen Kaliber, I developed a tailored curriculum for English and History, focusing on key concepts and thematic understanding to enhance students’ comprehension and critical thinking skills. I conducted interactive lessons that incorporated real-world examples and facilitated engaging discussions, promoting deeper subject understanding and active participation. Additionally, I provided individualized feedback on assignments and shared targeted study tips and exam strategies, leading to improved academic performance and increased student confidence.",
    icon: React.createElement(FaReact),
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a responsive personal portfolio using React, TypeScript, Next.js, and Tailwind CSS. This dynamic portfolio showcases my projects, skills, and experiences with a modern, interactive interface. The site features a user-friendly navigation system, smooth animations powered by Framer Motion, and a customizable design that highlights my technical expertise. The project demonstrates my proficiency in creating engaging and performance-oriented web applications.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: portfolio2,
  },
  {
    title: "Spectacular Cellular Automata",
    description:
      "As part of a group project at the University of Nottingham, I co-developed a GPU-accelerated simulation system that visualizes 2D cellular automata on interactive 3D meshes, including spheres and toruses. The application supports multiple rule sets, adjustable simulation speeds, and a drawable grid editor for custom pattern creation. Users can interact with the simulation through 3D rotation, zoom functionality in both 2D and 3D modes, and intuitive cell manipulation via clicking or dragging. This project demonstrates advanced graphics programming, combining performance optimization with customizable visual settings and user-centric interaction design.",
    tags: ["JavaScript", "WebGL", "HTML", "CSS", "Svelte"],
    imageUrl: cellularAutomata,
    link: "https://kellyyngu.github.io/SpectacularCellularAutomata/",
  },
  {
    title: "CS Mentoring App",
    description:
      "The CS Mentoring App, developed in Java, is a role-based platform designed to streamline mentorship management within the School of Computer Science at the University of Nottingham. It offers distinct functionalities for mentees, mentors, and administrators, enabling secure and efficient interactions. Mentees can submit support requests, view assigned mentors, track request history, and manage profiles, while mentors can set availability and access mentee details. Administrators oversee the entire process by reviewing requests, assigning mentors, and monitoring pairings. The app incorporates business rules to ensure effective mentorship matches and includes features such as user registration, authentication, and profile management, delivering a secure and intuitive user experience.",
    tags: ["Java"],
    imageUrl: mentorApp,
  },
  {
    title: "Frogger",
    description:
      "This project is a modern reinterpretation of the 1981 arcade classic Frogger, where players guide a frog across a hazardous road and river to reach five designated homes. The gameplay emphasizes obstacle avoidance and precise timing, requiring strategic movement to succeed. Developed with a focus on software engineering principles, the project highlights best practices in code refactoring, maintainability, readability, and modular design, serving as both an engaging game and a demonstration of disciplined development methodology.",
    tags: ["Java"],
    imageUrl: frogger,
  },
  {
    title: "Online Food Ordering System",
    description:
      "Developed a comprehensive online food ordering system for a restaurant, including both customer and admin interfaces. The customer side features user account management, a categorized menu with detailed item information, a dynamic shopping cart, and secure checkout with payment options. The admin side allows for managing menu items, categories, orders, and user accounts. The system incorporates MySQL for data management and utilizes HTML, CSS, JavaScript, and PHP for the front-end and server-side functionalities.",
    tags: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "PHPMyAdmin"],
    imageUrl: bakemyday,
  },
  {
    title: "SkyRushBird Game Project",
    description:
      "As a Software Developer in a team of six, I co-developed SkyRushBird, a dynamic Java-based game created for a software engineering group project. I contributed to the design of engaging user interfaces to enhance player interaction and implemented key gameplay functionalities such as character movement and scoring to ensure smooth and responsive performance. Additionally, I conducted thorough testing to identify and resolve bugs, improving overall stability and user experience. The project earned First-Class Honours, recognizing our creativity, technical execution, and effective collaboration.",
    tags: ["Java"],
    imageUrl: skyRushBird,
  },
  {
    title: "Gala Dinner Website",
    description:
      "As part of a team project, I contributed to the design and development of a responsive website for the Gala Dinner 2023, implementing a consistent layout and styling using an external CSS stylesheet. I developed a registration page with database integration to handle participant sign-ups and data queries, and deployed the site on a XAMPP server to ensure a functional and user-friendly experience. The project was awarded First-Class Honours for its innovative design, effective wireframing, problem-solving approach, and strong collaboration.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    imageUrl: galaDinner,
  },
  {
    title: "HappyU Farm Java GUI Application Project",
    description:
      "As part of a team project, I developed HappyU Farm, a Java GUI application built using Java Swing and object-oriented principles. The application features an interactive interface that allows users to select and move animals using mouse drag events, including a custom-designed caterpillar graphic with smooth drag-and-drop functionality. The project demonstrated strong GUI development and creative interface design, and was awarded First-Class Honours for its technical implementation, visual appeal, and effective teamwork.",
    tags: ["Java"],
    imageUrl: happyUFarm,
  },
  {
    title: "Hangman Game Development Project",
    description:
      "I developed an interactive Hangman game in Java, utilizing Array and ArrayList data structures to manage game logic and user input. The game features core mechanics including a six-attempt limit and a visual gallows rendered using ANSI escape codes for enhanced console interaction. Built with object-oriented principles, the codebase emphasizes modularity, maintainability, and robust error handling. The project was awarded First-Class Honours in recognition of its technical execution, creative design, and effective team collaboration.",
    tags: ["Java"],
    imageUrl: hangman,
  },
  {
    title: "Library Management System",
    description:
      "Developed using C programming, Library Management System is a powerful tool for both librarians and students. Librarians can efficiently search for books by ISBN, manage borrowing and return processes, track available books, handle penalties for overdue returns, and generate detailed monthly reports. For students, the system offers easy book searches by ISBN, access to current availability, and visibility of overdue penalties. This comprehensive manual is crafted to guide users through the system’s features with clarity and precision.",
    tags: ["C"],
    imageUrl: librarysys,
  },
] as const;

export const skillsData = [
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "PHP",
  "MySQL",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Framer Motion",
] as const;
