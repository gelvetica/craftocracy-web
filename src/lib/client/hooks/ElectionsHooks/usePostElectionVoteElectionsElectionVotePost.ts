import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PostElectionVoteElectionsElectionVotePostMutationRequest,
  PostElectionVoteElectionsElectionVotePostMutationResponse,
  PostElectionVoteElectionsElectionVotePostPathParams,
  PostElectionVoteElectionsElectionVotePost422,
} from '../../types/PostElectionVoteElectionsElectionVotePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const postElectionVoteElectionsElectionVotePostMutationKey = () => [{ url: '/elections/{election}/vote' }] as const

export type PostElectionVoteElectionsElectionVotePostMutationKey = ReturnType<typeof postElectionVoteElectionsElectionVotePostMutationKey>

/**
 * @summary Post Election Vote
 * {@link /elections/:election/vote}
 */
export async function postElectionVoteElectionsElectionVotePost(
  election: PostElectionVoteElectionsElectionVotePostPathParams['election'],
  data: PostElectionVoteElectionsElectionVotePostMutationRequest,
  config: Partial<RequestConfig<PostElectionVoteElectionsElectionVotePostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostElectionVoteElectionsElectionVotePostMutationResponse,
    ResponseErrorConfig<PostElectionVoteElectionsElectionVotePost422>,
    PostElectionVoteElectionsElectionVotePostMutationRequest
  >({ method: 'POST', url: `/elections/${election}/vote`, data, ...requestConfig })
  return res.data
}

/**
 * @summary Post Election Vote
 * {@link /elections/:election/vote}
 */
export function usePostElectionVoteElectionsElectionVotePost(
  election: PostElectionVoteElectionsElectionVotePostPathParams['election'],
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PostElectionVoteElectionsElectionVotePostMutationResponse,
        ResponseErrorConfig<PostElectionVoteElectionsElectionVotePost422>,
        PostElectionVoteElectionsElectionVotePostMutationKey,
        PostElectionVoteElectionsElectionVotePostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PostElectionVoteElectionsElectionVotePostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = postElectionVoteElectionsElectionVotePostMutationKey()

  return useSWRMutation<
    PostElectionVoteElectionsElectionVotePostMutationResponse,
    ResponseErrorConfig<PostElectionVoteElectionsElectionVotePost422>,
    PostElectionVoteElectionsElectionVotePostMutationKey | null,
    PostElectionVoteElectionsElectionVotePostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return postElectionVoteElectionsElectionVotePost(election, data, config)
    },
    mutationOptions,
  )
}