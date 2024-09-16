import React from 'react'

import planeScene from '../assets/3d/plane.glb';
import { useGLTF } from '@react-three/drei';

//spread props because we can simply pass into mesh
const Plane = ({isRotating, ...props}) => {
  const { scene, animations } = useGLTF(planeScene);

  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane