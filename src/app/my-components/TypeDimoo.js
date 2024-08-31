'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/pagetypewriter";
export function TypeDimoo() {
  const words = [
    {
      text: 'Wander',
    },
    {
      text: "fantasy",
    },
    {
      text: "with",
    },
    {
      text: 'Dimoo.',
      className: "text-stone-500 dark:text-stone-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words}/>
    </div>
  );
}