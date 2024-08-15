"use client";
import { TypewriterEffectSmooth } from "@/src/components/ui/typewriter-effect";
import LinkButton from "./LinkButton";

export function TypeWriter() {
  const words = [
    {
      text: "Collect",
    },
    {
      text: "and",
    },
    {
      text: "Cherish",
    },
    {
      text: "with",
    },
    {
      text: "MiniMoka.",
      className: "text-stone-700 dark:text-stone-700",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-stone-700 dark:text-stone-200 text-2xl ">
        Bringing stories to life, one figure at a time.   </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <LinkButton title="Shop All" link="/docs/all"/>
      </div>
    </div>
  );
}