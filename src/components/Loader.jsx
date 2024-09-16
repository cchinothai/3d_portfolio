/* 
    Loading Screen

    - to turn a non 3d element into a 3d element we use react 3 drei
    and wrap the components in an Html tag 
*/
import React from 'react'
import { Html } from '@react-three/drei'
const Loader = () => {
  return (
    <Html>
    <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20
        border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
    </div>

    </Html>
  )
}

export default Loader;