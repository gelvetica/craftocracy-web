import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { ListUsersUsersGetQueryResponse, ListUsersUsersGetQueryParams, ListUsersUsersGet422 } from '../../types/ListUsersUsersGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const listUsersUsersGetQueryKey = (params?: ListUsersUsersGetQueryParams) => [{ url: '/users/' }, ...(params ? [params] : [])] as const

export type ListUsersUsersGetQueryKey = ReturnType<typeof listUsersUsersGetQueryKey>

/**
 * @summary List Users
 * {@link /users/}
 */
export async function listUsersUsersGet(params?: ListUsersUsersGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ListUsersUsersGetQueryResponse, ResponseErrorConfig<ListUsersUsersGet422>, unknown>({
    method: 'GET',
    url: `/users/`,
    params,
    ...requestConfig,
  })
  return res.data
}

export function listUsersUsersGetQueryOptions(params?: ListUsersUsersGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  return {
    fetcher: async () => {
      return listUsersUsersGet(params, config)
    },
  }
}

/**
 * @summary List Users
 * {@link /users/}
 */
export function useListUsersUsersGet(
  params?: ListUsersUsersGetQueryParams,
  options: {
    query?: Parameters<typeof useSWR<ListUsersUsersGetQueryResponse, ResponseErrorConfig<ListUsersUsersGet422>, ListUsersUsersGetQueryKey | null, any>>[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = listUsersUsersGetQueryKey(params)

  return useSWR<ListUsersUsersGetQueryResponse, ResponseErrorConfig<ListUsersUsersGet422>, ListUsersUsersGetQueryKey | null>(shouldFetch ? queryKey : null, {
    ...listUsersUsersGetQueryOptions(params, config),
    ...queryOptions,
  })
}