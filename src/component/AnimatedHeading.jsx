import React, { useEffect, useRef, useState } from "react";

const words = ["Our", "Client", "says", "it’s all"];

const AnimatedHeading = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    if (index === words.length) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [index, start, onComplete]);

  return (
    <h1
      ref={headingRef}
      className="font-clash font-medium text-[30px] md:text-[140px] text-[#0000001F] text-nowrap"
    >
      {words.slice(0, index).join(" ")}
    </h1>
  );
};

export default AnimatedHeading;
