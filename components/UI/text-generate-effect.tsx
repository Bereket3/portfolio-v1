"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  // Hook to check if the element is in view
  const isInView = useInView(scope, { once: true, margin: "0px 0px -50px 0px" });

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        viewport={{ once: true }}
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0 text-muted",
                word.startsWith("Con") || word.startsWith("Re") || word.startsWith("dy") || word.startsWith("Ve")
                  ? "bg-gradient-to-b from-[#00ff8c] via-[#00b3ff] to-[#001eff] bg-clip-text tracking-tighter text-transparent "
                  : ""
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-white tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
