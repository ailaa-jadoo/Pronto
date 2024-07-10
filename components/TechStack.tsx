import { animate, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useInView } from "framer-motion";

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      {/* <motion.div
        className="text-4xl font-bold dark:text-white text-black mt-20 mb-10"
        id="skills"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Skills
      </motion.div> */}


      <motion.div
        className="p-4 md:p-8 overflow-hidden h-full relative flex items-center justify-center"
        ref={ref}
        style={{
          transform: isInView ? "none" : "opacity:1",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Card>
          <CardSkeletonContainer>
            <Skeleton />
          </CardSkeletonContainer>
        </Card>
      </motion.div>
    </>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-7px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
    [".circle-6", { scale, transform }, { duration: 0.8 }],
    [".circle-7", { scale, transform }, { duration: 0.8 }],
    [".circle-8", { scale, transform }, { duration: 0.8 }],
    [".circle-9", { scale, transform }, { duration: 0.8 }],
    [".circle-10", { scale, transform }, { duration: 0.8 }],
    [".circle-11", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-4 md:p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-wrap sm:flex-row sm:flex-shrink-0 justify-center items-center gap-1 md:gap-2">
        <Container className="h-12 w-12 sm:h-8 sm:w-8 md:h-16 md:w-16 circle-1">
          <Image
            src="/html.png"
            alt="html icon"
            width={24}
            height={24}
            className="w-7 h-7 sm:w-4 sm:h-4 md:w-8 md:h-8"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-10 sm:w-10 md:h-20 md:w-20 circle-2">
          <Image
            src="/typescript.png"
            alt="typescript icon"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-5 sm:h-5 md:w-10 md:h-10"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-12 sm:w-12 md:h-24 md:w-24 circle-3">
          <Image
            src="/TailwindCSS.png"
            alt="TailwindCSS icon"
            width={32}
            height={32}
            className="w-7 h-7 sm:w-6 sm:h-6 md:w-12 md:h-12"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-14 sm:w-14 md:h-28 md:w-28 circle-4">
          <Image
            src="/nodejs.png"
            alt="nodejs icon"
            width={44}
            height={44}
            className="w-7 h-7 sm:w-7 sm:h-7 md:w-14 md:h-14"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-16 sm:w-16 md:h-32 md:w-32 circle-5">
          <Image
            src="/react.png"
            alt="react icon"
            width={48}
            height={48}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-16 md:h-16"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-20 sm:w-20 md:h-40 md:w-40 circle-6">
          <Image
            src="/js.png"
            alt="JS icon"
            width={54}
            height={54}
            className="w-7 h-7 sm:w-10 sm:h-10 md:w-20 md:h-20"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-16 sm:w-16 md:h-32 md:w-32 circle-7">
          <Image
            src="/angular.png"
            alt="angular icon"
            width={48}
            height={48}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-16 md:h-16"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-14 sm:w-14 md:h-28 md:w-28 circle-8">
          <Image
            src="/mongo.png"
            alt="mongo icon"
            width={44}
            height={44}
            className="w-7 h-7 sm:w-7 sm:h-7 md:w-14 md:h-14"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-12 sm:w-12 md:h-24 md:w-24 circle-9">
          <Image
            src="/bootstrap.png"
            alt="bootstrap icon"
            width={32}
            height={32}
            className="w-7 h-7 sm:w-6 sm:h-6 md:w-12 md:h-12"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-10 sm:w-10 md:h-20 md:w-20 circle-10">
          <Image
            src="/python.png"
            alt="python icon"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-5 sm:h-5 md:w-10 md:h-10"
          />
        </Container>
        <Container className="h-12 w-12 sm:h-8 sm:w-8 md:h-16 md:w-16 circle-11">
          <Image
            src="/css-3.png"
            alt="css icon"
            width={24}
            height={24}
            className="w-7 h-7 sm:w-4 sm:h-4 md:w-8 md:h-8"
          />
        </Container>
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "w-full mx-auto md:p-8 group scale-110",
        "w-full rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]  mx-auto md:p-8 group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
        "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
