import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

import { TextEffect } from "../motion-primitives/text-effect";

export function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="h-dvh w-dvw fixed top-0 left-0 bg-white z-[9999999] overflow-hidden flex flex-col items-center justify-center"
          initial={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(30px)" }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <section className="flex flex-col space-y-4 items-center justify-center">
            <h2 className="lg:text-[9rem] md:text-[6rem] text-4xl  text-center">
              <TextEffect
                per="char"
                as="span"
                speedReveal={0.7}
                preset="fade"
                className="text-black text-center font-juniCode"
              >
                CHRIS RICHMAN
              </TextEffect>
            </h2>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
