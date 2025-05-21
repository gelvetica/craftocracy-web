import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetPollsLegacyPollsGetQueryResponse, GetPollsLegacyPollsGetQueryParams, GetPollsLegacyPollsGet422 } from '../../types/GetPollsLegacyPollsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getPollsLegacyPollsGet } from '../../getPollsLegacyPollsGet.ts'

export const getPollsLegacyPollsGetQueryKey = (params?: GetPollsLegacyPollsGetQueryParams) => [{ url: '/legacy/polls/' }, ...(params ? [params] : [])] as const

export type GetPollsLegacyPollsGetQueryKey = ReturnType<typeof getPollsLegacyPollsGetQueryKey>

export function getPollsLegacyPollsGetQueryOptions(
  params?: GetPollsLegacyPollsGetQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getPollsLegacyPollsGet(params, config)
    },
  }
}

/**
 * @summary Get Polls
 * {@link /legacy/polls/}
 */
export function useGetPollsLegacyPollsGet(
  params?: GetPollsLegacyPollsGetQueryParams,
  options: {
    query?: Parameters<
      typeof useSWR<GetPollsLegacyPollsGetQueryResponse, ResponseErrorConfig<GetPollsLegacyPollsGet422>, GetPollsLegacyPollsGetQueryKey | null, any>
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getPollsLegacyPollsGetQueryKey(params)

  return useSWR<GetPollsLegacyPollsGetQueryResponse, ResponseErrorConfig<GetPollsLegacyPollsGet422>, GetPollsLegacyPollsGetQueryKey | null>(
    shouldFetch ? queryKey : null,
    {
      ...getPollsLegacyPollsGetQueryOptions(params, config),
      ...queryOptions,
    },
  )
}