/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PostElectionElectionsPostMutationRequest,
  PostElectionElectionsPostMutationResponse,
  PostElectionElectionsPost422,
} from './types/PostElectionElectionsPost.ts'

export function getPostElectionElectionsPostUrl() {
  return `/elections/` as const
}

/**
 * @summary Post Election
 * {@link /elections/}
 */
export async function postElectionElectionsPost(
  data: PostElectionElectionsPostMutationRequest,
  config: Partial<RequestConfig<PostElectionElectionsPostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostElectionElectionsPostMutationResponse,
    ResponseErrorConfig<PostElectionElectionsPost422>,
    PostElectionElectionsPostMutationRequest
  >({ method: 'POST', url: getPostElectionElectionsPostUrl().toString(), data, ...requestConfig })
  return res.data
}