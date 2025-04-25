/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  GetProposalProposalsProposalGetQueryResponse,
  GetProposalProposalsProposalGetPathParams,
  GetProposalProposalsProposalGet422,
} from './types/GetProposalProposalsProposalGet.ts'

export function getGetProposalProposalsProposalGetUrl(proposal: GetProposalProposalsProposalGetPathParams['proposal']) {
  return `/proposals/${proposal}` as const
}

/**
 * @summary Get Proposal
 * {@link /proposals/:proposal}
 */
export async function getProposalProposalsProposalGet(
  proposal: GetProposalProposalsProposalGetPathParams['proposal'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetProposalProposalsProposalGetQueryResponse, ResponseErrorConfig<GetProposalProposalsProposalGet422>, unknown>({
    method: 'GET',
    url: getGetProposalProposalsProposalGetUrl(proposal).toString(),
    ...requestConfig,
  })
  return res.data
}