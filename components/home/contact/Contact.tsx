import { NeonGradientCard } from "@/components/UI/neon-gradient-card";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { BackgroundLines } from "@/components/UI/background-lines";
import { RainbowButton } from "@/components/UI/rainbow-button";

export const Contact = () => {
  return (
    <section className="pb-24 flex flex-wrap justify-center content-center items-center " id="contact">
      <NeonGradientCard
        className="w-[95%] md:w-[70%] items-center justify-center text-center "
      >
        <BackgroundLines
          className="flex items-center justify-center w-full flex-col bg-black py-56 md:py-24"
        >
          <h4 className="text-7xl font-bold text-center bg-gradient-to-b from-[#00ff8c] via-[#00b3ff] to-[#001eff] bg-clip-text tracking-tighter text-transparent ">
            Contact
          </h4>

          <p className=" text-white text-[20px] text-center py-8 px-3">
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              className="text-blue-400"
              href="https://www.linkedin.com/in/john-carlo-devera-5240761b6/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link className="text-blue-400" href="https://join.skype.com/invite/vKVMgi5SGjvM" target="_blank" rel="nofollow">
              Skype
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
          <RainbowButton className="flex content-center justify-center m-6 text-2xl gap-2">
            <AiFillMail size="1.8rem" />
            Send Email

          </RainbowButton>
        </BackgroundLines>
      </NeonGradientCard>

    </section >
  );
};
