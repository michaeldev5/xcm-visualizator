const Plane = () => {
  return (
    <>
      <gridHelper args={[20, 20, 'teal', 'darkgray']} position={[0, -5.48, 0]} />
      <mesh rotation-x={Math.PI / 2} receiveShadow position={[0, -5.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshLambertMaterial
          color="gray"
          emissive="teal"
          emissiveIntensity={0.2}
          side={2}
          transparent
          opacity={0.4}
        />
      </mesh>
    </>
  );
};

export default Plane;
