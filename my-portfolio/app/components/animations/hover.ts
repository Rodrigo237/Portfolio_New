import { MotionProps } from "framer-motion";

export const hoverHolo: MotionProps = {
  whileHover: {
    scale: 1.05,
    rotate: 0.5,
    boxShadow: "0 0 25px #00ffff",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
