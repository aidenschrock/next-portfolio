import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.2,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={!shouldReduceMotion ? variants : null}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
