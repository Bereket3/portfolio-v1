import Ripple from "@/components/UI/ripple";


export default function LetsConnectSection() {

  return (
    <section className="relative h-max w-full">
      < p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white" >
        Ripple
      </p >
      <Ripple
        mainCircleSize={300}
        mainCircleOpacity={0.9}
        className=""
      />
    </section >
  );
}

