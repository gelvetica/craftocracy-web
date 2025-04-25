/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  GetElectionElectionsElectionGetQueryResponse,
  GetElectionElectionsElectionGetPathParams,
  GetElectionElectionsElectionGet422,
} from './types/GetElectionElectionsElectionGet.ts'

export function getGetElectionElectionsElectionGetUrl(election: GetElectionElectionsElectionGetPathParams['election']) {
  return `/elections/${election}` as const
}

/**
 * @summary Get Election
 * {@link /elections/:election}
 */
export async function getElectionElectionsElectionGet(
  election: GetElectionElectionsElectionGetPathParams['election'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetElectionElectionsElectionGetQueryResponse, ResponseErrorConfig<GetElectionElectionsElectionGet422>, unknown>({
    method: 'GET',
    url: getGetElectionElectionsElectionGetUrl(election).toString(),
    ...requestConfig,
  })
  return res.data
}