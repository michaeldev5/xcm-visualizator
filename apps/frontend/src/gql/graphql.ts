/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
};

export type AccountXcmCountType = {
  __typename?: 'AccountXcmCountType';
  count: Scalars['Int']['output'];
  id: Scalars['String']['output'];
};

export type Asset = {
  __typename?: 'Asset';
  amount: Scalars['String']['output'];
  asset_module: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  enum_key: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export type AssetCount = {
  __typename?: 'AssetCount';
  count: Scalars['Int']['output'];
  paraId?: Maybe<Scalars['Int']['output']>;
  symbol: Scalars['String']['output'];
};

export type Channel = {
  __typename?: 'Channel';
  active_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  message_count: Scalars['Int']['output'];
  proposed_max_capacity: Scalars['Int']['output'];
  proposed_max_message_size: Scalars['Int']['output'];
  recipient: Scalars['Int']['output'];
  sender: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  transfer_count: Scalars['Int']['output'];
};

export type Message = {
  __typename?: 'Message';
  assets: Array<Asset>;
  block_num: Scalars['Int']['output'];
  child_dest?: Maybe<Scalars['String']['output']>;
  child_para_id: Scalars['Int']['output'];
  confirm_block_timestamp: Scalars['Int']['output'];
  dest_event_index: Scalars['String']['output'];
  dest_extrinsic_index: Scalars['String']['output'];
  dest_para_id: Scalars['Int']['output'];
  extrinsic_index: Scalars['String']['output'];
  from_account_id: Scalars['String']['output'];
  message_hash: Scalars['ID']['output'];
  message_type: Scalars['String']['output'];
  origin_block_timestamp: Scalars['Int']['output'];
  origin_event_index: Scalars['String']['output'];
  origin_para_id: Scalars['Int']['output'];
  protocol: Scalars['String']['output'];
  relayed_block_timestamp: Scalars['Int']['output'];
  relayed_event_index: Scalars['String']['output'];
  relayed_extrinsic_index: Scalars['String']['output'];
  status: Scalars['String']['output'];
  to_account_id: Scalars['String']['output'];
  unique_id: Scalars['String']['output'];
  xcm_version: Scalars['Int']['output'];
};

export type MessageCount = {
  __typename?: 'MessageCount';
  paraId: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type MessageCountByDay = {
  __typename?: 'MessageCountByDay';
  date: Scalars['String']['output'];
  messageCount: Scalars['Float']['output'];
  paraId?: Maybe<Scalars['Int']['output']>;
};

export type MessageCountByStatus = {
  __typename?: 'MessageCountByStatus';
  failed: Scalars['Int']['output'];
  paraId?: Maybe<Scalars['Int']['output']>;
  success: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  accountCounts: Array<AccountXcmCountType>;
  assetCountsBySymbol: Array<AssetCount>;
  channel: Channel;
  channels: Array<Channel>;
  message: Message;
  messageCounts: Array<MessageCountByStatus>;
  messageCountsByDay: Array<MessageCountByDay>;
  messages: Array<Message>;
  totalMessageCounts: Array<MessageCount>;
};


export type QueryAccountCountsArgs = {
  endTime: Scalars['Timestamp']['input'];
  paraIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTime: Scalars['Timestamp']['input'];
  threshold: Scalars['Int']['input'];
};


export type QueryAssetCountsBySymbolArgs = {
  endTime: Scalars['Timestamp']['input'];
  paraIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTime: Scalars['Timestamp']['input'];
};


export type QueryChannelArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMessageArgs = {
  message_hash: Scalars['String']['input'];
};


export type QueryMessageCountsArgs = {
  endTime: Scalars['Timestamp']['input'];
  paraIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTime: Scalars['Timestamp']['input'];
};


export type QueryMessageCountsByDayArgs = {
  endTime: Scalars['Timestamp']['input'];
  paraIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTime: Scalars['Timestamp']['input'];
};


export type QueryTotalMessageCountsArgs = {
  endTime: Scalars['Timestamp']['input'];
  startTime: Scalars['Timestamp']['input'];
};

export type ChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename?: 'Channel', id: number, sender: number, recipient: number, status: string, message_count: number }> };

export type TotalMessageCountsQueryVariables = Exact<{
  startTime: Scalars['Timestamp']['input'];
  endTime: Scalars['Timestamp']['input'];
}>;


export type TotalMessageCountsQuery = { __typename?: 'Query', totalMessageCounts: Array<{ __typename?: 'MessageCount', paraId: number, totalCount: number }> };


export const ChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message_count"}}]}}]}}]} as unknown as DocumentNode<ChannelsQuery, ChannelsQueryVariables>;
export const TotalMessageCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"totalMessageCounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMessageCounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"startTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startTime"}}},{"kind":"Argument","name":{"kind":"Name","value":"endTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paraId"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<TotalMessageCountsQuery, TotalMessageCountsQueryVariables>;