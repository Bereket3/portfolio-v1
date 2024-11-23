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
          <DelayedComponent>
            <h1 className={styles.subTitle}>
              I&apos;m <span className="text-theme-2 font-bold font-sans">Bereket Worku.</span>
            </h1>
          </DelayedComponent>
          <DelayedComponent>
            <WordRotate
              duration={3500}
              className={cn(styles.subTitle, "font-bold")}
              words={["Software Developer", "Web Developer", "Modile Application Developer"]}
            />
          </DelayedComponent>
          <DelayedComponent>
            <p className={styles.aboutCopy}>
              I&apos;ve spent the last 3 years building and scaling applications for
              some pretty cool companies and individuals. I also create interesting self projects on my spare time.
              Let&apos;s connect!
            </p>
          </DelayedComponent>
          <DelayedComponent>
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
