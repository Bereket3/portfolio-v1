import styles from "./hero.module.scss";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/UI/animated-grid-pattern";
import { RainbowButton } from "@/components/UI/rainbow-button";
import DelayedComponent from "@/components/UI/delayed-animation";
import { WordRotate } from "@/components/UI/word-rotate";


export const Hero = () => {
  return (
    <section className={cn(
      styles.hero,
    )}>
      <div className="flex justify-center">
        <div className="">
          <DelayedComponent>
            <h1 className={styles.title}>
              Hi <span>there</span>,
            </h1>
          </DelayedComponent>
          <DelayedComponent
            delay={0.4}>
            <h1 className={styles.subTitle}>
              I&apos;m <span className="text-theme-2 font-bold font-sans">Bereket Worku.</span>
            </h1>
          </DelayedComponent>
          <DelayedComponent
            delay={0.8}>
            <WordRotate
              duration={3500}
              className={cn(styles.subTitle, "font-bold")}
              words={["Software Developer", "Web Application Developer", "Modile Application Developer"]}
            />
          </DelayedComponent>
          <DelayedComponent
            delay={1.2}>
            <p className={styles.aboutCopy}>
              I&apos;ve been building and optimizing innovative applications and tackling exciting tech challenges with a focus on functionality and user experience. Whether it&apos;s creating impactful solutions for businesses or diving into self-driven projects, I&apos;m all about crafting clean, efficient, and meaningful software. Let&apos;s work togather!
            </p>
          </DelayedComponent>
          <DelayedComponent
            delay={1.6}>
            <RainbowButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </RainbowButton>
          </DelayedComponent>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </section>
  );
};
