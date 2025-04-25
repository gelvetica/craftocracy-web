import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PostElectionElectionsPostMutationRequest,
  PostElectionElectionsPostMutationResponse,
  PostElectionElectionsPost422,
} from '../../types/PostElectionElectionsPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { postElectionElectionsPost } from '../../postElectionElectionsPost.ts'

export const postElectionElectionsPostMutationKey = () => [{ url: '/elections/' }] as const

export type PostElectionElectionsPostMutationKey = ReturnType<typeof postElectionElectionsPostMutationKey>

/**
 * @summary Post Election
 * {@link /elections/}
 */
export function usePostElectionElectionsPost(
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PostElectionElectionsPostMutationResponse,
        ResponseErrorConfig<PostElectionElectionsPost422>,
        PostElectionElectionsPostMutationKey,
        PostElectionElectionsPostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PostElectionElectionsPostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = postElectionElectionsPostMutationKey()

  return useSWRMutation<
    PostElectionElectionsPostMutationResponse,
    ResponseErrorConfig<PostElectionElectionsPost422>,
    PostElectionElectionsPostMutationKey | null,
    PostElectionElectionsPostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return postElectionElectionsPost(data, config)
    },
    mutationOptions,
  )
}