/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { GetPollPollsPollIdGetQueryResponse, GetPollPollsPollIdGetPathParams, GetPollPollsPollIdGet422 } from './types/GetPollPollsPollIdGet.ts'

export function getGetPollPollsPollIdGetUrl(poll_id: GetPollPollsPollIdGetPathParams['poll_id']) {
  return `/polls/${poll_id}` as const
}

/**
 * @summary Get  Poll
 * {@link /polls/:poll_id}
 */
export async function getPollPollsPollIdGet(
  poll_id: GetPollPollsPollIdGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPollPollsPollIdGetQueryResponse, ResponseErrorConfig<GetPollPollsPollIdGet422>, unknown>({
    method: 'GET',
    url: getGetPollPollsPollIdGetUrl(poll_id).toString(),
    ...requestConfig,
  })
  return res.data
}