"use client"
import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicCard } from "@/components/UI/magic-card";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "@/components/UI/background-gradient";


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
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75 }}
      className="pb-6"
    >
      <BackgroundGradient
        className="rounded-[22px] py-max bg-zinc-900"
      >
        <MagicCard
          className="md:p-4 p-2"
          gradientOpacity={0.5}
        >
          <div
            className="bg-background rounded-2xl"
          >
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setIsOpen(true)}
              className="w-full md:h-[300px] h-full"
            >
              <Image
                priority
                src={imgSrc}
                alt={`An image of the ${title} project.`}
                width={500}
                height={300}
                className="object-fill rounded-t-xl w-full h-full"
              />
            </div>
            <div className={cn("p-5 flex flex-col gap-10")}>
              <Reveal width="100%">
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold lg:text-3xl md:text-xl text-base line-clamp-1">{title}</h1>
                  <div className=" flex flex-row gap-2">
                    <Link href={code} target="_blank" rel="nofollow">
                      <AiFillGithub size="1.6rem" />
                    </Link>

                    <Link href={projectLink} target="_blank" rel="nofollow">
                      <AiOutlineExport size="1.6rem" />
                    </Link>
                  </div>
                </div>
              </Reveal>
              <Reveal>

                <p className={cn("flex flex-col items-stretch text-lg md:h-20 ")}>
                  {description} <br />
                </p>

              </Reveal>
              <Reveal>
                <div className="flex flex-row justify-between my-auto ">
                  <div className="flex items-center">
                    {tech.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image src={icon} width={500} height={500} alt="icon5" className="p-2" />
                      </div>
                    ))}

                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" size={"1.6rem"} color="#CBACF9" />
                  </div>

                </div>

              </Reveal>

            </div>
          </div>
        </MagicCard>

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

      </BackgroundGradient>
    </motion.div>
  );
};
