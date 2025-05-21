/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { GetPollsLegacyPollsGetQueryResponse, GetPollsLegacyPollsGetQueryParams, GetPollsLegacyPollsGet422 } from './types/GetPollsLegacyPollsGet.ts'

export function getGetPollsLegacyPollsGetUrl() {
  return `/legacy/polls/` as const
}

/**
 * @summary Get Polls
 * {@link /legacy/polls/}
 */
export async function getPollsLegacyPollsGet(params?: GetPollsLegacyPollsGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPollsLegacyPollsGetQueryResponse, ResponseErrorConfig<GetPollsLegacyPollsGet422>, unknown>({
    method: 'GET',
    url: getGetPollsLegacyPollsGetUrl().toString(),
    params,
    ...requestConfig,
  })
  return res.data
}