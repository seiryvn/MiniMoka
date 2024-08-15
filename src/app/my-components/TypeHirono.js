'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/pagetypewriter";
export function TypeHirono() {
  const words = [
    {
      text: 'Welcome',
    },
    {
      text: 'to',
    },
    {
      text: 'the',
    },
    {
      text: 'World',
    },
    {
      text: 'of',
    },
    {
      text: 'Hirono.',
      className: "text-stone-700 dark:text-stone-700",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words}/>
    </div>
  );
}
