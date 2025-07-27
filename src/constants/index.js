import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  vault,       // Add this icon manually if not present
  edunet,      // Add this icon manually if not present
  echohire,    // Add this image manually if not present
  medibot,     // Add this image manually if not present
  aws_vpc,
  threejs   // Add this image manually if not present
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
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Cloud & DevOps Enthusiast",
    icon: mobile,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  // { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  // { name: "figma", icon: figma },
  // { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Vault of Codes",
    icon: vault,
    iconBg: "#383E56",
    date: "April 2025 – May 2025",
    points: [
      "Worked on real-world web projects involving both front-end and back-end technologies.",
      "Built responsive user interfaces using HTML, CSS, and JavaScript.",
      "Implemented form validation and basic CRUD operations using modern tools.",
    ],
  },
  {
    title: "AI Azure Intern",
    company_name: "Edunet Foundation (Microsoft AICTE)",
    icon: edunet,
    iconBg: "#E6DEDD",
    date: "May 2025 – June 2025",
    points: [
      "Gained hands-on experience with various machine learning algorithms, Azure cloud services, and AI projects",
      "Developed intelligent bots using Microsoft Copilot and built the BreastNet project for breast cancer detection.",
      "Completed certifications in AI and IoT through IBM SkillsBuild and NPTEL.",
    ],
  },
];

const testimonials = []; // You requested to remove this section

const projects = [
  {
    name: "EchoHire",
    description:
      "An AI-driven interview platform built with Next.js, Tailwind CSS, Firebase, and Vapi. Simulates real-time interviews with voice-based feedback and performance analysis.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
      { name: "Vapi", color: "pink-text-gradient" },
    ],
    image: echohire,
    source_code_link: "https://github.com/Devansh-Soni-1909/EchoHire.git", // <-- Add your GitHub link
  },
  {
    name: "MediBot",
    description:
      "An AI-powered medical chatbot using LangChain, Hugging Face, and RAG on Streamlit. Accurately recommends departments based on symptoms and uses VectorDB for retrieval.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "LangChain", color: "pink-text-gradient" },
    ],
    image: medibot,
    source_code_link: "https://github.com/Devansh-Soni-1909/Medibot.git", // <-- Add your GitHub link
  },
  {
    name: "aws-production-vpc-project",
    description:
      "This project showcases the deployment of a production-grade Virtual Private Cloud (VPC) on Amazon Web Services (AWS), designed with a strong emphasis on high availability, scalability, and security. ",
    tags: [
      { name: "AWS", color: "orange-text-gradient" },
      { name: "Cloud", color: "blue-text-gradient" },
      { name: "DevOps", color: "green-text-gradient" },
    ],
    image: aws_vpc,
    source_code_link: "https://github.com/Devansh-Soni-1909/aws-production-vpc-project.git", // <-- Add your GitHub link
  },
];

export { services, technologies, experiences, testimonials, projects };
