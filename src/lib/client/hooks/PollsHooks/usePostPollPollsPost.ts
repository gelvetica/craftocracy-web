import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type { PostPollPollsPostMutationRequest, PostPollPollsPostMutationResponse, PostPollPollsPost422 } from '../../types/PostPollPollsPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const postPollPollsPostMutationKey = () => [{ url: '/polls/' }] as const

export type PostPollPollsPostMutationKey = ReturnType<typeof postPollPollsPostMutationKey>

/**
 * @summary Post Poll
 * {@link /polls/}
 */
export async function postPollPollsPost(
  data: PostPollPollsPostMutationRequest,
  config: Partial<RequestConfig<PostPollPollsPostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<PostPollPollsPostMutationResponse, ResponseErrorConfig<PostPollPollsPost422>, PostPollPollsPostMutationRequest>({
    method: 'POST',
    url: `/polls/`,
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * @summary Post Poll
 * {@link /polls/}
 */
export function usePostPollPollsPost(
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PostPollPollsPostMutationResponse,
        ResponseErrorConfig<PostPollPollsPost422>,
        PostPollPollsPostMutationKey,
        PostPollPollsPostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PostPollPollsPostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = postPollPollsPostMutationKey()

  return useSWRMutation<
    PostPollPollsPostMutationResponse,
    ResponseErrorConfig<PostPollPollsPost422>,
    PostPollPollsPostMutationKey | null,
    PostPollPollsPostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return postPollPollsPost(data, config)
    },
    mutationOptions,
  )
}