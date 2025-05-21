import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  TempVoterStatusPollsPollIdVoterStatusGetQueryResponse,
  TempVoterStatusPollsPollIdVoterStatusGetPathParams,
  TempVoterStatusPollsPollIdVoterStatusGet422,
} from '../../types/TempVoterStatusPollsPollIdVoterStatusGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { tempVoterStatusPollsPollIdVoterStatusGet } from '../../tempVoterStatusPollsPollIdVoterStatusGet.ts'

export const tempVoterStatusPollsPollIdVoterStatusGetQueryKey = (poll_id: TempVoterStatusPollsPollIdVoterStatusGetPathParams['poll_id']) =>
  [{ url: '/polls/:poll_id/voter_status', params: { poll_id: poll_id } }] as const

export type TempVoterStatusPollsPollIdVoterStatusGetQueryKey = ReturnType<typeof tempVoterStatusPollsPollIdVoterStatusGetQueryKey>

export function tempVoterStatusPollsPollIdVoterStatusGetQueryOptions(
  poll_id: TempVoterStatusPollsPollIdVoterStatusGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return tempVoterStatusPollsPollIdVoterStatusGet(poll_id, config)
    },
  }
}

/**
 * @summary Temp Voter Status
 * {@link /polls/:poll_id/voter_status}
 */
export function useTempVoterStatusPollsPollIdVoterStatusGet(
  poll_id: TempVoterStatusPollsPollIdVoterStatusGetPathParams['poll_id'],
  options: {
    query?: Parameters<
      typeof useSWR<
        TempVoterStatusPollsPollIdVoterStatusGetQueryResponse,
        ResponseErrorConfig<TempVoterStatusPollsPollIdVoterStatusGet422>,
        TempVoterStatusPollsPollIdVoterStatusGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = tempVoterStatusPollsPollIdVoterStatusGetQueryKey(poll_id)

  return useSWR<
    TempVoterStatusPollsPollIdVoterStatusGetQueryResponse,
    ResponseErrorConfig<TempVoterStatusPollsPollIdVoterStatusGet422>,
    TempVoterStatusPollsPollIdVoterStatusGetQueryKey | null
  >(shouldFetch ? queryKey : null, {
    ...tempVoterStatusPollsPollIdVoterStatusGetQueryOptions(poll_id, config),
    ...queryOptions,
  })
}