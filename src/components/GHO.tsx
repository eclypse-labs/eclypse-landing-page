import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function GHO(props: JSX.IntrinsicElements['group']) {
  const initSpeed = 1;
  const speedStep = 0.04;
  const maxSpeed = 10;
  const levitationAmplitude = 0.05;
  const { nodes, materials } = useGLTF('/GHO.glb') as GLTFResult
  const ref = useRef<THREE.Mesh>(null!);
  const [speed, setSpeed] = useState(1);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x += speed * delta;
    ref.current.position.y = Math.sin(time) * levitationAmplitude;
    ref.current.position.x = Math.sin(time) * levitationAmplitude;
    if (speed >= initSpeed + speedStep) {
      setSpeed(speed - speedStep);
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} onPointerOver={() => setSpeed(maxSpeed)} geometry={nodes.Cylinder.geometry} material={materials['Material.001']} scale={0.15} />
    </group>
  )
}

useGLTF.preload('/GHO.glb')
