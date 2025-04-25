import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetProposalsProposalsGetQueryResponse,
  GetProposalsProposalsGetQueryParams,
  GetProposalsProposalsGet422,
} from '../../types/GetProposalsProposalsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getProposalsProposalsGet } from '../../getProposalsProposalsGet.ts'

export const getProposalsProposalsGetQueryKey = (params?: GetProposalsProposalsGetQueryParams) => [{ url: '/proposals/' }, ...(params ? [params] : [])] as const

export type GetProposalsProposalsGetQueryKey = ReturnType<typeof getProposalsProposalsGetQueryKey>

export function getProposalsProposalsGetQueryOptions(
  params?: GetProposalsProposalsGetQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getProposalsProposalsGet(params, config)
    },
  }
}

/**
 * @summary Get Proposals
 * {@link /proposals/}
 */
export function useGetProposalsProposalsGet(
  params?: GetProposalsProposalsGetQueryParams,
  options: {
    query?: Parameters<
      typeof useSWR<GetProposalsProposalsGetQueryResponse, ResponseErrorConfig<GetProposalsProposalsGet422>, GetProposalsProposalsGetQueryKey | null, any>
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getProposalsProposalsGetQueryKey(params)

  return useSWR<GetProposalsProposalsGetQueryResponse, ResponseErrorConfig<GetProposalsProposalsGet422>, GetProposalsProposalsGetQueryKey | null>(
    shouldFetch ? queryKey : null,
    {
      ...getProposalsProposalsGetQueryOptions(params, config),
      ...queryOptions,
    },
  )
}