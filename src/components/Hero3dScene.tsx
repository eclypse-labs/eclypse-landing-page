import React from "react"
import { Canvas } from "@react-three/fiber";
import UniNFT from "./UniNFT";

const Hero3dScene: React.FC = () => {

    return (
        <Canvas dpr={1} camera={{ fov: 75, near: 0.1, far: 8, position: [0, 0, 2] }} >
            <ambientLight intensity={0.5} />
            <UniNFT />
        </Canvas>
    )
}

export default Hero3dScene