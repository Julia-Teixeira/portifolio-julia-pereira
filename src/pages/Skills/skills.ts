import javascript from "../../assets/js.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import typescript from "../../assets/typescript.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
import postgresql from "../../assets/postgresql.png";
import expressjs from "../../assets/expressjs.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import api from "../../assets/api.png";
import yarn from "../../assets/yarn.png";

interface iSkills {
  name: string;
  img: string;
}

const skills: iSkills[] = [
  {
    name: "HTML",
    img: `${html}`,
  },
  {
    name: "CSS",
    img: `${css}`,
  },
  {
    name: "JavaScript",
    img: `${javascript}`,
  },
  {
    name: "TypeScript",
    img: `${typescript}`,
  },
  {
    name: "React",
    img: `${react}`,
  },
  {
    name: "NodeJs",
    img: `${nodejs}`,
  },
  {
    name: "PostgreSQL",
    img: `${postgresql}`,
  },
  {
    name: "Express.js",
    img: `${expressjs}`,
  },
  {
    name: "Figma",
    img: `${figma}`,
  },
  {
    name: "Git",
    img: `${git}`,
  },
  {
    name: "API",
    img: `${api}`,
  },
  {
    name: "Yarn",
    img: `${yarn}`,
  },
];

export default skills;
