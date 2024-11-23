import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";

import { MagicCard } from "@/components/UI/magic-card";
import { cn } from "@/lib/utils";
import ShineBorder from "@/components/UI/shine-border";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <ShineBorder
        className="relative flex h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-xl"
        color={["#00dbaf", "#2f4858", "#00b5b1"]}
      >
        <MagicCard
          gradientColor="#00b5b1"
          gradientOpacity={0.19}
        >
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.75 }}
          >
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setIsOpen(true)}
            >
              <Image
                priority
                src={imgSrc}
                alt={`An image of the ${title} project.`}
                width={1000}

                height={0}
                className="object-cover p-6 border rounded-sm"
                style={{
                  width: hovered ? "90% !important" : "85% !important",
                  rotate: hovered ? "2deg" : "0deg",

                }}
              />
            </div>
            <div className={cn("p-10")}>
              <Reveal width="100%">
                <div className={styles.projectTitle}>
                  <h4>{title}</h4>
                  <div className={styles.projectTitleLine} />

                  <Link href={code} target="_blank" rel="nofollow">
                    <AiFillGithub size="2.8rem" />
                  </Link>

                  <Link href={projectLink} target="_blank" rel="nofollow">
                    <AiOutlineExport size="2.8rem" />
                  </Link>
                </div>
              </Reveal>
              <Reveal>
                <div className={cn(styles.projectTech, "text-theme-3")}>{tech.join(" - ")}</div>
              </Reveal>
              <Reveal>
                <>
                  <p className={cn(styles.projectDescription, "flex flex-col items-stretch ")}>
                    {description} <br />
                    <span className="text-theme-4" onClick={() => setIsOpen(true)}>Learn more {">"}</span>
                  </p>
                </>
              </Reveal>
            </div>
          </motion.div>
        </MagicCard>
      </ShineBorder>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />

    </>
  );
};
