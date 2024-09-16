/* eslint-disable react/no-unknown-property */
/*
Homescreen

Lighting in 3d

*/

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island';
import SKy from '../models/Sky';
{/* <div className="absolute top-28 left-0 right-0 z-10 flex
 items-center justify-center">
    POPUP
</div> */}
const Home = () => {
  //make application display viable for all devices 
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0]; //these values work the best
    if(window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9];
    }
    else{
      screenScale = [1,1,1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
        <Canvas className="w-full h-screen bg-transparent" 
        camera={{ near: 0.1, far: 1000}}
        >

        <Suspense fallback={<Loader />}>
            <directionalLight position = {[1,1,1]} intensity={5}/>

            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"/>

            <Sky/>

            <Island>
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
            </Island>
        </Suspense>

        </Canvas>
        

    </section>
  )
}

export default Home