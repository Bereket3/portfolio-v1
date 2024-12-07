"use client"

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion"
import { AiFillCode } from "react-icons/ai"
import ChipComponent from "./chips"
import { cn } from "@/lib/utils";

interface ListStuggerdViewProps {
  data: Array<string>,
  title?: String,
}

export default function ListStuggerdView({ data, title }: ListStuggerdViewProps) {

  const mainControls = useAnimation();
  const slideControls = useAnimation();


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} >
      <div className={cn()}>
        <h4 className="flex flex-row py-6">
          <AiFillCode size="2.4rem" color="008fa2" />
          <p className="pl-2 text-[30px] font-bold">{title}</p>
        </h4>
        <div className="flex flex-wrap gap-4 mb-8">
          {data.map((text, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}

              initial="hidden"
              whileInView="animate"
              viewport={{ once: true }}
              animate={mainControls}
              transition={{ duration: 0.5, delay: index * 0.25 }}
            >
              <ChipComponent key={index} text={text} />
            </motion.div>
          ))}
        </div>
      </div>
    </div >

  )

}
