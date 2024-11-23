
import React, { useEffect, useRef } from "react";
import { Reveal } from "@/components/utils/Reveal"
import { motion, useAnimation, useInView } from "framer-motion"
import { AiFillCode } from "react-icons/ai"
import ChipComponent from "./chips"
import styles from "../about/stats.module.scss"


interface ListStuggerdViewProps {
  data: Array<string>
}

export default function ListStuggerdView({ data }: ListStuggerdViewProps) {

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
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="00b5b1" />
            <span>Programming Languages</span>
          </h4>
          <div className="flex flex-wrap gap-[1.6rem] mb-[4.8rem]">
            {data.map((text, index) => (
              <motion.div
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
      </Reveal >
    </div >
  )

}
