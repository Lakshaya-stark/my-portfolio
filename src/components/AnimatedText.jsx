import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.18,
            delayChildren: 0.3,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              filter: "blur(8px)",
              scale: 0.95,
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
            },
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
