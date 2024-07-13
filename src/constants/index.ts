import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  sql,
  typescript,
  expressjs,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  Sigbed,
  Sigai,
  arduino,
  spotify,
  weather1,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "typescript",
    icon: typescript,
  },
];

const experiences: TExperience[] = [
  {
    title: "ACM SIGAI Student Chapter",
    companyName: "Junior Working Team Member",
    icon: Sigai,
    iconBg: "#383E56",
    date: "Feb 2023 – Apr 2023",
    points: [
      "Selected among over 100 applicants to join the social media working team, contributing to community engagement and knowledge-sharing.",
      "Curated and shared updates on emerging AI technologies, collaborating with team members to implement promotional strategies.",
      "Designed promotional materials for sponsors and events, increasing social media engagement through strategic content planning.",
    ],
  },
  {
    title: "ACM SIGBED Student Chapter",
    companyName: "Core Committee",
    icon: Sigbed,
    iconBg: "#E6DEDD",
    date: "May 2023 – May 2024",
    points: [
      "Led a junior working team and collaborated with the executive committee to ideate, plan, and execute events, including ELICIT’23 Techno-Cultural Fest, which drew over 6,000 participants.",
      "Achieved a 33% growth in followers through strategic social media management, while developing innovative content creation strategies and enhancing skills in event management, social media promotion, and leadership.",
    ],
  },
];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects: TProject[] = [
  {
    name: "Spotify UI Clone",
    description:
      "A responsive Spotify UI clone that replicates the platform's sleek design and seamless functionality across all devices. The project aimed to replicate the layout, design, and functionality of the original Spotify landing page, focusing mainly on its design and hover-over styles.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: spotify,
    sourceCodeLink: "https://github.com/jaspreetkaur1010/Spotify-clone",
  },
  {
    name: "LED Control Using Gesture Recognition",
    description:
      "Recognizes hand gestures from video frames and control LEDs accordingly. Integrated machine learning, Python, and Arduino to interpret gestures and provide visual feedback through LED illumination.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Scikit Learn",
        color: "pink-text-gradient",
      },
      {
        name: "Arduino",
        color: "orange-text-gradient",
      },
    ],
    image: arduino,
    sourceCodeLink: "https://github.com/jaspreetkaur1010/LED_control_using_Hand-Gestures",
  },
  {
    name: "Weather-app",
    description:
      "Delivers real-time weather details like temperature, wind speed, humidity, sunrise, and sunset times. Users can also view a detailed 5-day forecast. Uses React for a dynamic user interface, Node.js for efficient backend operations, and JavaScript for seamless interactivity. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weather1,
    sourceCodeLink: "https://github.com/jaspreetkaur1010/Weather-app",
  },
];

export { services, technologies, experiences, projects };
