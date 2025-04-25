/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  ReviseProposalProposalsProposalRevisePostMutationRequest,
  ReviseProposalProposalsProposalRevisePostMutationResponse,
  ReviseProposalProposalsProposalRevisePostPathParams,
  ReviseProposalProposalsProposalRevisePost422,
} from './types/ReviseProposalProposalsProposalRevisePost.ts'

export function getReviseProposalProposalsProposalRevisePostUrl(proposal: ReviseProposalProposalsProposalRevisePostPathParams['proposal']) {
  return `/proposals/${proposal}/revise` as const
}

/**
 * @summary Revise Proposal
 * {@link /proposals/:proposal/revise}
 */
export async function reviseProposalProposalsProposalRevisePost(
  proposal: ReviseProposalProposalsProposalRevisePostPathParams['proposal'],
  data: ReviseProposalProposalsProposalRevisePostMutationRequest,
  config: Partial<RequestConfig<ReviseProposalProposalsProposalRevisePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    ReviseProposalProposalsProposalRevisePostMutationResponse,
    ResponseErrorConfig<ReviseProposalProposalsProposalRevisePost422>,
    ReviseProposalProposalsProposalRevisePostMutationRequest
  >({ method: 'POST', url: getReviseProposalProposalsProposalRevisePostUrl(proposal).toString(), data, ...requestConfig })
  return res.data
}