'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/pagetypewriter";
export function TypeNanci() {
  const words = [
    {
      text: 'Discover',
    },
    {
      text: 'Harmony',
    },
    {
      text: 'through',
    },
    {
      text: 'Nanci.',
      className: "text-stone-500 dark:text-stone-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words}/>
    </div>
  );
}
