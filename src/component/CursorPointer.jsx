import { useEffect, useState } from "react";

const CursorPointer = ({ trailDelay = 0.15 }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let raf;

    const animate = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * trailDelay,
        y: prev.y + (pos.y - prev.y) * trailDelay,
      }));
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [pos, trailDelay]);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: `translate(${smoothPos.x}px, ${smoothPos.y}px)`,
      }}
    >
      <div className="h-3 w-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default CursorPointer;
