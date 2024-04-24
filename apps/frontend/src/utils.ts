import { Vector3 } from 'three';
import { POLKADOT_NODE_NAMES } from './consts';

export const getParachainPosition = (index: number) => {
  const radius = 5;
  const totalParachains = POLKADOT_NODE_NAMES.length;
  const phi = Math.acos(-1 + (2 * index) / totalParachains);
  const theta = Math.sqrt(totalParachains * Math.PI) * phi;
  return new Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi)
  );
};
