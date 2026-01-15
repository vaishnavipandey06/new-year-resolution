import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "@react-three/drei";
import Scene from "./Scene";
import IdentityPanel from "./IdentityPanel";

export default function Hero3D() {
  return (
    <section className="relative w-full h-screen">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#020617"]} />

          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />

          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            speed={1}
            fade
          />

          <Scene />
        </Suspense>
      </Canvas>

      {/* Overlay UI */}
      <IdentityPanel />
    </section>
  );
}

