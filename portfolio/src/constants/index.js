
import hotel from "../assets/hotel.png"
import blog from "../assets/blog.png"
import baccarat from "../assets/baccarat.png"

export const HERO_CONTENT = `I am a front-end developer with a passion for building responsive, user-friendly web interfaces. I have strong experience in modern JavaScript frameworks, UI/UX design, and performance optimization.`;

export const ABOUT_TEXT = `
With experience across React, Angular, TypeScript, JavaScript, my focus is on delivering high-quality, responsive designs that meet user needs. Thriving in collaborative environments, I enjoy collaborating with teams to solve complex challenges and deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "08/2023 - 08/2024",
    role: "Junior developer",
    company: "GSOFT CO., LTD",
    description: `Maintain and improve banking project such as: data monitoring, data management and administration`,
    technologies: ["Javascript", "Angular", ".Net", "MySQL"],
  },
  {
    year: "01/2023 - 06/2023",
    role: "Frontend Developer",
    company: "Bachelor Thesis Project",
    description: `Building UI, JWT authentication, researching technology that fits into the project, analyzing and testing all the features, functionalities, and businesses in the systems.`,
    technologies: [
      "ReactJS",
      "Charka UI",
      "TailwindCSS",
      "YUP",
      "Formik",
      "React-query",
    ],
  },
  {
    year: "06/2022 - 06/2023",
    role: "Staff member",
    company: "PRIMAS CO,. LTD",
    description: `Working on Agile scrum framework, having experience working on JIRA, and BITBUCKET. Read and analyze the existing code in the project to create new features, and fix remaining bugs. Working on several projects and features: personal note, chatbox, data management. Have experience in SEO jobs about indexing and analyzing the problem of the website.`,
    technologies: ["Angular", "Typescript", ".Net", "MUI"],
  },
];

export const PROJECTS = [
  {
    title: "Blogging Platform",
    image: blog,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting.",
    technologies: ["HTML", "CSS", "NextJS", "Prisma", "MongoDB","Firebase"],
    link:"https://blog-duydev689.vercel.app/"
  },
  {
    title: "Hotel booking",
    image: hotel,
    description:
      "A website for booking hotel room and suite",
    technologies: ["HTML", "CSS", "NextJS", "Sanity","Stripe"],
    link:"https://ecommerce-duydev689.vercel.app/"
  },
  {
    title: "Baccarat",
    image: baccarat,
    description:
      "A fun baccarat web game project",
    technologies: ["HTML", "CSS", "React",],
    link:"https://baccarat-duydev.vercel.app/"
  },
];

export const CONTACT = {
  address: "Binh Tan District, Ho Chi Minh City",
  phoneNo: "+84 0799608210 ",
  email: "duyduong365900it@gmail.com",
};
