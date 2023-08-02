"use client"
import { useEffect, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface HackerTextProps {
  text: string;
}

const HackerText: React.FC<HackerTextProps> = ({ text }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const animateText = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      let iteration = 0;

      intervalRef.current = setInterval(() => {
        const newText = text
          .split("")
          .map((letter, index) => {
            if (letter === ' ') {
              return ' '; // Preserve spaces during the animation
            }

            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        const targetElement = document.querySelector("h1") as HTMLElement;
        targetElement.textContent = newText;

        if (iteration >= text.length) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
        }

        iteration += 1 / 3;
      }, 30);
    };

    const handleMouseOver = () => {
      animateText();
    };

    const targetElement = document.querySelector("h1") as HTMLElement;
    targetElement.textContent = text; // Show the original text during initial render
    animateText(); // Start the animation immediately on mount

    targetElement.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearInterval(intervalRef.current!);
      targetElement.removeEventListener("mouseover", handleMouseOver);
    };
  }, [text]);

  return (
    <h1
      className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-mono"
      data-value={text}
    >
      {text}
    </h1>
  );
};

export default HackerText;
