const stars = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 101}%`,
  top: `${(index * 53) % 97}%`,
  size: `${index % 7 === 0 ? 3 : index % 5 === 0 ? 2.5 : 1.5}px`,
  duration: `${2.4 + (index % 8) * 0.45}s`,
  delay: `${(index % 9) * 0.28}s`,
}));

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 19 + 8) % 100}%`,
  top: `${(index * 31 + 12) % 96}%`,
  duration: `${10 + (index % 7) * 1.8}s`,
  delay: `${(index % 6) * 0.9}s`,
}));

const butterflies = [
  { left: "7%", top: "22%", duration: "18s", delay: "0.3s", scale: 0.85 },
  { left: "23%", top: "66%", duration: "22s", delay: "2.1s", scale: 0.65 },
  { left: "73%", top: "25%", duration: "20s", delay: "1.2s", scale: 0.75 },
  { left: "86%", top: "72%", duration: "24s", delay: "3.3s", scale: 0.6 },
  { left: "48%", top: "18%", duration: "26s", delay: "4.1s", scale: 0.52 },
];

const petals = [
  { left: "12%", delay: "1s", duration: "16s" },
  { left: "38%", delay: "6s", duration: "19s" },
  { left: "61%", delay: "3s", duration: "18s" },
  { left: "82%", delay: "9s", duration: "21s" },
];

export default function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="constellation constellation-one">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="constellation constellation-two">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}
      {butterflies.map((butterfly, index) => (
        <span
          key={`${butterfly.left}-${butterfly.top}`}
          className="floating-butterfly"
          style={{
            left: butterfly.left,
            top: butterfly.top,
            animationDuration: butterfly.duration,
            animationDelay: butterfly.delay,
            transform: `scale(${butterfly.scale})`,
            opacity: index === 0 ? 0.7 : 0.45,
          }}
        />
      ))}
      {petals.map((petal) => (
        <span
          key={petal.left}
          className="flower-petal"
          style={{ left: petal.left, animationDelay: petal.delay, animationDuration: petal.duration }}
        />
      ))}
      <span className="shooting-star" style={{ top: "18%", left: "-15%", animationDelay: "2s" }} />
      <span className="shooting-star" style={{ top: "45%", left: "-15%", animationDelay: "18s" }} />
      <div className="sparkle" style={{ top: "12%", left: "15%" }} />
      <div className="sparkle" style={{ top: "20%", right: "18%", animationDelay: "1.2s" }} />
      <div className="sparkle" style={{ bottom: "18%", left: "22%", animationDelay: "2.4s" }} />
      <div className="sparkle" style={{ bottom: "28%", right: "14%", animationDelay: "1.7s" }} />
    </div>
  );
}
