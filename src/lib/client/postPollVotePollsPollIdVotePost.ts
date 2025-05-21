/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PostPollVotePollsPollIdVotePostMutationRequest,
  PostPollVotePollsPollIdVotePostMutationResponse,
  PostPollVotePollsPollIdVotePostPathParams,
  PostPollVotePollsPollIdVotePost422,
} from './types/PostPollVotePollsPollIdVotePost.ts'

export function getPostPollVotePollsPollIdVotePostUrl(poll_id: PostPollVotePollsPollIdVotePostPathParams['poll_id']) {
  return `/polls/${poll_id}/vote` as const
}

/**
 * @summary Post Poll Vote
 * {@link /polls/:poll_id/vote}
 */
export async function postPollVotePollsPollIdVotePost(
  poll_id: PostPollVotePollsPollIdVotePostPathParams['poll_id'],
  data: PostPollVotePollsPollIdVotePostMutationRequest,
  config: Partial<RequestConfig<PostPollVotePollsPollIdVotePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostPollVotePollsPollIdVotePostMutationResponse,
    ResponseErrorConfig<PostPollVotePollsPollIdVotePost422>,
    PostPollVotePollsPollIdVotePostMutationRequest
  >({ method: 'POST', url: getPostPollVotePollsPollIdVotePostUrl(poll_id).toString(), data, ...requestConfig })
  return res.data
}