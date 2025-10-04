import { useEffect, useRef } from "react";

const GlassBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create floating bubbles
    const bubbleCount = 15;
    const bubbles: HTMLDivElement[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      const size = Math.random() * 100 + 50;
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 15;

      bubble.style.position = "absolute";
      bubble.style.left = `${left}%`;
      bubble.style.bottom = "-100px";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.borderRadius = "50%";
      bubble.style.background = `radial-gradient(circle at 30% 30%, rgba(158, 164, 132, 0.15), rgba(152, 176, 122, 0.05))`;
      bubble.style.backdropFilter = "blur(2px)";
      bubble.style.border = "1px solid rgba(255, 255, 255, 0.1)";
      bubble.style.animation = `float-up ${duration}s linear infinite`;
      bubble.style.animationDelay = `${delay}s`;
      bubble.style.pointerEvents = "none";

      canvasRef.current.appendChild(bubble);
      bubbles.push(bubble);
    }

    return () => {
      bubbles.forEach((bubble) => bubble.remove());
    };
  }, []);

  return (
    <>
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/3 w-[450px] h-[450px] bg-primary-glow/15 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating bubbles container */}
      <div ref={canvasRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />

      {/* Glass overlay grid */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }} />
    </>
  );
};

export default GlassBackground;
