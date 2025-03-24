import client from '@/lib/axiosInstance'
import useSWRMutation from 'swr/mutation'
import type {
  PostProposalProposalsPostMutationRequest,
  PostProposalProposalsPostMutationResponse,
  PostProposalProposalsPost422,
} from '../../types/PostProposalProposalsPost.ts'
import type { RequestConfig, ResponseErrorConfig } from '@/lib/axiosInstance'

export const postProposalProposalsPostMutationKey = () => [{ url: '/proposals/' }] as const

export type PostProposalProposalsPostMutationKey = ReturnType<typeof postProposalProposalsPostMutationKey>

/**
 * @summary Post Proposal
 * {@link /proposals/}
 */
export async function postProposalProposalsPost(
  data: PostProposalProposalsPostMutationRequest,
  config: Partial<RequestConfig<PostProposalProposalsPostMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostProposalProposalsPostMutationResponse,
    ResponseErrorConfig<PostProposalProposalsPost422>,
    PostProposalProposalsPostMutationRequest
  >({ method: 'POST', url: `/proposals/`, data, ...requestConfig })
  return res.data
}

/**
 * @summary Post Proposal
 * {@link /proposals/}
 */
export function usePostProposalProposalsPost(
  options: {
    mutation?: Parameters<
      typeof useSWRMutation<
        PostProposalProposalsPostMutationResponse,
        ResponseErrorConfig<PostProposalProposalsPost422>,
        PostProposalProposalsPostMutationKey,
        PostProposalProposalsPostMutationRequest
      >
    >[2]
    client?: Partial<RequestConfig<PostProposalProposalsPostMutationRequest>> & { client?: typeof client }
    shouldFetch?: boolean
  } = {},
) {
  const { mutation: mutationOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const mutationKey = postProposalProposalsPostMutationKey()

  return useSWRMutation<
    PostProposalProposalsPostMutationResponse,
    ResponseErrorConfig<PostProposalProposalsPost422>,
    PostProposalProposalsPostMutationKey | null,
    PostProposalProposalsPostMutationRequest
  >(
    shouldFetch ? mutationKey : null,
    async (_url, { arg: data }) => {
      return postProposalProposalsPost(data, config)
    },
    mutationOptions,
  )
}