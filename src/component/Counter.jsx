import React, { useEffect, useState, useRef } from "react";

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 50));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(counter);
  }, [isActive, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
