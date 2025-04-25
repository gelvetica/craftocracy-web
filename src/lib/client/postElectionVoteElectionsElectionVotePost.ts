/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PostElectionVoteElectionsElectionVotePostMutationRequest,
  PostElectionVoteElectionsElectionVotePostMutationResponse,
  PostElectionVoteElectionsElectionVotePostPathParams,
  PostElectionVoteElectionsElectionVotePost422,
} from './types/PostElectionVoteElectionsElectionVotePost.ts'

export function getPostElectionVoteElectionsElectionVotePostUrl(election: PostElectionVoteElectionsElectionVotePostPathParams['election']) {
  return `/elections/${election}/vote` as const
}

/**
 * @summary Post Election Vote
 * {@link /elections/:election/vote}
 */
export async function postElectionVoteElectionsElectionVotePost(
  election: PostElectionVoteElectionsElectionVotePostPathParams['election'],
  data: PostElectionVoteElectionsElectionVotePostMutationRequest,
  config: Partial<RequestConfig<PostElectionVoteElectionsElectionVotePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostElectionVoteElectionsElectionVotePostMutationResponse,
    ResponseErrorConfig<PostElectionVoteElectionsElectionVotePost422>,
    PostElectionVoteElectionsElectionVotePostMutationRequest
  >({ method: 'POST', url: getPostElectionVoteElectionsElectionVotePostUrl(election).toString(), data, ...requestConfig })
  return res.data
}