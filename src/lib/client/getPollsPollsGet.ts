/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { GetPollsPollsGetQueryResponse, GetPollsPollsGetQueryParams, GetPollsPollsGet422 } from './types/GetPollsPollsGet.ts'

export function getGetPollsPollsGetUrl() {
  return `/polls/` as const
}

/**
 * @summary Get Polls
 * {@link /polls/}
 */
export async function getPollsPollsGet(params?: GetPollsPollsGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPollsPollsGetQueryResponse, ResponseErrorConfig<GetPollsPollsGet422>, unknown>({
    method: 'GET',
    url: getGetPollsPollsGetUrl().toString(),
    params,
    ...requestConfig,
  })
  return res.data
}