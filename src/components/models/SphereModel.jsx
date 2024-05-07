
/* eslint-disable react/no-unknown-property */
export const SphereModel = () => {
  return (
    <mesh position={[0, 0, 0]} scale={1.1}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshNormalMaterial color={'#0540F2'} wireframe />
    </mesh>
  );
}
