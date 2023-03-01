import React from "react";
import { Canvas } from "@react-three/fiber";
import UniNFT from "./UniNFT";
import { GHO } from "./GHO";

const Hero3dScene: React.FC = () => {
  return (
    <Canvas
      dpr={1}
      camera={{ fov: 75, near: 0.1, far: 8, position: [0, 0, 2] }}
    >
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight position={[1, 1, 7]} angle={0.2} penumbra={1} />
      <UniNFT rotation={[0, 0.5, 0.1]} position={[0, 0, -1]} />
      <UniNFT rotation={[0, 0.5, 0.1]} position={[-0.5, 0, -5]} />
      <GHO position={[-0.5, 0.6, 0.5]} rotation={[0, 0.1, 0.2]} />
      <GHO position={[0.4, 0.8, 0.4]} rotation={[0, 0.8, 0.8]} />
      <GHO position={[1, 0.2, 0.7]} rotation={[0.2, 1.4, 0.2]} />
      <GHO position={[-0.9, 0.2, 0.7]} rotation={[0.2, 1.4, 0.2]} />
      <GHO position={[0.7, -0.4, 0.1]} rotation={[0, 0.4, 2]} />

      <GHO position={[-0.4, -0.8, 0.4]} rotation={[0, 1.4, 0.2]} />
      <GHO position={[0.9, -0.8, 0.4]} rotation={[0, 1.4, 0.2]} />
    </Canvas>
  );
};

export default Hero3dScene;
