import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Bereket Worku, a chemical engineering student passion for backend development and artificial intelligence.
              <br /><br />
              I specialize in building robust, scalable backend systems that power seamless user experiences. My expertise includes Python, Django, Node.js, MySQL, and other technologies that enable me to create efficient, full-stack applications. Currently, I’m diving deep into the world of deep learning, exploring how AI can revolutionize software development and beyond.            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m a chemical engineering student at Addis Ababa University with a passion for backend development. I build scalable systems using Python, Django, and MySQL. As a self-learner, I&apos;m exploring deep learning&apos;s potential while blending engineering principles with coding. My projects focus on solving real-world problems with innovative, impactful solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy making music and watching movie.
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer.
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
