/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type { GetUserUsersUserIdGetQueryResponse, GetUserUsersUserIdGetPathParams, GetUserUsersUserIdGet422 } from './types/GetUserUsersUserIdGet.ts'

export function getGetUserUsersUserIdGetUrl(user_id: GetUserUsersUserIdGetPathParams['user_id']) {
  return `/users/${user_id}` as const
}

/**
 * @summary Get User
 * {@link /users/:user_id}
 */
export async function getUserUsersUserIdGet(
  user_id: GetUserUsersUserIdGetPathParams['user_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetUserUsersUserIdGetQueryResponse, ResponseErrorConfig<GetUserUsersUserIdGet422>, unknown>({
    method: 'GET',
    url: getGetUserUsersUserIdGetUrl(user_id).toString(),
    ...requestConfig,
  })
  return res.data
}