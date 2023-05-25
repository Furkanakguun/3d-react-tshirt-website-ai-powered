import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, Backdrop } from '@react-three/drei'
import Shirt from './Shirt'
import BackDrop from './Backdrop'
import CameraRig from './CameraRig'

export const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      {/* <CameraRig> */}
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      {/* </CameraRig> */}
    </Canvas>
  )
}
export default CanvasModel;