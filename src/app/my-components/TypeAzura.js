'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/pagetypewriter";
export function TypeAzura() {
  const words = [
    {
      text: 'Stars',
    },
    {
      text: 'Aligned',
    },
    {
      text: 'with',
    },
    {
      text: 'Azura.',
      className: "text-stone-500 dark:text-stone-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words}/>
    </div>
  );
}