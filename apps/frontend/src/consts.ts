import { NODE_NAMES, getRelayChainSymbol } from "@paraspell/sdk";

export const POLKADOT_NODE_NAMES = NODE_NAMES.filter(
  (node) => getRelayChainSymbol(node) === "DOT"
);
