"use client";

import { useEffect } from "react";
import { motion, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { Computer } from "./computer-art";
import { Logo } from "./icons";

export default function Hero() {
  return(
    <div className="relative">
      <Computer className="w-[350px] md:w-[500px]"/>
      <div className="absolute break-all left-[53px] top-[29px] w-[230px] h-[154px] p-2 
        md:left-[74px] md:top-[40px] md:w-[330px] md:h-[220px] md:p-4">
        <TypingAnimation/>
        {/*<LogoPopup className="m-auto"/>*/}
      </div>

    </div>
  );
}

const TypingAnimation = () => {
  const count = useMotionValue(0);
  const text = "whoami";
  const displayText = useTransform(count, (value) => "$ " + text.slice(0, Math.round(value)));

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [count, text.length, { duration: 1, delay: 1.5, ease: "easeInOut" }],
      [".cursor", { opacity: [1, 0] }, { duration: 0, at: "+1" }],
      [".username", { opacity: [0, 1], y: [10, 0] }, { duration: 0.5 }]
    ]);
  }, [])

  return(
    <div ref={scope}>
      <motion.a href="https://man7.org/linux/man-pages/man1/whoami.1.html" className="text-red-500 text-[1.15rem] md:text-[1.6rem]">
        {displayText}
      </motion.a>

      <motion.span className="cursor">
        <Cursor />
      </motion.span>

      <div className="username text-white text-[1.15rem] md:text-[1.6rem]">
        SemicolonUnexpected
      </div>
    </div>
  );
}

function Cursor() {
  return (
    <motion.div
      className="inline-block bg-red-500 h-5 w-[0.65rem] translate-x-1 translate-y-[0.19rem]
                                         md:h-[1.9rem] md:w-[1rem] md:translate-x-1 md:translate-y-[0.4rem]"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }}
    />
  );
}

const LogoPopup: React.FC<{ className?: string }> = ({ className }) => {
  return(
    <motion.div
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
      duration: 10.5,
      ease: "linear",
      times: [0, 0.5, 1]
      }}
    >
      <Logo color="#ef4444" size={64} className={className}/>
    </motion.div>
  );
}
