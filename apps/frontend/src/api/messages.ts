import { graphql } from '../gql';

export const totalMessageCountsQueryDocument = graphql(`
  query totalMessageCounts($startTime: Timestamp!, $endTime: Timestamp!) {
    totalMessageCounts(startTime: $startTime, endTime: $endTime) {
      paraId
      totalCount
    }
  }
`);
