import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryResponse } from '../../types/GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryKey = () => [{ url: '/am_i_even_allowed_to_vote' }] as const

export type GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryKey = ReturnType<typeof getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryKey>

/**
 * @summary Get Am I Even Allowed To Vote
 * {@link /am_i_even_allowed_to_vote}
 */
export async function getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryResponse, ResponseErrorConfig<Error>, unknown>({
    method: 'GET',
    url: `/am_i_even_allowed_to_vote`,
    ...requestConfig,
  })
  return res.data
}

export function getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet(config)
    },
  }
}

/**
 * @summary Get Am I Even Allowed To Vote
 * {@link /am_i_even_allowed_to_vote}
 */
export function useGetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGet(
  options: {
    query?: Parameters<
      typeof useSWR<
        GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryResponse,
        ResponseErrorConfig<Error>,
        GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryKey()

  return useSWR<
    GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryResponse,
    ResponseErrorConfig<Error>,
    GetAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryKey | null
  >(shouldFetch ? queryKey : null, {
    ...getAmIEvenAllowedToVoteAmIEvenAllowedToVoteGetQueryOptions(config),
    ...queryOptions,
  })
}