import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  RegisterUserAccountPostMutationRequest,
  RegisterUserAccountPostMutationResponse,
  RegisterUserAccountPost422,
} from '../../types/RegisterUserAccountPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const registerUserAccountPostMutationKey = () => [{ url: '/account/' }] as const

export type RegisterUserAccountPostMutationKey = ReturnType<typeof registerUserAccountPostMutationKey>

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
    url: `/account/`,
    data,
    ...requestConfig,
  })
  return res.data
}

/**
 * @summary Register User
 * {@link /account/}
 */
export function useRegisterUserAccountPost(
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        RegisterUserAccountPostMutationResponse,
        ResponseErrorConfig<RegisterUserAccountPost422>,
        RegisterUserAccountPostMutationKey,
        RegisterUserAccountPostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<RegisterUserAccountPostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = registerUserAccountPostMutationKey()

  return useSWRMutation<
    RegisterUserAccountPostMutationResponse,
    ResponseErrorConfig<RegisterUserAccountPost422>,
    RegisterUserAccountPostMutationKey | null,
    RegisterUserAccountPostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return registerUserAccountPost(data, config)
    },
    mutationOptions,
  )
}