import IconCloud from "@/components/UI/icon-cloud";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { cn } from "@/lib/utils";
import ListStuggerdView from "./stuggerd-list";
import { TextGenerateEffect } from "@/components/UI/text-generate-effect";
import DelayedComponent from "@/components/UI/delayed-animation";


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
    <section id="skills" className="relative md:px-20 pt-10 pb-24">
      {/* <div */}
      {/*   className="h-full w-screen bg-black-100 bg-grid-white/[0.05]  */}
      {/*  absolute top-0 left-0 flex items-center justify-center" */}
      {/* > */}
      {/*   <div */}
      {/*     className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 */}
      {/*    [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" */}
      {/*   /> */}
      {/* </div> */}

      <TextGenerateEffect
        words="Versatile and dynamic skill set"
        className="text-center text-[40px] md:text-5xl lg:text-7xl pb-6 md:px-28 capitalize"
      />
      <div className={cn("grid grid-cols-1 md:grid-cols-2 h-max")}>
        <div>
          <DelayedComponent
            delay={0.5}
          >
            <ListStuggerdView data={programmingLanguages} title="Programming Languages" />
          </DelayedComponent>
          <DelayedComponent
            delay={0.7}
          >
            <ListStuggerdView data={frameworks} title="Frameworks" />
          </DelayedComponent>
          <DelayedComponent
            delay={0.9}
          >
            <ListStuggerdView data={platformsAndTechnologys} title="Platforms and Technology" />
          </DelayedComponent>
          <DelayedComponent
            delay={1}
          >
            <ListStuggerdView data={dataBases} title="DataBase" />
          </DelayedComponent>
        </div>
        <IconCloud iconSlugs={slugs} />
      </div >
    </section >
  );
}
