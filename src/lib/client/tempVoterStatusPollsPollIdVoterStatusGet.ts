/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  TempVoterStatusPollsPollIdVoterStatusGetQueryResponse,
  TempVoterStatusPollsPollIdVoterStatusGetPathParams,
  TempVoterStatusPollsPollIdVoterStatusGet422,
} from './types/TempVoterStatusPollsPollIdVoterStatusGet.ts'

export function getTempVoterStatusPollsPollIdVoterStatusGetUrl(poll_id: TempVoterStatusPollsPollIdVoterStatusGetPathParams['poll_id']) {
  return `/polls/${poll_id}/voter_status` as const
}

/**
 * @summary Temp Voter Status
 * {@link /polls/:poll_id/voter_status}
 */
export async function tempVoterStatusPollsPollIdVoterStatusGet(
  poll_id: TempVoterStatusPollsPollIdVoterStatusGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<TempVoterStatusPollsPollIdVoterStatusGetQueryResponse, ResponseErrorConfig<TempVoterStatusPollsPollIdVoterStatusGet422>, unknown>({
    method: 'GET',
    url: getTempVoterStatusPollsPollIdVoterStatusGetUrl(poll_id).toString(),
    ...requestConfig,
  })
  return res.data
}