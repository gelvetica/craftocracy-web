import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetProposalsProposalsGetQueryResponse } from '../../types/GetProposalsProposalsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getProposalsProposalsGetQueryKey = () => [{ url: '/proposals/' }] as const

export type GetProposalsProposalsGetQueryKey = ReturnType<typeof getProposalsProposalsGetQueryKey>

/**
 * @summary Get Proposals
 * {@link /proposals/}
 */
export async function getProposalsProposalsGet(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetProposalsProposalsGetQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/proposals/`, ...requestConfig })
  return res.data
}

export function getProposalsProposalsGetQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return getProposalsProposalsGet(config)
    },
  }
}

/**
 * @summary Get Proposals
 * {@link /proposals/}
 */
export function useGetProposalsProposalsGet(
  options: {
    query?: Parameters<typeof useSWR<GetProposalsProposalsGetQueryResponse, ResponseErrorConfig<Error>, GetProposalsProposalsGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getProposalsProposalsGetQueryKey()

  return useSWR<GetProposalsProposalsGetQueryResponse, ResponseErrorConfig<Error>, GetProposalsProposalsGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...getProposalsProposalsGetQueryOptions(config),
    ...queryOptions,
  })
}