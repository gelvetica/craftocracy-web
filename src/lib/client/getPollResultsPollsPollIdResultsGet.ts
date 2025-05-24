/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  GetPollResultsPollsPollIdResultsGetQueryResponse,
  GetPollResultsPollsPollIdResultsGetPathParams,
  GetPollResultsPollsPollIdResultsGet422,
} from './types/GetPollResultsPollsPollIdResultsGet.ts'

export function getGetPollResultsPollsPollIdResultsGetUrl(poll_id: GetPollResultsPollsPollIdResultsGetPathParams['poll_id']) {
  return `/polls/${poll_id}/results` as const
}

/**
 * @summary Get Poll Results
 * {@link /polls/:poll_id/results}
 */
export async function getPollResultsPollsPollIdResultsGet(
  poll_id: GetPollResultsPollsPollIdResultsGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPollResultsPollsPollIdResultsGetQueryResponse, ResponseErrorConfig<GetPollResultsPollsPollIdResultsGet422>, unknown>({
    method: 'GET',
    url: getGetPollResultsPollsPollIdResultsGetUrl(poll_id).toString(),
    ...requestConfig,
  })
  return res.data
}