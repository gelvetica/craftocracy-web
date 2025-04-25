import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { ServerInfoGetQueryResponse } from '../../types/ServerInfoGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { serverInfoGet } from '../../serverInfoGet.ts'

export const serverInfoGetQueryKey = () => [{ url: '/' }] as const

export type ServerInfoGetQueryKey = ReturnType<typeof serverInfoGetQueryKey>

export function serverInfoGetQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return serverInfoGet(config)
    },
  }
}

/**
 * @summary Server Info
 * {@link /}
 */
export function useServerInfoGet(
  options: {
    query?: Parameters<typeof useSWR<ServerInfoGetQueryResponse, ResponseErrorConfig<Error>, ServerInfoGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = serverInfoGetQueryKey()

  return useSWR<ServerInfoGetQueryResponse, ResponseErrorConfig<Error>, ServerInfoGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...serverInfoGetQueryOptions(config),
    ...queryOptions,
  })
}