import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PollVoteLegacyPollsPollIdVotePostMutationRequest,
  PollVoteLegacyPollsPollIdVotePostMutationResponse,
  PollVoteLegacyPollsPollIdVotePostPathParams,
  PollVoteLegacyPollsPollIdVotePost422,
} from '../../types/PollVoteLegacyPollsPollIdVotePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { pollVoteLegacyPollsPollIdVotePost } from '../../pollVoteLegacyPollsPollIdVotePost.ts'

export const pollVoteLegacyPollsPollIdVotePostMutationKey = () => [{ url: '/legacy/polls/{poll_id}/vote' }] as const

export type PollVoteLegacyPollsPollIdVotePostMutationKey = ReturnType<typeof pollVoteLegacyPollsPollIdVotePostMutationKey>

/**
 * @summary Poll Vote
 * {@link /legacy/polls/:poll_id/vote}
 */
export function usePollVoteLegacyPollsPollIdVotePost(
  poll_id: PollVoteLegacyPollsPollIdVotePostPathParams['poll_id'],
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PollVoteLegacyPollsPollIdVotePostMutationResponse,
        ResponseErrorConfig<PollVoteLegacyPollsPollIdVotePost422>,
        PollVoteLegacyPollsPollIdVotePostMutationKey,
        PollVoteLegacyPollsPollIdVotePostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PollVoteLegacyPollsPollIdVotePostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = pollVoteLegacyPollsPollIdVotePostMutationKey()

  return useSWRMutation<
    PollVoteLegacyPollsPollIdVotePostMutationResponse,
    ResponseErrorConfig<PollVoteLegacyPollsPollIdVotePost422>,
    PollVoteLegacyPollsPollIdVotePostMutationKey | null,
    PollVoteLegacyPollsPollIdVotePostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return pollVoteLegacyPollsPollIdVotePost(poll_id, data, config)
    },
    mutationOptions,
  )
}