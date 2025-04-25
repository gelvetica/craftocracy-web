import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetPollsPollsGetQueryResponse, GetPollsPollsGetQueryParams, GetPollsPollsGet422 } from '../../types/GetPollsPollsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getPollsPollsGet } from '../../getPollsPollsGet.ts'

export const getPollsPollsGetQueryKey = (params?: GetPollsPollsGetQueryParams) => [{ url: '/polls/' }, ...(params ? [params] : [])] as const

export type GetPollsPollsGetQueryKey = ReturnType<typeof getPollsPollsGetQueryKey>

export function getPollsPollsGetQueryOptions(params?: GetPollsPollsGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return getPollsPollsGet(params, config)
    },
  }
}

/**
 * @summary Get Polls
 * {@link /polls/}
 */
export function useGetPollsPollsGet(
  params?: GetPollsPollsGetQueryParams,
  options: {
    query?: Parameters<typeof useSWR<GetPollsPollsGetQueryResponse, ResponseErrorConfig<GetPollsPollsGet422>, GetPollsPollsGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getPollsPollsGetQueryKey(params)

  return useSWR<GetPollsPollsGetQueryResponse, ResponseErrorConfig<GetPollsPollsGet422>, GetPollsPollsGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...getPollsPollsGetQueryOptions(params, config),
    ...queryOptions,
  })
}