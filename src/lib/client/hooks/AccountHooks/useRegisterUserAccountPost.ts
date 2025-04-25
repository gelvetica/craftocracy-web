import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  RegisterUserAccountPostMutationRequest,
  RegisterUserAccountPostMutationResponse,
  RegisterUserAccountPost422,
} from '../../types/RegisterUserAccountPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { registerUserAccountPost } from '../../registerUserAccountPost.ts'

export const registerUserAccountPostMutationKey = () => [{ url: '/account/' }] as const

export type RegisterUserAccountPostMutationKey = ReturnType<typeof registerUserAccountPostMutationKey>

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