import client from '@/lib/axiosInstance'
import useSWR from 'swr'
import type { GetUserUsersUserIdGetQueryResponse, GetUserUsersUserIdGetPathParams, GetUserUsersUserIdGet422 } from '../../types/GetUserUsersUserIdGet.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { getUserUsersUserIdGet } from '../../getUserUsersUserIdGet.ts'

export const getUserUsersUserIdGetQueryKey = (user_id: GetUserUsersUserIdGetPathParams['user_id']) =>
  [{ url: '/users/:user_id', params: { user_id: user_id } }] as const

export type GetUserUsersUserIdGetQueryKey = ReturnType<typeof getUserUsersUserIdGetQueryKey>

export function getUserUsersUserIdGetQueryOptions(
  user_id: GetUserUsersUserIdGetPathParams['user_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  return {
    fetcher: async () => {
      return getUserUsersUserIdGet(user_id, config)
    },
  }
}

/**
 * @summary Get User
 * {@link /users/:user_id}
 */
export function useGetUserUsersUserIdGet(
  user_id: GetUserUsersUserIdGetPathParams['user_id'],
  options: {
    query?: Parameters<
      typeof useSWR<GetUserUsersUserIdGetQueryResponse, ResponseErrorConfig<GetUserUsersUserIdGet422>, GetUserUsersUserIdGetQueryKey | null, any>
    >[2]
    client?: Partial<RequestConfig> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}

  const queryKey = getUserUsersUserIdGetQueryKey(user_id)

  return useSWR<GetUserUsersUserIdGetQueryResponse, ResponseErrorConfig<GetUserUsersUserIdGet422>, GetUserUsersUserIdGetQueryKey | null>(
    shouldFetch ? queryKey : null,
    {
      ...getUserUsersUserIdGetQueryOptions(user_id, config),
      ...queryOptions,
    },
  )
}