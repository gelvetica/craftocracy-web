/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  PostProposalProposalsPostMutationRequest,
  PostProposalProposalsPostMutationResponse,
  PostProposalProposalsPost422,
} from './types/PostProposalProposalsPost.ts'

export function getPostProposalProposalsPostUrl() {
  return `/proposals/` as const
}

/**
 * @summary Post Proposal
 * {@link /proposals/}
 */
export async function postProposalProposalsPost(
  data: PostProposalProposalsPostMutationRequest,
  config: Partial<RequestConfig<PostProposalProposalsPostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostProposalProposalsPostMutationResponse,
    ResponseErrorConfig<PostProposalProposalsPost422>,
    PostProposalProposalsPostMutationRequest
  >({ method: 'POST', url: getPostProposalProposalsPostUrl().toString(), data, ...requestConfig })
  return res.data
}