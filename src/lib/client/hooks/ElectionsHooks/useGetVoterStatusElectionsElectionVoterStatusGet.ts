import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetVoterStatusElectionsElectionVoterStatusGetQueryResponse,
  GetVoterStatusElectionsElectionVoterStatusGetPathParams,
  GetVoterStatusElectionsElectionVoterStatusGet422,
} from '../../types/GetVoterStatusElectionsElectionVoterStatusGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getVoterStatusElectionsElectionVoterStatusGet } from '../../getVoterStatusElectionsElectionVoterStatusGet.ts'

export const getVoterStatusElectionsElectionVoterStatusGetQueryKey = (election: GetVoterStatusElectionsElectionVoterStatusGetPathParams['election']) =>
  [{ url: '/elections/:election/voter_status', params: { election: election } }] as const

export type GetVoterStatusElectionsElectionVoterStatusGetQueryKey = ReturnType<typeof getVoterStatusElectionsElectionVoterStatusGetQueryKey>

export function getVoterStatusElectionsElectionVoterStatusGetQueryOptions(
  election: GetVoterStatusElectionsElectionVoterStatusGetPathParams['election'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getVoterStatusElectionsElectionVoterStatusGet(election, config)
    },
  }
}

/**
 * @summary Get Voter Status
 * {@link /elections/:election/voter_status}
 */
export function useGetVoterStatusElectionsElectionVoterStatusGet(
  election: GetVoterStatusElectionsElectionVoterStatusGetPathParams['election'],
  options: {
    query?: Parameters<
      typeof useSWR<
        GetVoterStatusElectionsElectionVoterStatusGetQueryResponse,
        ResponseErrorConfig<GetVoterStatusElectionsElectionVoterStatusGet422>,
        GetVoterStatusElectionsElectionVoterStatusGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getVoterStatusElectionsElectionVoterStatusGetQueryKey(election)

  return useSWR<
    GetVoterStatusElectionsElectionVoterStatusGetQueryResponse,
    ResponseErrorConfig<GetVoterStatusElectionsElectionVoterStatusGet422>,
    GetVoterStatusElectionsElectionVoterStatusGetQueryKey | null
  >(shouldFetch ? queryKey : null, {
    ...getVoterStatusElectionsElectionVoterStatusGetQueryOptions(election, config),
    ...queryOptions,
  })
}