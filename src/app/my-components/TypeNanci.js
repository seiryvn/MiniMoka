'use client'
import { TypewriterEffectSmooth } from "@/src/components/ui/pagetypewriter";
export function TypeNanci() {
  const words = [
    {
      text: 'Find',
    },
    {
      text: 'Harmony',
    },
    {
      text: 'with',
    },
    {
      text: 'Nanci.',
      className: "text-stone-700 dark:text-stone-700",
    },
  ];
  return (
    <div>
      <TypewriterEffectSmooth words={words}/>
    </div>
  );
}
