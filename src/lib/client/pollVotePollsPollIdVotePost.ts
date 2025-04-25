/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PollVotePollsPollIdVotePostMutationRequest,
  PollVotePollsPollIdVotePostMutationResponse,
  PollVotePollsPollIdVotePostPathParams,
  PollVotePollsPollIdVotePost422,
} from './types/PollVotePollsPollIdVotePost.ts'

export function getPollVotePollsPollIdVotePostUrl(poll_id: PollVotePollsPollIdVotePostPathParams['poll_id']) {
  return `/polls/${poll_id}/vote` as const
}

/**
 * @summary Poll Vote
 * {@link /polls/:poll_id/vote}
 */
export async function pollVotePollsPollIdVotePost(
  poll_id: PollVotePollsPollIdVotePostPathParams['poll_id'],
  data: PollVotePollsPollIdVotePostMutationRequest,
  config: Partial<RequestConfig<PollVotePollsPollIdVotePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PollVotePollsPollIdVotePostMutationResponse,
    ResponseErrorConfig<PollVotePollsPollIdVotePost422>,
    PollVotePollsPollIdVotePostMutationRequest
  >({ method: 'POST', url: getPollVotePollsPollIdVotePostUrl(poll_id).toString(), data, ...requestConfig })
  return res.data
}