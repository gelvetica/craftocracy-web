import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetAccountAccountGetQueryResponse } from '../../types/GetAccountAccountGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getAccountAccountGetQueryKey = () => [{ url: '/account/' }] as const

export type GetAccountAccountGetQueryKey = ReturnType<typeof getAccountAccountGetQueryKey>

/**
 * @summary Get Account
 * {@link /account/}
 */
export async function getAccountAccountGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetAccountAccountGetQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/account/`, ...requestConfig })
  return res.data
}

export function getAccountAccountGetQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return getAccountAccountGet(config)
    },
  }
}

/**
 * @summary Get Account
 * {@link /account/}
 */
export function useGetAccountAccountGet(
  options: {
    query?: Parameters<typeof useSWR<GetAccountAccountGetQueryResponse, ResponseErrorConfig<Error>, GetAccountAccountGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getAccountAccountGetQueryKey()

  return useSWR<GetAccountAccountGetQueryResponse, ResponseErrorConfig<Error>, GetAccountAccountGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...getAccountAccountGetQueryOptions(config),
    ...queryOptions,
  })
}