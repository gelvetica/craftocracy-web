/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { CallbackCallbackGetQueryResponse, CallbackCallbackGetQueryParams, CallbackCallbackGet422 } from './types/CallbackCallbackGet.ts'

export function getCallbackCallbackGetUrl() {
  return `/callback` as const
}

/**
 * @summary Callback
 * {@link /callback}
 */
export async function callbackCallbackGet(params: CallbackCallbackGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<CallbackCallbackGetQueryResponse, ResponseErrorConfig<CallbackCallbackGet422>, unknown>({
    method: 'GET',
    url: getCallbackCallbackGetUrl().toString(),
    params,
    ...requestConfig,
  })
  return res.data
}