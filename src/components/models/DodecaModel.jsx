/* eslint-disable react/no-unknown-property */

export const DodecaModel = () => {
  return (
    <mesh position={[0, 0, 0]} scale={1.1}>
      <dodecahedronGeometry args={[3, 2]} />
      <meshNormalMaterial color={'#0540F2'} wireframe />
    </mesh>
  )
}
