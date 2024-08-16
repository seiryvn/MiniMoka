'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/pagetypewriter";
export function TypeSkull() {
  const words = [
    {
      text: 'Serenity',
    },
    {
      text: 'in',
    },
    {
      text: 'every',
    },
    {
      text: 'Skull.',
      className: "text-stone-500 dark:text-stone-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words}/>
    </div>
  );
}