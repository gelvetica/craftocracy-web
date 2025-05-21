import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetPollPollsPollIdGetQueryResponse, GetPollPollsPollIdGetPathParams, GetPollPollsPollIdGet422 } from '../../types/GetPollPollsPollIdGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getPollPollsPollIdGet } from '../../getPollPollsPollIdGet.ts'

export const getPollPollsPollIdGetQueryKey = (poll_id: GetPollPollsPollIdGetPathParams['poll_id']) =>
  [{ url: '/polls/:poll_id', params: { poll_id: poll_id } }] as const

export type GetPollPollsPollIdGetQueryKey = ReturnType<typeof getPollPollsPollIdGetQueryKey>

export function getPollPollsPollIdGetQueryOptions(
  poll_id: GetPollPollsPollIdGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getPollPollsPollIdGet(poll_id, config)
    },
  }
}

/**
 * @summary Get  Poll
 * {@link /polls/:poll_id}
 */
export function useGetPollPollsPollIdGet(
  poll_id: GetPollPollsPollIdGetPathParams['poll_id'],
  options: {
    query?: Parameters<
      typeof useSWR<GetPollPollsPollIdGetQueryResponse, ResponseErrorConfig<GetPollPollsPollIdGet422>, GetPollPollsPollIdGetQueryKey | null, any>
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getPollPollsPollIdGetQueryKey(poll_id)

  return useSWR<GetPollPollsPollIdGetQueryResponse, ResponseErrorConfig<GetPollPollsPollIdGet422>, GetPollPollsPollIdGetQueryKey | null>(
    shouldFetch ? queryKey : null,
    {
      ...getPollPollsPollIdGetQueryOptions(poll_id, config),
      ...queryOptions,
    },
  )
}