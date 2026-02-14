import { motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";
import "./BlurText.css";

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  lastWordsCount = 0, // NEW: Number of last words to style differently
  lastWordsFont = "", // NEW: Font family for last words
  lastWordsClass = "", // NEW: Optional class for last words
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction],
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1),
  );

  return (
    <div className="aboutText">
      <p
        ref={ref}
        className={className}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {elements.map((segment, index) => {
          const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

          const spanTransition = {
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000,
          };
          spanTransition.ease = easing;

          // NEW: Check if this is one of the last words
          const isLastWord =
            animateBy === "words" &&
            lastWordsCount > 0 &&
            index >= elements.length - lastWordsCount;

          // NEW: Apply different font to last words
          const spanStyle =
            isLastWord && lastWordsFont ? { fontFamily: lastWordsFont } : {};

          // NEW: Add class for last words
          const spanClassName = `inline-block will-change-[transform,filter,opacity] ${
            isLastWord && lastWordsClass ? lastWordsClass : ""
          }`;

          return (
            <motion.span
              className={spanClassName}
              key={index}
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={
                index === elements.length - 1 ? onAnimationComplete : undefined
              }
              style={spanStyle}
            >
              {segment === " " ? "\u00A0" : segment}
              {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
};

export default BlurText;
