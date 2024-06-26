/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import { Luces } from './Luces';
import { Camara } from './Camara';

export const Scene = ({ children }) => {
  return (
    <div className="lg:w-[300px] lg:h-[300px] cursor-grab">
      <Canvas>
        <Camara />
        <Luces />
        {children}
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
