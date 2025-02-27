import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";
import { style } from "framer-motion/client";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hi, I'm Sam",
  introduction:
    " A creative fullstack developer, crafting immersive and intuitive web experiences.",
  description:
    "Building digital experiences that merge creativity with technical excellence",
  resumeLinkText: "Download Resume",
  //resumeLink: "/Samrendra_onePage_resume.pdf",
  resumeLink: "/Samrendra_One_Page_resume.pdf",
};

export const PROJECTS = [
  {
    name: "JobSter",
    description: "A streamlined platform to connect job seekers with tailored opportunities and recruiters.",
    image: "https://img.freepik.com/free-vector/abstract-blue-circle-black-background-technology_1142-12714.jpg?t=st=1731874750~exp=1731878350~hmac=2dc5ba362341ad849f6c495cdb86f8d2e00c3fd2e46bb3ccfc9b3cd944746d14&w=996",
    link: "https://github.com/Samarendra2001/NextJs_A-Z/tree/main/JobSter",
  },
  {
    name: "SamEstate",
    description: "A property search application integrating location-based services and real-time chat for seamless user interaction",
    image: "https://thumbs.dreamstime.com/b/businessman-holding-house-model-dark-blue-background-real-estate-mortgage-property-investment-concept-325223615.jpg",
    link: "https://github.com/Samarendra2001/SamEstate",
  },
  {
    name: "Foodhunt",
    description:
      "A convenient app for exploring, ordering, and delivering delightful culinary experiences",
    image: "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?cs=srgb&dl=pexels-catscoming-1907227.jpg&fm=jpg",
    link: "https://github.com/Samarendra2001/NextJs_A-Z/tree/main/food-app",
  },
  {
    name: "HomeSpace",
    description: "A modern application for browsing, buying, and renting properties effortlessly",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vlZzLUvJ82F0w8UxItweRlv_8OwqIcvbkw&s",
    link: "https://github.com/Samarendra2001/Real_Estate",
  },
  {
    name: "Sorting Visualizer",
    description: "An interactive tool to visualize and learn sorting algorithms step-by-step",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLdIumbX7vfX2x_G3vrn1UPGNPBt2vMT-xg&s",
    link: "https://github.com/Samarendra2001/Sorting_visualizer.github.io",
  },
  {
    name: "BlogApp",
    description: "A dynamic platform to share, read, and engage with personal or professional blog content.",
    image: "https://t4.ftcdn.net/jpg/08/75/38/71/360_F_875387180_ZkAcwComq25IQ0iNv9i83Wveoek1Vpjx.jpg",
    link: "https://github.com/Samarendra2001/NextJs_A-Z/tree/main/blog-app",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated FullStack developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React,Express,JavaScript,TypeScript, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 Mar — 2024 Mar",
    title: "TechLead at HCLTech",
    location: "Bangalore,India",
    description: [
      "Engineered a company-wide internal training and assessment platform using MERN stack, allowing managers to assign structured learning paths and track employee progress.",
      "Developed a role-based access control system using JWT authentication, ensuring secure access for Admins, Trainers, and Employees.",
      "Integrated automated email notifications using Nodemailer, enhancing engagement by 40% and ensuring timely course completion.",
      "Designed an adaptive testing system where employees must achieve 70% to pass each module, with dynamic retake options for continuous improvement.",
      "Performed penetration testing on infotainment systems, uncovering vulnerabilities and recommending security patches that improved system resilience by 30%.",
      "Developed custom Python security scripts to automate vulnerability scanning and OWASP-based audits, reducing manual effort by 50%."
    ],

  },
  {
    yearRange: "2022 Aug — 2023 Feb",
    title: "TechLead at HCLTech",
    location: "Chennai, India",
    description: [
          "Developed a scalable internal training and assessment platform using MERN stack, enabling managers to assign courses, track progress, and automate test evaluations.",
      "Implemented automated email notifications using Nodemailer to inform employees about assigned courses and upcoming tests, improving engagement and course completion rates.",
        "Conducted penetration testing on infotainment systems, identifying vulnerabilities and improving security measures by 30%.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email:"samrendrabarick112@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Samarendra2001",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/samrendra-barick-7936111b6/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Samrendra . All rights reserved.`,
};
