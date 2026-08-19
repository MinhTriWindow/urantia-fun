const seeds = [
  { left: "6%", size: 10, delay: 0, dur: 15 },
  { left: "18%", size: 6, delay: 3, dur: 19 },
  { left: "31%", size: 14, delay: 6, dur: 22 },
  { left: "44%", size: 8, delay: 1.5, dur: 17 },
  { left: "57%", size: 11, delay: 8, dur: 20 },
  { left: "69%", size: 5, delay: 4.5, dur: 16 },
  { left: "81%", size: 13, delay: 2.5, dur: 23 },
  { left: "93%", size: 7, delay: 7, dur: 18 },
];

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((s, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: s.left,
            bottom: "-10%",
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
