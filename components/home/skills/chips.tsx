import { cn } from "@/lib/utils"

interface ChipComponentprops {
  className?: String,
  text: String,

}

export default function ChipComponent({
  className,
  text
}: ChipComponentprops
) {
  return <span className={cn("px-3 py-2 bg-[#232323] rounded-2xl text-lg", className)} >{text}</span >
}
