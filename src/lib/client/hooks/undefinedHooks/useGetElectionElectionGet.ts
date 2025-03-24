import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetElectionElectionGetQueryResponse } from '../../types/GetElectionElectionGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getElectionElectionGetQueryKey = () => [{ url: '/election' }] as const

export type GetElectionElectionGetQueryKey = ReturnType<typeof getElectionElectionGetQueryKey>

/**
 * @summary Get Election
 * {@link /election}
 */
export async function getElectionElectionGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetElectionElectionGetQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/election`, ...requestConfig })
  return res.data
}

export function getElectionElectionGetQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return getElectionElectionGet(config)
    },
  }
}

/**
 * @summary Get Election
 * {@link /election}
 */
export function useGetElectionElectionGet(
  options: {
    query?: Parameters<typeof useSWR<GetElectionElectionGetQueryResponse, ResponseErrorConfig<Error>, GetElectionElectionGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getElectionElectionGetQueryKey()

  return useSWR<GetElectionElectionGetQueryResponse, ResponseErrorConfig<Error>, GetElectionElectionGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...getElectionElectionGetQueryOptions(config),
    ...queryOptions,
  })
}