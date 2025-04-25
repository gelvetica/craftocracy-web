/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { ListUsersUsersGetQueryResponse, ListUsersUsersGetQueryParams, ListUsersUsersGet422 } from './types/ListUsersUsersGet.ts'

export function getListUsersUsersGetUrl() {
  return `/users/` as const
}

/**
 * @summary List Users
 * {@link /users/}
 */
export async function listUsersUsersGet(params?: ListUsersUsersGetQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ListUsersUsersGetQueryResponse, ResponseErrorConfig<ListUsersUsersGet422>, unknown>({
    method: 'GET',
    url: getListUsersUsersGetUrl().toString(),
    params,
    ...requestConfig,
  })
  return res.data
}