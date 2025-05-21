import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  GetPollLegacyPollsPollIdGetQueryResponse,
  GetPollLegacyPollsPollIdGetPathParams,
  GetPollLegacyPollsPollIdGet422,
} from '../../types/GetPollLegacyPollsPollIdGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getPollLegacyPollsPollIdGet } from '../../getPollLegacyPollsPollIdGet.ts'

export const getPollLegacyPollsPollIdGetQueryKey = (poll_id: GetPollLegacyPollsPollIdGetPathParams['poll_id']) =>
  [{ url: '/legacy/polls/:poll_id', params: { poll_id: poll_id } }] as const

export type GetPollLegacyPollsPollIdGetQueryKey = ReturnType<typeof getPollLegacyPollsPollIdGetQueryKey>

export function getPollLegacyPollsPollIdGetQueryOptions(
  poll_id: GetPollLegacyPollsPollIdGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getPollLegacyPollsPollIdGet(poll_id, config)
    },
  }
}

/**
 * @summary Get Poll
 * {@link /legacy/polls/:poll_id}
 */
export function useGetPollLegacyPollsPollIdGet(
  poll_id: GetPollLegacyPollsPollIdGetPathParams['poll_id'],
  options: {
    query?: Parameters<
      typeof useSWR<
        GetPollLegacyPollsPollIdGetQueryResponse,
        ResponseErrorConfig<GetPollLegacyPollsPollIdGet422>,
        GetPollLegacyPollsPollIdGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getPollLegacyPollsPollIdGetQueryKey(poll_id)

  return useSWR<GetPollLegacyPollsPollIdGetQueryResponse, ResponseErrorConfig<GetPollLegacyPollsPollIdGet422>, GetPollLegacyPollsPollIdGetQueryKey | null>(
    shouldFetch ? queryKey : null,
    {
      ...getPollLegacyPollsPollIdGetQueryOptions(poll_id, config),
      ...queryOptions,
    },
  )
}