import { FC, Fragment } from 'react';
import { POLKADOT_NODE_NAMES } from '../../consts';
import { ChannelsQuery, TotalMessageCountsQuery } from '../../gql/graphql';
import Parachain from '../Parachain';

type Props = {
  channels: ChannelsQuery['channels'];
  totalMessageCounts: TotalMessageCountsQuery['totalMessageCounts'];
};

const ParachainsGraph: FC<Props> = ({ channels, totalMessageCounts }) => {
  return (
    <>
      {POLKADOT_NODE_NAMES.map((node, index) => (
        <Fragment key={node}>
          <Parachain name={node} index={index} />
        </Fragment>
      ))}
    </>
  );
};

export default ParachainsGraph;
