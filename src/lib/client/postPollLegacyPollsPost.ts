/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PostPollLegacyPollsPostMutationRequest,
  PostPollLegacyPollsPostMutationResponse,
  PostPollLegacyPollsPost422,
} from './types/PostPollLegacyPollsPost.ts'

export function getPostPollLegacyPollsPostUrl() {
  return `/legacy/polls/` as const
}

/**
 * @summary Post Poll
 * {@link /legacy/polls/}
 */
export async function postPollLegacyPollsPost(
  data: PostPollLegacyPollsPostMutationRequest,
  config: Partial<RequestConfig<PostPollLegacyPollsPostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<PostPollLegacyPollsPostMutationResponse, ResponseErrorConfig<PostPollLegacyPollsPost422>, PostPollLegacyPollsPostMutationRequest>({
    method: 'POST',
    url: getPostPollLegacyPollsPostUrl().toString(),
    data,
    ...requestConfig,
  })
  return res.data
}