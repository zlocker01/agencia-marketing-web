/* eslint-disable react/no-unknown-property */

export const TorusModel = () => {
  return (
    <mesh position={[0, 0, 0]} scale={0.5}>
      <torusKnotGeometry args={[3.5, 1.5, 200, 12, 6, 9]} />
      <meshNormalMaterial color={'#0540F2'} wireframe />
    </mesh>
  )
}
