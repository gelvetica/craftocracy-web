import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PostPollLegacyPollsPostMutationRequest,
  PostPollLegacyPollsPostMutationResponse,
  PostPollLegacyPollsPost422,
} from '../../types/PostPollLegacyPollsPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { postPollLegacyPollsPost } from '../../postPollLegacyPollsPost.ts'

export const postPollLegacyPollsPostMutationKey = () => [{ url: '/legacy/polls/' }] as const

export type PostPollLegacyPollsPostMutationKey = ReturnType<typeof postPollLegacyPollsPostMutationKey>

/**
 * @summary Post Poll
 * {@link /legacy/polls/}
 */
export function usePostPollLegacyPollsPost(
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PostPollLegacyPollsPostMutationResponse,
        ResponseErrorConfig<PostPollLegacyPollsPost422>,
        PostPollLegacyPollsPostMutationKey,
        PostPollLegacyPollsPostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PostPollLegacyPollsPostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = postPollLegacyPollsPostMutationKey()

  return useSWRMutation<
    PostPollLegacyPollsPostMutationResponse,
    ResponseErrorConfig<PostPollLegacyPollsPost422>,
    PostPollLegacyPollsPostMutationKey | null,
    PostPollLegacyPollsPostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return postPollLegacyPollsPost(data, config)
    },
    mutationOptions,
  )
}