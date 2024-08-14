'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/typewriter-effect";
export function PageTypewriter() {
  const words = [
    {
      text: 'sdas',
    },
    {
      text: 'sddsa',
    },
    {
      text: 'saddgb',
    },
    {
      text: 'sadasde',
    },
    {
      text: 'hello',
      className: "text-stone-700 dark:text-stone-700",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
