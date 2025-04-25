import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetPollsPollsGetQueryResponse, GetPollsPollsGetQueryParams, GetPollsPollsGet422 } from '../../types/GetPollsPollsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getPollsPollsGetQueryKey = (params?: GetPollsPollsGetQueryParams) => [{ url: '/polls/' }, ...(params ? [params] : [])] as const

export type GetPollsPollsGetQueryKey = ReturnType<typeof getPollsPollsGetQueryKey>

/**
 * @summary Get Polls
 * {@link /polls/}
 */
export async function getPollsPollsGet(params?: GetPollsPollsGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPollsPollsGetQueryResponse, ResponseErrorConfig<GetPollsPollsGet422>, unknown>({
    method: 'GET',
    url: `/polls/`,
    params,
    ...requestConfig,
  })
  return res.data
}

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