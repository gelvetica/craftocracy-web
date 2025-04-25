import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetProposalsProposalsGetQueryResponse,
  GetProposalsProposalsGetQueryParams,
  GetProposalsProposalsGet422,
} from '../../types/GetProposalsProposalsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getProposalsProposalsGetQueryKey = (params?: GetProposalsProposalsGetQueryParams) => [{ url: '/proposals/' }, ...(params ? [params] : [])] as const

export type GetProposalsProposalsGetQueryKey = ReturnType<typeof getProposalsProposalsGetQueryKey>

/**
 * @summary Get Proposals
 * {@link /proposals/}
 */
export async function getProposalsProposalsGet(params?: GetProposalsProposalsGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetProposalsProposalsGetQueryResponse, ResponseErrorConfig<GetProposalsProposalsGet422>, unknown>({
    method: 'GET',
    url: `/proposals/`,
    params,
    ...requestConfig,
  })
  return res.data
}

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