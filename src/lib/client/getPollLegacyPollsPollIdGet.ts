/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  GetPollLegacyPollsPollIdGetQueryResponse,
  GetPollLegacyPollsPollIdGetPathParams,
  GetPollLegacyPollsPollIdGet422,
} from './types/GetPollLegacyPollsPollIdGet.ts'

export function getGetPollLegacyPollsPollIdGetUrl(poll_id: GetPollLegacyPollsPollIdGetPathParams['poll_id']) {
  return `/legacy/polls/${poll_id}` as const
}

/**
 * @summary Get Poll
 * {@link /legacy/polls/:poll_id}
 */
export async function getPollLegacyPollsPollIdGet(
  poll_id: GetPollLegacyPollsPollIdGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPollLegacyPollsPollIdGetQueryResponse, ResponseErrorConfig<GetPollLegacyPollsPollIdGet422>, unknown>({
    method: 'GET',
    url: getGetPollLegacyPollsPollIdGetUrl(poll_id).toString(),
    ...requestConfig,
  })
  return res.data
}