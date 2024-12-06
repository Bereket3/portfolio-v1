import styles from "./header.module.scss";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className={cn(
        "flex content-center justify-center"
      )}
    >
      {/*  <Reveal> */}
      <h2 className={cn(
        "text-5xl font-bold text-white py-6"
      )}>
        {title}
        <span>.</span>
      </h2>
      {/*   </Reveal> */}
    </div>
  );
};
