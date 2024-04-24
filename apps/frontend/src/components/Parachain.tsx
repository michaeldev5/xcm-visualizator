import { Text } from '@react-three/drei';
import { getParachainPosition } from '../utils';

type Props = {
  name: string;
  index: number;
};

const Parachain: React.FC<Props> = ({ name, index }) => {
  const position = getParachainPosition(index);
  return (
    <group position={position}>
      <mesh castShadow rotation={[0, Math.PI * 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <Text position={[0, 0.5, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {name}
      </Text>
    </group>
  );
};

export default Parachain;
