import HeroImage from "./assets/profile_img.jpg";

const Image = {
  HeroImage,
};

export default Image;

export const personalInfo = {
  name: "Tristan Nafi Agung Kurniawan",
  title: "Computer Science Student",
  location: "Bandung",
  phone: "087835347721",
  email: "ttkurniawan2712@gmail.com",
  github: "https://github.com/Trid3nz",
  linkedin: "https://www.linkedin.com/in/tristan-nafi-agung-kurniawan",
  summary:
    "Computer Science Student with a Passion for Data Analysis, Software Engineering, and AI. I have a keen interest in exploring new opportunities and am enthusiastic about learning. I bring experience in teamwork, decision-making, and collaborative projects.",
};

import Tools1 from "./assets/tools/vscode.png";
import Tools2 from "./assets/tools/reactjs.png";
import Tools4 from "./assets/tools/tailwind.png";
import Tools5 from "./assets/tools/bootstrap.png";
import Tools6 from "./assets/tools/js.png";
import Tools7 from "./assets/tools/nodejs.png";
import Tools8 from "./assets/tools/github.png";
import Tools9 from "./assets/tools/lightroom.png";
import Tools10 from "./assets/tools/canva.png";
import Tools11 from "./assets/tools/figma.png";
import Tools12 from "./assets/tools/python.png";
import Tools13 from "./assets/tools/GCP.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Lightroom",
    ket: "Design App",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Python",
    ket: "Language",
    dad: "1100",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Google Cloud Platform",
    ket: "Cloud Computing",
    dad: "1200",
  },
];

import Proyek1 from "./assets/proyek/Food-Recognition System.png";
import Proyek2 from "./assets/proyek/Motion-up.png";
import Proyek3 from "./assets/proyek/Career-Sprint.png";
import Proyek4 from "./assets/proyek/Binus-Aspire.png";
import Proyek5 from "./assets/proyek/Personal-website.png";
import FreshOrTrash1 from "./assets/proyek/Fresh or Trash 1.png";
import FreshOrTrash2 from "./assets/proyek/Fresh or Trash 2.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek3,
    nama: "CareerSprint",
    desk: "An AI-based human resource management system designed to encourage skill improvement through feedback-based learning. Positioned group for participation as a finalist in the ITCC UI/UX 2024 Competition.",
    tools: ["Figma", "UI/UX", "AI Concept"],
    dad: "200",
    link: "https://www.figma.com/design/8PwZXyB5pIEal0rghqL9iz/ITCC-Competition?node-id=0-1&t=GHc2KWGZOeYEmlUz-1",
  },
  {
    id: 2,
    gambar: FreshOrTrash1,
    gambarList: [FreshOrTrash1, FreshOrTrash2],
    nama: "Fresh or Trash",
    desk: "AI-based food freshness recognition website. Served as Team Leader overseeing project conceptualization, machine learning training, cloud deployment, and team guidance. Designed and trained a MobileNetV2 model for high accuracy under lightweight cloud deployment constraints.",
    tools: ["Python", "TensorFlow", "MobileNetV2", "Kaggle", "Cloud Deployment"],
    dad: "250",
    link: "https://freshortrash.vercel.app/",
  },
  {
    id: 3,
    gambar: Proyek1,
    nama: "AI Food Recognition",
    desk: "Implemented three food recognition algorithms (YOLOv8, ResNet-18, Vision Transformer) for model training, system development, and academic paper 'Deciding The Most Suited Algorithm for Food Recognition: A Comparative Study'.",
    tools: ["Python", "YOLOv8", "ResNet-18", "Vision Transformer", "HTML", "CSS", "Bootstrap"],
    dad: "300",
    link: "https://github.com/Trid3nz/Food-Recognition",
  },
  {
    id: 4,
    gambar: Proyek2,
    nama: "MotionUP",
    desk: "Fitness training app with gamification features such as leaderboards, streaks, and point scores. Contributed to UI/UX design, ideation, and proposal development.",
    tools: ["Figma", "UI/UX Design"],
    dad: "400",
    link: "https://www.figma.com/design/wjj4Xao5zQO6FxbxfB5osy/Motion-Up?node-id=0-1&t=ElkPAzEiRq92ThtM-1",
  },
  {
    id: 5,
    gambar: Proyek4,
    nama: "Binus Aspire",
    desk: "A redesigned version of the Binusmaya Learning Management System to improve user experience. Contributed to UI/UX design, ideation, proposal creation, and web implementation.",
    tools: ["Figma", "HTML", "CSS", "Bootstrap", "JavaScript"],
    dad: "500",
    link: "https://github.com/Trid3nz/Binus-Aspire",
  },
  {
    id: 6,
    gambar: Tools13,
    nama: "Cloud Music Player",
    desk: "A music player deployed within a Google Cloud environment utilizing cloud storage. Contributed to web development and deployment into the cloud system.",
    tools: ["Google Cloud Platform", "Cloud Storage", "Web Development"],
    dad: "600",
    link: "https://github.com/Trid3nz",
  },
  {
    id: 7,
    gambar: Proyek5,
    nama: "Portfolio Website",
    desk: "Personal portfolio website built with React, Vite, and Tailwind CSS to showcase projects, experience, and technical skills with dynamic animations.",
    tools: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    dad: "700",
    link: "https://github.com/Trid3nz/Better-Portofolio",
  },
];

import Bncc1 from "./assets/image/BNCC/BNCC-1.jpg";
import Bncc2 from "./assets/image/BNCC/BNCC - 2.JPG";
import Bncc3 from "./assets/image/BNCC/BNCC - 3.jpg";
import Bncc4 from "./assets/image/BNCC/BNCC - 4.jpg";

import Dbs1 from "./assets/image/DBS/IMG_3406.png";
import Dbs2 from "./assets/image/DBS/IMG_3408.png";

export const listExperience = [
  {
    id: 1,
    tempatKerja: "Bina Nusantara Computer Club (BNCC)",
    posisi: "External Event Organizer",
    tahun: "November 2023 - January 2026",
    deskripsi: [
      "Led 13-member team for BNCC Benchmarking 2024; partnered with CCI Telkom University.",
      "Handled logistics and documentation for Techbinar 2024.",
      "Negotiated with speakers; co-taught front-end workshop for 500+ students at TechBlast 2024.",
      "Coordinated event schedules and timelines.",
      "Managed volunteer team to ensure smooth event execution.",
      "Contributed to strategic planning and campaign growth.",
      "Oversaw event logistics and operations.",
    ],
    gambar: [Bncc1, Bncc2, Bncc3, Bncc4],
    dad: "200",
  },
  {
    id: 2,
    tempatKerja: "Google Developer Group On Campus Binus@Bandung",
    posisi: "Formalistic Division",
    tahun: "October 2024 - October 2025",
    deskripsi: [
      "Becoming the part of Formalistic Division, responsible for hosting and promoting workshops.",
      "Event Operator: Become the main operator for 6 different workshops with each having more than 60 participants.",
      "Event Promotion: Responsible for promoting workshops to participants via WhatsApp community.",
    ],
    gambar: [],
    dad: "300",
  },
  {
    id: 3,
    tempatKerja: "Klifonara",
    posisi: "Member",
    tahun: "January 2024 - July 2026",
    deskripsi: [
      "Tasked with serving as the documentation team for three campus events.",
      "Primarily concentrates on photography.",
    ],
    gambar: [],
    dad: "400",
  },
  {
    id: 4,
    tempatKerja: "DBS X Dicoding Coding Camp 2026",
    posisi: "AI Engineer Cohort",
    tahun: "January 2026 - July 2026",
    deskripsi: [
      "Selected member of DBS X Dicoding Coding Camp 2026 as an AI Engineer Cohort.",
      "Engaging in module-based learning provided by Dicoding.",
      "Led a group of 5 for final project in making Computer Vision website.",
    ],
    gambar: [Dbs1, Dbs2],
    dad: "500",
  },
];

export const listEducation = [
  {
    id: 1,
    institution: "Bina Nusantara University",
    stream: "Cloud Computing Streaming",
    tahun: "September 2023 - Present",
    gpa: "3.51 GPA",
    details: [
      "3.51 GPA",
      "Active member of 3 student organizations: GDG On Campus, BNCC, and Klifonara.",
      "Pursuing core subjects in computer science including programming, data structures, and algorithms.",
      "Involved in collaborative and extracurricular activities to build leadership and technical skills.",
    ],
  },
  {
    id: 2,
    institution: "University of Technology Sydney",
    stream: "Study Abroad",
    tahun: "July 2026 - Present",
    details: [
      "BINUS Enrichment II Study abroad program.",
      "Engaging in courses related to Data Analysis.",
    ],
  },
  {
    id: 3,
    institution: "Taman Rama Jimbaran Senior High School",
    stream: "High School Diploma",
    tahun: "July 2020 - June 2023",
    details: [
      "Member of Student Council: organized and led two school events, responsible for event concepts and rundown planning.",
      "Participated in national-level competitions.",
    ],
  },
];

export const listAchievements = [
  "Finalist in UI/UX Competition by ITCC Udayana University",
  "Trained and mentored over 5 event activists",
  "Earned 7 data science related certificates",
];

export const listSkills = {
  softSkills: [
    "Analytical thinking",
    "Decision Making",
    "Teamwork",
    "Collaboration",
  ],
  hardSkills: [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "MySQL",
    "Data validation",
    "Data cleaning",
    "Data analysis",
    "Data visualization",
    "Figma",
    "GCP",
  ],
  otherSkills: ["Photo editing", "Digital photography"],
};

export const listLanguages = [
  { language: "English", proficiency: "IELTS 7" },
  { language: "Indonesian", proficiency: "Native Speaker" },
];



