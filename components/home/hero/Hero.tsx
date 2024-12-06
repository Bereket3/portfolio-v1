
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/UI/spotlight";
import { TextGenerateEffect } from "@/components/UI/text-generate-effect";
import AnimatedGridPattern from "@/components/UI/animated-grid-pattern";
import DelayedComponent from "@/components/UI/delayed-animation";
import { RainbowButton } from "@/components/UI/rainbow-button";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import TypingAnimation from "@/components/UI/typing-animation";


const Hero = () => {
  return (
    <div className="relative pb-20 pt-32">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
        )}
      />
      <div className="md:flex hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#0aff9d"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#008fa2" />
      </div>

      <div
        className="h-screen w-full bg-black-100 bg-grid-white/[0.03] 
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-8 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <DelayedComponent
            delay={0}
            className="hidden"
          >
            <p className=" hidden md:flex tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dive in, and let&apos;s create something extraordinary together.
            </p>
          </DelayedComponent>
          <TextGenerateEffect
            words="Transforming Concepts into Reality"
            className="text-center text-[40px] md:text-5xl lg:text-7xl pb-6"
          />

          <TypingAnimation className="text-center py-5        
            text-lg md:tracking-wider text-blue-100 mt-2 mb-4 md:text-lg lg:text-2xl"
            duration={30}
            text="Hi! I&apos;m bereket, a Software Developer based in Ethiopia."
          />

          <DelayedComponent
            delay={1.4}
            className="flex justify-between relative flex-row gap-4 md:gap-16 pt-4"
          >
            <>
              <RainbowButton
                className="text-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
              >
                Contact me
              </RainbowButton>
              <OutlineButton onClick={() => window.open("/bereket_worku_resume_v11.pdf")}>
                My resume
              </OutlineButton>
            </>
          </DelayedComponent>

        </div>
      </div>
    </div>
  );
};

export default Hero;
