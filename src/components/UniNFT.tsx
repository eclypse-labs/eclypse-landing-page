/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../../public/UniNFT.glb -t
*/
import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from "@react-three/fiber";


type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export default function UniNFT(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/UniNFT.glb') as GLTFResult

  const ref = useRef<THREE.Mesh>(null!);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = 0.2 * mousePos.x / windowSize.width;
    ref.current.rotation.x = 0.2 * mousePos.y / windowSize.height;
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} geometry={nodes.Plane.geometry} material={materials['Material.001']} rotation={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/UniNFT.glb')
