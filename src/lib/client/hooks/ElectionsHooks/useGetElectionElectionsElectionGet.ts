import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetElectionElectionsElectionGetQueryResponse,
  GetElectionElectionsElectionGetPathParams,
  GetElectionElectionsElectionGet422,
} from '../../types/GetElectionElectionsElectionGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getElectionElectionsElectionGet } from '../../getElectionElectionsElectionGet.ts'

export const getElectionElectionsElectionGetQueryKey = (election: GetElectionElectionsElectionGetPathParams['election']) =>
  [{ url: '/elections/:election', params: { election: election } }] as const

export type GetElectionElectionsElectionGetQueryKey = ReturnType<typeof getElectionElectionsElectionGetQueryKey>

export function getElectionElectionsElectionGetQueryOptions(
  election: GetElectionElectionsElectionGetPathParams['election'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getElectionElectionsElectionGet(election, config)
    },
  }
}

/**
 * @summary Get Election
 * {@link /elections/:election}
 */
export function useGetElectionElectionsElectionGet(
  election: GetElectionElectionsElectionGetPathParams['election'],
  options: {
    query?: Parameters<
      typeof useSWR<
        GetElectionElectionsElectionGetQueryResponse,
        ResponseErrorConfig<GetElectionElectionsElectionGet422>,
        GetElectionElectionsElectionGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getElectionElectionsElectionGetQueryKey(election)

  return useSWR<
    GetElectionElectionsElectionGetQueryResponse,
    ResponseErrorConfig<GetElectionElectionsElectionGet422>,
    GetElectionElectionsElectionGetQueryKey | null
  >(shouldFetch ? queryKey : null, {
    ...getElectionElectionsElectionGetQueryOptions(election, config),
    ...queryOptions,
  })
}