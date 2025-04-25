import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetPartyPartiesPartyIdGetQueryResponse,
  GetPartyPartiesPartyIdGetPathParams,
  GetPartyPartiesPartyIdGet422,
} from '../../types/GetPartyPartiesPartyIdGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getPartyPartiesPartyIdGet } from '../../getPartyPartiesPartyIdGet.ts'

export const getPartyPartiesPartyIdGetQueryKey = (party_id: GetPartyPartiesPartyIdGetPathParams['party_id']) =>
  [{ url: '/parties/:party_id', params: { party_id: party_id } }] as const

export type GetPartyPartiesPartyIdGetQueryKey = ReturnType<typeof getPartyPartiesPartyIdGetQueryKey>

export function getPartyPartiesPartyIdGetQueryOptions(
  party_id: GetPartyPartiesPartyIdGetPathParams['party_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getPartyPartiesPartyIdGet(party_id, config)
    },
  }
}

/**
 * @summary Get Party
 * {@link /parties/:party_id}
 */
export function useGetPartyPartiesPartyIdGet(
  party_id: GetPartyPartiesPartyIdGetPathParams['party_id'],
  options: {
    query?: Parameters<
      typeof useSWR<GetPartyPartiesPartyIdGetQueryResponse, ResponseErrorConfig<GetPartyPartiesPartyIdGet422>, GetPartyPartiesPartyIdGetQueryKey | null, any>
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getPartyPartiesPartyIdGetQueryKey(party_id)

  return useSWR<GetPartyPartiesPartyIdGetQueryResponse, ResponseErrorConfig<GetPartyPartiesPartyIdGet422>, GetPartyPartiesPartyIdGetQueryKey | null>(
    shouldFetch ? queryKey : null,
    {
      ...getPartyPartiesPartyIdGetQueryOptions(party_id, config),
      ...queryOptions,
    },
  )
}