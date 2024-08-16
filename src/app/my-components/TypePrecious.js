'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/pagetypewriter";
export function TypePrecious() {
  const words = [
    {
      text: 'Treasuring',
    },
    {
      text: "life's",
    },

    {
      text: 'Precious Moments.',
      className: "text-stone-500 dark:text-stone-500",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words}/>
    </div>
  );
}