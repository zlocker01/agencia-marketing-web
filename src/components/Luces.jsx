/* eslint-disable react/no-unknown-property */

export const Luces = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight intensity={2} position={[5, 5, 5]} color={'#ecf0f1'} />
      <directionalLight
        intensity={2}
        position={[-5, -5, -5]}
        color={'#0540F2'}
      />
    </>
  );
}
