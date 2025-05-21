/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PollVoteLegacyPollsPollIdVotePostMutationRequest,
  PollVoteLegacyPollsPollIdVotePostMutationResponse,
  PollVoteLegacyPollsPollIdVotePostPathParams,
  PollVoteLegacyPollsPollIdVotePost422,
} from './types/PollVoteLegacyPollsPollIdVotePost.ts'

export function getPollVoteLegacyPollsPollIdVotePostUrl(poll_id: PollVoteLegacyPollsPollIdVotePostPathParams['poll_id']) {
  return `/legacy/polls/${poll_id}/vote` as const
}

/**
 * @summary Poll Vote
 * {@link /legacy/polls/:poll_id/vote}
 */
export async function pollVoteLegacyPollsPollIdVotePost(
  poll_id: PollVoteLegacyPollsPollIdVotePostPathParams['poll_id'],
  data: PollVoteLegacyPollsPollIdVotePostMutationRequest,
  config: Partial<RequestConfig<PollVoteLegacyPollsPollIdVotePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PollVoteLegacyPollsPollIdVotePostMutationResponse,
    ResponseErrorConfig<PollVoteLegacyPollsPollIdVotePost422>,
    PollVoteLegacyPollsPollIdVotePostMutationRequest
  >({ method: 'POST', url: getPollVoteLegacyPollsPollIdVotePostUrl(poll_id).toString(), data, ...requestConfig })
  return res.data
}