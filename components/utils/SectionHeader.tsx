"use client";

import { Highlight } from "../UI/hero-highlight";
import { motion } from "framer-motion";
export function SectionHeader() {
  return (
    <>
      <div className="pb-24 ">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          viewport={{
            once: true
          }}
          whileInView={{
            opacity: 1,
            y: [20, -5, 0],

          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}

          className="text-3xl px-2 md:text-6xl  font-bold text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Innovative Solutions  {" "}
          <span className="block">
            <Highlight className="text-white break-words">
              Crafted With Passion.
            </Highlight>
          </span>
        </motion.h1>
      </div>
    </>
  );
}
