"use client"

import { motion, Transition, useInView } from "motion/react";
import { useRef } from "react";
import King from "./_assets/king";
import Queen from "./_assets/queen";
import Racket from "./_assets/racket";
import Sword from "./_assets/sword";

const baseDelay = 0.2;

const fadeInUpAnimation = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
};

const iconTransition: Transition = {
  mass: 1,
  type: "spring",
};

function AnimatedIcon({
  children,
  delay,
  className,
  animate,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  animate: boolean;
}) {
  return (
    <motion.div
      initial={fadeInUpAnimation.initial}
      animate={animate ? fadeInUpAnimation.animate : {}}
      transition={ { ...iconTransition, delay: baseDelay + delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Characters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="flex gap-4 items-end h-24 w-full mb-8"
    >
      <AnimatedIcon delay={0} animate={isInView} >
        <Queen className="h-20" />
      </AnimatedIcon>

      <AnimatedIcon delay={0.2} animate={isInView} className={`mr-4`}>
        <Racket className="h-16" />
      </AnimatedIcon>

      <AnimatedIcon delay={0.3} animate={isInView}>
        <Sword className="h-16 scale-x-[-1]" />
      </AnimatedIcon>

      <AnimatedIcon delay={0.1} animate={isInView}>
        <King className="h-20 scale-x-[-1]" />
      </AnimatedIcon>
    </div>
  );
}
