import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
    navItems,
    clickedIndex,
    setClickedIndex,
    className,
  }: {
    navItems: {
      name: string;
      link: string;
      icon?: JSX.Element;
    }[];
    clickedIndex: number | null;
    setClickedIndex: (index: number) => void;
    className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <motion.button
              onClick={() => setClickedIndex(idx)}
              whileTap={{ scale: 0.9 }}
              animate={{
                borderColor: clickedIndex === idx ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
                backgroundColor: clickedIndex === idx ? '#000' : 'transparent',
                color: clickedIndex === idx ? '#fff' : '#666',
              }}
              initial={{ color: '#666' }}
              className={cn(
                "text-sm font-medium relative px-4 py-2 rounded-full",
                { "dark:border-white/[0.2] border": clickedIndex === idx }
              )}
              transition={{ duration: 0.3 }}
            >
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              {clickedIndex === idx && (
                <motion.span
                  className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
