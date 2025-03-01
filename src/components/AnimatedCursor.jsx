import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Actualiza la posición del cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="hidden sm:block fixed w-6 h-6 bg-amber-400 rounded-full pointer-events-none"
      style={{
        x: cursorPosition.x - 10,
        y: cursorPosition.y - 10,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        x: cursorPosition.x - 10,
        y: cursorPosition.y - 10,
      }}
      transition={{
        ease: "easeOut",
        duration: 0.1,
      }}
    ></motion.div>
  );
}

export default AnimatedCursor;
