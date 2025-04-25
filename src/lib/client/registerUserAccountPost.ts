/* eslint-disable no-alert, no-console */
import client from '../axiosInstance.ts'
import type { RequestConfig, ResponseErrorConfig } from '../axiosInstance.ts'
import type {
  RegisterUserAccountPostMutationRequest,
  RegisterUserAccountPostMutationResponse,
  RegisterUserAccountPost422,
} from './types/RegisterUserAccountPost.ts'

export function getRegisterUserAccountPostUrl() {
  return `/account/` as const
}

/**
 * @summary Register User
 * {@link /account/}
 */
export async function registerUserAccountPost(
  data: RegisterUserAccountPostMutationRequest,
  config: Partial<RequestConfig<RegisterUserAccountPostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<RegisterUserAccountPostMutationResponse, ResponseErrorConfig<RegisterUserAccountPost422>, RegisterUserAccountPostMutationRequest>({
    method: 'POST',
    url: getRegisterUserAccountPostUrl().toString(),
    data,
    ...requestConfig,
  })
  return res.data
}