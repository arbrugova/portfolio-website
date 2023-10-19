import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  hoobank,
  gpt3,
  weather
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web development",
    company_name: "Freelancer",
    icon: "",
    iconBg: "#383E56",
    date: "September 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GPT-3 Website",
    description:
      "The GPT3 website offers a comprehensive resource for understanding and engaging with OpenAI's GPT-3 technology.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: gpt3,
    demo_link: "https://gpt3-arbrugova.netlify.app/",
    source_code_link: "https://github.com/arbrugova/gpt-3-website",
  },
  {
    name: "Hoobank",
    description:
      "HooBank's website provides an overview of its features, products, and clientele.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    demo_link: "https://hoobank-arbrugova.netlify.app/",
    source_code_link: "https://github.com/arbrugova/modern-bank-website",
  },
  {
    name: "Weather website",
    description:
      "Search cities and get real-time weather updates instantly on our website.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: weather,
    demo_link: "https://weather-app-arbrugova.netlify.app/",
    source_code_link: "https://github.com/arbrugova/weather-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
