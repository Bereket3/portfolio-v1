
import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/UI/floting-dock";
import {
  IconBrandGithub,
  IconHome,
  IconMan,
  IconMug,
  IconTerminal2,
  IconWorld,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";


export function FloatingDockDemo() {

  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);



  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Skills",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "About",
      icon: (
        <IconMan className="h-full w-full text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconMug className="h-full w-full text-neutral-300" />
      ),
      href: "#projects",
    },

    {
      title: "Experiance",
      icon: (
        <IconWorld className="h-full w-full text-neutral-300" />
      ),
      href: "#experiance",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className={cn("h-[20rem] top-[1.2rem] px-[3.6rem] py-[3.6rem] mt-[4rem] flex items-center justify-between sticky z-20 font-bold text-[var(--text-md)]", "md:flex md:items-center md:justify-center",
      "sticky top-20 z-1 left-0 h-[0.5rem] mt-[2rem] mb-0")}>
      <FloatingDock
        items={links}
      />
    </div>
  );
}
