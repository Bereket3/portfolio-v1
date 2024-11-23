
import IconCloud from "@/components/UI/icon-cloud";
import { SectionHeader } from "@/components/utils/SectionHeader";
import ListStuggerdView from "./stuggerd-list";


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "python",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "playright",
  "postgresql",
  "nginx",
  "vercel",
  "testinglibrary",
  "django",
  "fastapi",
  "flask",
  "mysql",
  "neovim",
  "rust",
  "docker",
  "git",
  "go",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "linux"
];

const programmingLanguages: Array<string> = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Python",
  "Golang",
  "Rust",
  "Dart",
  "PHP",
];

const frameworks: Array<string> = [
  "Django", "React", "NodeJs", "Express", "NextJs", "NestJs", "FastAPI", "NumPy", "PyTorch"
]

const platformsAndTechnologys: Array<string> = [
  "Docker",
  "Git",
  "Linux",
  "PowerShell",
  "Vim/Neovim"

]

const dataBases: Array<string> = [
  "Postgresql", "MySQL", "SQLlight", "MongoDB"
]

export default function Skills() {


  return (
    <section id="skills" className="section-wrapper">
      <SectionHeader title="Skills" dir="r" />
      <div className="grid grid-cols-2">
        <div>
          <ListStuggerdView data={programmingLanguages} />
          <ListStuggerdView data={frameworks} />
          <ListStuggerdView data={platformsAndTechnologys} />
          <ListStuggerdView data={dataBases} />
        </div>

        <IconCloud iconSlugs={slugs} />
      </div >
    </section >
  );
}
