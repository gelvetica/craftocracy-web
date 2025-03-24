import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetProposalProposalsProposalGetQueryResponse,
  GetProposalProposalsProposalGetPathParams,
  GetProposalProposalsProposalGet422,
} from '../../types/GetProposalProposalsProposalGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const getProposalProposalsProposalGetQueryKey = (proposal: GetProposalProposalsProposalGetPathParams['proposal']) =>
  [{ url: '/proposals/:proposal', params: { proposal: proposal } }] as const

export type GetProposalProposalsProposalGetQueryKey = ReturnType<typeof getProposalProposalsProposalGetQueryKey>

/**
 * @summary Get Proposal
 * {@link /proposals/:proposal}
 */
export async function getProposalProposalsProposalGet(
  proposal: GetProposalProposalsProposalGetPathParams['proposal'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetProposalProposalsProposalGetQueryResponse, ResponseErrorConfig<GetProposalProposalsProposalGet422>, unknown>({
    method: 'GET',
    url: `/proposals/${proposal}`,
    ...requestConfig,
  })
  return res.data
}

export function getProposalProposalsProposalGetQueryOptions(
  proposal: GetProposalProposalsProposalGetPathParams['proposal'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getProposalProposalsProposalGet(proposal, config)
    },
  }
}

/**
 * @summary Get Proposal
 * {@link /proposals/:proposal}
 */
export function useGetProposalProposalsProposalGet(
  proposal: GetProposalProposalsProposalGetPathParams['proposal'],
  options: {
    query?: Parameters<
      typeof useSWR<
        GetProposalProposalsProposalGetQueryResponse,
        ResponseErrorConfig<GetProposalProposalsProposalGet422>,
        GetProposalProposalsProposalGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getProposalProposalsProposalGetQueryKey(proposal)

  return useSWR<
    GetProposalProposalsProposalGetQueryResponse,
    ResponseErrorConfig<GetProposalProposalsProposalGet422>,
    GetProposalProposalsProposalGetQueryKey | null
  >(shouldFetch ? queryKey : null, {
    ...getProposalProposalsProposalGetQueryOptions(proposal, config),
    ...queryOptions,
  })
}