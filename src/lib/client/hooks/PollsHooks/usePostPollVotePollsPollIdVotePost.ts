import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PostPollVotePollsPollIdVotePostMutationRequest,
  PostPollVotePollsPollIdVotePostMutationResponse,
  PostPollVotePollsPollIdVotePostPathParams,
  PostPollVotePollsPollIdVotePost422,
} from '../../types/PostPollVotePollsPollIdVotePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { postPollVotePollsPollIdVotePost } from '../../postPollVotePollsPollIdVotePost.ts'

export const postPollVotePollsPollIdVotePostMutationKey = () => [{ url: '/polls/{poll_id}/vote' }] as const

export type PostPollVotePollsPollIdVotePostMutationKey = ReturnType<typeof postPollVotePollsPollIdVotePostMutationKey>

/**
 * @summary Post Poll Vote
 * {@link /polls/:poll_id/vote}
 */
export function usePostPollVotePollsPollIdVotePost(
  poll_id: PostPollVotePollsPollIdVotePostPathParams['poll_id'],
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PostPollVotePollsPollIdVotePostMutationResponse,
        ResponseErrorConfig<PostPollVotePollsPollIdVotePost422>,
        PostPollVotePollsPollIdVotePostMutationKey,
        PostPollVotePollsPollIdVotePostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PostPollVotePollsPollIdVotePostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = postPollVotePollsPollIdVotePostMutationKey()

  return useSWRMutation<
    PostPollVotePollsPollIdVotePostMutationResponse,
    ResponseErrorConfig<PostPollVotePollsPollIdVotePost422>,
    PostPollVotePollsPollIdVotePostMutationKey | null,
    PostPollVotePollsPollIdVotePostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return postPollVotePollsPollIdVotePost(poll_id, data, config)
    },
    mutationOptions,
  )
}