/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  GetProposalsProposalsGetQueryResponse,
  GetProposalsProposalsGetQueryParams,
  GetProposalsProposalsGet422,
} from './types/GetProposalsProposalsGet.ts'

export function getGetProposalsProposalsGetUrl() {
  return `/proposals/` as const
}

/**
 * @summary Get Proposals
 * {@link /proposals/}
 */
export async function getProposalsProposalsGet(params?: GetProposalsProposalsGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetProposalsProposalsGetQueryResponse, ResponseErrorConfig<GetProposalsProposalsGet422>, unknown>({
    method: 'GET',
    url: getGetProposalsProposalsGetUrl().toString(),
    params,
    ...requestConfig,
  })
  return res.data
}