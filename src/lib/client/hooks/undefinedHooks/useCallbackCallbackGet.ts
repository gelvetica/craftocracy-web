import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { CallbackCallbackGetQueryResponse, CallbackCallbackGetQueryParams, CallbackCallbackGet422 } from '../../types/CallbackCallbackGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const callbackCallbackGetQueryKey = (params: CallbackCallbackGetQueryParams) => [{ url: '/callback' }, ...(params ? [params] : [])] as const

export type CallbackCallbackGetQueryKey = ReturnType<typeof callbackCallbackGetQueryKey>

/**
 * @summary Callback
 * {@link /callback}
 */
export async function callbackCallbackGet(params: CallbackCallbackGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<CallbackCallbackGetQueryResponse, ResponseErrorConfig<CallbackCallbackGet422>, unknown>({
    method: 'GET',
    url: `/callback`,
    params,
    ...requestConfig,
  })
  return res.data
}

export function callbackCallbackGetQueryOptions(params: CallbackCallbackGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return callbackCallbackGet(params, config)
    },
  }
}

/**
 * @summary Callback
 * {@link /callback}
 */
export function useCallbackCallbackGet(
  params: CallbackCallbackGetQueryParams,
  options: {
    query?: Parameters<typeof useSWR<CallbackCallbackGetQueryResponse, ResponseErrorConfig<CallbackCallbackGet422>, CallbackCallbackGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = callbackCallbackGetQueryKey(params)

  return useSWR<CallbackCallbackGetQueryResponse, ResponseErrorConfig<CallbackCallbackGet422>, CallbackCallbackGetQueryKey | null>(
    shouldFetch ? queryKey : null,
    {
      ...callbackCallbackGetQueryOptions(params, config),
      ...queryOptions,
    },
  )
}