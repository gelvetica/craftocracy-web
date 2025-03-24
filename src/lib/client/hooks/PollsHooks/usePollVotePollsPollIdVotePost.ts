import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PollVotePollsPollIdVotePostMutationRequest,
  PollVotePollsPollIdVotePostMutationResponse,
  PollVotePollsPollIdVotePostPathParams,
  PollVotePollsPollIdVotePost422,
} from '../../types/PollVotePollsPollIdVotePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const pollVotePollsPollIdVotePostMutationKey = () => [{ url: '/polls/{poll_id}/vote' }] as const

export type PollVotePollsPollIdVotePostMutationKey = ReturnType<typeof pollVotePollsPollIdVotePostMutationKey>

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
  >({ method: 'POST', url: `/polls/${poll_id}/vote`, data, ...requestConfig })
  return res.data
}

/**
 * @summary Poll Vote
 * {@link /polls/:poll_id/vote}
 */
export function usePollVotePollsPollIdVotePost(
  poll_id: PollVotePollsPollIdVotePostPathParams['poll_id'],
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PollVotePollsPollIdVotePostMutationResponse,
        ResponseErrorConfig<PollVotePollsPollIdVotePost422>,
        PollVotePollsPollIdVotePostMutationKey,
        PollVotePollsPollIdVotePostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PollVotePollsPollIdVotePostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = pollVotePollsPollIdVotePostMutationKey()

  return useSWRMutation<
    PollVotePollsPollIdVotePostMutationResponse,
    ResponseErrorConfig<PollVotePollsPollIdVotePost422>,
    PollVotePollsPollIdVotePostMutationKey | null,
    PollVotePollsPollIdVotePostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return pollVotePollsPollIdVotePost(poll_id, data, config)
    },
    mutationOptions,
  )
}