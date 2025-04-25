/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { ServerInfoGetQueryResponse } from './types/ServerInfoGet.ts'

export function getServerInfoGetUrl() {
  return `/` as const
}

/**
 * @summary Server Info
 * {@link /}
 */
export async function serverInfoGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ServerInfoGetQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: getServerInfoGetUrl().toString(),
    ...requestConfig,
  })
  return res.data
}