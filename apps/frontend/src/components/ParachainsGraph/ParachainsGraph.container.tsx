import { allChannelsQueryDocument } from '../../api/channels';
import { totalMessageCountsQueryDocument } from '../../api/messages';
import { useGraphQL } from '../../hooks/useGraphQL';
import ParachainsGraph from './ParachainsGraph';

const ParachainsGraphContainer = () => {
  const { data, error } = useGraphQL(allChannelsQueryDocument);
  const totalCountsQuery = useGraphQL(totalMessageCountsQueryDocument);

  if (data && totalCountsQuery.data) {
    return (
      <ParachainsGraph
        channels={data.channels}
        totalMessageCounts={totalCountsQuery.data?.totalMessageCounts}
      />
    );
  }

  if (error) {
    return <></>;
  }

  return <></>;
};

export default ParachainsGraphContainer;
