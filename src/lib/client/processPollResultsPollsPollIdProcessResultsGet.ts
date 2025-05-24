/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  ProcessPollResultsPollsPollIdProcessResultsGetQueryResponse,
  ProcessPollResultsPollsPollIdProcessResultsGetPathParams,
  ProcessPollResultsPollsPollIdProcessResultsGet422,
} from './types/ProcessPollResultsPollsPollIdProcessResultsGet.ts'

export function getProcessPollResultsPollsPollIdProcessResultsGetUrl(poll_id: ProcessPollResultsPollsPollIdProcessResultsGetPathParams['poll_id']) {
  return `/polls/${poll_id}/process_results` as const
}

/**
 * @summary Process Poll Results
 * {@link /polls/:poll_id/process_results}
 */
export async function processPollResultsPollsPollIdProcessResultsGet(
  poll_id: ProcessPollResultsPollsPollIdProcessResultsGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    ProcessPollResultsPollsPollIdProcessResultsGetQueryResponse,
    ResponseErrorConfig<ProcessPollResultsPollsPollIdProcessResultsGet422>,
    unknown
  >({ method: 'GET', url: getProcessPollResultsPollsPollIdProcessResultsGetUrl(poll_id).toString(), ...requestConfig })
  return res.data
}