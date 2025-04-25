import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { ListPartiesPartiesGetQueryResponse } from '../../types/ListPartiesPartiesGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { listPartiesPartiesGet } from '../../listPartiesPartiesGet.ts'

export const listPartiesPartiesGetQueryKey = () => [{ url: '/parties/' }] as const

export type ListPartiesPartiesGetQueryKey = ReturnType<typeof listPartiesPartiesGetQueryKey>

export function listPartiesPartiesGetQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return listPartiesPartiesGet(config)
    },
  }
}

/**
 * @summary List Parties
 * {@link /parties/}
 */
export function useListPartiesPartiesGet(
  options: {
    query?: Parameters<typeof useSWR<ListPartiesPartiesGetQueryResponse, ResponseErrorConfig<Error>, ListPartiesPartiesGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = listPartiesPartiesGetQueryKey()

  return useSWR<ListPartiesPartiesGetQueryResponse, ResponseErrorConfig<Error>, ListPartiesPartiesGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...listPartiesPartiesGetQueryOptions(config),
    ...queryOptions,
  })
}