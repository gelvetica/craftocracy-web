import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PostElectionCandidateElectionsElectionCandidatePostMutationRequest,
  PostElectionCandidateElectionsElectionCandidatePostMutationResponse,
  PostElectionCandidateElectionsElectionCandidatePostPathParams,
  PostElectionCandidateElectionsElectionCandidatePost422,
} from '../../types/PostElectionCandidateElectionsElectionCandidatePost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'
import { postElectionCandidateElectionsElectionCandidatePost } from '../../postElectionCandidateElectionsElectionCandidatePost.ts'

export const postElectionCandidateElectionsElectionCandidatePostMutationKey = () => [{ url: '/elections/{election}/candidate' }] as const

export type PostElectionCandidateElectionsElectionCandidatePostMutationKey = ReturnType<typeof postElectionCandidateElectionsElectionCandidatePostMutationKey>

/**
 * @summary Post Election Candidate
 * {@link /elections/:election/candidate}
 */
export function usePostElectionCandidateElectionsElectionCandidatePost(
  election: PostElectionCandidateElectionsElectionCandidatePostPathParams['election'],
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PostElectionCandidateElectionsElectionCandidatePostMutationResponse,
        ResponseErrorConfig<PostElectionCandidateElectionsElectionCandidatePost422>,
        PostElectionCandidateElectionsElectionCandidatePostMutationKey,
        PostElectionCandidateElectionsElectionCandidatePostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PostElectionCandidateElectionsElectionCandidatePostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = postElectionCandidateElectionsElectionCandidatePostMutationKey()

  return useSWRMutation<
    PostElectionCandidateElectionsElectionCandidatePostMutationResponse,
    ResponseErrorConfig<PostElectionCandidateElectionsElectionCandidatePost422>,
    PostElectionCandidateElectionsElectionCandidatePostMutationKey | null,
    PostElectionCandidateElectionsElectionCandidatePostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return postElectionCandidateElectionsElectionCandidatePost(election, data, config)
    },
    mutationOptions,
  )
}