import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    const t = scroll.offset; // 0 → 1

    camera.position.z = THREE.MathUtils.lerp(8, 5, t);
    camera.position.y = THREE.MathUtils.lerp(1.8, 0.6, t);
    camera.rotation.x = THREE.MathUtils.lerp(0, -0.15, t);
  });

  return null;
}
