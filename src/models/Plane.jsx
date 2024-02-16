import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'
import { useFrame } from "@react-three/fiber";

const Plane = ({ isRotating, ...props}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    actions['Take 001'].play();
  }, [])

  useFrame(({ clock, camera }) => {

    // Check if the plane reached a certain endpoint relative to the camera
    if (ref.current.position.x > camera.position.x + 1) {
      // Change direction to backward and rotate the plane 180 degrees on the y-axis
      ref.current.rotation.y = 6
    } else if (ref.current.position.x < camera.position.x - 8) {
      // Change direction to forward and reset the plane's rotation
      ref.current.rotation.y = 40
    }

    // Update the X and Z positions based on the direction
    if (ref.current.rotation.y === 40) {
      // Moving forward
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      // Moving backward
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });

  return (
    <mesh {...props} ref={ref} >
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane