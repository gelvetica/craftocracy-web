import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetPollResultsPollsPollIdResultsGetQueryResponse,
  GetPollResultsPollsPollIdResultsGetPathParams,
  GetPollResultsPollsPollIdResultsGet422,
} from '../../types/GetPollResultsPollsPollIdResultsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getPollResultsPollsPollIdResultsGet } from '../../getPollResultsPollsPollIdResultsGet.ts'

export const getPollResultsPollsPollIdResultsGetQueryKey = (poll_id: GetPollResultsPollsPollIdResultsGetPathParams['poll_id']) =>
  [{ url: '/polls/:poll_id/results', params: { poll_id: poll_id } }] as const

export type GetPollResultsPollsPollIdResultsGetQueryKey = ReturnType<typeof getPollResultsPollsPollIdResultsGetQueryKey>

export function getPollResultsPollsPollIdResultsGetQueryOptions(
  poll_id: GetPollResultsPollsPollIdResultsGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getPollResultsPollsPollIdResultsGet(poll_id, config)
    },
  }
}

/**
 * @summary Get Poll Results
 * {@link /polls/:poll_id/results}
 */
export function useGetPollResultsPollsPollIdResultsGet(
  poll_id: GetPollResultsPollsPollIdResultsGetPathParams['poll_id'],
  options: {
    query?: Parameters<
      typeof useSWR<
        GetPollResultsPollsPollIdResultsGetQueryResponse,
        ResponseErrorConfig<GetPollResultsPollsPollIdResultsGet422>,
        GetPollResultsPollsPollIdResultsGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getPollResultsPollsPollIdResultsGetQueryKey(poll_id)

  return useSWR<
    GetPollResultsPollsPollIdResultsGetQueryResponse,
    ResponseErrorConfig<GetPollResultsPollsPollIdResultsGet422>,
    GetPollResultsPollsPollIdResultsGetQueryKey | null
  >(shouldFetch ? queryKey : null, {
    ...getPollResultsPollsPollIdResultsGetQueryOptions(poll_id, config),
    ...queryOptions,
  })
}