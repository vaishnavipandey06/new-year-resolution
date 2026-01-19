import { Line } from "@react-three/drei";
import { useMemo } from "react";

export default function NeonLines() {
  const lines = useMemo(() => {
    return Array.from({ length: 120 }).map(() => {
      const start = [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ];
      const end = [
        start[0] + Math.random(),
        start[1] + Math.random(),
        start[2] + Math.random(),
      ];
      return [start, end];
    });
  }, []);

  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={i % 2 === 0 ? "#00d4ff" : "#aa66ff"}
          lineWidth={0.3}
          transparent
          opacity={0.35}
        />
      ))}
    </>
  );
}
