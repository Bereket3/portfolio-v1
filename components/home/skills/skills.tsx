import IconCloud from "@/components/UI/icon-cloud";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { cn } from "@/lib/utils";
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
  "linux",
  "socketio"
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
  "Django", "React", "NodeJs", "Express", "NextJs", "NestJs", "FastAPI", "NumPy", "PyTorch", "SocketIO"
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
    <section id="skills" className="px-20">
      <SectionHeader title="Skills" dir="r" />
      <div className={cn("grid grid-cols-1 md:grid-cols-2 h-max")}>
        <div>
          <ListStuggerdView data={programmingLanguages} title="Programming Languages" />
          <ListStuggerdView data={frameworks} title="Frameworks" />
          <ListStuggerdView data={platformsAndTechnologys} title="Platforms and Technology" />
          <ListStuggerdView data={dataBases} title="DataBase" />
        </div>
        <IconCloud iconSlugs={slugs} />
      </div >
    </section >
  );
}
