import { graphql } from '../gql';

export const allChannelsQueryDocument = graphql(`
  query channels {
    channels {
      id
      sender
      recipient
      status
      message_count
    }
  }
`);
