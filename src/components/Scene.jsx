import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";

export default function Scene() {
  const planetRef = useRef();
  const ringRef = useRef();

  useFrame(({ mouse }) => {
    planetRef.current.rotation.y += 0.002;
    planetRef.current.rotation.x = mouse.y * 0.3;

    ringRef.current.rotation.z += 0.003;
  });

  return (
    <>
      {/* Planet */}
      <Sphere ref={planetRef} args={[1.4, 64, 64]} position={[-3, 0.5, 0]}>
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Ring */}
      <Torus ref={ringRef} args={[2, 0.05, 16, 100]} position={[-3, 0.5, 0]}>
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#38bdf8"
          emissiveIntensity={0.6}
        />
      </Torus>
    </>
  );
}
