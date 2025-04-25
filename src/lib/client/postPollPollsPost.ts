/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { PostPollPollsPostMutationRequest, PostPollPollsPostMutationResponse, PostPollPollsPost422 } from './types/PostPollPollsPost.ts'

export function getPostPollPollsPostUrl() {
  return `/polls/` as const
}

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
    url: getPostPollPollsPostUrl().toString(),
    data,
    ...requestConfig,
  })
  return res.data
}