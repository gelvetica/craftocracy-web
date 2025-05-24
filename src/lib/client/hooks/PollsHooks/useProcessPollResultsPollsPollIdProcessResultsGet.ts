import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type {
  ProcessPollResultsPollsPollIdProcessResultsGetQueryResponse,
  ProcessPollResultsPollsPollIdProcessResultsGetPathParams,
  ProcessPollResultsPollsPollIdProcessResultsGet422,
} from '../../types/ProcessPollResultsPollsPollIdProcessResultsGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { processPollResultsPollsPollIdProcessResultsGet } from '../../processPollResultsPollsPollIdProcessResultsGet.ts'

export const processPollResultsPollsPollIdProcessResultsGetQueryKey = (poll_id: ProcessPollResultsPollsPollIdProcessResultsGetPathParams['poll_id']) =>
  [{ url: '/polls/:poll_id/process_results', params: { poll_id: poll_id } }] as const

export type ProcessPollResultsPollsPollIdProcessResultsGetQueryKey = ReturnType<typeof processPollResultsPollsPollIdProcessResultsGetQueryKey>

export function processPollResultsPollsPollIdProcessResultsGetQueryOptions(
  poll_id: ProcessPollResultsPollsPollIdProcessResultsGetPathParams['poll_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return processPollResultsPollsPollIdProcessResultsGet(poll_id, config)
    },
  }
}

/**
 * @summary Process Poll Results
 * {@link /polls/:poll_id/process_results}
 */
export function useProcessPollResultsPollsPollIdProcessResultsGet(
  poll_id: ProcessPollResultsPollsPollIdProcessResultsGetPathParams['poll_id'],
  options: {
    query?: Parameters<
      typeof useSWR<
        ProcessPollResultsPollsPollIdProcessResultsGetQueryResponse,
        ResponseErrorConfig<ProcessPollResultsPollsPollIdProcessResultsGet422>,
        ProcessPollResultsPollsPollIdProcessResultsGetQueryKey | null,
        any
      >
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = processPollResultsPollsPollIdProcessResultsGetQueryKey(poll_id)

  return useSWR<
    ProcessPollResultsPollsPollIdProcessResultsGetQueryResponse,
    ResponseErrorConfig<ProcessPollResultsPollsPollIdProcessResultsGet422>,
    ProcessPollResultsPollsPollIdProcessResultsGetQueryKey | null
  >(shouldFetch ? queryKey : null, {
    ...processPollResultsPollsPollIdProcessResultsGetQueryOptions(poll_id, config),
    ...queryOptions,
  })
}