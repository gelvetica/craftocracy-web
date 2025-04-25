/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { GetAccountAccountGetQueryResponse } from './types/GetAccountAccountGet.ts'

export function getGetAccountAccountGetUrl() {
  return `/account/` as const
}

/**
 * @summary Get Account
 * {@link /account/}
 */
export async function getAccountAccountGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetAccountAccountGetQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: getGetAccountAccountGetUrl().toString(),
    ...requestConfig,
  })
  return res.data
}