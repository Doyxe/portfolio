import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./TrueFocus.css";

const TrueFocus = ({
  sentence = "Full-stack",
  manualMode = false,
  blurAmount = 5,
  borderColor = "#4facfe",
  glowColor = "rgba(79, 172, 254, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split("-");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null) return;

    const updateFocusRect = () => {
      if (!wordRefs.current[currentIndex] || !containerRef.current) return;

      const parentRect = containerRef.current.getBoundingClientRect();
      const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
      });
    };

    updateFocusRect();
    window.addEventListener('resize', updateFocusRect);
    
    return () => window.removeEventListener('resize', updateFocusRect);
  }, [currentIndex]);

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            ref={(el) => (wordRefs.current[index] = el)}
            className="focus-word"
            style={{
              filter: index === currentIndex ? 'blur(0)' : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
          >
            {word}
          </span>
          {index < words.length - 1 && <span>-</span>}
        </React.Fragment>
      ))}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1
        }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut"
        }}
        style={{
          borderColor: borderColor,
          boxShadow: `0 0 10px ${glowColor}`,
        }}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;