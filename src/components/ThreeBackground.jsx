import { Canvas } from "@react-three/fiber";

export default function ThreeBackground() {
  return (
    <Canvas
      className="three-bg"
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.4} />
      {/* No geometry, only soft canvas for future effects */}
    </Canvas>
  );
}
