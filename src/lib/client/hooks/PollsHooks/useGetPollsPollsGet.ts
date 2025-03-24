import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetPollsPollsGetQueryResponse } from '../../types/GetPollsPollsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getPollsPollsGetQueryKey = () => [{ url: '/polls/' }] as const

export type GetPollsPollsGetQueryKey = ReturnType<typeof getPollsPollsGetQueryKey>

/**
 * @summary Get Polls
 * {@link /polls/}
 */
export async function getPollsPollsGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPollsPollsGetQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/polls/`, ...requestConfig })
  return res.data
}

export function getPollsPollsGetQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return getPollsPollsGet(config)
    },
  }
}

/**
 * @summary Get Polls
 * {@link /polls/}
 */
export function useGetPollsPollsGet(
  options: {
    query?: Parameters<typeof useSWR<GetPollsPollsGetQueryResponse, ResponseErrorConfig<Error>, GetPollsPollsGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getPollsPollsGetQueryKey()

  return useSWR<GetPollsPollsGetQueryResponse, ResponseErrorConfig<Error>, GetPollsPollsGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...getPollsPollsGetQueryOptions(config),
    ...queryOptions,
  })
}