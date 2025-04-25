/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  GetVoterStatusElectionsElectionVoterStatusGetQueryResponse,
  GetVoterStatusElectionsElectionVoterStatusGetPathParams,
  GetVoterStatusElectionsElectionVoterStatusGet422,
} from './types/GetVoterStatusElectionsElectionVoterStatusGet.ts'

export function getGetVoterStatusElectionsElectionVoterStatusGetUrl(election: GetVoterStatusElectionsElectionVoterStatusGetPathParams['election']) {
  return `/elections/${election}/voter_status` as const
}

/**
 * @summary Get Voter Status
 * {@link /elections/:election/voter_status}
 */
export async function getVoterStatusElectionsElectionVoterStatusGet(
  election: GetVoterStatusElectionsElectionVoterStatusGetPathParams['election'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    GetVoterStatusElectionsElectionVoterStatusGetQueryResponse,
    ResponseErrorConfig<GetVoterStatusElectionsElectionVoterStatusGet422>,
    unknown
  >({ method: 'GET', url: getGetVoterStatusElectionsElectionVoterStatusGetUrl(election).toString(), ...requestConfig })
  return res.data
}