/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { ListPartiesPartiesGetQueryResponse } from './types/ListPartiesPartiesGet.ts'

export function getListPartiesPartiesGetUrl() {
  return `/parties/` as const
}

/**
 * @summary List Parties
 * {@link /parties/}
 */
export async function listPartiesPartiesGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ListPartiesPartiesGetQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: getListPartiesPartiesGetUrl().toString(),
    ...requestConfig,
  })
  return res.data
}