import { PerspectiveCamera } from "@react-three/drei";

export const Camara = () => {
  return (
    <PerspectiveCamera
      makeDefault
      position={[1, 2, 5]}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={1000}
    />
  );
}
