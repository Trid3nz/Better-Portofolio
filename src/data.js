import HeroImage from "./assets/profile_img.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "./assets/tools/vscode.png";
import Tools2 from "./assets/tools/reactjs.png";
// import Tools3 from "./assets/tools/nextjs.png";
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
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Lightroom",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Python",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Google Cloud Compute",
    ket: "Cloud Computing",
    dad: "1300",
  },
];

import Proyek1 from "./assets/proyek/Food-Recognition System.png";
import Proyek2 from "./assets/proyek/Motion-up.png";
import Proyek3 from "./assets/proyek/Career-Sprint.png";
import Proyek4 from "./assets/proyek/Binus-Aspire.png";
import Proyek5 from "./assets/proyek/Personal-website.png";
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "AI Food Recognition",
    desk: "This project uses Computer Vision to recognize food items from uploaded images. It utilizes 3 different models such as YOLOv8, ResNet-18, and Vision Transformer where the user can select which one they want to use. After that we display the nutritional value of the food.",
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Python",
      "YOLOv8",
      "ResNet-18",
      "ViT Transformer",
    ],
    dad: "200",
    link: "https://github.com/Trid3nz/Food-Recognition",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Motion Up",
    desk: "Motion Up is an app concept that helps user to exercise and track their progress. It provides a user-friendly step by step guide depending on their preference, and also provides a progress tracker to help user to track their progress.",
    tools: ["Figma"],
    dad: "300",
    link: "https://www.figma.com/design/wjj4Xao5zQO6FxbxfB5osy/Motion-Up?node-id=0-1&t=ElkPAzEiRq92ThtM-1",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Career Sprint",
    desk: "Career Sprint is an app concept that helps user to find their career path. It is a human resource management app that encourage improvement in hard-skills or soft-skills through a feedback based learning system. This app concept helps us to finish at the finals at ITCC UI/UX 2024 Competition at Bali.",
    tools: ["Figma"],
    dad: "400",
    link: "https://www.figma.com/design/8PwZXyB5pIEal0rghqL9iz/ITCC-Competition?node-id=0-1&t=GHc2KWGZOeYEmlUz-1",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Binus Aspire",
    desk: "Binus Aspire is a redesigned version of Binusmaya that we created for a Human Computer Interaction class project. It aims to improve the overall usage of Binusmaya that we found clunky or not the best user experience. For this we analyzed the several aspect of Binusmaya that we found annoying, and I am responsible for redesigning the web in Figma UI/UX design.",
    tools: ["Figma", "HTML", "CSS", "Bootstrap", "Javascript"],
    dad: "500",
    link: "https://github.com/Trid3nz/Binus-Aspire",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Portfolio Website",
    desk: "This portfolio website is also one of my projects where It it the first time I fully try to code in React while also using modern framework such as Tailwind CSS. This portfolio aims to showcase my skills and projects that I have done in the past",
    tools: ["React", "Tailwind CSS", "Vite"],
    dad: "600",
    link: "https://github.com/Trid3nz/Better-Portofolio",
  },
];
